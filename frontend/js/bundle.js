/**
 * SnackPop Complete Runtime Bundle - Food Merge-2 / Sequence Pop Edition
 * 
 * When 2 or more similar items are in sequence/adjacent, the player merges them,
 * they animate and disappear with juicy particle explosions, new foods drop down,
 * and the game progresses through levels, combos, and ends in victory!
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
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);
    g.gain.setValueAtTime(0.3, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.09);
  }

  static playMerge(size = 2) {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const baseFreq = size >= 4 ? 659.25 : (size >= 3 ? 523.25 : 392.00);

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const g = ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc2.frequency.setValueAtTime(baseFreq * 1.5, now);

    g.gain.setValueAtTime(0.45, now);
    g.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    osc1.connect(g); osc2.connect(g); g.connect(this.sfxGain);
    osc1.start(now); osc2.start(now);
    osc1.stop(now + 0.26); osc2.stop(now + 0.26);
  }

  static playInvalid() {
    this.init(); this.resume();
    if (!this.audioCtx || this.isMuted) return;
    const osc = this.audioCtx.createOscillator();
    const g = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
    g.gain.setValueAtTime(0.2, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.11);
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

// Procedural Background Music
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
    } catch (e) {}
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

  static spawnFoodCrumbs(x, y, count = 20) {
    const colors = ['#F59E0B', '#DC2626', '#22C55E', '#EC4899', '#38BDF8', '#FACC15', '#A855F7'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 3 + Math.random() * 6;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.0,
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: 0.03
      });
    }
  }

  static spawnVictoryConfetti() {
    const width = this.canvas ? this.canvas.width : window.innerWidth;
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'];
    for (let i = 0; i < 120; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: -10,
        vx: (Math.random() - 0.5) * 4,
        vy: 3 + Math.random() * 4,
        size: 6 + Math.random() * 7,
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
          p.vy += 0.12;
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
    data.coins += stars * 35;
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
    moves: Math.max(15, 30 - Math.floor(i / 2)),
    targetScore: 1200 + i * 1400,
    starThresholds: [1200 + i * 1400, 3000 + i * 2200, 5500 + i * 3500],
    objectiveType: LevelObjectiveType.TARGET_SCORE,
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
    return `
      <div style="font-size: 36px; display: flex; justify-content: center; align-items: center; width: 100%; height: 100%; user-select: none;">
        ${emoji}
      </div>
    `;
  }
}

// Match-2 / Sequence Merge Game Engine
export class Merge2GameEngine {
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

  // Find all connected similar food items in sequence (horizontal or vertical connected cluster of 2+)
  getConnectedGroup(startR, startC) {
    const targetType = this.grid[startR][startC]?.foodType;
    if (!targetType) return [];

    const group = [];
    const visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
    const queue = [{ r: startR, c: startC }];
    visited[startR][startC] = true;

    while (queue.length > 0) {
      const { r, c } = queue.shift();
      group.push({ r, c });

      const neighbors = [
        { r: r - 1, c },
        { r: r + 1, c },
        { r: r, c: c - 1 },
        { r: r, c: c + 1 }
      ];

      for (const n of neighbors) {
        if (n.r >= 0 && n.r < this.rows && n.c >= 0 && n.c < this.cols) {
          if (!visited[n.r][n.c] && this.grid[n.r][n.c]?.foodType === targetType) {
            visited[n.r][n.c] = true;
            queue.push(n);
          }
        }
      }
    }

    return group;
  }

  // Scan entire board for all groups of 2 or more identical items in sequence
  findAllMergeGroups() {
    const visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
    const allGroups = [];

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (!visited[r][c] && this.grid[r][c]?.foodType) {
          const grp = this.getConnectedGroup(r, c);
          grp.forEach(p => visited[p.r][p.c] = true);
          if (grp.length >= 2) {
            allGroups.push(grp);
          }
        }
      }
    }
    return allGroups;
  }

  // Merges and pops a sequence of 2+ similar items
  async mergeGroup(group, renderCallback, isCascade = false) {
    if (group.length < 2) return;
    this.isProcessing = true;

    const mergeCount = group.length;
    SoundFXEngine.playMerge(mergeCount);

    // Points: 2 items = 100 pts, 3 items = 200 pts, 4 items = 350 pts, 5+ = 500+ pts
    const bonus = mergeCount >= 4 ? 2.0 : (mergeCount >= 3 ? 1.5 : 1.0);
    const points = Math.round(mergeCount * 50 * bonus);
    this.score += points;

    if (!isCascade) {
      this.movesRemaining--;
    }

    // Visual: spawn crumbs and clear tiles
    group.forEach(pos => {
      const cellEl = document.querySelector(`.grid-cell[data-r="${pos.r}"][data-c="${pos.c}"]`);
      if (cellEl) {
        const rect = cellEl.getBoundingClientRect();
        ParticleEmitter.spawnFoodCrumbs(rect.left + rect.width / 2, rect.top + rect.height / 2, 18);
      }
      this.grid[pos.r][pos.c].foodType = null;
    });

    renderCallback();
    await new Promise(res => setTimeout(res, 220));

    // Gravity: foods fall down and new foods spawn
    await this.applyGravityAndRefill(renderCallback);

    // Check for automatic cascades of 2+ items
    let cascadeGroups = this.findAllMergeGroups();
    let cascadeCount = 1;
    while (cascadeGroups.length > 0 && cascadeCount < 8) {
      await new Promise(res => setTimeout(res, 240));
      const biggestGroup = cascadeGroups.reduce((prev, cur) => cur.length > prev.length ? cur : prev, cascadeGroups[0]);
      await this.mergeGroup(biggestGroup, renderCallback, true);
      cascadeCount++;
      cascadeGroups = this.findAllMergeGroups();
    }

    // Check Win / Loss
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

    this.isProcessing = false;
  }

  async applyGravityAndRefill(renderCallback) {
    const foods = [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES];

    // Drop downward
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

      // Fill empty slots from top
      for (let r = 0; r < this.rows; r++) {
        if (this.grid[r][c].foodType === null) {
          this.grid[r][c].foodType = foods[Math.floor(Math.random() * foods.length)];
        }
      }
    }

    renderCallback();
  }

  // Handle Player Clicking a Food Item
  async handleCellClick(r, c, renderCallback) {
    if (this.isProcessing) return;

    const group = this.getConnectedGroup(r, c);

    if (group.length >= 2) {
      // Direct merge & pop!
      this.selected = null;
      await this.mergeGroup(group, renderCallback);
    } else {
      // If solitary item clicked, check if player is swapping with adjacent item
      if (!this.selected) {
        SoundFXEngine.playClick();
        this.selected = { row: r, col: c };
        renderCallback();
      } else {
        const first = this.selected;
        this.selected = null;

        if (first.row === r && first.col === c) {
          renderCallback();
          return;
        }

        const dR = Math.abs(first.row - r);
        const dC = Math.abs(first.col - c);

        if ((dR === 1 && dC === 0) || (dR === 0 && dC === 1)) {
          // Swap
          SoundFXEngine.playSwap();
          const temp = this.grid[first.row][first.col].foodType;
          this.grid[first.row][first.col].foodType = this.grid[r][c].foodType;
          this.grid[r][c].foodType = temp;
          renderCallback();

          // Check if swap created any 2+ sequence
          const groupA = this.getConnectedGroup(r, c);
          const groupB = this.getConnectedGroup(first.row, first.col);

          if (groupA.length >= 2 || groupB.length >= 2) {
            const targetGroup = groupA.length >= 2 ? groupA : groupB;
            await this.mergeGroup(targetGroup, renderCallback);
          } else {
            // Revert swap if no 2+ match formed
            await new Promise(res => setTimeout(res, 220));
            SoundFXEngine.playInvalid();
            const rev = this.grid[first.row][first.col].foodType;
            this.grid[first.row][first.col].foodType = this.grid[r][c].foodType;
            this.grid[r][c].foodType = rev;
            renderCallback();
          }
        } else {
          this.selected = { row: r, col: c };
          renderCallback();
        }
      }
    }
  }
}

// Client Coordinator
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
      alert('🎡 Lucky Chef Daily Wheel:\nYou received +150 Coins & +1 Chef Spatula!');
      const data = SaveSystem.load();
      data.coins += 150;
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
            <span class="brand-title">SnackPop: Merge 2 Saga</span>
          </div>
          <div class="map-stats-tray">
            <div class="stat-pill"><span class="pill-icon">❤️</span> 5/5</div>
            <div class="stat-pill"><span class="pill-icon">🪙</span> ${data.coins}</div>
            <div class="stat-pill"><span class="pill-icon">⭐</span> ${totalStars}/150</div>
          </div>
        </div>

        <div style="background: rgba(245, 158, 11, 0.18); border: 1px solid #F59E0B; border-radius: 14px; padding: 10px 14px; margin-bottom: 16px; font-size: 0.85rem; text-align: center; color: #FEF3C7;">
          ✨ <strong>HOW TO PLAY:</strong> Tap any <strong>2 or more identical foods</strong> in sequence to merge and pop them, or swap adjacent items!
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
    const game = new Merge2GameEngine(
      level,
      (score, stars) => {
        alert(`🎉 LEVEL COMPLETED!\nScore: ${score.toLocaleString()} / ${level.targetScore.toLocaleString()}\nStars: ${'⭐'.repeat(stars)}\nReward: +${stars * 35} Coins!`);
        this.renderWorldMap();
      },
      (score) => {
        alert(`💔 OUT OF MOVES!\nFinal Score: ${score.toLocaleString()} / ${level.targetScore.toLocaleString()}\nTry again!`);
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
              <span>Target: ${level.targetScore.toLocaleString()}</span>
            </div>
            <div class="progress-track">
              <div class="progress-bar-fill" style="width: ${progress}%;"></div>
            </div>
          </div>

          <div style="font-size: 0.8rem; color: #FDE047; margin-bottom: 8px; text-align: center;">
            💡 Tap any <strong>2+ identical adjacent foods</strong> to merge & pop them!
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
          game.handleCellClick(r, c, render);
        });
      });
    };

    render();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new SnackPopClient();
});
