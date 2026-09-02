/**
 * Modal Manager for Dialogs and Daily Rewards.
 */
class ModalManager {
  constructor() {
    this.container = document.getElementById('modal-container');
  }

  open(htmlContent) {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-orange-100 relative animate-in fade-in zoom-in duration-200">
        <button onclick="window.modal.close()" class="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition text-lg font-bold">
          ✕
        </button>
        ${htmlContent}
      </div>
    `;
    this.container.classList.remove('hidden');
  }

  close() {
    if (!this.container) return;
    this.container.classList.add('hidden');
    this.container.innerHTML = '';
  }
}

window.modal = new ModalManager();
