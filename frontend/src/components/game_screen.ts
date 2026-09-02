import { GridBoard } from '../engine/board';
import { GridPosition, SpecialType } from '../engine/types';
import { LevelDefinition, LevelObjectiveType } from '../levels/level_definitions';
import { ObjectiveManager, ObjectiveProgress } from '../levels/objective_manager';
import { MoveValidator } from '../engine/move_validator';
import { FoodSprites } from '../assets/food_sprites';
import { SoundFXEngine } from '../audio/synth';
import { ParticleEmitter } from '../juice/particle_emitter';
import { ScreenJuice } from '../juice/screen_shake';
import { FloatingTextManager } from '../juice/floating_text';
import { TileAnimator } from '../juice/tile_animator';
import { BoosterManager, BoosterType } from '../systems/booster_manager';
import { SaveSystem } from '../systems/save_system';
import { GameModals } from './modals';

export class GameScreen {
  private container: HTMLElement;
  private level: LevelDefinition;
  private board: GridBoard;
  private objectiveManager: ObjectiveManager;
  private selectedPos: GridPosition | null = null;
  private isProcessing: boolean = false;
  private activeBoosterMode: BoosterType | null = null;
  private onBackToMap: () => void;
  private onNextLevel: () => void;

  constructor(
    container: HTMLElement,
    level: LevelDefinition,
    preGameBoosters: { startFlavorBomb: boolean },
    onBackToMap: () => void,
    onNextLevel: () => void
  ) {
    this.container = container;
    this.level = level;
    this.onBackToMap = onBackToMap;
    this.onNextLevel = onNextLevel;

    this.board = new GridBoard(level.boardConfig);
    this.board.populateInitialBoard();

    // Apply pre-game booster if selected
    if (preGameBoosters.startFlavorBomb) {
      const centerTile = this.board.grid[Math.floor(this.board.rows / 2)][Math.floor(this.board.cols / 2)];
      if (centerTile && !centerTile.isHole) {
        centerTile.specialType = SpecialType.RAINBOW_CHEF_HAT;
      }
    }

    this.objectiveManager = new ObjectiveManager(level, this.board);
  }

  public render(): void {
    const progress = this.objectiveManager.checkProgress(this.board);
    const saveData = SaveSystem.load();

    const html = `
      <div class="game-screen-wrapper" id="game-arena">
        <!-- Top HUD Header -->
        <div class="game-hud-bar">
          <button class="hud-back-btn" id="btn-pause-game">⏸️ Pause</button>

          <div class="hud-objective-pill">
            <span class="hud-obj-icon">🎯</span>
            <span class="hud-obj-label">${this.getObjectiveText(progress)}</span>
          </div>

          <div class="hud-moves-pill">
            <span class="moves-count">${progress.movesRemaining}</span>
            <span class="moves-label">Moves</span>
          </div>
        </div>

        <!-- 3-Star Progress Bar -->
        <div class="score-progress-container">
          <div class="score-meta">
            <span class="score-text">Score: <strong>${progress.currentScore.toLocaleString()}</strong></span>
            <div class="stars-hud-row">
              <span class="star-hud ${progress.starsEarned >= 1 ? 'earned' : ''}">⭐</span>
              <span class="star-hud ${progress.starsEarned >= 2 ? 'earned' : ''}">⭐</span>
              <span class="star-hud ${progress.starsEarned >= 3 ? 'earned' : ''}">⭐</span>
            </div>
          </div>
          <div class="progress-track">
            <div class="progress-bar-fill" style="width: ${this.calculateProgressPercent(progress.currentScore)}%;"></div>
            <div class="star-marker marker-1" style="left: 33%;"></div>
            <div class="star-marker marker-2" style="left: 66%;"></div>
            <div class="star-marker marker-3" style="left: 100%;"></div>
          </div>
        </div>

        <!-- Active Grid Arena -->
        <div class="board-stage">
          <div class="grid-board-canvas" id="grid-container" style="--grid-rows: ${this.board.rows}; --grid-cols: ${this.board.cols};">
            <!-- Tiles rendered dynamically -->
          </div>
        </div>

        <!-- In-Game Booster Tray -->
        <div class="booster-tray-bar">
          <button class="booster-btn ${this.activeBoosterMode === BoosterType.SPATULA ? 'active' : ''}" data-booster="spatula">
            <span class="booster-tray-icon">🥄</span>
            <span class="booster-qty">${saveData.boosters.spatula}</span>
          </button>
          <button class="booster-btn ${this.activeBoosterMode === BoosterType.ROLLING_PIN ? 'active' : ''}" data-booster="rollingPin">
            <span class="booster-tray-icon">🥖</span>
            <span class="booster-qty">${saveData.boosters.rollingPin}</span>
          </button>
          <button class="booster-btn" data-booster="blender">
            <span class="booster-tray-icon">🌪️</span>
            <span class="booster-qty">${saveData.boosters.blender}</span>
          </button>
          <button class="booster-btn" data-booster="extraMoves">
            <span class="booster-tray-icon">➕5</span>
            <span class="booster-qty">${saveData.boosters.extraMoves}</span>
          </button>
        </div>

        <!-- Modals Layer -->
        <div id="game-modal-layer"></div>
      </div>
    `;

    this.container.innerHTML = html;
    ScreenJuice.attach(document.getElementById('game-arena')!);
    FloatingTextManager.attach(document.getElementById('game-arena')!);

    this.renderTiles();
    this.attachEvents();
  }

