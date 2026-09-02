import { GridBoard } from './board';
import { FoodType, GridPosition, SpecialType } from './types';

export interface SuperComboResult {
  isSuperCombo: boolean;
  comboName: string;
  clearedPositions: GridPosition[];
  transformedSpecials?: {
    pos: GridPosition;
    specialType: SpecialType;
  }[];
}

export class ComboResolver {
  /**
   * Checks if swapping two tiles triggers a Special-with-Special combo.
   */
  public static isSuperCombo(specialA: SpecialType, specialB: SpecialType): boolean {
    if (specialA === SpecialType.NONE && specialB === SpecialType.NONE) return false;
    // Rainbow hat swapped with any regular food or special is a super combo
    if (specialA === SpecialType.RAINBOW_CHEF_HAT || specialB === SpecialType.RAINBOW_CHEF_HAT) {
      return true;
    }
    // Both tiles must be special
    return specialA !== SpecialType.NONE && specialB !== SpecialType.NONE;
  }

  /**
   * Resolves the super combo effects between two swapped positions.
   */
  public static resolveSuperCombo(
    board: GridBoard,
    posA: GridPosition,
    posB: GridPosition
  ): SuperComboResult {
    const tileA = board.getTile(posA);
    const tileB = board.getTile(posB);

    if (!tileA || !tileB) {
      return { isSuperCombo: false, comboName: '', clearedPositions: [] };
    }

    const specA = tileA.specialType;
    const specB = tileB.specialType;
    const isStriped = (s: SpecialType) => s === SpecialType.STRIPED_HORIZONTAL || s === SpecialType.STRIPED_VERTICAL;

    // 1. Rainbow + Rainbow -> Total Mega Board Wipeout!
    if (specA === SpecialType.RAINBOW_CHEF_HAT && specB === SpecialType.RAINBOW_CHEF_HAT) {
      const allPositions: GridPosition[] = [];
      for (let r = 0; r < board.rows; r++) {
        for (let c = 0; c < board.cols; c++) {
          const t = board.grid[r][c];
          if (t && !t.isHole) {
            allPositions.push({ row: r, col: c });
          }
        }
      }
      return {
        isSuperCombo: true,
        comboName: 'COSMIC CHEF WIPEOUT!',
        clearedPositions: allPositions
      };
    }

    // 2. Rainbow + Striped -> Converts all tiles of that food type to striped and detonates all!
    if (
      (specA === SpecialType.RAINBOW_CHEF_HAT && isStriped(specB)) ||
      (specB === SpecialType.RAINBOW_CHEF_HAT && isStriped(specA))
    ) {
      const stripedTile = specA === SpecialType.RAINBOW_CHEF_HAT ? tileB : tileA;
      const targetFood = stripedTile.foodType;
      const transformed: { pos: GridPosition; specialType: SpecialType }[] = [];
      const affected = new Map<string, GridPosition>();

      // Origin tiles
      affected.set(`${posA.row},${posA.col}`, posA);
      affected.set(`${posB.row},${posB.col}`, posB);

      if (targetFood) {
        for (let r = 0; r < board.rows; r++) {
          for (let c = 0; c < board.cols; c++) {
            const t = board.grid[r][c];
            if (t && t.foodType === targetFood) {
              const randomStripe = Math.random() > 0.5 ? SpecialType.STRIPED_HORIZONTAL : SpecialType.STRIPED_VERTICAL;
              transformed.push({ pos: { row: r, col: c }, specialType: randomStripe });
              // Add row and col clears
              if (randomStripe === SpecialType.STRIPED_HORIZONTAL) {
                for (let colIdx = 0; colIdx < board.cols; colIdx++) affected.set(`${r},${colIdx}`, { row: r, col: colIdx });
              } else {
                for (let rowIdx = 0; rowIdx < board.rows; rowIdx++) affected.set(`${rowIdx},${c}`, { row: rowIdx, col: c });
              }
            }
          }
        }
      }

      return {
        isSuperCombo: true,
        comboName: 'RAINBOW STRIPE STORM!',
        clearedPositions: Array.from(affected.values()),
        transformedSpecials: transformed
      };
    }

    // 3. Rainbow + Bomb -> Converts all tiles of that food type into bombs and detonates!
    if (
      (specA === SpecialType.RAINBOW_CHEF_HAT && specB === SpecialType.WRAPPED_BOMB) ||
      (specB === SpecialType.RAINBOW_CHEF_HAT && specA === SpecialType.WRAPPED_BOMB)
    ) {
      const bombTile = specA === SpecialType.RAINBOW_CHEF_HAT ? tileB : tileA;
      const targetFood = bombTile.foodType;
      const transformed: { pos: GridPosition; specialType: SpecialType }[] = [];
      const affected = new Map<string, GridPosition>();

      affected.set(`${posA.row},${posA.col}`, posA);
      affected.set(`${posB.row},${posB.col}`, posB);

      if (targetFood) {
        for (let r = 0; r < board.rows; r++) {
          for (let c = 0; c < board.cols; c++) {
            const t = board.grid[r][c];
            if (t && t.foodType === targetFood) {
              transformed.push({ pos: { row: r, col: c }, specialType: SpecialType.WRAPPED_BOMB });
              // 3x3 blast
              for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                  const br = r + dr;
                  const bc = c + dc;
                  if (board.isValidPosition({ row: br, col: bc })) {
                    affected.set(`${br},${bc}`, { row: br, col: bc });
                  }
                }
              }
            }
          }
        }
      }

