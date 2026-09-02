import { GridBoard } from './board';
import { FoodType, GridPosition, SpecialType } from './types';

export class SpecialCreators {
  /**
   * Calculates all board positions affected by activating a single special food tile.
   */
  public static getSpecialClearPositions(
    board: GridBoard,
    pos: GridPosition,
    specialType: SpecialType,
    targetFoodType?: FoodType | null
  ): GridPosition[] {
    const affected = new Map<string, GridPosition>();

    const addPos = (r: number, c: number) => {
      if (board.isValidPosition({ row: r, col: c })) {
        const tile = board.grid[r][c];
        if (tile && !tile.isHole) {
          affected.set(`${r},${c}`, { row: r, col: c });
        }
      }
    };

    switch (specialType) {
      case SpecialType.STRIPED_HORIZONTAL:
        // Clears entire row
        for (let c = 0; c < board.cols; c++) {
          addPos(pos.row, c);
        }
        break;

      case SpecialType.STRIPED_VERTICAL:
        // Clears entire column
        for (let r = 0; r < board.rows; r++) {
          addPos(r, pos.col);
        }
        break;

      case SpecialType.WRAPPED_BOMB:
        // Explodes 3x3 surrounding zone
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            addPos(pos.row + dr, pos.col + dc);
          }
        }
        break;

      case SpecialType.RAINBOW_CHEF_HAT:
        // Clears all tiles of matching foodType across entire board
        if (targetFoodType) {
          for (let r = 0; r < board.rows; r++) {
            for (let c = 0; c < board.cols; c++) {
              const tile = board.grid[r][c];
              if (tile && tile.foodType === targetFoodType) {
                addPos(r, c);
              }
            }
          }
        } else {
          // If detonated standalone, pick the most frequent food on board
          const counts = new Map<FoodType, number>();
          for (let r = 0; r < board.rows; r++) {
            for (let c = 0; c < board.cols; c++) {
              const t = board.grid[r][c];
              if (t && t.foodType) {
                counts.set(t.foodType, (counts.get(t.foodType) ?? 0) + 1);
              }
            }
          }
          let bestType: FoodType | null = null;
          let maxCount = 0;
          counts.forEach((cnt, type) => {
            if (cnt > maxCount) {
              maxCount = cnt;
              bestType = type;
            }
          });
          if (bestType) {
            for (let r = 0; r < board.rows; r++) {
              for (let c = 0; c < board.cols; c++) {
                const tile = board.grid[r][c];
                if (tile && tile.foodType === bestType) {
                  addPos(r, c);
                }
              }
            }
          }
        }
        // Also clear the rainbow hat itself
        addPos(pos.row, pos.col);
        break;

      default:
        addPos(pos.row, pos.col);
        break;
    }

    return Array.from(affected.values());
  }
}