  private renderTiles(): void {
    const gridContainer = document.getElementById('grid-container');
    if (!gridContainer) return;

    let html = '';
    for (let r = 0; r < this.board.rows; r++) {
      for (let c = 0; c < this.board.cols; c++) {
        const tile = this.board.grid[r][c];
        if (!tile || tile.isHole) {
          html += `<div class="grid-cell cell-hole" data-row="${r}" data-col="${c}"></div>`;
          continue;
        }

        const isSelected = this.selectedPos && this.selectedPos.row === r && this.selectedPos.col === c;
        const foodSvg = FoodSprites.getFoodSvg(tile.foodType, tile.specialType);
        const blockerSvg = FoodSprites.getBlockerSvg(tile.blockerType);
        const ingSvg = FoodSprites.getIngredientSvg(tile.ingredientType);

        html += `
          <div class="grid-cell ${isSelected ? 'cell-selected' : ''}" data-row="${r}" data-col="${c}">
            ${blockerSvg ? `<div class="blocker-layer">${blockerSvg}</div>` : ''}
            ${tile.foodType || tile.specialType === SpecialType.RAINBOW_CHEF_HAT ? `<div class="food-layer">${foodSvg}</div>` : ''}
            ${ingSvg ? `<div class="ingredient-layer">${ingSvg}</div>` : ''}
          </div>
        `;
      }
    }

    gridContainer.innerHTML = html;
    this.attachTileEvents();
  }

