/**
 * Central State Store for Food Truck Tycoon.
 */
class GameState {
  constructor() {
    this.user = null;
    this.playerProfile = null;
    this.truck = null;
    this.activeOrders = [];
    this.currentView = 'landing';
    this.isBusinessOpen = false;
    this.shiftStats = {
      ordersServed: 0,
      revenueEarned: 0,
      tipsEarned: 0,
    };
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  setUser(user) {
    this.user = user;
    this.notify();
  }

  setPlayerProfile(profile) {
    this.playerProfile = profile;
    this.notify();
    this.updateHUD();
  }

  setTruck(truck) {
    this.truck = truck;
    this.notify();
  }

  setActiveOrders(orders) {
    this.activeOrders = orders;
    this.notify();
  }

  setView(viewName) {
    this.currentView = viewName;
    this.notify();
  }

  updateHUD() {
    if (!this.playerProfile) return;
    const p = this.playerProfile;

    // Update Player Name & Avatar
    const nameEl = document.getElementById('hud-player-name');
    if (nameEl) nameEl.textContent = p.name || 'Chef';

    // Coins
    const coinsEl = document.getElementById('hud-coins');
    if (coinsEl) coinsEl.textContent = Number(p.coins || 0).toLocaleString();

    // Level & XP Bar
    const levelEl = document.getElementById('hud-level');
    if (levelEl) levelEl.textContent = `Lvl ${p.level || 1}`;

    const xpTextEl = document.getElementById('hud-xp-text');
    if (xpTextEl) xpTextEl.textContent = `${p.xp || 0} / ${p.xp_to_next_level || 100} XP`;

    const xpBarEl = document.getElementById('hud-xp-bar');
    if (xpBarEl) {
      const pct = Math.min(100, Math.max(0, ((p.xp || 0) / (p.xp_to_next_level || 100)) * 100));
      xpBarEl.style.width = `${pct}%`;
    }

    // Reputation Stars
    const repEl = document.getElementById('hud-reputation');
    if (repEl) {
      const rep = Number(p.reputation || 4.0).toFixed(1);
      repEl.innerHTML = `⭐ ${rep}`;
    }
  }
}

window.gameState = new GameState();
