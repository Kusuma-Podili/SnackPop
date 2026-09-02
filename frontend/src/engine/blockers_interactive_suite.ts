/**
 * Interactive Blocker State Machine Suite for 24 Obstacle Types
 */

export interface BlockerUnit {
  id: string;
  type: string;
  durability: number;
  maxDurability: number;
  row: number;
  col: number;
  canSpread: boolean;
  canFall: boolean;
}

export class BlockerInteractiveSuite {
  // Obstacle Degradation Model #1
  public degradeBlockerTier_1(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (1 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #2
  public degradeBlockerTier_2(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (2 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #3
  public degradeBlockerTier_3(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (3 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #4
  public degradeBlockerTier_4(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (4 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #5
  public degradeBlockerTier_5(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (5 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #6
  public degradeBlockerTier_6(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (6 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #7
  public degradeBlockerTier_7(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (7 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #8
  public degradeBlockerTier_8(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (8 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #9
  public degradeBlockerTier_9(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (9 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #10
  public degradeBlockerTier_10(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (10 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #11
  public degradeBlockerTier_11(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (11 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #12
  public degradeBlockerTier_12(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (12 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #13
  public degradeBlockerTier_13(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (13 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #14
  public degradeBlockerTier_14(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (14 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #15
  public degradeBlockerTier_15(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (15 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #16
  public degradeBlockerTier_16(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (16 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #17
  public degradeBlockerTier_17(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (17 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #18
  public degradeBlockerTier_18(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (18 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #19
  public degradeBlockerTier_19(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (19 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #20
  public degradeBlockerTier_20(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (20 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #21
  public degradeBlockerTier_21(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (21 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #22
  public degradeBlockerTier_22(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (22 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #23
  public degradeBlockerTier_23(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (23 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #24
  public degradeBlockerTier_24(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (24 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #25
  public degradeBlockerTier_25(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (25 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #26
  public degradeBlockerTier_26(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (26 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #27
  public degradeBlockerTier_27(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (27 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #28
  public degradeBlockerTier_28(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (28 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #29
  public degradeBlockerTier_29(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (29 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #30
  public degradeBlockerTier_30(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (30 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #31
  public degradeBlockerTier_31(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (31 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #32
  public degradeBlockerTier_32(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (32 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #33
  public degradeBlockerTier_33(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (33 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #34
  public degradeBlockerTier_34(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (34 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #35
  public degradeBlockerTier_35(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (35 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #36
  public degradeBlockerTier_36(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (36 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #37
  public degradeBlockerTier_37(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (37 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #38
  public degradeBlockerTier_38(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (38 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #39
  public degradeBlockerTier_39(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (39 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #40
  public degradeBlockerTier_40(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (40 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #41
  public degradeBlockerTier_41(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (41 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #42
  public degradeBlockerTier_42(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (42 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #43
  public degradeBlockerTier_43(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (43 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #44
  public degradeBlockerTier_44(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (44 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #45
  public degradeBlockerTier_45(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (45 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #46
  public degradeBlockerTier_46(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (46 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #47
  public degradeBlockerTier_47(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (47 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #48
  public degradeBlockerTier_48(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (48 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #49
  public degradeBlockerTier_49(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (49 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #50
  public degradeBlockerTier_50(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (50 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #51
  public degradeBlockerTier_51(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (51 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #52
  public degradeBlockerTier_52(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (52 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #53
  public degradeBlockerTier_53(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (53 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #54
  public degradeBlockerTier_54(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (54 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #55
  public degradeBlockerTier_55(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (55 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #56
  public degradeBlockerTier_56(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (56 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #57
  public degradeBlockerTier_57(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (57 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #58
  public degradeBlockerTier_58(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (58 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #59
  public degradeBlockerTier_59(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (59 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #60
  public degradeBlockerTier_60(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (60 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #61
  public degradeBlockerTier_61(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (61 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #62
  public degradeBlockerTier_62(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (62 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #63
  public degradeBlockerTier_63(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (63 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #64
  public degradeBlockerTier_64(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (64 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #65
  public degradeBlockerTier_65(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (65 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #66
  public degradeBlockerTier_66(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (66 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #67
  public degradeBlockerTier_67(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (67 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #68
  public degradeBlockerTier_68(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (68 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #69
  public degradeBlockerTier_69(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (69 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #70
  public degradeBlockerTier_70(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (70 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #71
  public degradeBlockerTier_71(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (71 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #72
  public degradeBlockerTier_72(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (72 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #73
  public degradeBlockerTier_73(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (73 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #74
  public degradeBlockerTier_74(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (74 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #75
  public degradeBlockerTier_75(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (75 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #76
  public degradeBlockerTier_76(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (76 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #77
  public degradeBlockerTier_77(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (77 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #78
  public degradeBlockerTier_78(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (78 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #79
  public degradeBlockerTier_79(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (79 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #80
  public degradeBlockerTier_80(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (80 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #81
  public degradeBlockerTier_81(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (81 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #82
  public degradeBlockerTier_82(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (82 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #83
  public degradeBlockerTier_83(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (83 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #84
  public degradeBlockerTier_84(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (84 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #85
  public degradeBlockerTier_85(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (85 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #86
  public degradeBlockerTier_86(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (86 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #87
  public degradeBlockerTier_87(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (87 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #88
  public degradeBlockerTier_88(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (88 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #89
  public degradeBlockerTier_89(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (89 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #90
  public degradeBlockerTier_90(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (90 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #91
  public degradeBlockerTier_91(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (91 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #92
  public degradeBlockerTier_92(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (92 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #93
  public degradeBlockerTier_93(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (93 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #94
  public degradeBlockerTier_94(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (94 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #95
  public degradeBlockerTier_95(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (95 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #96
  public degradeBlockerTier_96(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (96 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #97
  public degradeBlockerTier_97(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (97 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #98
  public degradeBlockerTier_98(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (98 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #99
  public degradeBlockerTier_99(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (99 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #100
  public degradeBlockerTier_100(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (100 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #101
  public degradeBlockerTier_101(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (101 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #102
  public degradeBlockerTier_102(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (102 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #103
  public degradeBlockerTier_103(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (103 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #104
  public degradeBlockerTier_104(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (104 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #105
  public degradeBlockerTier_105(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (105 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #106
  public degradeBlockerTier_106(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (106 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #107
  public degradeBlockerTier_107(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (107 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #108
  public degradeBlockerTier_108(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (108 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #109
  public degradeBlockerTier_109(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (109 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #110
  public degradeBlockerTier_110(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (110 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #111
  public degradeBlockerTier_111(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (111 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #112
  public degradeBlockerTier_112(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (112 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #113
  public degradeBlockerTier_113(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (113 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #114
  public degradeBlockerTier_114(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (114 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #115
  public degradeBlockerTier_115(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (115 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #116
  public degradeBlockerTier_116(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (116 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #117
  public degradeBlockerTier_117(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (117 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #118
  public degradeBlockerTier_118(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (118 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #119
  public degradeBlockerTier_119(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (119 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #120
  public degradeBlockerTier_120(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (120 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #121
  public degradeBlockerTier_121(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (121 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #122
  public degradeBlockerTier_122(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (122 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #123
  public degradeBlockerTier_123(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (123 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #124
  public degradeBlockerTier_124(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (124 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #125
  public degradeBlockerTier_125(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (125 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #126
  public degradeBlockerTier_126(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (126 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #127
  public degradeBlockerTier_127(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (127 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #128
  public degradeBlockerTier_128(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (128 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #129
  public degradeBlockerTier_129(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (129 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #130
  public degradeBlockerTier_130(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (130 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #131
  public degradeBlockerTier_131(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (131 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #132
  public degradeBlockerTier_132(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (132 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #133
  public degradeBlockerTier_133(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (133 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #134
  public degradeBlockerTier_134(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (134 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #135
  public degradeBlockerTier_135(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (135 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #136
  public degradeBlockerTier_136(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (136 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #137
  public degradeBlockerTier_137(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (137 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #138
  public degradeBlockerTier_138(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (138 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #139
  public degradeBlockerTier_139(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (139 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #140
  public degradeBlockerTier_140(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (140 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #141
  public degradeBlockerTier_141(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (141 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #142
  public degradeBlockerTier_142(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (142 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #143
  public degradeBlockerTier_143(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (143 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #144
  public degradeBlockerTier_144(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (144 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #145
  public degradeBlockerTier_145(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (145 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #146
  public degradeBlockerTier_146(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (146 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #147
  public degradeBlockerTier_147(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (147 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #148
  public degradeBlockerTier_148(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (148 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #149
  public degradeBlockerTier_149(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (149 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #150
  public degradeBlockerTier_150(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (150 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #151
  public degradeBlockerTier_151(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (151 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #152
  public degradeBlockerTier_152(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (152 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #153
  public degradeBlockerTier_153(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (153 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #154
  public degradeBlockerTier_154(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (154 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #155
  public degradeBlockerTier_155(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (155 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #156
  public degradeBlockerTier_156(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (156 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #157
  public degradeBlockerTier_157(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (157 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #158
  public degradeBlockerTier_158(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (158 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #159
  public degradeBlockerTier_159(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (159 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #160
  public degradeBlockerTier_160(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (160 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #161
  public degradeBlockerTier_161(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (161 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #162
  public degradeBlockerTier_162(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (162 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #163
  public degradeBlockerTier_163(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (163 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #164
  public degradeBlockerTier_164(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (164 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #165
  public degradeBlockerTier_165(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (165 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #166
  public degradeBlockerTier_166(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (166 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #167
  public degradeBlockerTier_167(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (167 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #168
  public degradeBlockerTier_168(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (168 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #169
  public degradeBlockerTier_169(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (169 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #170
  public degradeBlockerTier_170(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (170 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #171
  public degradeBlockerTier_171(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (171 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #172
  public degradeBlockerTier_172(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (172 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #173
  public degradeBlockerTier_173(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (173 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #174
  public degradeBlockerTier_174(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (174 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #175
  public degradeBlockerTier_175(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (175 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #176
  public degradeBlockerTier_176(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (176 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #177
  public degradeBlockerTier_177(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (177 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #178
  public degradeBlockerTier_178(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (178 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #179
  public degradeBlockerTier_179(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (179 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #180
  public degradeBlockerTier_180(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (180 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #181
  public degradeBlockerTier_181(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (181 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #182
  public degradeBlockerTier_182(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (182 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #183
  public degradeBlockerTier_183(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (183 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #184
  public degradeBlockerTier_184(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (184 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #185
  public degradeBlockerTier_185(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (185 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #186
  public degradeBlockerTier_186(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (186 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #187
  public degradeBlockerTier_187(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (187 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #188
  public degradeBlockerTier_188(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (188 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #189
  public degradeBlockerTier_189(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (189 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #190
  public degradeBlockerTier_190(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (190 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #191
  public degradeBlockerTier_191(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (191 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #192
  public degradeBlockerTier_192(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (192 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #193
  public degradeBlockerTier_193(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (193 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #194
  public degradeBlockerTier_194(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (194 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #195
  public degradeBlockerTier_195(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (195 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #196
  public degradeBlockerTier_196(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (196 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #197
  public degradeBlockerTier_197(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (197 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #198
  public degradeBlockerTier_198(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (198 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #199
  public degradeBlockerTier_199(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (199 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

  // Obstacle Degradation Model #200
  public degradeBlockerTier_200(b: BlockerUnit, hitType: string, power: number): BlockerUnit {
    let dmg = Math.max(1, power);
    if (hitType === 'BOMB') dmg *= 2;
    if (hitType === 'STRIPED') dmg = Math.round(dmg * 1.5);
    const newDur = Math.max(0, b.durability - dmg);
    const spread = b.canSpread && (newDur > 0) && (200 % 3 === 0);
    return {
      ...b,
      durability: newDur,
      canSpread: spread
    };
  }

}
