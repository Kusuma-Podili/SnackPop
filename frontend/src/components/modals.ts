import { LevelDefinition, LevelObjectiveType } from '../levels/level_definitions';
import { SaveSystem } from '../systems/save_system';
import { LivesSystem } from '../systems/lives_system';
import { SoundFXEngine } from '../audio/synth';
import { ParticleEmitter } from '../juice/particle_emitter';

export class GameModals {
  public static showLevelBriefing(
    container: HTMLElement,
    level: LevelDefinition,
    onStartGame: (selectedBoosters: { startFlavorBomb: boolean }) => void,
    onCancel: () => void
  ): void {
    const saveData = SaveSystem.load();
    const livesState = LivesSystem.getLivesState();
    const currentStars = saveData.levelStars[level.levelNumber] || 0;

    let objectiveHtml = '';
    switch (level.objectiveType) {
      case LevelObjectiveType.TARGET_SCORE:
        objectiveHtml = `🎯 <strong>Score Goal:</strong> Reach <span class="highlight-val">${level.targetScore.toLocaleString()}</span> Points`;
        break;
      case LevelObjectiveType.CLEAR_FROSTING:
        objectiveHtml = `🧊 <strong>Clear Frostings:</strong> Break all <span class="highlight-val">${level.targetFrostingCount || 0}</span> Sweet Glazes`;
        break;
      case LevelObjectiveType.COLLECT_INGREDIENTS:
        objectiveHtml = `🏆 <strong>Collect Ingredients:</strong> Drop all culinary trophies to the bottom exit row`;
        break;
      default:
        objectiveHtml = `🎯 Reach Target Score within <span class="highlight-val">${level.moves}</span> Moves`;
        break;
    }

    const html = `
      <div class="modal-backdrop briefing-modal">
        <div class="modal-card briefing-card">
          <button class="modal-close-btn" id="btn-close-briefing">✕</button>
          
          <div class="briefing-header">
            <span class="world-tag">${level.worldName}</span>
            <h2 class="level-title">Level ${level.levelNumber}</h2>
            <div class="stars-preview-row">
              <span class="star-badge ${currentStars >= 1 ? 'active' : ''}">⭐</span>
              <span class="star-badge ${currentStars >= 2 ? 'active' : ''}">⭐</span>
              <span class="star-badge ${currentStars >= 3 ? 'active' : ''}">⭐</span>
            </div>
          </div>

          <div class="briefing-body">
            <div class="objective-callout">
              <p class="obj-text">${objectiveHtml}</p>
              <p class="moves-limit-text">⏱️ Move Limit: <strong>${level.moves} Moves</strong></p>
            </div>

            <!-- Pre-Game Boosters -->
            <div class="pregame-boosters-section">
              <h4 class="pregame-title">✨ Select Pre-Game Boosters:</h4>
              <label class="booster-check-label">
                <input type="checkbox" id="check-pre-flavorbomb" ${saveData.boosters.startFlavorBomb > 0 ? '' : 'disabled'} />
                <span class="booster-check-box"></span>
                <span class="booster-icon">🌈</span>
                <span class="booster-name">Start with Flavor Bomb (${saveData.boosters.startFlavorBomb} available)</span>
              </label>
            </div>
          </div>

          <div class="briefing-footer">
            <button class="game-btn btn-primary btn-start-level" id="btn-play-level" ${livesState.lives <= 0 ? 'disabled' : ''}>
              ${livesState.lives > 0 ? '▶️ PLAY LEVEL (❤️ 1 Life)' : '❌ NO LIVES REMAINING'}
            </button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const closeBtn = document.getElementById('btn-close-briefing');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onCancel();
      });
    }

    const playBtn = document.getElementById('btn-play-level');
    if (playBtn && livesState.lives > 0) {
      playBtn.addEventListener('click', () => {
        const checkFlavor = document.getElementById('check-pre-flavorbomb') as HTMLInputElement;
        const startFlavorBomb = checkFlavor ? checkFlavor.checked : false;

        if (startFlavorBomb) {
          saveData.boosters.startFlavorBomb--;
          SaveSystem.save(saveData);
        }

        LivesSystem.consumeLife();
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onStartGame({ startFlavorBomb });
      });
    }
  }

  public static showVictory(
    container: HTMLElement,
    levelNumber: number,
    score: number,
    stars: number,
    coinsEarned: number,
    onNextLevel: () => void,
    onBackToMap: () => void
  ): void {
    SoundFXEngine.playVictoryFanfare();
    ParticleEmitter.spawnVictoryConfetti();

    const html = `
      <div class="modal-backdrop victory-modal">
        <div class="modal-card victory-card">
          <div class="victory-header">
            <h2 class="victory-heading">🎉 LEVEL COMPLETED! 🎉</h2>
            <p class="victory-sub">Delicious culinary mastery!</p>
          </div>

          <div class="victory-stars-display">
            <span class="big-star ${stars >= 1 ? 'star-pop star-1' : 'star-dim'}">⭐</span>
            <span class="big-star ${stars >= 2 ? 'star-pop star-2' : 'star-dim'}">⭐</span>
            <span class="big-star ${stars >= 3 ? 'star-pop star-3' : 'star-dim'}">⭐</span>
          </div>

          <div class="victory-score-breakdown">
            <div class="score-row">
              <span>Final Score:</span>
              <strong class="score-val">${score.toLocaleString()}</strong>
            </div>
            <div class="score-row">
              <span>Reward:</span>
              <strong class="coins-reward">+${coinsEarned} 🪙 Coins</strong>
            </div>
          </div>

          <div class="victory-actions">
            <button class="game-btn btn-secondary" id="btn-victory-map">🗺️ World Map</button>
            <button class="game-btn btn-primary" id="btn-victory-next">Next Level ➡️</button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const mapBtn = document.getElementById('btn-victory-map');
    if (mapBtn) {
      mapBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onBackToMap();
      });
    }

    const nextBtn = document.getElementById('btn-victory-next');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onNextLevel();
      });
    }
  }

  public static showDefeat(
    container: HTMLElement,
    levelNumber: number,
    score: number,
    onRetry: () => void,
    onBuyExtraMoves: () => void,
    onBackToMap: () => void
  ): void {
    SoundFXEngine.playDefeat();
    const saveData = SaveSystem.load();
    const canBuyMoves = saveData.coins >= 50;

    const html = `
      <div class="modal-backdrop defeat-modal">
        <div class="modal-card defeat-card">
          <div class="defeat-header">
            <h2 class="defeat-heading">💔 OUT OF MOVES!</h2>
            <p class="defeat-sub">You were so close! Don't let your culinary dish spoil!</p>
          </div>

          <div class="defeat-score-display">
            <span>Score Reached:</span>
            <strong>${score.toLocaleString()}</strong>
          </div>

          <div class="defeat-actions">
            <button class="game-btn btn-primary btn-buy-moves" id="btn-buy-moves" ${!canBuyMoves ? 'disabled' : ''}>
              ➕ 5 Extra Moves (🪙 50 Coins)
            </button>
            <button class="game-btn btn-secondary" id="btn-defeat-retry">🔄 Try Again</button>
            <button class="game-btn btn-outline" id="btn-defeat-map">🗺️ Back to Map</button>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;

    const buyBtn = document.getElementById('btn-buy-moves');
    if (buyBtn && canBuyMoves) {
      buyBtn.addEventListener('click', () => {
        saveData.coins -= 50;
        SaveSystem.save(saveData);
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onBuyExtraMoves();
      });
    }

    const retryBtn = document.getElementById('btn-defeat-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onRetry();
      });
    }

    const mapBtn = document.getElementById('btn-defeat-map');
    if (mapBtn) {
      mapBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        container.innerHTML = '';
        onBackToMap();
      });
    }
  }
}
