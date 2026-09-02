import { FoodType, SpecialType } from '../engine/types';

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  shape: 'circle' | 'square' | 'star' | 'ring';
  rotation: number;
  vRot: number;
}

export class ParticleEmitter {
  private static canvas: HTMLCanvasElement | null = null;
  private static ctx: CanvasRenderingContext2D | null = null;
  private static particles: Particle[] = [];
  private static animFrameId: number | null = null;
  private static isRunning: boolean = false;

  private static readonly FOOD_COLORS: Record<FoodType, string[]> = {
    [FoodType.PIZZA]: ['#F59E0B', '#DC2626', '#FBBF24', '#16A34A', '#78350F'],
    [FoodType.BURGER]: ['#F59E0B', '#22C55E', '#EF4444', '#78350F', '#FACC15'],
    [FoodType.DONUT]: ['#EC4899', '#38BDF8', '#FACC15', '#A855F7', '#F59E0B'],
    [FoodType.STRAWBERRY]: ['#E11D48', '#BE123C', '#FEF08A', '#15803D', '#F43F5E'],
    [FoodType.CAKE]: ['#FB7185', '#FFF1F2', '#BE123C', '#E11D48', '#FDE047'],
    [FoodType.FRIES]: ['#FBBF24', '#FACC15', '#DC2626', '#EF4444', '#D97706'],
    [FoodType.TACO]: ['#F59E0B', '#22C55E', '#EF4444', '#78350F', '#FBBF24'],
    [FoodType.SUSHI]: ['#F8FAFC', '#F97316', '#22C55E', '#0F172A', '#84CC16']
  };

  public static attach(canvasElement: HTMLCanvasElement): void {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.startLoop();
  }

  public static resize(): void {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  public static spawnFoodCrumbs(x: number, y: number, foodType: FoodType | null, count: number = 18): void {
    const palette = (foodType && this.FOOD_COLORS[foodType]) ? this.FOOD_COLORS[foodType] : ['#FACC15', '#F59E0B', '#FFFFFF'];

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2.5 + Math.random() * 5.5;
      const color = palette[Math.floor(Math.random() * palette.length)];

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5, // Slight upward pop
        size: 4 + Math.random() * 7,
        color,
        alpha: 1.0,
        decay: 0.025 + Math.random() * 0.02,
        shape: Math.random() > 0.4 ? 'circle' : 'square',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.2
      });
    }
  }

  public static spawnBombShockwave(x: number, y: number): void {
    // Large expanding ring
    this.particles.push({
      x,
      y,
      vx: 0,
      vy: 0,
      size: 10,
      color: '#EF4444',
      alpha: 1.0,
      decay: 0.03,
      shape: 'ring',
      rotation: 0,
      vRot: 0
    });

    // Blazing spark particles
    for (let i = 0; i < 35; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4.0 + Math.random() * 8.0;
      const colors = ['#EF4444', '#F59E0B', '#FBBF24', '#FFFFFF'];

      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 5 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: 0.03 + Math.random() * 0.02,
        shape: 'star',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.3
      });
    }
  }

  public static spawnLaserBeamParticles(startX: number, startY: number, endX: number, endY: number): void {
    const count = 30;
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 12;
      const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 12;

      this.particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: 3 + Math.random() * 5,
        color: '#38BDF8',
        alpha: 1.0,
        decay: 0.04 + Math.random() * 0.03,
        shape: 'star',
        rotation: Math.random() * Math.PI * 2,
        vRot: 0.1
      });
    }
  }

  public static spawnVictoryConfetti(): void {
    const width = this.canvas ? this.canvas.width : window.innerWidth;
    const count = 120;
    const colors = ['#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6', '#FACC15'];

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * width,
        y: -20,
        vx: (Math.random() - 0.5) * 4,
        vy: 2.5 + Math.random() * 5.0,
        size: 6 + Math.random() * 8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1.0,
        decay: 0.005 + Math.random() * 0.005,
        shape: Math.random() > 0.5 ? 'square' : 'star',
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.15
      });
    }
  }

  private static startLoop(): void {
    if (this.isRunning) return;
    this.isRunning = true;

    const render = () => {
      this.updateAndDraw();
      this.animFrameId = requestAnimationFrame(render);
    };
    render();
  }

  private static updateAndDraw(): void {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.12; // Gravity
      p.rotation += p.vRot;
      p.alpha -= p.decay;

      if (p.shape === 'ring') {
        p.size += 6; // Expanding ring
      }

      if (p.alpha <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = Math.max(0, p.alpha);
      ctx.fillStyle = p.color;
      ctx.strokeStyle = p.color;

      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'square') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      } else if (p.shape === 'star') {
        this.drawStar(ctx, 0, 0, 5, p.size, p.size / 2);
        ctx.fill();
      } else if (p.shape === 'ring') {
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    }
  }

  private static drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, spikes: number, outerRadius: number, innerRadius: number): void {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    const step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
  }
}
