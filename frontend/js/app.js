/**
 * Main Application Orchestrator for Food Truck Tycoon.
 */
class TycoonApp {
  constructor() {
    this.init();
  }

  async init() {
    // Check existing session
    const token = window.api.getToken();
    if (token) {
      try {
        await this.bootstrapSession();
      } catch (e) {
        console.warn('Session expired or invalid:', e);
        this.showView('landing');
      }
    } else {
      this.showView('landing');
    }
  }

  async bootstrapSession() {
    try {
      const me = await window.api.getMe();
      window.gameState.setUser(me);

      if (me.role === 'ADMIN') {
        this.setupUIRole('ADMIN');
        this.showView('admin-dashboard');
      } else {
        this.setupUIRole('PLAYER');
        if (me.player_profile) {
          window.gameState.setPlayerProfile(me.player_profile);
          // Fetch initial truck data
          try {
            const truck = await window.api.getFoodTruck();
            window.gameState.setTruck(truck);
          } catch (err) {
            console.error('Truck load error:', err);
          }
        }
        this.showView('dashboard');
      }
    } catch (err) {
      window.api.clearToken();
      this.showView('landing');
      throw err;
    }
  }

  setupUIRole(role) {
    const topHud = document.getElementById('top-hud');
    const sidebar = document.getElementById('sidebar-nav');
    const mobileNav = document.getElementById('mobile-nav');
    const adminNavLinks = document.getElementById('admin-nav-links');
    const playerNavLinks = document.getElementById('player-nav-links');

    if (topHud) topHud.classList.remove('hidden');
    if (sidebar) sidebar.classList.remove('hidden');
    if (mobileNav) mobileNav.classList.remove('hidden');

    if (role === 'ADMIN') {
      if (adminNavLinks) adminNavLinks.classList.remove('hidden');
      if (playerNavLinks) playerNavLinks.classList.add('hidden');
    } else {
      if (adminNavLinks) adminNavLinks.classList.add('hidden');
      if (playerNavLinks) playerNavLinks.classList.remove('hidden');
    }
  }

  showView(viewName) {
    window.soundEngine?.playClick();
    window.gameState.setView(viewName);

    // Update active nav highlights
    document.querySelectorAll('.nav-item').forEach(el => {
      if (el.dataset.nav === viewName) {
        el.classList.add('bg-orange-100', 'text-orange-700', 'font-extrabold');
        el.classList.remove('text-slate-600');
      } else {
        el.classList.remove('bg-orange-100', 'text-orange-700', 'font-extrabold');
        el.classList.add('text-slate-600');
      }
    });

    const container = document.getElementById('app-view');
    if (!container) return;

    if (viewName === 'landing') {
      const topHud = document.getElementById('top-hud');
      const sidebar = document.getElementById('sidebar-nav');
      const mobileNav = document.getElementById('mobile-nav');
      if (topHud) topHud.classList.add('hidden');
      if (sidebar) sidebar.classList.add('hidden');
      if (mobileNav) mobileNav.classList.add('hidden');
      container.innerHTML = window.views.landing.render();
      return;
    }

    if (viewName === 'auth') {
      const topHud = document.getElementById('top-hud');
      const sidebar = document.getElementById('sidebar-nav');
      const mobileNav = document.getElementById('mobile-nav');
      if (topHud) topHud.classList.add('hidden');
      if (sidebar) sidebar.classList.add('hidden');
      if (mobileNav) mobileNav.classList.add('hidden');
      window.views.auth.render();
      return;
    }

    // Render registered view
    const viewObj = window.views[viewName] || window.views[viewName.replace('-', '_')];
    if (viewObj && typeof viewObj.render === 'function') {
      viewObj.render();
    } else {
      container.innerHTML = `
        <div class="tycoon-card p-12 text-center space-y-4">
          <div class="text-4xl">🚧</div>
          <h2 class="text-xl font-bold text-slate-800">Loading module: ${viewName}...</h2>
        </div>
      `;
    }
  }

  showAuth(mode = 'login') {
    window.views.auth.mode = mode;
    this.showView('auth');
  }

