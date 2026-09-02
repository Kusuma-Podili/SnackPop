/**
 * SnackPop Complete Runtime Bundle - Human-Crafted Vector Edition
 * 
 * Crisp hand-crafted food vector illustrations (🍕🍔🍩🍓🍰🍟), clean modern white UI theme,
 * player-controlled Match-3/Merge-3 swap mechanics, Web Audio synthesizer, and 50 levels.
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

// Hand-Crafted Humanized Vector SVGs
export class FoodSprites {
  static getFoodSvg(foodType, specialType = SpecialType.NONE) {
    let svgBody = '';

    switch (foodType) {
      case FoodType.PIZZA:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="crustGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F59E0B" />
                <stop offset="100%" stop-color="#D97706" />
              </linearGradient>
              <linearGradient id="cheeseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDE047" />
                <stop offset="100%" stop-color="#FACC15" />
              </linearGradient>
            </defs>
            <!-- Crust -->
            <path d="M 12 20 Q 50 8 88 20 L 50 90 Z" fill="url(#crustGrad)" stroke="#B45309" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- Cheese Layer -->
            <path d="M 17 24 Q 50 14 83 24 L 50 84 Z" fill="url(#cheeseGrad)"/>
            <!-- Pepperonis -->
            <circle cx="38" cy="38" r="7.5" fill="#EF4444" stroke="#DC2626" stroke-width="1.5"/>
            <circle cx="62" cy="42" r="7" fill="#EF4444" stroke="#DC2626" stroke-width="1.5"/>
            <circle cx="49" cy="62" r="6.5" fill="#EF4444" stroke="#DC2626" stroke-width="1.5"/>
            <!-- Basil Herbs -->
            <path d="M 32 50 Q 36 45 40 50 Q 36 55 32 50 Z" fill="#16A34A"/>
            <path d="M 59 30 Q 63 25 67 30 Q 63 35 59 30 Z" fill="#16A34A"/>
          </svg>
        `;
        break;

      case FoodType.BURGER:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="bunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FBBF24" />
                <stop offset="100%" stop-color="#D97706" />
              </linearGradient>
            </defs>
            <!-- Top Bun -->
            <path d="M 16 42 Q 50 12 84 42 Z" fill="url(#bunGrad)" stroke="#B45309" stroke-width="2.5"/>
            <!-- Sesame Seeds -->
            <ellipse cx="36" cy="28" rx="2.5" ry="1.2" fill="#FEF3C7" transform="rotate(-15 36 28)"/>
            <ellipse cx="50" cy="22" rx="2.5" ry="1.2" fill="#FEF3C7"/>
            <ellipse cx="64" cy="28" rx="2.5" ry="1.2" fill="#FEF3C7" transform="rotate(15 64 28)"/>
            <!-- Lettuce Layer -->
            <path d="M 12 43 Q 25 38 38 44 Q 50 38 62 44 Q 75 38 88 43 L 86 50 Q 50 48 14 50 Z" fill="#22C55E"/>
            <!-- Tomato Slice -->
            <rect x="18" y="49" width="64" height="7" rx="3.5" fill="#EF4444"/>
            <!-- Cheddar Cheese -->
            <path d="M 16 55 L 84 55 L 75 63 L 50 57 L 25 63 Z" fill="#FACC15"/>
            <!-- Beef Patty -->
            <rect x="15" y="59" width="70" height="13" rx="5" fill="#78350F" stroke="#451A03" stroke-width="2"/>
            <!-- Bottom Bun -->
            <path d="M 18 71 Q 50 73 82 71 L 80 83 Q 50 90 20 83 Z" fill="url(#bunGrad)" stroke="#B45309" stroke-width="2.5"/>
          </svg>
        `;
        break;

      case FoodType.DONUT:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="doughGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FDE68A" />
                <stop offset="100%" stop-color="#F59E0B" />
              </linearGradient>
            </defs>
            <!-- Dough Ring -->
            <circle cx="50" cy="50" r="38" fill="url(#doughGrad)" stroke="#D97706" stroke-width="2.5"/>
            <!-- Strawberry Icing -->
            <path d="M 50 14 C 70 14 86 28 86 50 C 86 64 78 70 74 65 C 70 60 62 68 56 62 C 50 56 42 66 36 60 C 30 54 24 62 20 54 C 14 46 14 36 22 24 C 28 14 38 14 50 14 Z" fill="#EC4899"/>
            <!-- Donut Hole -->
            <circle cx="50" cy="50" r="14" fill="#F8FAFC" stroke="#D97706" stroke-width="2"/>
            <!-- Sprinkles -->
            <rect x="32" y="24" width="7" height="3.5" rx="1.7" fill="#38BDF8" transform="rotate(25 32 24)"/>
            <rect x="64" y="28" width="7" height="3.5" rx="1.7" fill="#FACC15" transform="rotate(-30 64 28)"/>
            <rect x="42" y="32" width="7" height="3.5" rx="1.7" fill="#4ADE80" transform="rotate(70 42 32)"/>
            <rect x="70" y="48" width="7" height="3.5" rx="1.7" fill="#A855F7" transform="rotate(10 70 48)"/>
            <rect x="26" y="44" width="7" height="3.5" rx="1.7" fill="#FACC15" transform="rotate(-45 26 44)"/>
          </svg>
        `;
        break;

      case FoodType.STRAWBERRY:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="berryGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#F43F5E" />
                <stop offset="100%" stop-color="#BE123C" />
              </linearGradient>
            </defs>
            <!-- Berry Body -->
            <path d="M 50 88 C 20 66 16 35 32 24 C 42 18 58 18 68 24 C 84 35 80 66 50 88 Z" fill="url(#berryGrad)" stroke="#9F1239" stroke-width="2.5"/>
            <!-- Yellow Seeds -->
            <circle cx="36" cy="38" r="2" fill="#FEF08A"/>
            <circle cx="50" cy="34" r="2" fill="#FEF08A"/>
            <circle cx="64" cy="38" r="2" fill="#FEF08A"/>
            <circle cx="42" cy="50" r="2" fill="#FEF08A"/>
            <circle cx="58" cy="50" r="2" fill="#FEF08A"/>
            <circle cx="50" cy="65" r="2" fill="#FEF08A"/>
            <circle cx="36" cy="62" r="2" fill="#FEF08A"/>
            <circle cx="64" cy="62" r="2" fill="#FEF08A"/>
            <!-- Green Leaves -->
            <path d="M 50 14 C 48 22 38 26 30 24 C 38 28 42 34 44 38 C 46 30 54 30 56 38 C 58 34 62 28 70 24 C 62 26 52 22 50 14 Z" fill="#16A34A" stroke="#14532D" stroke-width="2"/>
          </svg>
        `;
        break;

      case FoodType.CAKE:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cakeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#FB7185" />
                <stop offset="100%" stop-color="#E11D48" />
              </linearGradient>
            </defs>
            <!-- Cake Body -->
            <path d="M 15 65 L 75 82 L 85 45 L 25 28 Z" fill="url(#cakeGrad)" stroke="#BE123C" stroke-width="2.5"/>
            <!-- Cream Layers -->
            <path d="M 18 55 L 77 72" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
            <path d="M 22 42 L 81 59" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round"/>
            <!-- Top Frosting -->
            <path d="M 25 28 L 85 45 L 65 24 L 15 20 Z" fill="#FFF1F2" stroke="#E2E8F0" stroke-width="1.5"/>
            <!-- Cherry on Top -->
            <circle cx="45" cy="18" r="7.5" fill="#E11D48" stroke="#9F1239" stroke-width="1.5"/>
            <path d="M 45 12 Q 52 4 58 6" stroke="#16A34A" stroke-width="2.5" fill="none"/>
          </svg>
        `;
        break;

      case FoodType.FRIES:
        svgBody = `
          <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <!-- Golden Fries Sticks -->
            <rect x="28" y="16" width="7.5" height="34" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" transform="rotate(-10 28 16)"/>
            <rect x="38" y="12" width="7.5" height="38" rx="2" fill="#FACC15" stroke="#D97706" stroke-width="1.5" transform="rotate(-3 38 12)"/>
            <rect x="48" y="10" width="7.5" height="40" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" transform="rotate(4 48 10)"/>
            <rect x="58" y="14" width="7.5" height="36" rx="2" fill="#FACC15" stroke="#D97706" stroke-width="1.5" transform="rotate(12 58 14)"/>
            <rect x="66" y="20" width="7.5" height="30" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1.5" transform="rotate(20 66 20)"/>
            <!-- Red Carton -->
            <path d="M 24 45 L 76 45 L 70 88 L 30 88 Z" fill="#EF4444" stroke="#B91C1C" stroke-width="2.5"/>
            <path d="M 24 45 Q 50 55 76 45" fill="#DC2626"/>
            <!-- Golden Logo Arc -->
            <circle cx="50" cy="68" r="9" fill="#FDE047"/>
            <text x="50" y="73" font-size="12" font-weight="900" fill="#DC2626" text-anchor="middle" font-family="Arial, sans-serif">M</text>
          </svg>
        `;
        break;

      default:
        svgBody = `<circle cx="50" cy="50" r="30" fill="#F59E0B"/>`;
        break;
    }

    let overlay = '';
    if (specialType === SpecialType.STRIPED_HORIZONTAL) {
      overlay = `<div style="position: absolute; width: 100%; height: 5px; background: #38BDF8; top: 50%; transform: translateY(-50%); box-shadow: 0 0 6px #FFFFFF; border-radius: 2px;"></div>`;
    } else if (specialType === SpecialType.STRIPED_VERTICAL) {
      overlay = `<div style="position: absolute; height: 100%; width: 5px; background: #38BDF8; left: 50%; transform: translateX(-50%); box-shadow: 0 0 6px #FFFFFF; border-radius: 2px;"></div>`;
    }

    return `
      <div class="food-svg-wrap" style="position: relative;">
        ${svgBody}
        ${overlay}
      </div>
    `;
  }
}

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
    } catch (e) {}
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
    osc.frequency.exponentialRampToValueAtTime(580, now + 0.08);
    g.gain.setValueAtTime(0.3, now);
    g.gain.exponentialRampToValueAtTime(0.01, now + 0.08);
    osc.connect(g); g.connect(this.sfxGain);
    osc.start(now); osc.stop(now + 0.09);
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

  static spawnFoodCrumbs(x, y, count = 18) {
    const colors = ['#F59E0B', '#DC2626', '#22C55E', '#EC4899', '#38BDF8', '#FACC15'];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5.5;
      this.particles.push({
        x, y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 2.0,
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

// 50 Levels Configuration
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

// Match-3 Core Game Loop & Board Engine
export class Match3GameEngine {
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

    this.initBoardWithoutMatches();
  }

  // Populate board preventing immediate 3-in-a-row matches on start
  initBoardWithoutMatches() {
    const foods = [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES];
    this.grid = [];

    for (let r = 0; r < this.rows; r++) {
      const row = [];
      for (let c = 0; c < this.cols; c++) {
        const forbidden = new Set();
        if (c >= 2) {
          const l1 = row[c - 1]?.foodType;
          const l2 = row[c - 2]?.foodType;
          if (l1 && l1 === l2) forbidden.add(l1);
        }
        if (r >= 2) {
          const u1 = this.grid[r - 1][c]?.foodType;
          const u2 = this.grid[r - 2][c]?.foodType;
          if (u1 && u1 === u2) forbidden.add(u1);
        }

        const available = foods.filter(f => !forbidden.has(f));
        const chosen = available.length > 0
          ? available[Math.floor(Math.random() * available.length)]
          : foods[Math.floor(Math.random() * foods.length)];

        row.push({
          row: r,
          col: c,
          foodType: chosen,
          specialType: SpecialType.NONE
        });
      }
      this.grid.push(row);
    }
  }

  findLineMatches() {
    const matches = [];

    // Horizontal 3+ matches
    for (let r = 0; r < this.rows; r++) {
      let count = 1;
      for (let c = 1; c < this.cols; c++) {
        if (this.grid[r][c].foodType && this.grid[r][c].foodType === this.grid[r][c - 1].foodType) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = c - count; i < c; i++) matches.push({ r, c: i });
          }
          count = 1;
        }
      }
      if (count >= 3) {
        for (let i = this.cols - count; i < this.cols; i++) matches.push({ r, c: i });
      }
    }

    // Vertical 3+ matches
    for (let c = 0; c < this.cols; c++) {
      let count = 1;
      for (let r = 1; r < this.rows; r++) {
        if (this.grid[r][c].foodType && this.grid[r][c].foodType === this.grid[r - 1][c].foodType) {
          count++;
        } else {
          if (count >= 3) {
            for (let i = r - count; i < r; i++) matches.push({ r: i, c });
          }
          count = 1;
        }
      }
      if (count >= 3) {
        for (let i = this.rows - count; i < this.rows; i++) matches.push({ r: i, c });
      }
    }

    // Deduplicate
    const map = new Map();
    matches.forEach(m => map.set(`${m.r},${m.c}`, m));
    return Array.from(map.values());
  }

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

  async handleSwap(posA, posB, renderCallback) {
    if (this.isProcessing) return;
    this.isProcessing = true;

    SoundFXEngine.playSwap();

    // Perform swap
    const temp = this.grid[posA.row][posA.col].foodType;
    this.grid[posA.row][posA.col].foodType = this.grid[posB.row][posB.col].foodType;
    this.grid[posB.row][posB.col].foodType = temp;
    renderCallback();

    // Check matches
    const matches = this.findLineMatches();

    if (matches.length === 0) {
      // Revert invalid swap
      await new Promise(res => setTimeout(res, 220));
      SoundFXEngine.playInvalid();
      const rev = this.grid[posA.row][posA.col].foodType;
      this.grid[posA.row][posA.col].foodType = this.grid[posB.row][posB.col].foodType;
      this.grid[posB.row][posB.col].foodType = rev;
      renderCallback();
      this.isProcessing = false;
      return;
    }

    this.movesRemaining--;
    await this.resolveMatchesAndCascades(matches, renderCallback);
    this.isProcessing = false;
  }

  async handleGroupMerge(group, renderCallback) {
    if (this.isProcessing || group.length < 3) return;
    this.isProcessing = true;

    this.movesRemaining--;
    await this.resolveMatchesAndCascades(group, renderCallback);
    this.isProcessing = false;
  }

  async resolveMatchesAndCascades(initialMatches, renderCallback) {
    let currentMatches = initialMatches;
    let cascadeIndex = 1;

    while (currentMatches.length >= 3 && cascadeIndex <= 6) {
      SoundFXEngine.playMatch(cascadeIndex);
      const points = currentMatches.length * 60 * cascadeIndex;
      this.score += points;

      // Particles & clear
      currentMatches.forEach(pos => {
        const cellEl = document.querySelector(`.grid-cell[data-r="${pos.r}"][data-c="${pos.c}"]`);
        if (cellEl) {
          const rect = cellEl.getBoundingClientRect();
          ParticleEmitter.spawnFoodCrumbs(rect.left + rect.width / 2, rect.top + rect.height / 2, 16);
        }
        this.grid[pos.r][pos.c].foodType = null;
      });

      renderCallback();
      await new Promise(res => setTimeout(res, 220));

      // Gravity drop
      const foods = [FoodType.PIZZA, FoodType.BURGER, FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.FRIES];
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

        // Fill from top
        for (let r = 0; r < this.rows; r++) {
          if (this.grid[r][c].foodType === null) {
            this.grid[r][c].foodType = foods[Math.floor(Math.random() * foods.length)];
          }
        }
      }

      renderCallback();
      await new Promise(res => setTimeout(res, 220));

      cascadeIndex++;
      currentMatches = this.findLineMatches();
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
  }

  handleCellClick(r, c, renderCallback) {
    if (this.isProcessing) return;

    // Direct tap on group of 3+
    const group = this.getConnectedGroup(r, c);
    if (group.length >= 3) {
      this.selected = null;
      this.handleGroupMerge(group, renderCallback);
      return;
    }

    // Swap selection
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
        this.handleSwap(first, { row: r, col: c }, renderCallback);
      } else {
        SoundFXEngine.playClick();
        this.selected = { row: r, col: c };
        renderCallback();
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
            <span class="brand-title">SnackPop Saga</span>
          </div>
          <div class="map-stats-tray">
            <div class="stat-pill"><span class="pill-icon">❤️</span> 5/5</div>
            <div class="stat-pill"><span class="pill-icon">🪙</span> ${data.coins}</div>
            <div class="stat-pill"><span class="pill-icon">⭐</span> ${totalStars}/150</div>
          </div>
        </div>

        <div class="instruction-banner">
          ✨ <strong>HOW TO PLAY:</strong> Swap adjacent foods or tap <strong>3 or more identical items</strong> to merge and pop them!
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
    const game = new Match3GameEngine(
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

          <div class="board-hint-tip">
            💡 Swap adjacent items or tap <strong>3+ identical foods</strong> to merge & pop!
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
