export interface PlayerSaveData {
  playerName: string;
  coins: number;
  highestUnlockedLevel: number;
  levelStars: Record<number, number>; // levelNumber -> stars (1-3)
  levelHighScores: Record<number, number>; // levelNumber -> score
  boosters: {
    spatula: number;
    rollingPin: number;
    blender: number;
    extraMoves: number;
    startFlavorBomb: number;
  };
  lives: number;
  lastLifeRefillTimestamp: number;
  unlockedRecipes: string[];
  claimedAchievements: string[];
  lastDailySpinDate: string | null;
  settings: {
    sfxVolume: number;
    musicVolume: number;
    highContrast: boolean;
    particlesEnabled: boolean;
  };
}

const SAVE_STORAGE_KEY = 'snackpop_player_save_v1';

export class SaveSystem {
  private static cachedData: PlayerSaveData | null = null;

  public static getDefaultSave(): PlayerSaveData {
    return {
      playerName: 'Head Chef',
      coins: 250,
      highestUnlockedLevel: 1,
      levelStars: {},
      levelHighScores: {},
      boosters: {
        spatula: 3,
        rollingPin: 2,
        blender: 2,
        extraMoves: 2,
        startFlavorBomb: 1
      },
      lives: 5,
      lastLifeRefillTimestamp: Date.now(),
      unlockedRecipes: ['classic_margherita'],
      claimedAchievements: [],
      lastDailySpinDate: null,
      settings: {
        sfxVolume: 0.8,
        musicVolume: 0.4,
        highContrast: false,
        particlesEnabled: true
      }
    };
  }

  public static load(): PlayerSaveData {
    if (this.cachedData) return this.cachedData;

    try {
      const raw = localStorage.getItem(SAVE_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.cachedData = {
          ...this.getDefaultSave(),
          ...parsed,
          boosters: { ...this.getDefaultSave().boosters, ...(parsed.boosters || {}) },
          settings: { ...this.getDefaultSave().settings, ...(parsed.settings || {}) }
        };
        return this.cachedData!;
      }
    } catch (e) {
      console.warn('Failed to parse player save from localStorage', e);
    }

    this.cachedData = this.getDefaultSave();
    this.save();
    return this.cachedData;
  }

  public static save(data?: PlayerSaveData): void {
    if (data) {
      this.cachedData = data;
    }
    if (!this.cachedData) {
      this.cachedData = this.getDefaultSave();
    }

    try {
      localStorage.setItem(SAVE_STORAGE_KEY, JSON.stringify(this.cachedData));
    } catch (e) {
      console.error('Failed to write player save to localStorage', e);
    }
  }

  public static recordLevelCompletion(levelNum: number, stars: number, score: number): void {
    const data = this.load();
    const currentStars = data.levelStars[levelNum] || 0;
    if (stars > currentStars) {
      data.levelStars[levelNum] = stars;
    }

    const currentHighScore = data.levelHighScores[levelNum] || 0;
    if (score > currentHighScore) {
      data.levelHighScores[levelNum] = score;
    }

    // Unlock next level
    if (levelNum >= data.highestUnlockedLevel && stars >= 1) {
      data.highestUnlockedLevel = Math.min(50, levelNum + 1);
    }

    // Award bonus coins for level win
    data.coins += stars * 25;

    this.save(data);
  }

  public static resetProgress(): void {
    this.cachedData = this.getDefaultSave();
    this.save();
  }
}
