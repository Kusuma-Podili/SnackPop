/**
 * SnackPop Procedural Music Generator
 * 
 * Generates an upbeat, cheerful culinary background rhythm using synchronized Web Audio oscillators.
 */

export class MusicEngine {
  private static audioCtx: AudioContext | null = null;
  private static musicGain: GainNode | null = null;
  private static isPlaying: boolean = false;
  private static timerId: number | null = null;
  private static currentBeat: number = 0;
  private static isMuted: boolean = false;
  private static volume: number = 0.4;

  // Marimba scale notes (pentatonic C major)
  private static readonly MELODY_NOTES = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    392.00, // G4
    329.63  // E4
  ];

  private static readonly BASS_NOTES = [
    130.81, // C3
    130.81, // C3
    164.81, // E3
    174.61, // F3
    196.00, // G3
    196.00, // G3
    174.61, // F3
    164.81  // E3
  ];

  public static init(): void {
    if (this.audioCtx) return;
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioCtx = new AudioContextClass();

      this.musicGain = this.audioCtx.createGain();
      this.musicGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.audioCtx.currentTime);
      this.musicGain.connect(this.audioCtx.destination);
    } catch (e) {
      console.warn('Web Audio Music Generator not initialized', e);
    }
  }

  public static start(): void {
    if (this.isPlaying) return;
    this.init();
    if (!this.audioCtx) return;

    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }

    this.isPlaying = true;
    this.currentBeat = 0;
    this.scheduleBeat();
  }

  public static stop(): void {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public static setVolume(vol: number): void {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.musicGain && this.audioCtx && !this.isMuted) {
      this.musicGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
  }

  public static setMuted(muted: boolean): void {
    this.isMuted = muted;
    if (this.musicGain && this.audioCtx) {
      this.musicGain.gain.setValueAtTime(muted ? 0 : this.volume, this.audioCtx.currentTime);
    }
  }

  private static scheduleBeat(): void {
    if (!this.isPlaying || !this.audioCtx || !this.musicGain) return;

    const ctx = this.audioCtx;
    const now = ctx.currentTime;
    const beatIndex = this.currentBeat % 8;

    // Melody note (Marimba plink)
    if (Math.random() > 0.15) {
      const melFreq = this.MELODY_NOTES[beatIndex];
      const melOsc = ctx.createOscillator();
      const melGain = ctx.createGain();

      melOsc.type = 'triangle';
      melOsc.frequency.setValueAtTime(melFreq, now);

      melGain.gain.setValueAtTime(0.18, now);
      melGain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      melOsc.connect(melGain);
      melGain.connect(this.musicGain);

      melOsc.start(now);
      melOsc.stop(now + 0.23);
    }

    // Bass note (warm sine bump)
    if (beatIndex % 2 === 0) {
      const bassFreq = this.BASS_NOTES[beatIndex];
      const bassOsc = ctx.createOscillator();
      const bassGain = ctx.createGain();

      bassOsc.type = 'sine';
      bassOsc.frequency.setValueAtTime(bassFreq, now);

      bassGain.gain.setValueAtTime(0.25, now);
      bassGain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      bassOsc.connect(bassGain);
      bassGain.connect(this.musicGain);

      bassOsc.start(now);
      bassOsc.stop(now + 0.36);
    }

    // Soft shaker hat
    const hatOsc = ctx.createOscillator();
    const hatGain = ctx.createGain();
    hatOsc.type = 'sine';
    hatOsc.frequency.setValueAtTime(8000, now);
    hatGain.gain.setValueAtTime(0.03, now);
    hatGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
    hatOsc.connect(hatGain);
    hatGain.connect(this.musicGain);
    hatOsc.start(now);
    hatOsc.stop(now + 0.06);

    this.currentBeat++;
    const tempoMs = 240; // ~125 BPM 8th-note pace
    this.timerId = window.setTimeout(() => this.scheduleBeat(), tempoMs);
  }
}
