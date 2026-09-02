import { SaveSystem } from '../systems/save_system';
import { SoundFXEngine } from '../audio/synth';
import { MusicEngine } from '../audio/music_generator';

export class SettingsModal {
  private container: HTMLElement;
  private onClose: () => void;

  constructor(container: HTMLElement, onClose: () => void) {
    this.container = container;
    this.onClose = onClose;
  }

  public render(): void {
    const data = SaveSystem.load();

    const html = `
      <div class="modal-backdrop settings-modal">
        <div class="modal-card settings-card">
          <button class="modal-close-btn" id="btn-close-settings">✕</button>
          <div class="settings-header">
            <h2 class="settings-title">⚙️ Kitchen Settings ⚙️</h2>
          </div>

          <div class="settings-body">
            <!-- SFX Volume -->
            <div class="setting-row">
              <label class="setting-label">🔊 Sound Effects Volume</label>
              <input type="range" min="0" max="1" step="0.05" value="${data.settings.sfxVolume}" id="slider-sfx" class="range-slider"/>
            </div>

            <!-- Music Volume -->
            <div class="setting-row">
              <label class="setting-label">🎵 Background Music Volume</label>
              <input type="range" min="0" max="1" step="0.05" value="${data.settings.musicVolume}" id="slider-music" class="range-slider"/>
            </div>

            <!-- High Contrast / Colorblind Mode -->
            <div class="setting-row toggle-row">
              <label class="setting-label" for="toggle-contrast">👁️ High Contrast / Shapes Assist</label>
              <input type="checkbox" id="toggle-contrast" ${data.settings.highContrast ? 'checked' : ''} class="toggle-checkbox"/>
            </div>

            <!-- Particle Effects -->
            <div class="setting-row toggle-row">
              <label class="setting-label" for="toggle-particles">✨ Particle FX & Confetti</label>
              <input type="checkbox" id="toggle-particles" ${data.settings.particlesEnabled ? 'checked' : ''} class="toggle-checkbox"/>
            </div>

            <!-- Reset Progress -->
            <div class="danger-zone">
              <button class="game-btn btn-danger btn-block" id="btn-reset-data">⚠️ Reset All Saved Progress</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachEvents();
  }

  private attachEvents(): void {
    const closeBtn = document.getElementById('btn-close-settings');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        this.container.innerHTML = '';
        this.onClose();
      });
    }

    const sfxSlider = document.getElementById('slider-sfx') as HTMLInputElement;
    if (sfxSlider) {
      sfxSlider.addEventListener('input', (e) => {
        const val = parseFloat((e.target as HTMLInputElement).value);
        SoundFXEngine.setVolume(val);
        const data = SaveSystem.load();
        data.settings.sfxVolume = val;
        SaveSystem.save(data);
      });
    }

    const musicSlider = document.getElementById('slider-music') as HTMLInputElement;
    if (musicSlider) {
      musicSlider.addEventListener('input', (e) => {
        const val = parseFloat((e.target as HTMLInputElement).value);
        MusicEngine.setVolume(val);
        const data = SaveSystem.load();
        data.settings.musicVolume = val;
        SaveSystem.save(data);
      });
    }

    const contrastToggle = document.getElementById('toggle-contrast') as HTMLInputElement;
    if (contrastToggle) {
      contrastToggle.addEventListener('change', (e) => {
        const val = (e.target as HTMLInputElement).checked;
        const data = SaveSystem.load();
        data.settings.highContrast = val;
        SaveSystem.save(data);
        document.body.classList.toggle('high-contrast-mode', val);
      });
    }

    const particleToggle = document.getElementById('toggle-particles') as HTMLInputElement;
    if (particleToggle) {
      particleToggle.addEventListener('change', (e) => {
        const val = (e.target as HTMLInputElement).checked;
        const data = SaveSystem.load();
        data.settings.particlesEnabled = val;
        SaveSystem.save(data);
      });
    }

    const resetBtn = document.getElementById('btn-reset-data');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all stars, coins, and level progress? This cannot be undone.')) {
          SaveSystem.resetProgress();
          location.reload();
        }
      });
    }
  }
}
