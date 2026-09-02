import { GridBoard, generateTileId } from './board';
import {
  BlockerType,
  CascadeStep,
  FoodType,
  GridPosition,
  GridTile,
  IngredientType,
  MatchGroup,
  SpecialType
} from './types';
import { MatchDetector } from './match_detector';
import { SpecialCreators } from './special_creators';
import { ScoreCalculator } from './score_calculator';

export interface GravityResult {
  fallingTiles: { from: GridPosition; to: GridPosition; tile: GridTile }[];
  newTilesSpawned: { position: GridPosition; tile: GridTile }[];
  collectedIngredients: IngredientType[];
}

export class GravityEngine {
  /**
   * Drops tiles downward into empty spaces within each column, avoiding holes,
   * and spawns new tiles at the top spawners.
   */
  public static applyGravity(board: GridBoard): GravityResult {
    const fallingTiles: { from: GridPosition; to: GridPosition; tile: GridTile }[] = [];
    const newTilesSpawned: { position: GridPosition; tile: GridTile }[] = [];
    const collectedIngredients: IngredientType[] = [];

    // Check for ingredients that reached exit tiles (bottom row by default)
    for (let c = 0; c < board.cols; c++) {
      for (let r = board.rows - 1; r >= 0; r--) {
        const tile = board.grid[r][c];
        if (tile && tile.isExit && tile.ingredientType !== IngredientType.NONE) {
          collectedIngredients.push(tile.ingredientType);
          tile.ingredientType = IngredientType.NONE;
          tile.foodType = null;
        }
      }
    }

    // Process each column independently from bottom to top
    for (let c = 0; c < board.cols; c++) {
      // 1. Drop existing tiles
      for (let r = board.rows - 1; r >= 0; r--) {
        const targetTile = board.grid[r][c];
        if (!targetTile || targetTile.isHole || targetTile.blockerType === BlockerType.CHOCOLATE_MOLD || targetTile.blockerType === BlockerType.SOLID_BLOCK) {
          continue;
        }

        // If current slot is empty (no food, no ingredient, no solid blocker)
        if (targetTile.foodType === null && targetTile.ingredientType === IngredientType.NONE && targetTile.specialType === SpecialType.NONE) {
          // Find the lowest tile above that can fall down
          let sourceRow = -1;
          for (let above = r - 1; above >= 0; above--) {
            const aboveTile = board.grid[above][c];
            if (!aboveTile || aboveTile.isHole || aboveTile.blockerType === BlockerType.CHOCOLATE_MOLD || aboveTile.blockerType === BlockerType.SOLID_BLOCK) {
              continue;
            }
            if (aboveTile.foodType !== null || aboveTile.ingredientType !== IngredientType.NONE || aboveTile.specialType !== SpecialType.NONE) {
              sourceRow = above;
              break;
            }
          }

          if (sourceRow !== -1) {
            const sourceTile = board.grid[sourceRow][c]!;
            // Move properties from source to target
            targetTile.foodType = sourceTile.foodType;
            targetTile.specialType = sourceTile.specialType;
            targetTile.ingredientType = sourceTile.ingredientType;

            sourceTile.foodType = null;
            sourceTile.specialType = SpecialType.NONE;
            sourceTile.ingredientType = IngredientType.NONE;

            fallingTiles.push({
              from: { row: sourceRow, col: c },
              to: { row: r, col: c },
              tile: targetTile
            });
          }
        }
      }

      // 2. Spawn new tiles from top spawner if empty slots remain
      for (let r = board.rows - 1; r >= 0; r--) {
        const tile = board.grid[r][c];
        if (!tile || tile.isHole || tile.blockerType === BlockerType.CHOCOLATE_MOLD || tile.blockerType === BlockerType.SOLID_BLOCK) {
          continue;
        }

        if (tile.foodType === null && tile.ingredientType === IngredientType.NONE && tile.specialType === SpecialType.NONE) {
          const randomFood = board.allowedFoods[Math.floor(Math.random() * board.allowedFoods.length)];
          tile.foodType = randomFood;
          tile.specialType = SpecialType.NONE;
          tile.ingredientType = IngredientType.NONE;

          newTilesSpawned.push({
            position: { row: r, col: c },
            tile
          });
        }
      }
    }

    return { fallingTiles, newTilesSpawned, collectedIngredients };
  }

