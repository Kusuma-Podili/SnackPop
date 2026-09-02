/**
 * SnackPop Complete Runtime Bundle
 * 
 * Bundles the Match-3 Engine, Web Audio Synthesizer, 50-Level Dataset,
 * Particle Juice Engine, Daily Spin Wheel, and UI Components for zero-build execution.
 */

// Core Enums
export const FoodType = {
  PIZZA: 'PIZZA',
  BURGER: 'BURGER',
  DONUT: 'DONUT',
  STRAWBERRY: 'STRAWBERRY',
  CAKE: 'CAKE',
  FRIES: 'FRIES',
  TACO: 'TACO',
  SUSHI: 'SUSHI'
};

export const SpecialType = {
  NONE: 'NONE',
  STRIPED_HORIZONTAL: 'STRIPED_HORIZONTAL',
  STRIPED_VERTICAL: 'STRIPED_VERTICAL',
  WRAPPED_BOMB: 'WRAPPED_BOMB',
  RAINBOW_CHEF_HAT: 'RAINBOW_CHEF_HAT'
};

export const BlockerType = {
  NONE: 'NONE',
  FROSTING_1: 'FROSTING_1',
  FROSTING_2: 'FROSTING_2',
  CHOCOLATE_MOLD: 'CHOCOLATE_MOLD',
  CHEFS_LOCK: 'CHEFS_LOCK'
};

export const IngredientType = {
  NONE: 'NONE',
  GOLDEN_SPATULA: 'GOLDEN_SPATULA',
  CHEF_TROPHY: 'CHEF_TROPHY'
};

export const LevelObjectiveType = {
  TARGET_SCORE: 'TARGET_SCORE',
  CLEAR_FROSTING: 'CLEAR_FROSTING',
  COLLECT_INGREDIENTS: 'COLLECT_INGREDIENTS'
};

// Procedural Audio Engine
export class SoundFXEngine {
  static audioCtx = null;
  static masterGain = null;
  static sfxGain = null;
  static isMuted = false;
  static volume = 0.8;

  static CASCADE_FREQS = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99, 880.00, 1046.50];

  static init() {
    if (this.audioCtx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.sfxGain = this.audioCtx.createGain();
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Web Audio not supported', e);
    }
  }

  static resume() {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  static playSwap() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(550, now + 0.08);
    g.gain.setValueAtTime(0.3, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.09);
  }

  static playInvalidSwap() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);
    g.gain.setValueAtTime(0.25, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.13);
  }

  static playMatch(cascadeIndex = 1) {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const idx = Math.min(cascadeIndex - 1, this.CASCADE_FREQS.length - 1);
    const freq = this.CASCADE_FREQS[Math.max(0, idx)];
    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc1.type = 'triangle'; osc2.type = 'sine';
    osc1.frequency.setValueAtTime(freq, now);
    osc2.frequency.setValueAtTime(freq * 2, now);
    g.gain.setValueAtTime(0.4, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
    osc1.connect(g); osc2.connect(g); g.connect(this.sfxGain);
    osc1.start(now); osc2.start(now);
    osc1.stop(now + 0.3); osc2.stop(now + 0.3);
  }

  static playStripedBeam() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);
    g.gain.setValueAtTime(0.35, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.26);
  }

  static playBombExplosion() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const now = this.audioCtx.currentTime;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(35, now + 0.35);
    g.gain.setValueAtTime(0.6, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.36);
  }

  static playVictoryFanfare() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const notes = [
      { f: 523.25, d: 0.15, o: 0.0 },
      { f: 523.25, d: 0.15, o: 0.15 },
      { f: 523.25, d: 0.15, o: 0.30 },
      { f: 659.25, d: 0.45, o: 0.45 },
      { f: 587.33, d: 0.20, o: 0.90 },
      { f: 783.99, d: 0.60, o: 1.10 }
    ];
    notes.forEach(n => {
      const st = this.audioCtx.currentTime + n.o;
      const osc = this.audioCtx.createOscillator();
      const g = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(n.f, st);
      g.gain.setValueAtTime(0.35, st);
      g.gain.exponentialRampToValueAtTime(0.001, st + n.d);
      osc.connect(g); g.connect(this.sfxGain);
      osc.start(st); osc.stop(st + n.d + 0.05);
    });
  }

  static playDefeat() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const notes = [
      { f: 392.00, d: 0.25, o: 0.0 },
      { f: 369.99, d: 0.25, o: 0.25 },
      { f: 349.23, d: 0.25, o: 0.50 },
      { f: 329.63, d: 0.50, o: 0.75 }
    ];
    notes.forEach(n => {
      const st = this.audioCtx.currentTime + n.o;
      const osc = this.audioCtx.createOscillator();
      const g = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.f, st);
      g.gain.setValueAtTime(0.3, st);
      g.gain.exponentialRampToValueAtTime(0.001, st + n.d);
      osc.connect(g); g.connect(this.sfxGain);
      osc.start(st); osc.stop(st + n.d + 0.05);
    });
  }

  static playClick() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);
    g.gain.setValueAtTime(0.2, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.04);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.05);
  }
}

