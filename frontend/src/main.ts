import { WorldMapRenderer } from './levels/world_map';
import { GameScreen } from './components/game_screen';
import { GameModals } from './components/modals';
import { DailySpinWheel } from './components/daily_spin_wheel';
import { CookbookModal } from './components/cookbook';
import { AchievementsModal } from './components/achievements';
import { SettingsModal } from './components/settings_modal';
import { LevelDefinition, getLevelDefinition } from './levels/level_definitions';
import { ParticleEmitter } from './juice/particle_emitter';
import { SoundFXEngine } from './audio/synth';
import { MusicEngine } from './audio/music_generator';

export class SnackPopApp {
  private appContainer: HTMLElement;
  private modalContainer: HTMLElement;
  private currentScreen: 'MAP' | 'GAME' = 'MAP';
  private currentLevelDef: LevelDefinition | null = null;

  constructor() {
    this.appContainer = document.getElementById('app-main')!;
    this.modalContainer = document.getElementById('app-modals')!;

    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    if (canvas) {
      ParticleEmitter.attach(canvas);
    }

    this.initNavigation();
    this.showWorldMap();
  }

  private initNavigation(): void {
    const btnSpin = document.getElementById('nav-btn-spin');
    if (btnSpin) {
      btnSpin.addEventListener('click', () => {
        SoundFXEngine.playClick();
        const spinWheel = new DailySpinWheel(this.modalContainer, () => this.showWorldMap());
        spinWheel.render();
      });
    }

    const btnCookbook = document.getElementById('nav-btn-cookbook');
    if (btnCookbook) {
      btnCookbook.addEventListener('click', () => {
        SoundFXEngine.playClick();
        const cookbook = new CookbookModal(this.modalContainer, () => {});
        cookbook.render();
      });
    }

    const btnAch = document.getElementById('nav-btn-achievements');
    if (btnAch) {
      btnAch.addEventListener('click', () => {
        SoundFXEngine.playClick();
        const ach = new AchievementsModal(this.modalContainer, () => this.showWorldMap());
        ach.render();
      });
    }

    const btnSettings = document.getElementById('nav-btn-settings');
    if (btnSettings) {
      btnSettings.addEventListener('click', () => {
        SoundFXEngine.playClick();
        const settings = new SettingsModal(this.modalContainer, () => {});
        settings.render();
      });
    }

    const btnMusic = document.getElementById('nav-btn-music');
    if (btnMusic) {
      let musicActive = false;
      btnMusic.addEventListener('click', () => {
        musicActive = !musicActive;
        if (musicActive) {
          MusicEngine.start();
          btnMusic.textContent = '🎵 Music: ON';
        } else {
          MusicEngine.stop();
          btnMusic.textContent = '🔇 Music: OFF';
        }
      });
    }
  }

  public showWorldMap(): void {
    this.currentScreen = 'MAP';
    const map = new WorldMapRenderer(this.appContainer, (level) => {
      this.currentLevelDef = level;
      GameModals.showLevelBriefing(
        this.modalContainer,
        level,
        (boosters) => {
          this.launchLevel(level, boosters);
        },
        () => {}
      );
    });
    map.render();
  }

  public launchLevel(level: LevelDefinition, boosters: { startFlavorBomb: boolean }): void {
    this.currentScreen = 'GAME';
    this.currentLevelDef = level;

    const game = new GameScreen(
      this.appContainer,
      level,
      boosters,
      () => this.showWorldMap(),
      () => {
        const nextLvl = getLevelDefinition(level.levelNumber + 1);
        this.launchLevel(nextLvl, { startFlavorBomb: false });
      }
    );
    game.render();
  }
}

// Global initialization
window.addEventListener('DOMContentLoaded', () => {
  new SnackPopApp();
});
