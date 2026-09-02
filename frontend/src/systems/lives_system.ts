import { SaveSystem } from './save_system';

export class LivesSystem {
  public static readonly MAX_LIVES = 5;
  public static readonly REFILL_INTERVAL_MS = 20 * 60 * 1000; // 20 minutes

  public static getLivesState(): {
    lives: number;
    secondsUntilNextLife: number;
    isFull: boolean;
  } {
    const data = SaveSystem.load();
    let currentLives = data.lives;
    const now = Date.now();
    const elapsedMs = now - data.lastLifeRefillTimestamp;

    if (currentLives < this.MAX_LIVES) {
      const livesToAward = Math.floor(elapsedMs / this.REFILL_INTERVAL_MS);
      if (livesToAward > 0) {
        currentLives = Math.min(this.MAX_LIVES, currentLives + livesToAward);
        data.lives = currentLives;
        data.lastLifeRefillTimestamp = now - (elapsedMs % this.REFILL_INTERVAL_MS);
        SaveSystem.save(data);
      }
    }

    let secondsUntilNextLife = 0;
    if (currentLives < this.MAX_LIVES) {
      const remainingMs = this.REFILL_INTERVAL_MS - ((now - data.lastLifeRefillTimestamp) % this.REFILL_INTERVAL_MS);
      secondsUntilNextLife = Math.max(0, Math.ceil(remainingMs / 1000));
    }

    return {
      lives: currentLives,
      secondsUntilNextLife,
      isFull: currentLives >= this.MAX_LIVES
    };
  }

  public static consumeLife(): boolean {
    const data = SaveSystem.load();
    const state = this.getLivesState();

    if (state.lives <= 0) {
      return false;
    }

    data.lives = state.lives - 1;
    if (state.lives === this.MAX_LIVES) {
      // Start refill timer from now
      data.lastLifeRefillTimestamp = Date.now();
    }
    SaveSystem.save(data);
    return true;
  }

  public static refillLivesWithCoins(costCoins: number = 100): boolean {
    const data = SaveSystem.load();
    if (data.coins < costCoins) return false;

    data.coins -= costCoins;
    data.lives = this.MAX_LIVES;
    data.lastLifeRefillTimestamp = Date.now();
    SaveSystem.save(data);
    return true;
  }

  public static addLife(amount: number = 1): void {
    const data = SaveSystem.load();
    data.lives = Math.min(this.MAX_LIVES, data.lives + amount);
    SaveSystem.save(data);
  }
}