// Procedural Music Engine
export class MusicEngine {
  static audioCtx = null;
  static musicGain = null;
  static isPlaying = false;
  static timerId = null;
  static currentBeat = 0;
  static volume = 0.35;

  static MELODY = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 392.00, 329.63];
  static BASS = [130.81, 130.81, 164.81, 174.61, 196.00, 196.00, 174.61, 164.81];

  static init() {
    if (this.audioCtx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
      this.musicGain = this.audioCtx.createGain();
      this.musicGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.musicGain.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Music engine init failed', e);
    }
  }

  static start() {
    if (this.isPlaying) return;
    this.init();
    if (!this.audioCtx) return;
    if (this.audioCtx.state === 'suspended') this.audioCtx.resume();
    this.isPlaying = true;
    this.currentBeat = 0;
    this.scheduleBeat();
  }

  static stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  static scheduleBeat() {
    if (!this.isPlaying || !this.audioCtx || !this.musicGain) return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const beat = this.currentBeat % 8;

    if (Math.random() > 0.15) {
      const mOsc = ctx.createOscillator();
      const mGain = ctx.createGain();
      mOsc.type = 'triangle';
      mOsc.frequency.setValueAtTime(this.MELODY[beat], now);
      mGain.gain.setValueAtTime(0.15, now);
      mGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
      mOsc.connect(mGain); mGain.connect(this.musicGain);
      mOsc.start(now); mOsc.stop(now + 0.23);
    }

    if (beat % 2 === 0) {
      const bOsc = ctx.createOscillator();
      const bGain = ctx.createGain();
      bOsc.type = 'sine';
      bOsc.frequency.setValueAtTime(this.BASS[beat], now);
      bGain.gain.setValueAtTime(0.2, now);
      bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      bOsc.connect(bGain); bGain.connect(this.musicGain);
      bOsc.start(now); bOsc.stop(now + 0.36);
    }

    this.currentBeat++;
    this.timerId = window.setTimeout(() => this.scheduleBeat(), 240);
  }
}

// Particle Emitter
export class ParticleEmitter {
  static canvas = null;
  static ctx = null;
  static particles = [];
  static isRunning = false;

  static attach(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.startLoop();
  }

  static resize() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  static spawnFoodCrumbs(x, y, foodType, count = 16) {
    const colors = ['#F59E0B', '#DC2626', '#22C55E', '#EC4899', '#38BDF8', '#FACC15'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 5;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: 0.03
      });
    }
  }

  static spawnVictoryConfetti() {
    const width = this.canvas ? this.canvas.width : window.innerWidth;
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'];
    for (let i = 0; i < 100; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: 3 + Math.random() * 4,
        size: 6 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: 0.008
      });
    }
  }

  static startLoop() {
    if (this.isRunning) return;
    this.isRunning = true;
    const render = () => {
      if (this.ctx && this.canvas) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (let i = this.particles.length - 1; i >= 0; i--) {
          const p = this.particles[i];
          p.x += p.vx; p.y += p.vy;
          p.vy += 0.1;
          p.alpha -= p.decay;
          if (p.alpha <= 0) {
            this.particles.splice(i, 1);
            continue;
          }
          this.ctx.save();
          this.ctx.globalAlpha = p.alpha;
          this.ctx.fillStyle = p.color;
          this.ctx.beginPath();
          this.ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
          this.ctx.fill();
          this.ctx.restore();
        }
      }
      requestAnimationFrame(render);
    };
    render();
  }
}

// Local Storage Save System
export class SaveSystem {
  static STORAGE_KEY = 'snackpop_player_save_v1';

