import { SaveSystem } from '../systems/save_system';
import { BoosterManager, BoosterType } from '../systems/booster_manager';
import { LivesSystem } from '../systems/lives_system';
import { SoundFXEngine } from '../audio/synth';
import { ParticleEmitter } from '../juice/particle_emitter';

interface SpinReward {
  label: string;
  icon: string;
  color: string;
  type: 'coins' | 'booster' | 'lives';
  amount: number;
  boosterType?: BoosterType;
}

export class DailySpinWheel {
  private container: HTMLElement;
  private isSpinning: boolean = false;
  private currentRotation: number = 0;
  private onClose: () => void;

  private static readonly REWARDS: SpinReward[] = [
    { label: '50 Coins', icon: '🪙', color: '#F59E0B', type: 'coins', amount: 50 },
    { label: '1 Spatula', icon: '🥄', color: '#EF4444', type: 'booster', amount: 1, boosterType: BoosterType.SPATULA },
    { label: '100 Coins', icon: '💰', color: '#10B981', type: 'coins', amount: 100 },
    { label: '1 Rolling Pin', icon: '🥖', color: '#3B82F6', type: 'booster', amount: 1, boosterType: BoosterType.ROLLING_PIN },
    { label: '+2 Lives', icon: '❤️', color: '#EC4899', type: 'lives', amount: 2 },
    { label: '1 Blender', icon: '🌪️', color: '#8B5CF6', type: 'booster', amount: 1, boosterType: BoosterType.BLENDER },
    { label: '250 Coins', icon: '💎', color: '#FBBF24', type: 'coins', amount: 250 },
    { label: '1 Flavor Bomb', icon: '🌈', color: '#F43F5E', type: 'booster', amount: 1, boosterType: BoosterType.START_FLAVOR_BOMB }
  ];

  constructor(container: HTMLElement, onClose: () => void) {
    this.container = container;
    this.onClose = onClose;
  }

  public render(): void {
    const saveData = SaveSystem.load();
    const today = new Date().toISOString().split('T')[0];
    const canSpin = saveData.lastDailySpinDate !== today;

    const html = `
      <div class="modal-backdrop spin-wheel-modal">
        <div class="modal-card spin-card">
          <button class="modal-close-btn" id="btn-close-spin">✕</button>
          <div class="spin-header">
            <h2 class="spin-title">🎡 Lucky Chef Daily Wheel 🎡</h2>
            <p class="spin-sub">Spin daily to win free boosters, coins, and extra lives!</p>
          </div>

          <div class="wheel-stage">
            <div class="wheel-pointer">🔻</div>
            <canvas id="spin-wheel-canvas" width="320" height="320"></canvas>
          </div>

          <div class="spin-actions">
            <button class="game-btn btn-primary btn-spin-action" id="btn-spin-wheel" ${!canSpin ? 'disabled' : ''}>
              ${canSpin ? '✨ SPIN THE WHEEL! ✨' : '✅ COME BACK TOMORROW'}
            </button>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.drawWheel(0);
    this.attachEvents(canSpin, today);
  }

  private drawWheel(rotationDeg: number): void {
    const canvas = document.getElementById('spin-wheel-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const center = canvas.width / 2;
    const radius = center - 10;
    const rewards = DailySpinWheel.REWARDS;
    const sliceAngle = (Math.PI * 2) / rewards.length;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate((rotationDeg * Math.PI) / 180);

    rewards.forEach((reward, i) => {
      const angle = i * sliceAngle;

      ctx.beginPath();
      ctx.fillStyle = reward.color;
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, angle, angle + sliceAngle);
      ctx.closePath();
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#FFFFFF';
      ctx.stroke();

      // Text and icon
      ctx.save();
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 14px Poppins, sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.fillText(`${reward.icon} ${reward.label}`, radius - 20, 5);
      ctx.restore();
    });

    // Center hub
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(0, 0, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = '#F59E0B';
    ctx.stroke();

    ctx.restore();
  }

  private attachEvents(canSpin: boolean, today: string): void {
    const closeBtn = document.getElementById('btn-close-spin');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        this.container.innerHTML = '';
        this.onClose();
      });
    }

    const spinBtn = document.getElementById('btn-spin-wheel');
    if (spinBtn && canSpin) {
      spinBtn.addEventListener('click', () => {
        if (this.isSpinning) return;
        this.spinWheel(today);
      });
    }
  }

  private spinWheel(today: string): void {
    this.isSpinning = true;
    const spinBtn = document.getElementById('btn-spin-wheel') as HTMLButtonElement;
    if (spinBtn) spinBtn.disabled = true;

    SoundFXEngine.playSwap();

    const rewards = DailySpinWheel.REWARDS;
    const chosenIndex = Math.floor(Math.random() * rewards.length);
    const sliceDeg = 360 / rewards.length;
    // Target angle points to top (270 deg)
    const targetDeg = 360 * 5 + (360 - chosenIndex * sliceDeg - sliceDeg / 2 - 90);

    const startRot = this.currentRotation;
    const totalRotation = targetDeg - startRot;
    const durationMs = 3800;
    const startTime = performance.now();

    const animateSpin = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      this.currentRotation = startRot + totalRotation * ease;

      this.drawWheel(this.currentRotation);

      if (progress < 1) {
        requestAnimationFrame(animateSpin);
      } else {
        this.isSpinning = false;
        this.awardReward(rewards[chosenIndex], today);
      }
    };

    requestAnimationFrame(animateSpin);
  }

  private awardReward(reward: SpinReward, today: string): void {
    const data = SaveSystem.load();
    data.lastDailySpinDate = today;

    if (reward.type === 'coins') {
      data.coins += reward.amount;
    } else if (reward.type === 'lives') {
      LivesSystem.addLife(reward.amount);
    } else if (reward.type === 'booster' && reward.boosterType) {
      BoosterManager.addBooster(reward.boosterType, reward.amount);
    }

    SaveSystem.save(data);
    SoundFXEngine.playVictoryFanfare();
    ParticleEmitter.spawnVictoryConfetti();

    alert(`🎉 Congratulations! You won: ${reward.icon} ${reward.label}!`);

    const spinBtn = document.getElementById('btn-spin-wheel') as HTMLButtonElement;
    if (spinBtn) {
      spinBtn.textContent = '✅ REWARD CLAIMED';
      spinBtn.disabled = true;
    }
  }
}