  async quickDemoLogin(role = 'player') {
    try {
      if (role === 'player') {
        const res = await window.api.login('chef_mario', 'PlayerSecret123!');
        window.api.setToken(res.access_token);
        window.toast.success('Logged in as Chef Mario! Ready to cook!');
      } else {
        const res = await window.api.login('admin', 'AdminSecret2026!');
        window.api.setToken(res.access_token);
        window.toast.success('Admin access granted.');
      }
      await this.bootstrapSession();
    } catch (err) {
      window.toast.error('Quick demo login failed: ' + err.message);
    }
  }

  toggleAudio() {
    const isMuted = window.soundEngine.toggleMute();
    const icon = document.getElementById('audio-icon');
    if (icon) icon.textContent = isMuted ? '🔇' : '🔊';
    window.toast.info(isMuted ? 'Sound Muted' : 'Sound Enabled');
  }

  async openDailyRewardsModal() {
    try {
      const status = await window.api.getDailyRewardStatus();
      const currentStreak = status.daily_streak || 0;
      const canClaim = status.can_claim;

      const days = [
        { day: 1, reward: '100 Coins', icon: '💰' },
        { day: 2, reward: '150 Coins', icon: '💰' },
        { day: 3, reward: '250 Coins', icon: '💰' },
        { day: 4, reward: 'Ingredient Pack', icon: '📦' },
        { day: 5, reward: '500 Coins', icon: '💎' },
        { day: 6, reward: 'Special Recipe XP', icon: '📜' },
        { day: 7, reward: '1,000 Coins + Trophy', icon: '🏆' },
      ];

      const html = `
        <div class="space-y-6 text-center">
          <div class="space-y-1">
            <span class="text-4xl">🎁</span>
            <h3 class="text-xl font-black text-slate-900">7-Day Daily Login Streak</h3>
            <p class="text-xs text-slate-500 font-medium">Log in every day to claim compounding cash & ingredient crates!</p>
          </div>

          <div class="grid grid-cols-4 sm:grid-cols-7 gap-2">
            ${days.map(d => {
              const isPast = d.day < currentStreak;
              const isCurrent = d.day === (currentStreak % 7 === 0 && currentStreak > 0 ? 7 : (currentStreak % 7) + 1);
              let stateClass = 'bg-slate-50 border-slate-200 text-slate-400';
              if (isPast) stateClass = 'bg-emerald-50 border-emerald-300 text-emerald-700';
              if (isCurrent) stateClass = 'bg-orange-50 border-orange-400 text-orange-700 ring-2 ring-orange-400 ring-offset-2 pulse-glow';

              return `
                <div class="p-2.5 rounded-2xl border flex flex-col items-center gap-1 ${stateClass}">
                  <span class="text-[10px] font-extrabold uppercase">Day ${d.day}</span>
                  <span class="text-2xl">${d.icon}</span>
                  <span class="text-[10px] font-bold leading-tight">${d.reward}</span>
                  ${isPast ? '<span class="text-xs">✅</span>' : ''}
                </div>
              `;
            }).join('')}
          </div>

          <div>
            ${canClaim ? `
              <button onclick="window.app.claimDailyReward()" class="btn-primary w-full py-3 text-sm font-extrabold shadow-md">
                🎉 Claim Today's Bonus!
              </button>
            ` : `
              <button disabled class="w-full bg-slate-100 text-slate-400 py-3 rounded-xl font-bold text-sm cursor-not-allowed">
                ✅ Today's Bonus Already Claimed! Come back tomorrow!
              </button>
            `}
          </div>
        </div>
      `;
      window.modal.open(html);
    } catch (err) {
      window.toast.error('Unable to fetch daily reward: ' + err.message);
    }
  }

  async claimDailyReward() {
    try {
      const res = await window.api.claimDailyReward();
      window.modal.close();
      window.toast.success(res.message || 'Daily reward claimed!');
      window.soundEngine.playLevelUp();
      await this.refreshProfile();
    } catch (err) {
      window.toast.error(err.message || 'Failed to claim daily reward.');
    }
  }

  async refreshProfile() {
    try {
      const profile = await window.api.getPlayerProfile();
      window.gameState.setPlayerProfile(profile);
    } catch (e) {
      console.warn('Profile refresh failed:', e);
    }
  }

  logout() {
    window.api.clearToken();
    window.gameState.setUser(null);
    window.gameState.setPlayerProfile(null);
    window.toast.info('Logged out successfully.');
    this.showView('landing');
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.app = new TycoonApp();
});