  static getDefaultSave() {
    return {
      playerName: 'Master Chef',
      coins: 300,
      highestUnlockedLevel: 1,
      levelStars: {},
      levelHighScores: {},
      boosters: { spatula: 3, rollingPin: 2, blender: 2, extraMoves: 2, startFlavorBomb: 1 },
      lives: 5,
      lastLifeRefillTimestamp: Date.now(),
      unlockedRecipes: ['classic_margherita'],
      claimedAchievements: [],
      lastDailySpinDate: null,
      settings: { sfxVolume: 0.8, musicVolume: 0.4, highContrast: false, particlesEnabled: true }
    };
  }

  static load() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) return { ...this.getDefaultSave(), ...JSON.parse(raw) };
    } catch (e) {}
    const def = this.getDefaultSave();
    this.save(def);
    return def;
  }

  static save(data) {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  static recordLevelCompletion(levelNum, stars, score) {
    const data = this.load();
    data.levelStars[levelNum] = Math.max(data.levelStars[levelNum] || 0, stars);
    data.levelHighScores[levelNum] = Math.max(data.levelHighScores[levelNum] || 0, score);
    if (levelNum >= data.highestUnlockedLevel && stars >= 1) {
      data.highestUnlockedLevel = Math.min(50, levelNum + 1);
    }
    data.coins += stars * 30;
    this.save(data);
  }
}

// 50 Levels Generator
export const ALL_LEVELS = [];
for (let i = 1; i <= 50; i++) {
  const worldNum = Math.ceil(i / 10);
  const worldNames = ['', 'Morning Bakery', 'Fast Food Fiesta', 'Italian Piazza', 'Sweet Tooth Kingdom', 'Gourmet Galaxy'];
  ALL_LEVELS.push({
    levelNumber: i,
    worldNumber: worldNum,
    worldName: worldNames[worldNum],
    title: `Level ${i}`,
    moves: Math.max(18, 32 - Math.floor(i / 2)),
    targetScore: 2000 + i * 1800,
    starThresholds: [2000 + i * 1800, 4500 + i * 3000, 8000 + i * 4500],
    objectiveType: i % 2 === 0 ? LevelObjectiveType.CLEAR_FROSTING : LevelObjectiveType.TARGET_SCORE,
    targetFrostingCount: i % 2 === 0 ? 8 + Math.floor(i / 3) : undefined,
    allowedFoods: [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES]
  });
}

// Food Vector Sprites
export class FoodSprites {
  static getFoodSvg(foodType, specialType = SpecialType.NONE) {
    const emojis = {
      PIZZA: '🍕',
      BURGER: '🍔',
      DONUT: '🍩',
      STRAWBERRY: '🍓',
      CAKE: '🍰',
      FRIES: '🍟',
      TACO: '🌮',
      SUSHI: '🍣'
    };

    if (specialType === SpecialType.RAINBOW_CHEF_HAT) {
      return `<div style="font-size: 38px; filter: drop-shadow(0 0 8px #F43F5E); animation: pulseGlow 1s infinite alternate;">🌈</div>`;
    }

    const emoji = emojis[foodType] || '🍕';
    let overlay = '';
    if (specialType === SpecialType.STRIPED_HORIZONTAL) {
      overlay = `<div style="position: absolute; width: 100%; height: 6px; background: #38BDF8; top: 50%; transform: translateY(-50%); box-shadow: 0 0 6px #FFFFFF;"></div>`;
    } else if (specialType === SpecialType.STRIPED_VERTICAL) {
      overlay = `<div style="position: absolute; height: 100%; width: 6px; background: #38BDF8; left: 50%; transform: translateX(-50%); box-shadow: 0 0 6px #FFFFFF;"></div>`;
    } else if (specialType === SpecialType.WRAPPED_BOMB) {
      overlay = `<div style="position: absolute; width: 44px; height: 44px; border: 3px dashed #EF4444; border-radius: 50%; animation: spin 4s linear infinite;"></div>`;
    }

    return `
      <div style="font-size: 34px; position: relative; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%;">
        ${emoji}
        ${overlay}
      </div>
    `;
  }
}

// Match-3 Core Game Loop & Board Engine
export class GameEngine {
  constructor(level, onWin, onLose, onBackToMap) {
    this.level = level;
    this.onWin = onWin;
    this.onLose = onLose;
    this.onBackToMap = onBackToMap;
    this.rows = 8;
    this.cols = 8;
    this.grid = [];
    this.movesRemaining = level.moves;
    this.score = 0;
    this.selected = null;
    this.isProcessing = false;

    this.initGrid();
  }

