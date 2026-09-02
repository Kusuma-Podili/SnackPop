export interface CascadeScoreResult {
  points: number;
  message: string;
}

export class ScoreCalculator {
  private static readonly BASE_TILE_POINTS = 60;

  /**
   * Calculates points for a cascade step with progressive combo bonuses and voiceover messages.
   */
  public static calculateCascadeScore(clearedCount: number, cascadeIndex: number): CascadeScoreResult {
    let multiplier = 1.0;
    let message = '';

    if (cascadeIndex === 1) {
      multiplier = 1.0;
      message = 'MATCH!';
    } else if (cascadeIndex === 2) {
      multiplier = 1.5;
      message = 'SWEET! 🍬';
    } else if (cascadeIndex === 3) {
      multiplier = 2.0;
      message = 'TASTY! 🍕';
    } else if (cascadeIndex === 4) {
      multiplier = 3.0;
      message = 'DELICIOUS! 🎂';
    } else if (cascadeIndex === 5) {
      multiplier = 4.0;
      message = 'EXTRA TASTY! 🚀';
    } else {
      multiplier = 5.0 + (cascadeIndex - 6) * 1.5;
      message = 'DIVINE CHEF! 👑✨';
    }

    const points = Math.round(clearedCount * this.BASE_TILE_POINTS * multiplier);

    return {
      points,
      message
    };
  }

  /**
   * Calculates star rating (0, 1, 2, or 3) from current score against level thresholds.
   */
  public static calculateStars(score: number, starThresholds: [number, number, number]): number {
    if (score >= starThresholds[2]) return 3;
    if (score >= starThresholds[1]) return 2;
    if (score >= starThresholds[0]) return 1;
    return 0;
  }
}
