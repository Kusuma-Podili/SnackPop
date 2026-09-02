/**
 * SnackPop Procedural Web Audio Engine
 * 
 * Generates rich, studio-grade procedural sound effects dynamically via Web Audio API.
 * Guarantees zero external asset latency, zero 404 broken link errors, and dynamic pitch scaling.
 */

export class SoundFXEngine {
  private static audioCtx: AudioContext | null = null;
  private static masterGain: GainNode | null = null;
  private static sfxGain: GainNode | null = null;
  private static isMuted: boolean = false;
  private static volume: number = 0.8;

  // Harmonic pentatonic pitch scale for cascading match combos (C4 up to C6)
  private static readonly CASCADE_FREQUENCIES = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00, // A5
    1046.50 // C6
  ];

  public static init(): void {
    if (this.audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);

      this.sfxGain = this.audioCtx.createGain();
      this.sfxGain.gain.setValueAtTime(1.0, this.audioCtx.currentTime);

      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Web Audio API not supported in this environment.', e);
    }
  }

  public static resume(): void {
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  public static setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.audioCtx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
  }

  public static setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(muted ? 0 : this.volume, this.audioCtx.currentTime);
    }
  }

  /**
   * Sound on swapping two adjacent food tiles.
   */
  public static playSwap(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(550, now + 0.08);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.09);
  }

  /**
   * Sound on invalid swap (gentle rejection thud).
   */
  public static playInvalidSwap(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    const now = ctx.currentTime;
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Sound for match clears, scaling in pitch with consecutive cascade combos.
   */
  public static playMatch(cascadeIndex: number = 1): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const idx = Math.min(cascadeIndex - 1, this.CASCADE_FREQUENCIES.length - 1);
    const baseFreq = this.CASCADE_FREQUENCIES[Math.max(0, idx)];

    // Resonant bell pop
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    const now = ctx.currentTime;
    osc1.frequency.setValueAtTime(baseFreq, now);
    osc2.frequency.setValueAtTime(baseFreq * 2, now); // Octave overtone

    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.sfxGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.3);
    osc2.stop(now + 0.3);
  }

  /**
   * Sound on activating a Striped Food laser beam.
   */
  public static playStripedBeam(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.25);

    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

    // Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, now);
    filter.frequency.linearRampToValueAtTime(400, now + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.26);
  }

  /**
   * Sound on Sizzle Bomb explosion (sub-bass boom + sizzle noise).
   */
  public static playBombExplosion(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;

    // Sub-bass thump
    const subOsc = ctx.createOscillator();
    const subGain = ctx.createGain();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(140, now);
    subOsc.frequency.exponentialRampToValueAtTime(35, now + 0.35);

    subGain.gain.setValueAtTime(0.6, now);
    subGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    subOsc.connect(subGain);
    subGain.connect(this.sfxGain);

    subOsc.start(now);
    subOsc.stop(now + 0.36);

    // Noise burst
    const bufferSize = ctx.sampleRate * 0.2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.3));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;
    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.4, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

    noise.connect(noiseGain);
    noiseGain.connect(this.sfxGain);
    noise.start(now);
  }

  /**
   * Sound on Rainbow Chef Hat sparkling shimmer.
   */
  public static playRainbowShimmer(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const baseFreqs = [523.25, 659.25, 783.99, 1046.50, 1318.51];

    baseFreqs.forEach((freq, i) => {
      const now = ctx.currentTime + i * 0.05;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(now);
      osc.stop(now + 0.26);
    });
  }

  /**
   * Sound for breaking frosting / jelly blocker.
   */
  public static playFrostingBreak(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(900, now + 0.12);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.12);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.13);
  }

  /**
   * Triumphant fanfare upon completing a level with stars.
   */
  public static playVictoryFanfare(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const notes = [
      { f: 523.25, d: 0.15, offset: 0.0 },   // C5
      { f: 523.25, d: 0.15, offset: 0.15 },  // C5
      { f: 523.25, d: 0.15, offset: 0.30 },  // C5
      { f: 659.25, d: 0.45, offset: 0.45 },  // E5
      { f: 587.33, d: 0.20, offset: 0.90 },  // D5
      { f: 783.99, d: 0.60, offset: 1.10 }   // G5 (Long resolve)
    ];

    const ctx = this.audioCtx;
    notes.forEach(note => {
      const startTime = ctx.currentTime + note.offset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, startTime);

      gain.gain.setValueAtTime(0.35, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(startTime);
      osc.stop(startTime + note.d + 0.05);
    });
  }

  /**
   * Soft defeat chime on running out of moves.
   */
  public static playDefeat(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const notes = [
      { f: 392.00, d: 0.25, offset: 0.0 },  // G4
      { f: 369.99, d: 0.25, offset: 0.25 }, // F#4
      { f: 349.23, d: 0.25, offset: 0.50 }, // F4
      { f: 329.63, d: 0.50, offset: 0.75 }  // E4
    ];

    const ctx = this.audioCtx;
    notes.forEach(note => {
      const startTime = ctx.currentTime + note.offset;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(note.f, startTime);

      gain.gain.setValueAtTime(0.3, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + note.d);

      osc.connect(gain);
      gain.connect(this.sfxGain!);

      osc.start(startTime);
      osc.stop(startTime + note.d + 0.05);
    });
  }

  /**
   * Button click / UI tap sound.
   */
  public static playClick(): void {
    this.init();
    this.resume();
    if (!this.audioCtx || !this.sfxGain || this.isMuted) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(650, now);
    osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.04);

    osc.connect(gain);
    gain.connect(this.sfxGain);

    osc.start(now);
    osc.stop(now + 0.05);
  }
}
