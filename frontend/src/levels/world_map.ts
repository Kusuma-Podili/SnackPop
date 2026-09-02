import { ALL_LEVELS, LevelDefinition } from './level_definitions';
import { SaveSystem } from '../systems/save_system';
import { LivesSystem } from '../systems/lives_system';
import { SoundFXEngine } from '../audio/synth';

export class WorldMapRenderer {
  private container: HTMLElement;
  private onSelectLevel: (level: LevelDefinition) => void;

  constructor(container: HTMLElement, onSelectLevel: (level: LevelDefinition) => void) {
    this.container = container;
    this.onSelectLevel = onSelectLevel;
  }

  public render(): void {
    const saveData = SaveSystem.load();
    const livesState = LivesSystem.getLivesState();
    const highestUnlocked = saveData.highestUnlockedLevel;

    // Group levels by world
    const worlds: { [worldNum: number]: { name: string; levels: LevelDefinition[] } } = {
      1: { name: 'Morning Bakery', levels: [] },
      2: { name: 'Fast Food Fiesta', levels: [] },
      3: { name: 'Italian Piazza', levels: [] },
      4: { name: 'Sweet Tooth Kingdom', levels: [] },
      5: { name: 'Gourmet Galaxy', levels: [] }
    };

    ALL_LEVELS.forEach(lvl => {
      if (worlds[lvl.worldNumber]) {
        worlds[lvl.worldNumber].levels.push(lvl);
      }
    });

    let totalStarsEarned = 0;
    Object.values(saveData.levelStars).forEach(s => totalStarsEarned += s);

    let html = `
      <div class="world-map-wrapper">
        <!-- Top Sticky Header -->
        <div class="map-top-bar">
          <div class="map-brand">
            <span class="brand-icon">🍕</span>
            <span class="brand-title">SnackPop Saga</span>
          </div>
          <div class="map-stats-tray">
            <div class="stat-pill lives-pill" title="Lives Recharge in ${livesState.secondsUntilNextLife}s">
              <span class="pill-icon">❤️</span>
              <span class="pill-val">${livesState.lives}/${LivesSystem.MAX_LIVES}</span>
              ${!livesState.isFull ? `<span class="pill-timer">${this.formatSeconds(livesState.secondsUntilNextLife)}</span>` : ''}
            </div>
            <div class="stat-pill coins-pill">
              <span class="pill-icon">🪙</span>
              <span class="pill-val">${saveData.coins}</span>
            </div>
            <div class="stat-pill stars-pill">
              <span class="pill-icon">⭐</span>
              <span class="pill-val">${totalStarsEarned}/150</span>
            </div>
          </div>
        </div>

        <!-- World Maps Carousel / Vertical Journey -->
        <div class="worlds-journey-container">
    `;

    // Render worlds in descending order (highest world first) so player journeys up
    const worldKeys = [5, 4, 3, 2, 1];
    worldKeys.forEach(wNum => {
      const world = worlds[wNum];
      const isWorldUnlocked = world.levels.some(l => l.levelNumber <= highestUnlocked);

      html += `
        <div class="world-section world-${wNum} ${isWorldUnlocked ? 'unlocked' : 'locked'}">
          <div class="world-header-banner">
            <h2 class="world-title">World ${wNum}: ${world.name}</h2>
            <span class="world-badge">${isWorldUnlocked ? '🔥 Open Kitchen' : '🔒 Locked World'}</span>
          </div>

          <div class="level-nodes-grid">
      `;

      world.levels.forEach(lvl => {
        const isUnlocked = lvl.levelNumber <= highestUnlocked;
        const stars = saveData.levelStars[lvl.levelNumber] || 0;
        const isCurrent = lvl.levelNumber === highestUnlocked;

        html += `
          <div class="level-node-item ${isUnlocked ? 'node-unlocked' : 'node-locked'} ${isCurrent ? 'node-current-pulse' : ''}" data-level="${lvl.levelNumber}">
            <div class="node-circle">
              ${isUnlocked ? `<span class="node-num">${lvl.levelNumber}</span>` : '<span class="lock-icon">🔒</span>'}
              ${isCurrent ? '<div class="chef-avatar-pin">👨‍🍳</div>' : ''}
            </div>
            <div class="node-stars-row">
              <span class="node-star ${stars >= 1 ? 'filled' : 'empty'}">⭐</span>
              <span class="node-star ${stars >= 2 ? 'filled' : 'empty'}">⭐</span>
              <span class="node-star ${stars >= 3 ? 'filled' : 'empty'}">⭐</span>
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachEventListeners();
  }

  private attachEventListeners(): void {
    const nodes = this.container.querySelectorAll('.level-node-item.node-unlocked');
    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const levelNum = parseInt(node.getAttribute('data-level') || '1', 10);
        const lvlDef = ALL_LEVELS.find(l => l.levelNumber === levelNum);
        if (lvlDef) {
          SoundFXEngine.playClick();
          this.onSelectLevel(lvlDef);
        }
      });
    });
  }

  private formatSeconds(totalSecs: number): string {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  }
}
