import { GridBoard } from './board';
import { FoodType, GridPosition, MatchGroup, MatchPatternType, SpecialType } from './types';

interface RawMatch {
  direction: 'H' | 'V';
  foodType: FoodType;
  positions: GridPosition[];
}

export class MatchDetector {
  /**
   * Scans the grid and finds all distinct match groups, classifying them into 3-lines, 4-lines,
   * 5-lines, L-shapes, T-shapes, or Crosses with appropriate Special spawns.
   * 
   * @param board The active GridBoard
   * @param pivotPos Optional position where player made the swap (used as preferred spawn origin)
   */
  public static findMatches(board: GridBoard, pivotPos?: GridPosition): MatchGroup[] {
    const rawMatches = this.findRawLines(board);
    if (rawMatches.length === 0) return [];

    return this.clusterAndClassifyMatches(rawMatches, pivotPos);
  }

  /**
   * Finds all continuous horizontal and vertical lines of 3 or more identical foods.
   */
  private static findRawLines(board: GridBoard): RawMatch[] {
    const rawMatches: RawMatch[] = [];

    // Horizontal scans
    for (let r = 0; r < board.rows; r++) {
      let currentType: FoodType | null = null;
      let currentPositions: GridPosition[] = [];

      for (let c = 0; c < board.cols; c++) {
        const tile = board.grid[r][c];
        const food = (tile && !tile.isHole && tile.foodType) ? tile.foodType : null;

        if (food && food === currentType) {
          currentPositions.push({ row: r, col: c });
        } else {
          if (currentPositions.length >= 3 && currentType !== null) {
            rawMatches.push({
              direction: 'H',
              foodType: currentType,
              positions: [...currentPositions]
            });
          }
          currentType = food;
          currentPositions = food ? [{ row: r, col: c }] : [];
        }
      }

      if (currentPositions.length >= 3 && currentType !== null) {
        rawMatches.push({
              direction: 'H',
              foodType: currentType,
              positions: [...currentPositions]
        });
      }
    }

    // Vertical scans
    for (let c = 0; c < board.cols; c++) {
      let currentType: FoodType | null = null;
      let currentPositions: GridPosition[] = [];

      for (let r = 0; r < board.rows; r++) {
        const tile = board.grid[r][c];
        const food = (tile && !tile.isHole && tile.foodType) ? tile.foodType : null;

        if (food && food === currentType) {
          currentPositions.push({ row: r, col: c });
        } else {
          if (currentPositions.length >= 3 && currentType !== null) {
            rawMatches.push({
              direction: 'V',
              foodType: currentType,
              positions: [...currentPositions]
            });
          }
          currentType = food;
          currentPositions = food ? [{ row: r, col: c }] : [];
        }
      }

      if (currentPositions.length >= 3 && currentType !== null) {
        rawMatches.push({
          direction: 'V',
          foodType: currentType,
          positions: [...currentPositions]
        });
      }
    }

    return rawMatches;
  }

  /**
   * Clusters intersecting lines of the same food type and classifies their shape.
   */
  private static clusterAndClassifyMatches(rawMatches: RawMatch[], pivotPos?: GridPosition): MatchGroup[] {
    const matchGroups: MatchGroup[] = [];
    const usedRawIndices = new Set<number>();

    for (let i = 0; i < rawMatches.length; i++) {
      if (usedRawIndices.has(i)) continue;

      const cluster = [rawMatches[i]];
      usedRawIndices.add(i);

      // Find intersecting raw matches of the same food type
      let expanded = true;
      while (expanded) {
        expanded = false;
        for (let j = 0; j < rawMatches.length; j++) {
          if (usedRawIndices.has(j)) continue;

          const candidate = rawMatches[j];
          if (candidate.foodType !== cluster[0].foodType) continue;

          const intersects = cluster.some(m =>
            m.positions.some(p1 =>
              candidate.positions.some(p2 => p1.row === p2.row && p1.col === p2.col)
            )
          );

          if (intersects) {
            cluster.push(candidate);
            usedRawIndices.add(j);
            expanded = true;
          }
        }
      }

      // Merge positions deduplicated
      const posMap = new Map<string, GridPosition>();
      for (const m of cluster) {
        for (const p of m.positions) {
          posMap.set(`${p.row},${p.col}`, p);
        }
      }
      const uniquePositions = Array.from(posMap.values());
      const foodType = cluster[0].foodType;

      // Determine pattern and special spawn
      const matchGroup = this.classifyCluster(cluster, uniquePositions, foodType, pivotPos);
      matchGroups.push(matchGroup);
    }

    return matchGroups;
  }