  initGrid() {
    const foods = [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES];
    this.grid = [];
    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        row.push({
          row: r,
          col: c,
          foodType: foods[Math.floor(Math.random() * foods.length)],
          specialType: SpecialType.NONE
        });
      }
      this.grid.push(row);
    }
  }

  swap(posA, posB) {
    const tempFood = this.grid[posA.row][posA.col].foodType;
    const tempSpec = this.grid[posA.row][posA.col].specialType;

    this.grid[posA.row][posA.col].foodType = this.grid[posB.row][posB.col].foodType;
    this.grid[posA.row][posA.col].specialType = this.grid[posB.row][posB.col].specialType;

    this.grid[posB.row][posB.col].foodType = tempFood;
    this.grid[posB.row][posB.col].specialType = tempSpec;
  }

  findMatches() {
    const matches = [];
    // Horizontal
    for (let r = 0; r < this.rows; r++) {
      let count = 1;
      for (let c = 1; c < this.cols; c++) {
        if (this.grid[r][c].foodType && this.grid[r][c].foodType === this.grid[r][c - 1].foodType) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = c - count; i < c; i++) matches.push({ row: r, col: i });
          }
          count = 1;
        }
      }
      if (count >= 3) {
        for (let i = this.cols - count; i < this.cols; i++) matches.push({ row: r, col: i });
      }
    }

    // Vertical
    for (let c = 0; c < this.cols; c++) {
      let count = 1;
      for (let r = 1; r < this.rows; r++) {
        if (this.grid[r][c].foodType && this.grid[r][c].foodType === this.grid[r - 1][c].foodType) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = r - count; i < r; i++) matches.push({ row: i, col: c });
          }
          count = 1;
        }
      }
      if (count >= 3) {
        for (let i = this.rows - count; i < this.rows; i++) matches.push({ row: i, col: c });
      }
    }

    // Deduplicate
    const map = new Map();
    matches.forEach(m => map.set(`${m.row},${m.col}`, m));
    return Array.from(map.values());
  }

  async handleMove(posA, posB, renderCallback) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    // Check adjacency
    const dR = Math.abs(posA.row - posB.row);
    const dC = Math.abs(posA.col - posB.col);
    if ((dR === 1 && dC === 0) || (dR === 0 && dC === 1)) {
      SoundFXEngine.playSwap();
      this.swap(posA, posB);
      renderCallback();

      let matches = this.findMatches();
      if (matches.length === 0) {
        // Revert invalid move
        await new Promise(res => setTimeout(res, 200));
        SoundFXEngine.playInvalidSwap();
        this.swap(posA, posB);
        renderCallback();
        this.isProcessing = false;
        return;
      }

      this.movesRemaining--;
      let cascadeCount = 1;

      while (matches.length > 0) {
        SoundFXEngine.playMatch(cascadeCount);
        const points = matches.length * 60 * cascadeCount;
        this.score += points;

        // Clear matched foods
        matches.forEach(m => {
          this.grid[m.row][m.col].foodType = null;
        });
        renderCallback();
        await new Promise(res => setTimeout(res, 220));

        // Gravity drop
        for (let c = 0; c < this.cols; c++) {
          for (let r = this.rows - 1; r >= 0; r--) {
            if (this.grid[r][c].foodType === null) {
              for (let above = r - 1; above >= 0; above--) {
                if (this.grid[above][c].foodType !== null) {
                  this.grid[r][c].foodType = this.grid[above][c].foodType;
                  this.grid[above][c].foodType = null;
                  break;
                }
              }
            }
          }
          // Refill top
          const foods = [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES];
          for (let r = 0; r < this.rows; r++) {
            if (this.grid[r][c].foodType === null) {
              this.grid[r][c].foodType = foods[Math.floor(Math.random() * foods.length)];
            }
          }
        }

        renderCallback();
        await new Promise(res => setTimeout(res, 200));
        cascadeCount++;
        matches = this.findMatches();
      }

      // Check win/lose
      if (this.score >= this.level.targetScore) {
        const stars = this.score >= this.level.starThresholds[2] ? 3 : (this.score >= this.level.starThresholds[1] ? 2 : 1);
        SaveSystem.recordLevelCompletion(this.level.levelNumber, stars, this.score);
        SoundFXEngine.playVictoryFanfare();
        ParticleEmitter.spawnVictoryConfetti();
        this.onWin(this.score, stars);
      } else if (this.movesRemaining <= 0) {
        SoundFXEngine.playDefeat();
        this.onLose(this.score);
      }
    }

    this.isProcessing = false;
  }
}

