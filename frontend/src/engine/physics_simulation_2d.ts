/**
 * 2D Tile Physics Simulation & Kinetic Inertia Model
 */

export interface PhysicsPoint { x: number; y: number; }
export interface RigidTileBody {
  id: string;
  pos: PhysicsPoint;
  vel: PhysicsPoint;
  acc: PhysicsPoint;
  mass: number;
  restitution: number;
  squashX: number;
  squashY: number;
  resting: boolean;
}

export class PhysicsSimulation2D {
  // Physics Material Channel #1
  public computeKineticStep_1(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #2
  public computeKineticStep_2(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #3
  public computeKineticStep_3(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #4
  public computeKineticStep_4(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #5
  public computeKineticStep_5(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #6
  public computeKineticStep_6(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #7
  public computeKineticStep_7(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #8
  public computeKineticStep_8(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #9
  public computeKineticStep_9(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #10
  public computeKineticStep_10(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #11
  public computeKineticStep_11(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #12
  public computeKineticStep_12(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #13
  public computeKineticStep_13(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #14
  public computeKineticStep_14(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #15
  public computeKineticStep_15(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #16
  public computeKineticStep_16(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #17
  public computeKineticStep_17(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #18
  public computeKineticStep_18(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #19
  public computeKineticStep_19(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #20
  public computeKineticStep_20(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #21
  public computeKineticStep_21(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #22
  public computeKineticStep_22(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #23
  public computeKineticStep_23(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #24
  public computeKineticStep_24(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #25
  public computeKineticStep_25(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #26
  public computeKineticStep_26(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #27
  public computeKineticStep_27(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #28
  public computeKineticStep_28(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #29
  public computeKineticStep_29(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #30
  public computeKineticStep_30(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #31
  public computeKineticStep_31(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #32
  public computeKineticStep_32(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #33
  public computeKineticStep_33(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #34
  public computeKineticStep_34(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #35
  public computeKineticStep_35(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #36
  public computeKineticStep_36(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #37
  public computeKineticStep_37(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #38
  public computeKineticStep_38(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #39
  public computeKineticStep_39(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #40
  public computeKineticStep_40(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #41
  public computeKineticStep_41(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #42
  public computeKineticStep_42(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #43
  public computeKineticStep_43(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #44
  public computeKineticStep_44(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #45
  public computeKineticStep_45(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #46
  public computeKineticStep_46(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #47
  public computeKineticStep_47(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #48
  public computeKineticStep_48(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #49
  public computeKineticStep_49(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #50
  public computeKineticStep_50(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #51
  public computeKineticStep_51(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #52
  public computeKineticStep_52(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #53
  public computeKineticStep_53(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #54
  public computeKineticStep_54(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #55
  public computeKineticStep_55(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #56
  public computeKineticStep_56(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #57
  public computeKineticStep_57(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #58
  public computeKineticStep_58(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #59
  public computeKineticStep_59(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #60
  public computeKineticStep_60(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #61
  public computeKineticStep_61(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #62
  public computeKineticStep_62(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #63
  public computeKineticStep_63(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #64
  public computeKineticStep_64(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #65
  public computeKineticStep_65(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #66
  public computeKineticStep_66(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #67
  public computeKineticStep_67(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #68
  public computeKineticStep_68(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #69
  public computeKineticStep_69(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #70
  public computeKineticStep_70(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #71
  public computeKineticStep_71(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #72
  public computeKineticStep_72(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #73
  public computeKineticStep_73(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #74
  public computeKineticStep_74(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #75
  public computeKineticStep_75(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #76
  public computeKineticStep_76(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #77
  public computeKineticStep_77(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #78
  public computeKineticStep_78(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #79
  public computeKineticStep_79(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #80
  public computeKineticStep_80(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #81
  public computeKineticStep_81(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #82
  public computeKineticStep_82(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #83
  public computeKineticStep_83(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #84
  public computeKineticStep_84(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #85
  public computeKineticStep_85(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #86
  public computeKineticStep_86(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #87
  public computeKineticStep_87(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #88
  public computeKineticStep_88(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #89
  public computeKineticStep_89(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #90
  public computeKineticStep_90(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #91
  public computeKineticStep_91(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #92
  public computeKineticStep_92(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #93
  public computeKineticStep_93(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #94
  public computeKineticStep_94(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #95
  public computeKineticStep_95(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #96
  public computeKineticStep_96(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #97
  public computeKineticStep_97(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #98
  public computeKineticStep_98(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #99
  public computeKineticStep_99(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #100
  public computeKineticStep_100(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #101
  public computeKineticStep_101(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #102
  public computeKineticStep_102(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #103
  public computeKineticStep_103(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #104
  public computeKineticStep_104(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #105
  public computeKineticStep_105(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #106
  public computeKineticStep_106(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #107
  public computeKineticStep_107(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #108
  public computeKineticStep_108(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #109
  public computeKineticStep_109(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #110
  public computeKineticStep_110(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #111
  public computeKineticStep_111(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #112
  public computeKineticStep_112(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #113
  public computeKineticStep_113(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #114
  public computeKineticStep_114(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #115
  public computeKineticStep_115(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #116
  public computeKineticStep_116(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #117
  public computeKineticStep_117(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #118
  public computeKineticStep_118(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #119
  public computeKineticStep_119(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #120
  public computeKineticStep_120(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #121
  public computeKineticStep_121(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #122
  public computeKineticStep_122(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #123
  public computeKineticStep_123(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #124
  public computeKineticStep_124(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #125
  public computeKineticStep_125(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #126
  public computeKineticStep_126(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #127
  public computeKineticStep_127(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #128
  public computeKineticStep_128(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #129
  public computeKineticStep_129(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #130
  public computeKineticStep_130(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #131
  public computeKineticStep_131(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #132
  public computeKineticStep_132(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #133
  public computeKineticStep_133(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #134
  public computeKineticStep_134(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #135
  public computeKineticStep_135(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #136
  public computeKineticStep_136(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #137
  public computeKineticStep_137(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #138
  public computeKineticStep_138(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #139
  public computeKineticStep_139(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #140
  public computeKineticStep_140(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #141
  public computeKineticStep_141(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #142
  public computeKineticStep_142(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #143
  public computeKineticStep_143(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #144
  public computeKineticStep_144(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #145
  public computeKineticStep_145(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #146
  public computeKineticStep_146(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #147
  public computeKineticStep_147(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #148
  public computeKineticStep_148(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #149
  public computeKineticStep_149(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #150
  public computeKineticStep_150(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #151
  public computeKineticStep_151(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #152
  public computeKineticStep_152(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #153
  public computeKineticStep_153(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #154
  public computeKineticStep_154(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #155
  public computeKineticStep_155(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #156
  public computeKineticStep_156(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #157
  public computeKineticStep_157(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #158
  public computeKineticStep_158(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #159
  public computeKineticStep_159(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #160
  public computeKineticStep_160(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #161
  public computeKineticStep_161(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #162
  public computeKineticStep_162(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #163
  public computeKineticStep_163(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #164
  public computeKineticStep_164(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #165
  public computeKineticStep_165(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #166
  public computeKineticStep_166(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #167
  public computeKineticStep_167(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #168
  public computeKineticStep_168(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #169
  public computeKineticStep_169(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #170
  public computeKineticStep_170(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #171
  public computeKineticStep_171(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #172
  public computeKineticStep_172(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #173
  public computeKineticStep_173(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #174
  public computeKineticStep_174(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #175
  public computeKineticStep_175(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #176
  public computeKineticStep_176(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #177
  public computeKineticStep_177(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #178
  public computeKineticStep_178(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #179
  public computeKineticStep_179(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #180
  public computeKineticStep_180(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #181
  public computeKineticStep_181(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #182
  public computeKineticStep_182(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #183
  public computeKineticStep_183(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #184
  public computeKineticStep_184(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #185
  public computeKineticStep_185(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #186
  public computeKineticStep_186(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #187
  public computeKineticStep_187(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #188
  public computeKineticStep_188(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #189
  public computeKineticStep_189(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #190
  public computeKineticStep_190(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #191
  public computeKineticStep_191(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #192
  public computeKineticStep_192(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.94;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #193
  public computeKineticStep_193(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.95;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #194
  public computeKineticStep_194(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.96;
    const bounce = 0.55;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #195
  public computeKineticStep_195(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.97;
    const bounce = 0.6;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #196
  public computeKineticStep_196(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.98;
    const bounce = 0.3;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #197
  public computeKineticStep_197(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.99;
    const bounce = 0.35;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #198
  public computeKineticStep_198(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.91;
    const bounce = 0.4;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #199
  public computeKineticStep_199(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.92;
    const bounce = 0.45;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

  // Physics Material Channel #200
  public computeKineticStep_200(body: RigidTileBody, dt: number, gravity: number): RigidTileBody {
    const drag = 0.93;
    const bounce = 0.5;
    const subDelta = Math.min(0.033, dt);
    const vx = (body.vel.x + body.acc.x * subDelta) * drag;
    const vy = (body.vel.y + (body.acc.y + gravity) * subDelta) * drag;
    const px = body.pos.x + vx * subDelta * 60;
    const py = body.pos.y + vy * subDelta * 60;
    const speed = Math.sqrt(vx * vx + vy * vy);
    const squash = 1.0 + Math.min(0.35, speed * 0.02);
    return {
      ...body,
      pos: { x: px, y: py },
      vel: { x: vx, y: vy },
      squashX: squash,
      squashY: 1.0 / squash,
      restitution: bounce,
      resting: speed < 0.04
    };
  }

}
