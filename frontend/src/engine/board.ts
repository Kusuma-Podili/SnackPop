import {
  BoardConfig,
  BlockerType,
  FoodType,
  GridPosition,
  GridTile,
  IngredientType,
  SpecialType
} from './types';

let nextTileId = 1;

/**
 * Creates a unique string identifier for tiles.
 */
export function generateTileId(): string {
  return `tile_${nextTileId++}_${Math.random().toString(36).substring(2, 7)}`;
}

export class GridBoard {
  public rows: number;
  public cols: number;
  public allowedFoods: FoodType[];
  public grid: (GridTile | null)[][];
  public spawners: Set<number>;
  public exits: Set<number>;

  constructor(config: BoardConfig) {
    this.rows = config.rows;
    this.cols = config.cols;
    this.allowedFoods = config.allowedFoods.length > 0 ? config.allowedFoods : [
      FoodType.PIZZA,
      FoodType.BURGER,
      FoodType.DONUT,
      FoodType.STRAWBERRY,
      FoodType.CAKE,
      FoodType.FRIES
    ];

    this.spawners = new Set(config.spawners ?? Array.from({ length: this.cols }, (_, i) => i));
    this.exits = new Set(config.exits ?? Array.from({ length: this.cols }, (_, i) => i));

    this.grid = this.createEmptyGrid();
    this.applyHoles(config.holes);
    this.applyBlockers(config);
    this.applyIngredients(config.initialIngredients);
  }

  private createEmptyGrid(): (GridTile | null)[][] {
    const grid: (GridTile | null)[][] = [];
    for (let r = 0; r < this.rows; r++) {
      const row: (GridTile | null)[] = [];
      for (let c = 0; c < this.cols; c++) {
        row.push({
          id: generateTileId(),
          row: r,
          col: c,
          foodType: null,
          specialType: SpecialType.NONE,
          blockerType: BlockerType.NONE,
          blockerHealth: 0,
          ingredientType: IngredientType.NONE,
          isHole: false,
          isSpawner: r === 0 && this.spawners.has(c),
          isExit: r === this.rows - 1 && this.exits.has(c),
          markedForClear: false
        });
      }
      grid.push(row);
    }
    return grid;
  }

  private applyHoles(holes?: GridPosition[]): void {
    if (!holes) return;
    for (const hole of holes) {
      if (this.isValidPosition(hole)) {
        const tile = this.grid[hole.row][hole.col];
        if (tile) {
          tile.isHole = true;
          tile.foodType = null;
        }
      }
    }
  }

  private applyBlockers(config: BoardConfig): void {
    if (config.initialFrostings) {
      for (const frost of config.initialFrostings) {
        if (this.isValidPosition(frost.pos)) {
          const tile = this.grid[frost.pos.row][frost.pos.col];
          if (tile && !tile.isHole) {
            tile.blockerType = frost.level >= 2 ? BlockerType.FROSTING_2 : BlockerType.FROSTING_1;
            tile.blockerHealth = frost.level >= 2 ? 2 : 1;
          }
        }
      }
    }

    if (config.initialMolds) {
      for (const mold of config.initialMolds) {
        if (this.isValidPosition(mold)) {
          const tile = this.grid[mold.row][mold.col];
          if (tile && !tile.isHole) {
            tile.blockerType = BlockerType.CHOCOLATE_MOLD;
            tile.blockerHealth = 1;
            tile.foodType = null;
          }
        }
      }
    }

    if (config.initialLocks) {
      for (const lock of config.initialLocks) {
        if (this.isValidPosition(lock)) {
          const tile = this.grid[lock.row][lock.col];
          if (tile && !tile.isHole) {
            tile.blockerType = BlockerType.CHEFS_LOCK;
            tile.blockerHealth = 1;
          }
        }
      }
    }
  }

  private applyIngredients(ingredients?: { pos: GridPosition; type: IngredientType }[]): void {
    if (!ingredients) return;
    for (const ing of ingredients) {
      if (this.isValidPosition(ing.pos)) {
        const tile = this.grid[ing.pos.row][ing.pos.col];
        if (tile && !tile.isHole) {
          tile.ingredientType = ing.type;
          tile.foodType = null;
        }
      }
    }
  }

