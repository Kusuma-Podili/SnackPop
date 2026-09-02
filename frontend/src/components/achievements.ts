import { SaveSystem } from '../systems/save_system';
import { SoundFXEngine } from '../audio/synth';
import { ParticleEmitter } from '../juice/particle_emitter';

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  rewardCoins: number;
  condition: (data: ReturnType<typeof SaveSystem.load>) => boolean;
}

export const ACHIEVEMENTS_LIST: AchievementItem[] = [
  {
    id: 'first_bite',
    title: 'First Bite',
    description: 'Complete Level 1 with at least 1 star.',
    icon: '🍕',
    rewardCoins: 50,
    condition: (d) => (d.levelStars[1] || 0) >= 1
  },
  {
    id: 'three_star_chef',
    title: 'Three Star Perfectionist',
    description: 'Earn 3 stars on any 5 levels.',
    icon: '⭐⭐⭐',
    rewardCoins: 150,
    condition: (d) => Object.values(d.levelStars).filter(s => s === 3).length >= 5
  },
  {
    id: 'world_traveler',
    title: 'Fast Food Pioneer',
    description: 'Unlock World 2 (Fast Food Fiesta).',
    icon: '🍔',
    rewardCoins: 100,
    condition: (d) => d.highestUnlockedLevel >= 11
  },
  {
    id: 'pasta_master',
    title: 'Italian Piazza Virtuoso',
    description: 'Unlock World 3 (Italian Piazza).',
    icon: '🍝',
    rewardCoins: 200,
    condition: (d) => d.highestUnlockedLevel >= 21
  },
  {
    id: 'candy_conqueror',
    title: 'Sweet Tooth Royalty',
    description: 'Unlock World 4 (Sweet Tooth Kingdom).',
    icon: '🍰',
    rewardCoins: 300,
    condition: (d) => d.highestUnlockedLevel >= 31
  },
  {
    id: 'galaxy_champion',
    title: '🌟 Galactic Master Chef 🌟',
    description: 'Unlock the final master World 5 (Gourmet Galaxy).',
    icon: '🌌',
    rewardCoins: 500,
    condition: (d) => d.highestUnlockedLevel >= 41
  },
  {
    id: 'coin_hoarder',
    title: 'Gourmet Tycoon',
    description: 'Accumulate 1,000 Coins in your kitchen vault.',
    icon: '💰',
    rewardCoins: 250,
    condition: (d) => d.coins >= 1000
  }
];

export class AchievementsModal {
  private container: HTMLElement;
  private onClose: () => void;

  constructor(container: HTMLElement, onClose: () => void) {
    this.container = container;
    this.onClose = onClose;
  }

  public render(): void {
    const saveData = SaveSystem.load();
    const claimedSet = new Set(saveData.claimedAchievements || []);

    let listHtml = '';
    ACHIEVEMENTS_LIST.forEach(ach => {
      const isComplete = ach.condition(saveData);
      const isClaimed = claimedSet.has(ach.id);

      listHtml += `
        <div class="achievement-row ${isComplete ? 'ach-completed' : 'ach-locked'}">
          <div class="ach-icon-box">${ach.icon}</div>
          <div class="ach-details">
            <h4 class="ach-title">${ach.title}</h4>
            <p class="ach-desc">${ach.description}</p>
          </div>
          <div class="ach-action">
            ${isClaimed
              ? '<span class="ach-claimed-badge">✅ Claimed</span>'
              : `<button class="game-btn btn-sm btn-claim" data-id="${ach.id}" ${!isComplete ? 'disabled' : ''}>
                  🪙 Claim +${ach.rewardCoins}
                </button>`
            }
          </div>
        </div>
      `;
    });

    const html = `
      <div class="modal-backdrop achievements-modal">
        <div class="modal-card achievements-card">
          <button class="modal-close-btn" id="btn-close-ach">✕</button>
          <div class="ach-header">
            <h2 class="ach-heading">🏆 Culinary Hall of Achievements 🏆</h2>
            <p class="ach-subtitle">Complete culinary milestones and claim gold rewards!</p>
          </div>

          <div class="ach-scroll-list">
            ${listHtml}
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachEvents();
  }

  private attachEvents(): void {
    const closeBtn = document.getElementById('btn-close-ach');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        this.container.innerHTML = '';
        this.onClose();
      });
    }

    const claimButtons = this.container.querySelectorAll('.btn-claim:not([disabled])');
    claimButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-id');
        const ach = ACHIEVEMENTS_LIST.find(a => a.id === id);
        if (ach) {
          const data = SaveSystem.load();
          if (!data.claimedAchievements.includes(ach.id)) {
            data.claimedAchievements.push(ach.id);
            data.coins += ach.rewardCoins;
            SaveSystem.save(data);

            SoundFXEngine.playVictoryFanfare();
            ParticleEmitter.spawnVictoryConfetti();
            this.render();
          }
        }
      });
    });
  }
}