  private attachTileEvents(): void {
    const cells = document.querySelectorAll('.grid-cell:not(.cell-hole)');
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        if (this.isProcessing) return;
        const r = parseInt(cell.getAttribute('data-row') || '0', 10);
        const c = parseInt(cell.getAttribute('data-col') || '0', 10);
        this.handleTileClick({ row: r, col: c });
      });
    });
  }

  private async handleTileClick(pos: GridPosition): Promise<void> {
    // 1. Check active booster mode
    if (this.activeBoosterMode === BoosterType.SPATULA) {
      if (BoosterManager.useBooster(BoosterType.SPATULA)) {
        this.activeBoosterMode = null;
        BoosterManager.applySpatula(this.board, pos);
        this.renderTiles();
        await this.postMoveCascadeResolution();
      }
      return;
    }

    if (this.activeBoosterMode === BoosterType.ROLLING_PIN) {
      if (BoosterManager.useBooster(BoosterType.ROLLING_PIN)) {
        this.activeBoosterMode = null;
        BoosterManager.applyRollingPin(this.board, pos.row);
        this.renderTiles();
        await this.postMoveCascadeResolution();
      }
      return;
    }

    // 2. Normal Tile Selection & Swapping
    if (!this.selectedPos) {
      SoundFXEngine.playClick();
      this.selectedPos = pos;
      this.renderTiles();
    } else {
      const firstPos = this.selectedPos;
      this.selectedPos = null;

      if (firstPos.row === pos.row && firstPos.col === pos.col) {
        // Deselect
        this.renderTiles();
        return;
      }

      if (this.board.isAdjacent(firstPos, pos)) {
        await this.attemptSwap(firstPos, pos);
      } else {
        // Select new tile
        SoundFXEngine.playClick();
        this.selectedPos = pos;
        this.renderTiles();
      }
    }
  }

  private async attemptSwap(posA: GridPosition, posB: GridPosition): Promise<void> {
    this.isProcessing = true;
    SoundFXEngine.playSwap();

    const isValid = MoveValidator.isValidMove(this.board, posA, posB);

    if (!isValid) {
      SoundFXEngine.playInvalidSwap();
      this.renderTiles();
      this.isProcessing = false;
      return;
    }

    // Decrement moves and execute swap
    this.objectiveManager.decrementMoves();
    const result = MoveValidator.executeMove(this.board, { from: posA, to: posB });

    if (result.isSpecialCombo) {
      ScreenJuice.addTrauma(0.6);
      FloatingTextManager.spawnComboBanner(result.specialComboType || 'SUPER COMBO!');
      SoundFXEngine.playBombExplosion();
    }

    await this.processCascadeVisuals(result.cascades);
    await this.postMoveCascadeResolution();
  }

  private async processCascadeVisuals(cascades: ReturnType<typeof MoveValidator.executeMove>['cascades']): Promise<void> {
    for (const step of cascades) {
      this.objectiveManager.addScore(step.pointsEarned);

      // Play sound scaled to cascade combo
      SoundFXEngine.playMatch(step.comboMultiplier);

      if (step.comboMultiplier > 1) {
        FloatingTextManager.spawnComboBanner(step.comboMessage);
      }

      // Spawn particles for cleared tiles
      step.clearedPositions.forEach(p => {
        const cellEl = document.querySelector(`.grid-cell[data-row="${p.row}"][data-col="${p.col}"]`);
        if (cellEl) {
          const rect = cellEl.getBoundingClientRect();
          const t = this.board.getTile(p);
          ParticleEmitter.spawnFoodCrumbs(rect.left + rect.width / 2, rect.top + rect.height / 2, t ? t.foodType : null);
          FloatingTextManager.spawnScore(rect.left + 15, rect.top, Math.round(step.pointsEarned / step.clearedPositions.length));
        }
      });

      this.render();
      await new Promise(res => setTimeout(res, 220));
    }
  }

  private async postMoveCascadeResolution(): Promise<void> {
    const progress = this.objectiveManager.checkProgress(this.board);

    if (progress.isWon) {
      const coinsEarned = progress.starsEarned * 30;
      SaveSystem.recordLevelCompletion(this.level.levelNumber, progress.starsEarned, progress.currentScore);

      const modalLayer = document.getElementById('game-modal-layer');
      if (modalLayer) {
        GameModals.showVictory(
          modalLayer,
          this.level.levelNumber,
          progress.currentScore,
          progress.starsEarned,
          coinsEarned,
          this.onNextLevel,
          this.onBackToMap
        );
      }
    } else if (progress.isLost) {
      const modalLayer = document.getElementById('game-modal-layer');
      if (modalLayer) {
        GameModals.showDefeat(
          modalLayer,
          this.level.levelNumber,
          progress.currentScore,
          () => {
            this.render();
          },
          () => {
            this.objectiveManager.addExtraMoves(5);
            this.render();
          },
          this.onBackToMap
        );
      }
    } else {
      // Check for deadlocks and auto-shuffle if needed
      const availableMoves = MoveValidator.findAvailableMoves(this.board);
      if (availableMoves.length === 0) {
        FloatingTextManager.spawnComboBanner('NO MORE MOVES! SHUFFLING...');
        await new Promise(res => setTimeout(res, 600));
        MoveValidator.shuffleBoard(this.board);
        this.renderTiles();
      }
    }

    this.isProcessing = false;
  }

  private attachEvents(): void {
    const pauseBtn = document.getElementById('btn-pause-game');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        if (confirm('Return to World Map? (Your current move progress will be lost)')) {
          this.onBackToMap();
        }
      });
    }

    const boosterButtons = document.querySelectorAll('.booster-btn');
    boosterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.getAttribute('data-booster') as BoosterType;
        if (type === BoosterType.BLENDER) {
          if (BoosterManager.useBooster(BoosterType.BLENDER)) {
            BoosterManager.applyBlender(this.board);
            this.renderTiles();
          }
        } else if (type === BoosterType.EXTRA_MOVES) {
          if (BoosterManager.useBooster(BoosterType.EXTRA_MOVES)) {
            this.objectiveManager.addExtraMoves(5);
            SoundFXEngine.playVictoryFanfare();
            this.render();
          }
        } else {
          // Toggle targeting mode
          this.activeBoosterMode = this.activeBoosterMode === type ? null : type;
          this.render();
        }
      });
    });
  }

  private getObjectiveText(progress: ObjectiveProgress): string {
    switch (this.level.objectiveType) {
      case LevelObjectiveType.TARGET_SCORE:
        return `${progress.currentScore.toLocaleString()} / ${this.level.targetScore.toLocaleString()}`;
      case LevelObjectiveType.CLEAR_FROSTING:
        return `Frostings: ${progress.frostingsRemaining} Left`;
      case LevelObjectiveType.COLLECT_INGREDIENTS:
        return `Ingredients: Collected`;
      default:
        return `Score Target`;
    }
  }

  private calculateProgressPercent(score: number): number {
    const target = this.level.starThresholds[2]; // 3-star threshold
    return Math.min(100, Math.round((score / target) * 100));
  }
}