  /**
   * Fills the grid with randomized foods while guaranteeing NO initial 3-in-a-row matches.
   */
  public populateInitialBoard(): void {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const tile = this.grid[r][c];
        if (!tile || tile.isHole || tile.blockerType === BlockerType.CHOCOLATE_MOLD || tile.ingredientType !== IngredientType.NONE) {
          continue;
        }

        const forbiddenFoods = new Set<FoodType>();

        // Check horizontal 2 in a row to the left
        if (c >= 2) {
          const left1 = this.grid[r][c - 1]?.foodType;
          const left2 = this.grid[r][c - 2]?.foodType;
          if (left1 && left1 === left2) {
            forbiddenFoods.add(left1);
          }
        }

        // Check vertical 2 in a row above
        if (r >= 2) {
          const up1 = this.grid[r - 1][c]?.foodType;
          const up2 = this.grid[r - 2][c]?.foodType;
          if (up1 && up1 === up2) {
            forbiddenFoods.add(up1);
          }
        }

        const availableFoods = this.allowedFoods.filter(f => !forbiddenFoods.has(f));
        const chosen = availableFoods.length > 0
          ? availableFoods[Math.floor(Math.random() * availableFoods.length)]
          : this.allowedFoods[Math.floor(Math.random() * this.allowedFoods.length)];

        tile.foodType = chosen;
      }
    }
  }

  public getTile(pos: GridPosition): GridTile | null {
    if (!this.isValidPosition(pos)) return null;
    return this.grid[pos.row][pos.col];
  }

  public setTile(pos: GridPosition, tile: GridTile | null): void {
    if (this.isValidPosition(pos)) {
      this.grid[pos.row][pos.col] = tile;
    }
  }

  public isValidPosition(pos: GridPosition): boolean {
    return pos.row >= 0 && pos.row < this.rows && pos.col >= 0 && pos.col < this.cols;
  }

  public isAdjacent(posA: GridPosition, posB: GridPosition): boolean {
    const dRow = Math.abs(posA.row - posB.row);
    const dCol = Math.abs(posA.col - posB.col);
    return (dRow === 1 && dCol === 0) || (dRow === 0 && dCol === 1);
  }

  public getNeighbors(pos: GridPosition): GridPosition[] {
    const neighbors: GridPosition[] = [];
    const deltas = [
      { r: -1, c: 0 },
      { r: 1, c: 0 },
      { r: 0, c: -1 },
      { r: 0, c: 1 }
    ];
    for (const d of deltas) {
      const neighbor = { row: pos.row + d.r, col: pos.col + d.c };
      if (this.isValidPosition(neighbor)) {
        neighbors.push(neighbor);
      }
    }
    return neighbors;
  }

  public swapTiles(posA: GridPosition, posB: GridPosition): boolean {
    if (!this.isValidPosition(posA) || !this.isValidPosition(posB)) return false;
    const tileA = this.grid[posA.row][posA.col];
    const tileB = this.grid[posB.row][posB.col];

    if (!tileA || !tileB || tileA.isHole || tileB.isHole) return false;
    if (tileA.blockerType === BlockerType.CHEFS_LOCK || tileB.blockerType === BlockerType.CHEFS_LOCK) return false;
    if (tileA.blockerType === BlockerType.CHOCOLATE_MOLD || tileB.blockerType === BlockerType.CHOCOLATE_MOLD) return false;

    // Swap foodType, specialType, and ingredientType
    const tempFood = tileA.foodType;
    const tempSpecial = tileA.specialType;
    const tempIng = tileA.ingredientType;

    tileA.foodType = tileB.foodType;
    tileA.specialType = tileB.specialType;
    tileA.ingredientType = tileB.ingredientType;

    tileB.foodType = tempFood;
    tileB.specialType = tempSpecial;
    tileB.ingredientType = tempIng;

    return true;
  }

  public countBlockers(): { frostings: number; molds: number; locks: number } {
    let frostings = 0;
    let molds = 0;
    let locks = 0;

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const tile = this.grid[r][c];
        if (!tile || tile.isHole) continue;
        if (tile.blockerType === BlockerType.FROSTING_1 || tile.blockerType === BlockerType.FROSTING_2) {
          frostings++;
        } else if (tile.blockerType === BlockerType.CHOCOLATE_MOLD) {
          molds++;
        } else if (tile.blockerType === BlockerType.CHEFS_LOCK) {
          locks++;
        }
      }
    }

    return { frostings, molds, locks };
  }

  public clone(): GridBoard {
    const cloneConfig: BoardConfig = {
      rows: this.rows,
      cols: this.cols,
      allowedFoods: [...this.allowedFoods],
      spawners: Array.from(this.spawners),
      exits: Array.from(this.exits)
    };
    const cloned = new GridBoard(cloneConfig);
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const t = this.grid[r][c];
        if (t) {
          cloned.grid[r][c] = {
            ...t,
            animationState: t.animationState ? { ...t.animationState } : undefined
          };
        } else {
          cloned.grid[r][c] = null;
        }
      }
    }
    return cloned;
  }
}