  /**
   * Executes a full cascading loop after a match or explosion, repeatedly clearing matches,
   * dropping tiles, and tracking combo steps until the board is completely stable.
   */
  public static resolveFullCascade(board: GridBoard, initialCleared?: GridPosition[]): CascadeStep[] {
    const cascadeSteps: CascadeStep[] = [];
    let stepIndex = 1;
    let keepSimulating = true;

    // First resolve any initial forced clearance (e.g. from super combos or power-ups)
    if (initialCleared && initialCleared.length > 0) {
      const step = this.processClearPositions(board, initialCleared, stepIndex++);
      const gravity = this.applyGravity(board);
      step.fallingTiles = gravity.fallingTiles;
      step.newTilesSpawned = gravity.newTilesSpawned;
      cascadeSteps.push(step);
    }

    // Cascading loop
    while (keepSimulating && stepIndex < 25) { // Safety ceiling of 25 cascades
      const matches = MatchDetector.findMatches(board);
      if (matches.length === 0) {
        keepSimulating = false;
        break;
      }

      // Collect all matched positions & specials to activate
      const toClearSet = new Map<string, GridPosition>();
      const specialActivations: CascadeStep['specialActivations'] = [];
      const newSpecials: CascadeStep['newSpecialsSpawned'] = [];

      for (const group of matches) {
        for (const p of group.tiles) {
          toClearSet.set(`${p.row},${p.col}`, p);

          // Check if tile being cleared contains a special that detonates
          const t = board.getTile(p);
          if (t && t.specialType !== SpecialType.NONE) {
            const affected = SpecialCreators.getSpecialClearPositions(board, p, t.specialType, t.foodType);
            specialActivations.push({
              sourcePos: p,
              specialType: t.specialType,
              affectedPositions: affected
            });
            for (const aff of affected) {
              toClearSet.set(`${aff.row},${aff.col}`, aff);
            }
          }
        }

        // Check if pattern creates a new special
        if (group.specialToSpawn) {
          newSpecials.push({
            position: group.specialToSpawn.position,
            specialType: group.specialToSpawn.type,
            foodType: group.foodType
          });
        }
      }

      const clearList = Array.from(toClearSet.values());
      const step = this.processClearPositions(board, clearList, stepIndex, newSpecials);
      step.specialActivations = specialActivations;

      // Apply gravity drop & top refills
      const gravity = this.applyGravity(board);
      step.fallingTiles = gravity.fallingTiles;
      step.newTilesSpawned = gravity.newTilesSpawned;

      cascadeSteps.push(step);
      stepIndex++;
    }

    return cascadeSteps;
  }

  /**
   * Clears designated positions, damages adjacent frostings/molds, and spawns any newly formed special foods.
   */
  private static processClearPositions(
    board: GridBoard,
    positions: GridPosition[],
    stepIndex: number,
    newSpecials?: CascadeStep['newSpecialsSpawned']
  ): CascadeStep {
    const clearedList: GridPosition[] = [];
    const newSpecialsCreated: CascadeStep['newSpecialsSpawned'] = [];

    // Damage adjacent blockers (frostings, molds, locks)
    for (const pos of positions) {
      const tile = board.getTile(pos);
      if (!tile || tile.isHole) continue;

      // Clear the food or ingredient
      tile.foodType = null;
      tile.specialType = SpecialType.NONE;
      clearedList.push(pos);

      // Check tile's own frosting / lock
      if (tile.blockerType === BlockerType.FROSTING_1 || tile.blockerType === BlockerType.FROSTING_2) {
        tile.blockerHealth--;
        if (tile.blockerHealth <= 0) {
          tile.blockerType = BlockerType.NONE;
        }
      } else if (tile.blockerType === BlockerType.CHEFS_LOCK) {
        tile.blockerType = BlockerType.NONE;
        tile.blockerHealth = 0;
      }

      // Check adjacent neighbors for frosting or chocolate mold damage
      const neighbors = board.getNeighbors(pos);
      for (const n of neighbors) {
        const nTile = board.getTile(n);
        if (nTile) {
          if (nTile.blockerType === BlockerType.FROSTING_1 || nTile.blockerType === BlockerType.FROSTING_2) {
            nTile.blockerHealth--;
            if (nTile.blockerHealth <= 0) {
              nTile.blockerType = BlockerType.NONE;
            }
          } else if (nTile.blockerType === BlockerType.CHOCOLATE_MOLD) {
            nTile.blockerType = BlockerType.NONE;
            nTile.blockerHealth = 0;
            clearedList.push(n);
          }
        }
      }
    }

    // Place any newly synthesized special items into their target positions
    if (newSpecials) {
      for (const spec of newSpecials) {
        const t = board.getTile(spec.position);
        if (t && !t.isHole) {
          t.foodType = spec.foodType;
          t.specialType = spec.specialType;
          newSpecialsCreated.push(spec);
        }
      }
    }

    const { points, message } = ScoreCalculator.calculateCascadeScore(clearedList.length, stepIndex);

    return {
      stepIndex,
      clearedPositions: clearedList,
      specialActivations: [],
      newSpecialsSpawned: newSpecialsCreated,
      fallingTiles: [],
      newTilesSpawned: [],
      pointsEarned: points,
      comboMultiplier: stepIndex,
      comboMessage: message
    };
  }
}