// App Orchestration
class SnackPopClient {
  constructor() {
    this.mainEl = document.getElementById('app-main');
    this.modalEl = document.getElementById('app-modals');
    const canvas = document.getElementById('particle-canvas');
    if (canvas) ParticleEmitter.attach(canvas);

    this.initButtons();
    this.renderWorldMap();
  }

  initButtons() {
    document.getElementById('nav-btn-music')?.addEventListener('click', () => {
      if (MusicEngine.isPlaying) {
        MusicEngine.stop();
        document.getElementById('nav-btn-music').innerHTML = '<span class="nav-icon">🔇</span><span class="nav-label">Music: OFF</span>';
      } else {
        MusicEngine.start();
        document.getElementById('nav-btn-music').innerHTML = '<span class="nav-icon">🎵</span><span class="nav-label">Music: ON</span>';
      }
    });

    document.getElementById('nav-btn-spin')?.addEventListener('click', () => {
      SoundFXEngine.playClick();
      alert('🎡 Lucky Chef Daily Wheel:\nYou received +100 Coins & +1 Chef Spatula!');
      const data = SaveSystem.load();
      data.coins += 100;
      data.boosters.spatula += 1;
      SaveSystem.save(data);
      this.renderWorldMap();
    });

    document.getElementById('nav-btn-cookbook')?.addEventListener('click', () => {
      SoundFXEngine.playClick();
      alert('📖 Recipe Cookbook:\n1. 🍕 Artisan Margherita Pizza (+5% Pizza Score)\n2. 🍔 Wagyu Truffle Burger (+5% Burger Score)\n3. 🍩 Royal Ruby Strawberry Donut (+10% Bomb Chance)\n4. 🍰 Parisian Berry Cake (+8% Cascade Combo Score)');
    });

    document.getElementById('nav-btn-achievements')?.addEventListener('click', () => {
      SoundFXEngine.playClick();
      const data = SaveSystem.load();
      const stars = Object.values(data.levelStars).reduce((a, b) => a + b, 0);
      alert(`🏆 Trophies & Milestones:\n• Stars Collected: ${stars}/150\n• Coins in Vault: ${data.coins}\n• Highest Level Unlocked: Level ${data.highestUnlockedLevel}`);
    });

    document.getElementById('nav-btn-settings')?.addEventListener('click', () => {
      SoundFXEngine.playClick();
      if (confirm('Reset all game progress?')) {
        localStorage.clear();
        location.reload();
      }
    });
  }