  private static classifyCluster(
    cluster: RawMatch[],
    positions: GridPosition[],
    foodType: FoodType,
    pivotPos?: GridPosition
  ): MatchGroup {
    const hasH = cluster.some(m => m.direction === 'H');
    const hasV = cluster.some(m => m.direction === 'V');

    // 1. Intersection of Horizontal & Vertical lines (T-shape, L-shape, or Cross)
    if (hasH && hasV) {
      // Find intersection tile
      const intersection = this.findIntersection(cluster) || positions[0];
      const spawnPos = this.selectSpawnPosition(positions, intersection, pivotPos);

      let pattern = MatchPatternType.T_SHAPE;
      if (positions.length >= 6) {
        pattern = MatchPatternType.CROSS;
      } else {
        pattern = MatchPatternType.L_SHAPE;
      }

      return {
        pattern,
        foodType,
        tiles: positions,
        specialToSpawn: {
          type: SpecialType.WRAPPED_BOMB,
          position: spawnPos
        }
      };
    }

    // 2. Single straight line of 5 or more
    if (positions.length >= 5) {
      const spawnPos = this.selectSpawnPosition(positions, positions[Math.floor(positions.length / 2)], pivotPos);
      return {
        pattern: MatchPatternType.LINE_5,
        foodType,
        tiles: positions,
        specialToSpawn: {
          type: SpecialType.RAINBOW_CHEF_HAT,
          position: spawnPos
        }
      };
    }

    // 3. Single straight line of 4
    if (positions.length === 4) {
      const spawnPos = this.selectSpawnPosition(positions, positions[1], pivotPos);
      const isHorizontal = cluster[0].direction === 'H';
      return {
        pattern: isHorizontal ? MatchPatternType.LINE_4_HORIZONTAL : MatchPatternType.LINE_4_VERTICAL,
        foodType,
        tiles: positions,
        specialToSpawn: {
          // If matched horizontally, create vertical stripe (or vice-versa for clearing axis)
          type: isHorizontal ? SpecialType.STRIPED_VERTICAL : SpecialType.STRIPED_HORIZONTAL,
          position: spawnPos
        }
      };
    }

    // 4. Standard 3 in a row
    return {
      pattern: MatchPatternType.LINE_3,
      foodType,
      tiles: positions,
      specialToSpawn: null
    };
  }

  private static findIntersection(cluster: RawMatch[]): GridPosition | null {
    const hMatches = cluster.filter(m => m.direction === 'H');
    const vMatches = cluster.filter(m => m.direction === 'V');

    for (const h of hMatches) {
      for (const v of vMatches) {
        for (const hp of h.positions) {
          for (const vp of v.positions) {
            if (hp.row === vp.row && hp.col === vp.col) {
              return hp;
            }
          }
        }
      }
    }
    return null;
  }

  private static selectSpawnPosition(
    positions: GridPosition[],
    defaultPos: GridPosition,
    pivotPos?: GridPosition
  ): GridPosition {
    if (pivotPos) {
      const match = positions.find(p => p.row === pivotPos.row && p.col === pivotPos.col);
      if (match) return match;
    }
    return defaultPos;
  }
}
