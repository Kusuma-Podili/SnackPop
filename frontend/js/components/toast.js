/**
 * Toast Notification System for Food Truck Tycoon.
 */
class ToastManager {
  constructor() {
    this.container = document.getElementById('toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      document.body.appendChild(this.container);
    }
  }

  show(message, type = 'info', icon = '💡') {
    const toast = document.createElement('div');
    toast.className = 'toast-item flex items-center gap-3 border shadow-lg';

    let borderCol = 'border-slate-700';
    if (type === 'success') {
      borderCol = 'border-emerald-500 bg-emerald-950/90 text-emerald-100';
      icon = icon || '✅';
    } else if (type === 'error') {
      borderCol = 'border-rose-500 bg-rose-950/90 text-rose-100';
      icon = icon || '❌';
    } else if (type === 'warning') {
      borderCol = 'border-amber-500 bg-amber-950/90 text-amber-100';
      icon = icon || '⚠️';
    } else {
      borderCol = 'border-blue-500 bg-slate-900/95 text-white';
    }

    toast.className += ` ${borderCol}`;
    toast.innerHTML = `
      <span class="text-xl flex-shrink-0">${icon}</span>
      <div class="flex-1 text-sm font-semibold leading-snug">${message}</div>
    `;

    this.container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  success(msg, icon = '🎉') {
    this.show(msg, 'success', icon);
    window.soundEngine?.playCoin();
  }

  error(msg, icon = '⚠️') {
    this.show(msg, 'error', icon);
    window.soundEngine?.playBurned();
  }

  info(msg, icon = 'ℹ️') {
    this.show(msg, 'info', icon);
  }

  warning(msg, icon = '⚠️') {
    this.show(msg, 'warning', icon);
  }
}

window.toast = new ToastManager();
