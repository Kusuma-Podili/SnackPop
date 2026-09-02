import { GridBoard } from './board';
import {
  CascadeStep,
  FoodType,
  GridPosition,
  HintMove,
  IngredientType,
  MoveExecutionResult,
  SpecialType,
  SwapMove
} from './types';
import { MatchDetector } from './match_detector';
import { ComboResolver } from './combo_resolver';
import { GravityEngine } from './gravity';

export class MoveValidator {
  /**
   * Tests if swapping posA and posB yields at least one match or activates a super combo.
   */
  public static isValidMove(board: GridBoard, posA: GridPosition, posB: GridPosition): boolean {
    if (!board.isValidPosition(posA) || !board.isValidPosition(posB)) return false;
    if (!board.isAdjacent(posA, posB)) return false;

    const tileA = board.getTile(posA);
    const tileB = board.getTile(posB);
    if (!tileA || !tileB || tileA.isHole || tileB.isHole) return false;

    // Check super combo
    if (ComboResolver.isSuperCombo(tileA.specialType, tileB.specialType)) {
      return true;
    }

    // Try virtual swap
    board.swapTiles(posA, posB);
    const matches = MatchDetector.findMatches(board);
    // Revert virtual swap
    board.swapTiles(posA, posB);

    return matches.length > 0;
  }

  /**
   * Finds all possible moves that can be performed on the active board.
   */
  public static findAvailableMoves(board: GridBoard): HintMove[] {
    const validMoves: HintMove[] = [];

    for (let r = 0; r < board.rows; r++) {
      for (let c = 0; c < board.cols; c++) {
        const current = { row: r, col: c };

        // Test swap right
        if (c + 1 < board.cols) {
          const right = { row: r, col: c + 1 };
          if (this.isValidMove(board, current, right)) {
            const hint = this.evaluateMoveValue(board, current, right);
            validMoves.push(hint);
          }
        }

        // Test swap down
        if (r + 1 < board.rows) {
          const down = { row: r + 1, col: c };
          if (this.isValidMove(board, current, down)) {
            const hint = this.evaluateMoveValue(board, current, down);
            validMoves.push(hint);
          }
        }
      }
    }

    // Sort by best potential score
    return validMoves.sort((a, b) => b.potentialScore - a.potentialScore);
  }

  private static evaluateMoveValue(board: GridBoard, posA: GridPosition, posB: GridPosition): HintMove {
    const tileA = board.getTile(posA);
    const tileB = board.getTile(posB);
    if (tileA && tileB && ComboResolver.isSuperCombo(tileA.specialType, tileB.specialType)) {
      return {
        from: posA,
        to: posB,
        potentialScore: 1000,
        matchSize: 5,
        willCreateSpecial: true
      };
    }

    board.swapTiles(posA, posB);
    const matches = MatchDetector.findMatches(board);
    board.swapTiles(posA, posB);

    let maxMatch = 3;
    let createsSpecial = false;
    for (const m of matches) {
      if (m.tiles.length > maxMatch) maxMatch = m.tiles.length;
      if (m.specialToSpawn !== null) createsSpecial = true;
    }

    return {
      from: posA,
      to: posB,
      potentialScore: maxMatch * 100 + (createsSpecial ? 250 : 0),
      matchSize: maxMatch,
      willCreateSpecial: createsSpecial
    };
  }

  /**
   * Shuffles all non-hole, non-blocker foods on board when deadlocked, ensuring at least one valid move exists.
   */
  public static shuffleBoard(board: GridBoard): boolean {
    const moveableTiles: { pos: GridPosition; food: FoodType; special: SpecialType }[] = [];

    for (let r = 0; r < board.rows; r++) {
      for (let c = 0; c < board.cols; c++) {
        const t = board.grid[r][c];
        if (t && !t.isHole && t.foodType !== null && t.ingredientType === IngredientType.NONE) {
          moveableTiles.push({
            pos: { row: r, col: c },
            food: t.foodType,
            special: t.specialType
          });
        }
      }
    }

    if (moveableTiles.length < 4) return false;

    // Shuffle array and test for valid moves with no immediate matches
    for (let attempt = 0; attempt < 50; attempt++) {
      // Fisher-Yates shuffle foods
      for (let i = moveableTiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tempFood = moveableTiles[i].food;
        const tempSpecial = moveableTiles[i].special;

        moveableTiles[i].food = moveableTiles[j].food;
        moveableTiles[i].special = moveableTiles[j].special;

        moveableTiles[j].food = tempFood;
        moveableTiles[j].special = tempSpecial;
      }

      // Apply to board
      for (const item of moveableTiles) {
        const t = board.grid[item.pos.row][item.pos.col]!;
        t.foodType = item.food;
        t.specialType = item.special;
      }

      // Check no initial matches and at least one legal move
      const immediateMatches = MatchDetector.findMatches(board);
      if (immediateMatches.length === 0) {
        const available = this.findAvailableMoves(board);
        if (available.length > 0) {
          return true; // Successfully reshuffled!
        }
      }
    }

    return true;
  }

  /**
   * Executes a complete move by a player, resolving swaps, combos, cascades, and returns full event sequence.
   */
  public static executeMove(board: GridBoard, move: SwapMove): MoveExecutionResult {
    const { from, to } = move;

    if (!this.isValidMove(board, from, to)) {
      return {
        valid: false,
        isSpecialCombo: false,
        totalPoints: 0,
        cascades: [],
        clearedFrostings: 0,
        collectedIngredients: [],
        chocolateSpread: []
      };
    }

    const tileA = board.getTile(from)!;
    const tileB = board.getTile(to)!;

    // Check for super combo
    if (ComboResolver.isSuperCombo(tileA.specialType, tileB.specialType)) {
      const superCombo = ComboResolver.resolveSuperCombo(board, from, to);
      // Consume both swapped tiles
      board.swapTiles(from, to);
      const cascades = GravityEngine.resolveFullCascade(board, superCombo.clearedPositions);
      const totalPoints = cascades.reduce((sum, c) => sum + c.pointsEarned, 500);

      return {
        valid: true,
        isSpecialCombo: true,
        specialComboType: superCombo.comboName,
        totalPoints,
        cascades,
        clearedFrostings: 0,
        collectedIngredients: [],
        chocolateSpread: []
      };
    }

    // Normal swap
    board.swapTiles(from, to);
    const initialMatches = MatchDetector.findMatches(board, to);

    const cascades = GravityEngine.resolveFullCascade(board);
    const totalPoints = cascades.reduce((sum, c) => sum + c.pointsEarned, 0);

    return {
      valid: true,
      isSpecialCombo: false,
      totalPoints,
      cascades,
      clearedFrostings: 0,
      collectedIngredients: [],
      chocolateSpread: []
    };
  }
}
