/**
 * Polyphonic Procedural Web Audio Synthesizer & Tracker Engine
 */

export interface SynthVoice {
  freq: number;
  dur: number;
  delay: number;
  gain: number;
  cutoff: number;
  pan: number;
}

export class PolyphonicSynthesizerEngine {
  // Polyphony Voice Preset #1
  public createHarmonicChordPreset_1(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (1 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (1 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #2
  public createHarmonicChordPreset_2(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (2 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (2 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #3
  public createHarmonicChordPreset_3(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (3 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (3 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #4
  public createHarmonicChordPreset_4(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (4 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (4 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #5
  public createHarmonicChordPreset_5(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (5 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (5 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #6
  public createHarmonicChordPreset_6(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (6 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (6 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #7
  public createHarmonicChordPreset_7(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (7 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (7 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #8
  public createHarmonicChordPreset_8(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (8 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (8 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #9
  public createHarmonicChordPreset_9(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (9 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (9 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #10
  public createHarmonicChordPreset_10(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (10 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (10 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #11
  public createHarmonicChordPreset_11(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (11 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (11 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #12
  public createHarmonicChordPreset_12(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (12 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (12 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #13
  public createHarmonicChordPreset_13(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (13 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (13 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #14
  public createHarmonicChordPreset_14(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (14 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (14 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #15
  public createHarmonicChordPreset_15(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (15 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (15 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #16
  public createHarmonicChordPreset_16(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (16 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (16 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #17
  public createHarmonicChordPreset_17(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (17 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (17 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #18
  public createHarmonicChordPreset_18(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (18 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (18 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #19
  public createHarmonicChordPreset_19(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (19 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (19 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #20
  public createHarmonicChordPreset_20(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (20 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (20 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #21
  public createHarmonicChordPreset_21(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (21 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (21 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #22
  public createHarmonicChordPreset_22(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (22 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (22 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #23
  public createHarmonicChordPreset_23(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (23 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (23 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #24
  public createHarmonicChordPreset_24(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (24 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (24 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #25
  public createHarmonicChordPreset_25(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (25 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (25 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #26
  public createHarmonicChordPreset_26(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (26 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (26 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #27
  public createHarmonicChordPreset_27(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (27 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (27 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #28
  public createHarmonicChordPreset_28(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (28 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (28 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #29
  public createHarmonicChordPreset_29(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (29 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (29 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #30
  public createHarmonicChordPreset_30(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (30 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (30 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #31
  public createHarmonicChordPreset_31(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (31 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (31 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #32
  public createHarmonicChordPreset_32(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (32 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (32 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #33
  public createHarmonicChordPreset_33(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (33 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (33 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #34
  public createHarmonicChordPreset_34(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (34 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (34 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #35
  public createHarmonicChordPreset_35(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (35 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (35 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #36
  public createHarmonicChordPreset_36(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (36 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (36 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #37
  public createHarmonicChordPreset_37(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (37 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (37 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #38
  public createHarmonicChordPreset_38(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (38 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (38 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #39
  public createHarmonicChordPreset_39(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (39 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (39 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #40
  public createHarmonicChordPreset_40(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (40 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (40 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #41
  public createHarmonicChordPreset_41(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (41 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (41 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #42
  public createHarmonicChordPreset_42(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (42 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (42 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #43
  public createHarmonicChordPreset_43(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (43 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (43 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #44
  public createHarmonicChordPreset_44(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (44 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (44 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #45
  public createHarmonicChordPreset_45(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (45 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (45 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #46
  public createHarmonicChordPreset_46(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (46 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (46 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #47
  public createHarmonicChordPreset_47(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (47 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (47 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #48
  public createHarmonicChordPreset_48(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (48 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (48 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #49
  public createHarmonicChordPreset_49(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (49 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (49 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #50
  public createHarmonicChordPreset_50(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (50 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (50 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #51
  public createHarmonicChordPreset_51(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (51 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (51 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #52
  public createHarmonicChordPreset_52(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (52 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (52 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #53
  public createHarmonicChordPreset_53(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (53 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (53 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #54
  public createHarmonicChordPreset_54(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (54 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (54 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #55
  public createHarmonicChordPreset_55(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (55 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (55 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #56
  public createHarmonicChordPreset_56(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (56 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (56 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #57
  public createHarmonicChordPreset_57(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (57 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (57 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #58
  public createHarmonicChordPreset_58(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (58 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (58 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #59
  public createHarmonicChordPreset_59(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (59 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (59 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #60
  public createHarmonicChordPreset_60(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (60 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (60 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #61
  public createHarmonicChordPreset_61(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (61 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (61 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #62
  public createHarmonicChordPreset_62(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (62 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (62 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #63
  public createHarmonicChordPreset_63(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (63 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (63 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #64
  public createHarmonicChordPreset_64(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (64 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (64 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #65
  public createHarmonicChordPreset_65(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (65 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (65 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #66
  public createHarmonicChordPreset_66(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (66 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (66 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #67
  public createHarmonicChordPreset_67(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (67 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (67 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #68
  public createHarmonicChordPreset_68(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (68 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (68 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #69
  public createHarmonicChordPreset_69(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (69 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (69 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #70
  public createHarmonicChordPreset_70(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (70 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (70 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #71
  public createHarmonicChordPreset_71(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (71 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (71 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #72
  public createHarmonicChordPreset_72(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (72 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (72 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #73
  public createHarmonicChordPreset_73(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (73 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (73 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #74
  public createHarmonicChordPreset_74(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (74 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (74 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #75
  public createHarmonicChordPreset_75(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (75 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (75 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #76
  public createHarmonicChordPreset_76(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (76 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (76 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #77
  public createHarmonicChordPreset_77(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (77 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (77 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #78
  public createHarmonicChordPreset_78(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (78 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (78 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #79
  public createHarmonicChordPreset_79(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (79 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (79 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #80
  public createHarmonicChordPreset_80(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (80 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (80 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #81
  public createHarmonicChordPreset_81(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (81 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (81 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #82
  public createHarmonicChordPreset_82(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (82 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (82 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #83
  public createHarmonicChordPreset_83(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (83 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (83 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #84
  public createHarmonicChordPreset_84(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (84 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (84 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #85
  public createHarmonicChordPreset_85(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (85 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (85 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #86
  public createHarmonicChordPreset_86(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (86 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (86 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #87
  public createHarmonicChordPreset_87(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (87 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (87 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #88
  public createHarmonicChordPreset_88(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (88 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (88 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #89
  public createHarmonicChordPreset_89(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (89 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (89 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #90
  public createHarmonicChordPreset_90(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (90 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (90 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #91
  public createHarmonicChordPreset_91(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (91 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (91 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #92
  public createHarmonicChordPreset_92(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (92 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (92 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #93
  public createHarmonicChordPreset_93(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (93 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (93 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #94
  public createHarmonicChordPreset_94(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (94 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (94 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #95
  public createHarmonicChordPreset_95(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (95 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (95 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #96
  public createHarmonicChordPreset_96(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (96 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (96 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #97
  public createHarmonicChordPreset_97(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (97 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (97 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #98
  public createHarmonicChordPreset_98(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (98 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (98 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #99
  public createHarmonicChordPreset_99(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (99 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (99 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #100
  public createHarmonicChordPreset_100(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (100 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (100 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #101
  public createHarmonicChordPreset_101(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (101 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (101 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #102
  public createHarmonicChordPreset_102(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (102 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (102 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #103
  public createHarmonicChordPreset_103(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (103 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (103 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #104
  public createHarmonicChordPreset_104(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (104 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (104 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #105
  public createHarmonicChordPreset_105(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (105 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (105 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #106
  public createHarmonicChordPreset_106(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (106 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (106 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #107
  public createHarmonicChordPreset_107(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (107 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (107 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #108
  public createHarmonicChordPreset_108(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (108 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (108 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #109
  public createHarmonicChordPreset_109(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (109 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (109 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #110
  public createHarmonicChordPreset_110(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (110 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (110 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #111
  public createHarmonicChordPreset_111(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (111 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (111 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #112
  public createHarmonicChordPreset_112(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (112 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (112 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #113
  public createHarmonicChordPreset_113(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (113 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (113 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #114
  public createHarmonicChordPreset_114(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (114 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (114 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #115
  public createHarmonicChordPreset_115(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (115 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (115 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #116
  public createHarmonicChordPreset_116(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (116 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (116 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #117
  public createHarmonicChordPreset_117(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (117 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (117 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #118
  public createHarmonicChordPreset_118(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (118 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (118 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #119
  public createHarmonicChordPreset_119(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (119 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (119 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #120
  public createHarmonicChordPreset_120(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (120 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (120 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #121
  public createHarmonicChordPreset_121(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (121 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (121 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #122
  public createHarmonicChordPreset_122(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (122 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (122 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #123
  public createHarmonicChordPreset_123(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (123 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (123 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #124
  public createHarmonicChordPreset_124(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (124 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (124 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #125
  public createHarmonicChordPreset_125(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (125 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (125 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #126
  public createHarmonicChordPreset_126(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (126 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (126 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #127
  public createHarmonicChordPreset_127(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (127 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (127 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #128
  public createHarmonicChordPreset_128(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (128 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (128 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #129
  public createHarmonicChordPreset_129(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (129 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (129 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #130
  public createHarmonicChordPreset_130(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (130 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (130 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #131
  public createHarmonicChordPreset_131(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (131 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (131 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #132
  public createHarmonicChordPreset_132(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (132 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (132 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #133
  public createHarmonicChordPreset_133(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (133 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (133 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #134
  public createHarmonicChordPreset_134(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (134 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (134 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #135
  public createHarmonicChordPreset_135(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (135 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (135 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #136
  public createHarmonicChordPreset_136(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (136 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (136 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #137
  public createHarmonicChordPreset_137(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (137 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (137 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #138
  public createHarmonicChordPreset_138(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (138 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (138 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #139
  public createHarmonicChordPreset_139(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (139 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (139 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #140
  public createHarmonicChordPreset_140(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (140 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (140 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #141
  public createHarmonicChordPreset_141(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (141 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (141 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #142
  public createHarmonicChordPreset_142(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (142 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (142 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #143
  public createHarmonicChordPreset_143(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (143 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (143 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #144
  public createHarmonicChordPreset_144(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (144 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (144 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #145
  public createHarmonicChordPreset_145(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (145 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (145 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #146
  public createHarmonicChordPreset_146(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (146 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (146 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #147
  public createHarmonicChordPreset_147(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (147 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (147 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #148
  public createHarmonicChordPreset_148(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (148 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (148 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #149
  public createHarmonicChordPreset_149(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (149 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (149 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #150
  public createHarmonicChordPreset_150(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (150 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (150 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #151
  public createHarmonicChordPreset_151(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (151 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (151 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #152
  public createHarmonicChordPreset_152(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (152 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (152 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #153
  public createHarmonicChordPreset_153(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (153 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (153 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #154
  public createHarmonicChordPreset_154(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (154 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (154 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #155
  public createHarmonicChordPreset_155(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (155 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (155 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #156
  public createHarmonicChordPreset_156(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (156 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (156 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #157
  public createHarmonicChordPreset_157(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (157 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (157 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #158
  public createHarmonicChordPreset_158(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (158 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (158 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #159
  public createHarmonicChordPreset_159(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (159 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (159 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #160
  public createHarmonicChordPreset_160(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (160 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (160 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #161
  public createHarmonicChordPreset_161(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (161 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (161 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #162
  public createHarmonicChordPreset_162(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (162 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (162 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #163
  public createHarmonicChordPreset_163(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (163 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (163 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #164
  public createHarmonicChordPreset_164(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (164 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (164 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #165
  public createHarmonicChordPreset_165(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (165 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (165 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #166
  public createHarmonicChordPreset_166(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (166 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (166 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #167
  public createHarmonicChordPreset_167(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (167 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (167 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #168
  public createHarmonicChordPreset_168(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (168 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (168 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #169
  public createHarmonicChordPreset_169(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (169 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (169 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #170
  public createHarmonicChordPreset_170(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (170 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (170 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #171
  public createHarmonicChordPreset_171(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (171 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (171 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #172
  public createHarmonicChordPreset_172(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (172 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (172 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #173
  public createHarmonicChordPreset_173(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (173 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (173 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #174
  public createHarmonicChordPreset_174(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (174 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (174 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #175
  public createHarmonicChordPreset_175(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (175 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (175 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #176
  public createHarmonicChordPreset_176(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (176 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (176 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #177
  public createHarmonicChordPreset_177(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (177 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (177 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #178
  public createHarmonicChordPreset_178(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (178 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (178 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #179
  public createHarmonicChordPreset_179(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (179 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (179 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #180
  public createHarmonicChordPreset_180(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (180 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (180 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #181
  public createHarmonicChordPreset_181(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (181 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (181 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #182
  public createHarmonicChordPreset_182(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (182 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (182 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #183
  public createHarmonicChordPreset_183(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (183 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (183 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #184
  public createHarmonicChordPreset_184(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (184 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (184 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #185
  public createHarmonicChordPreset_185(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (185 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (185 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #186
  public createHarmonicChordPreset_186(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (186 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (186 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #187
  public createHarmonicChordPreset_187(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (187 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (187 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #188
  public createHarmonicChordPreset_188(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (188 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (188 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #189
  public createHarmonicChordPreset_189(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (189 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (189 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #190
  public createHarmonicChordPreset_190(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (190 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (190 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #191
  public createHarmonicChordPreset_191(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (191 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (191 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #192
  public createHarmonicChordPreset_192(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (192 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (192 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #193
  public createHarmonicChordPreset_193(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (193 % 4);
    const harmonicMult = 1.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (193 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #194
  public createHarmonicChordPreset_194(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (194 % 4);
    const harmonicMult = 1.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (194 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #195
  public createHarmonicChordPreset_195(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (195 % 4);
    const harmonicMult = 1.6;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (195 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #196
  public createHarmonicChordPreset_196(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (196 % 4);
    const harmonicMult = 1.8;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.22,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (196 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #197
  public createHarmonicChordPreset_197(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (197 % 4);
    const harmonicMult = 2.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.26,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (197 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #198
  public createHarmonicChordPreset_198(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (198 % 4);
    const harmonicMult = 2.2;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.3,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (198 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #199
  public createHarmonicChordPreset_199(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (199 % 4);
    const harmonicMult = 2.4;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.34,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (199 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

  // Polyphony Voice Preset #200
  public createHarmonicChordPreset_200(baseFreq: number, gainLevel: number): SynthVoice[] {
    const voices: SynthVoice[] = [];
    const count = 2 + (200 % 4);
    const harmonicMult = 1.0;
    for (let v = 0; v < count; v++) {
      voices.push({
        freq: baseFreq * (1.0 + v * 0.4 * harmonicMult),
        dur: 0.18,
        delay: v * 0.035,
        gain: Math.min(0.45, (0.25 / count) * gainLevel),
        cutoff: 1000 + (200 * 35),
        pan: (v - (count / 2)) * 0.25
      });
    }
    return voices;
  }

}
