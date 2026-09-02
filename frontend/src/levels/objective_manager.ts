import { GridBoard } from '../engine/board';
import { IngredientType } from '../engine/types';
import { LevelDefinition, LevelObjectiveType } from './level_definitions';
import { ScoreCalculator } from '../engine/score_calculator';

export interface ObjectiveProgress {
  currentScore: number;
  movesRemaining: number;
  timeRemainingSeconds?: number;
  starsEarned: number;
  frostingsRemaining: number;
  initialFrostings: number;
  collectedIngredients: Record<IngredientType, number>;
  requiredIngredients: Record<IngredientType, number>;
  isWon: boolean;
  isLost: boolean;
  completionPercentage: number;
}

export class ObjectiveManager {
  private level: LevelDefinition;
  private currentScore: number = 0;
  private movesRemaining: number;
  private timeRemainingSeconds?: number;
  private initialFrostings: number = 0;
  private collectedIngredients: Record<IngredientType, number> = {
    [IngredientType.NONE]: 0,
    [IngredientType.GOLDEN_SPATULA]: 0,
    [IngredientType.CHEF_TROPHY]: 0
  };
  private requiredIngredients: Record<IngredientType, number> = {
    [IngredientType.NONE]: 0,
    [IngredientType.GOLDEN_SPATULA]: 0,
    [IngredientType.CHEF_TROPHY]: 0
  };

  constructor(level: LevelDefinition, board: GridBoard) {
    this.level = level;
    this.movesRemaining = level.moves;
    this.timeRemainingSeconds = level.timeLimitSeconds;

    // Count initial frostings
    const blockers = board.countBlockers();
    this.initialFrostings = blockers.frostings;

    // Required ingredients
    if (level.targetIngredients) {
      for (const req of level.targetIngredients) {
        this.requiredIngredients[req.type] = req.count;
      }
    }
  }

  public addScore(points: number): void {
    this.currentScore += points;
  }

  public decrementMoves(): void {
    this.movesRemaining = Math.max(0, this.movesRemaining - 1);
  }

  public addExtraMoves(count: number = 5): void {
    this.movesRemaining += count;
  }

  public recordCollectedIngredient(type: IngredientType): void {
    if (type !== IngredientType.NONE) {
      this.collectedIngredients[type] = (this.collectedIngredients[type] || 0) + 1;
    }
  }

  public checkProgress(board: GridBoard): ObjectiveProgress {
    const blockers = board.countBlockers();
    const frostingsRemaining = blockers.frostings;
    const starsEarned = ScoreCalculator.calculateStars(this.currentScore, this.level.starThresholds);

    let isObjectiveMet = false;
    let completionPercentage = 0;

    switch (this.level.objectiveType) {
      case LevelObjectiveType.TARGET_SCORE:
        isObjectiveMet = this.currentScore >= this.level.targetScore;
        completionPercentage = Math.min(100, Math.round((this.currentScore / this.level.targetScore) * 100));
        break;

      case LevelObjectiveType.CLEAR_FROSTING:
        isObjectiveMet = frostingsRemaining === 0 && starsEarned >= 1;
        const clearedFrostings = Math.max(0, this.initialFrostings - frostingsRemaining);
        completionPercentage = this.initialFrostings > 0
          ? Math.min(100, Math.round((clearedFrostings / this.initialFrostings) * 100))
          : 100;
        break;

      case LevelObjectiveType.COLLECT_INGREDIENTS:
        let allCollected = true;
        let totalRequired = 0;
        let totalCollected = 0;

        for (const type of [IngredientType.GOLDEN_SPATULA, IngredientType.CHEF_TROPHY]) {
          const req = this.requiredIngredients[type] || 0;
          const col = this.collectedIngredients[type] || 0;
          totalRequired += req;
          totalCollected += Math.min(col, req);
          if (col < req) allCollected = false;
        }

        isObjectiveMet = allCollected && starsEarned >= 1;
        completionPercentage = totalRequired > 0
          ? Math.min(100, Math.round((totalCollected / totalRequired) * 100))
          : 100;
        break;

      default:
        isObjectiveMet = this.currentScore >= this.level.targetScore;
        completionPercentage = Math.min(100, Math.round((this.currentScore / this.level.targetScore) * 100));
        break;
    }

    const isWon = isObjectiveMet;
    const isLost = !isWon && this.movesRemaining <= 0;

    return {
      currentScore: this.currentScore,
      movesRemaining: this.movesRemaining,
      timeRemainingSeconds: this.timeRemainingSeconds,
      starsEarned,
      frostingsRemaining,
      initialFrostings: this.initialFrostings,
      collectedIngredients: { ...this.collectedIngredients },
      requiredIngredients: { ...this.requiredIngredients },
      isWon,
      isLost,
      completionPercentage
    };
  }
}