      return {
        isSuperCombo: true,
        comboName: 'RAINBOW BOMB SHOCKWAVE!',
        clearedPositions: Array.from(affected.values()),
        transformedSpecials: transformed
      };
    }

    // 4. Rainbow + Regular Food -> Clears all tiles of that food type
    if (specA === SpecialType.RAINBOW_CHEF_HAT || specB === SpecialType.RAINBOW_CHEF_HAT) {
      const regularTile = specA === SpecialType.RAINBOW_CHEF_HAT ? tileB : tileA;
      const targetFood = regularTile.foodType;
      const affected = new Map<string, GridPosition>();

      affected.set(`${posA.row},${posA.col}`, posA);
      affected.set(`${posB.row},${posB.col}`, posB);

      if (targetFood) {
        for (let r = 0; r < board.rows; r++) {
          for (let c = 0; c < board.cols; c++) {
            const t = board.grid[r][c];
            if (t && t.foodType === targetFood) {
              affected.set(`${r},${c}`, { row: r, col: c });
            }
          }
        }
      }

      return {
        isSuperCombo: true,
        comboName: 'FLAVOR EXTRACTION!',
        clearedPositions: Array.from(affected.values())
      };
    }

    // 5. Striped + Bomb -> Clears 3 Rows and 3 Columns in a giant cross!
    if (
      (isStriped(specA) && specB === SpecialType.WRAPPED_BOMB) ||
      (isStriped(specB) && specA === SpecialType.WRAPPED_BOMB)
    ) {
      const center = posB;
      const affected = new Map<string, GridPosition>();

      // 3 rows centered on action
      for (let dr = -1; dr <= 1; dr++) {
        const targetRow = center.row + dr;
        if (targetRow >= 0 && targetRow < board.rows) {
          for (let c = 0; c < board.cols; c++) {
            affected.set(`${targetRow},${c}`, { row: targetRow, col: c });
          }
        }
      }

      // 3 columns centered on action
      for (let dc = -1; dc <= 1; dc++) {
        const targetCol = center.col + dc;
        if (targetCol >= 0 && targetCol < board.cols) {
          for (let r = 0; r < board.rows; r++) {
            affected.set(`${r},${targetCol}`, { row: r, col: targetCol });
          }
        }
      }

      return {
        isSuperCombo: true,
        comboName: 'MEGA 3x3 STRIPE BLASTER!',
        clearedPositions: Array.from(affected.values())
      };
    }

    // 6. Striped + Striped -> Cross Beam (1 row + 1 col)
    if (isStriped(specA) && isStriped(specB)) {
      const center = posB;
      const affected = new Map<string, GridPosition>();

      for (let c = 0; c < board.cols; c++) {
        affected.set(`${center.row},${c}`, { row: center.row, col: c });
      }
      for (let r = 0; r < board.rows; r++) {
        affected.set(`${r},${center.col}`, { row: r, col: center.col });
      }

      return {
        isSuperCombo: true,
        comboName: 'CROSS LASER SLICE!',
        clearedPositions: Array.from(affected.values())
      };
    }

    // 7. Bomb + Bomb -> 5x5 Massive Mega Blast!
    if (specA === SpecialType.WRAPPED_BOMB && specB === SpecialType.WRAPPED_BOMB) {
      const center = posB;
      const affected = new Map<string, GridPosition>();

      for (let dr = -2; dr <= 2; dr++) {
        for (let dc = -2; dc <= 2; dc++) {
          const r = center.row + dr;
          const c = center.col + dc;
          if (board.isValidPosition({ row: r, col: c })) {
            affected.set(`${r},${c}`, { row: r, col: c });
          }
        }
      }

      return {
        isSuperCombo: true,
        comboName: 'BIG BANG SIZZLE BOMB!',
        clearedPositions: Array.from(affected.values())
      };
    }

    return { isSuperCombo: false, comboName: '', clearedPositions: [] };
  }
}