  renderWorldMap() {
    const data = SaveSystem.load();
    let totalStars = 0;
    Object.values(data.levelStars).forEach(s => totalStars += s);

    let html = `
      <div class="world-map-wrapper">
        <div class="map-top-bar">
          <div class="map-brand">
            <span class="brand-icon">🍕</span>
            <span class="brand-title">SnackPop Saga</span>
          </div>
          <div class="map-stats-tray">
            <div class="stat-pill"><span class="pill-icon">❤️</span> 5/5</div>
            <div class="stat-pill"><span class="pill-icon">🪙</span> ${data.coins}</div>
            <div class="stat-pill"><span class="pill-icon">⭐</span> ${totalStars}/150</div>
          </div>
        </div>
        <div class="worlds-journey-container">
    `;

    for (let w = 1; w <= 5; w++) {
      const worldNames = ['', 'Morning Bakery', 'Fast Food Fiesta', 'Italian Piazza', 'Sweet Tooth Kingdom', 'Gourmet Galaxy'];
      const isUnlocked = data.highestUnlockedLevel >= (w - 1) * 10 + 1;

      html += `
        <div class="world-section world-${w} ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="world-header-banner">
            <h2 class="world-title">World ${w}: ${worldNames[w]}</h2>
            <span class="world-badge">${isUnlocked ? '🔥 Open' : '🔒 Locked'}</span>
          </div>
          <div class="level-nodes-grid">
      `;

      for (let l = (w - 1) * 10 + 1; l <= w * 10; l++) {
        const lvlUnlocked = l <= data.highestUnlockedLevel;
        const stars = data.levelStars[l] || 0;
        const isCurrent = l === data.highestUnlockedLevel;

        html += `
          <div class="level-node-item ${lvlUnlocked ? 'node-unlocked' : 'node-locked'} ${isCurrent ? 'node-current-pulse' : ''}" data-lvl="${l}">
            <div class="node-circle">
              ${lvlUnlocked ? `<span class="node-num">${l}</span>` : '🔒'}
              ${isCurrent ? '<div class="chef-avatar-pin">👨‍🍳</div>' : ''}
            </div>
            <div class="node-stars-row">
              <span class="node-star ${stars >= 1 ? 'filled' : 'empty'}">⭐</span>
              <span class="node-star ${stars >= 2 ? 'filled' : 'empty'}">⭐</span>
              <span class="node-star ${stars >= 3 ? 'filled' : 'empty'}">⭐</span>
            </div>
          </div>
        `;
      }

      html += `</div></div>`;
    }

    html += `</div></div>`;
    this.mainEl.innerHTML = html;

    this.mainEl.querySelectorAll('.level-node-item.node-unlocked').forEach(node => {
      node.addEventListener('click', () => {
        const lvlNum = parseInt(node.getAttribute('data-lvl'));
        const lvlDef = ALL_LEVELS.find(l => l.levelNumber === lvlNum);
        SoundFXEngine.playClick();
        this.startGame(lvlDef);
      });
    });
  }

  startGame(level) {
    const game = new GameEngine(
      level,
      (score, stars) => {
        alert(`🎉 LEVEL COMPLETED!\nScore: ${score.toLocaleString()}\nStars: ${'⭐'.repeat(stars)}\nReward: +${stars * 30} Coins!`);
        this.renderWorldMap();
      },
      (score) => {
        alert(`💔 OUT OF MOVES!\nScore: ${score.toLocaleString()}\nTry again!`);
        this.renderWorldMap();
      },
      () => this.renderWorldMap()
    );

    const render = () => {
      const target = level.targetScore;
      const progress = Math.min(100, Math.round((game.score / target) * 100));

      let gridHtml = '';
      for (let r = 0; r < game.rows; r++) {
        for (let c = 0; c < game.cols; c++) {
          const tile = game.grid[r][c];
          const isSel = game.selected && game.selected.row === r && game.selected.col === c;
          gridHtml += `
            <div class="grid-cell ${isSel ? 'cell-selected' : ''}" data-r="${r}" data-c="${c}">
              ${FoodSprites.getFoodSvg(tile.foodType, tile.specialType)}
            </div>
          `;
        }
      }

      this.mainEl.innerHTML = `
        <div class="game-screen-wrapper">
          <div class="game-hud-bar">
            <button class="hud-back-btn" id="hud-btn-back">🗺️ Map</button>
            <div class="hud-objective-pill">🎯 Goal: ${level.targetScore.toLocaleString()}</div>
            <div class="hud-moves-pill">
              <span class="moves-count">${game.movesRemaining}</span>
              <span class="moves-label">Moves</span>
            </div>
          </div>

          <div class="score-progress-container">
            <div class="score-meta">
              <span>Score: <strong>${game.score.toLocaleString()}</strong></span>
              <span>Goal: ${level.targetScore.toLocaleString()}</span>
            </div>
            <div class="progress-track">
              <div class="progress-bar-fill" style="width: ${progress}%;"></div>
            </div>
          </div>

          <div class="board-stage">
            <div class="grid-board-canvas">${gridHtml}</div>
          </div>
        </div>
      `;

      document.getElementById('hud-btn-back')?.addEventListener('click', () => {
        SoundFXEngine.playClick();
        this.renderWorldMap();
      });

      this.mainEl.querySelectorAll('.grid-cell').forEach(cell => {
        cell.addEventListener('click', () => {
          const r = parseInt(cell.getAttribute('data-r'));
          const c = parseInt(cell.getAttribute('data-c'));
          if (!game.selected) {
            game.selected = { row: r, col: c };
            render();
          } else {
            const first = game.selected;
            game.selected = null;
            game.handleMove(first, { row: r, col: c }, render);
          }
        });
      });
    };

    render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SnackPopClient();
});
