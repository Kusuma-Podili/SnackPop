/**
 * Locations & Territory Map View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.locations = {
  locationsList: [],

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading City Locations...</div>
      </div>
    `;

    try {
      this.locationsList = await window.api.getLocations();
      const profile = window.gameState.playerProfile || { level: 1, coins: 0 };

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Locations Header -->
          <div class="tycoon-card p-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg space-y-2 rounded-3xl">
            <div class="flex items-center gap-2">
              <span class="text-2xl">🗺️</span>
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">City Hotspots & Territories</h2>
            </div>
            <p class="text-xs sm:text-sm text-blue-100 font-medium max-w-xl">
              Park your truck in high-traffic zones! Unlock vibrant beach boardwalks, bustling university campuses, high-end corporate business plazas, and downtown nightlife.
            </p>
          </div>

          <!-- Locations Grid -->
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.locationsList.map(loc => {
              const meetsLevel = profile.level >= loc.unlock_level;
              const canAfford = profile.coins >= loc.unlock_cost;

              return `
                <div class="tycoon-card p-6 space-y-4 flex flex-col justify-between border-2 ${loc.is_current ? 'border-orange-500 bg-orange-50/15 shadow-lg' : loc.is_unlocked ? 'border-slate-200' : 'border-slate-200 bg-slate-50/70 opacity-80'}">
                  
                  <div class="space-y-3">
                    <div class="flex items-start justify-between">
                      <div class="flex items-center gap-3">
                        <span class="text-4xl">${loc.icon}</span>
                        <div>
                          <h3 class="font-extrabold text-base text-slate-900 leading-tight">${loc.name}</h3>
                          <span class="text-xs text-slate-500 font-medium">${'⭐'.repeat(loc.difficulty_rating)} Difficulty</span>
                        </div>
                      </div>
                      ${loc.is_current ? `
                        <span class="badge badge-orange text-[9px]">Active Spot</span>
                      ` : loc.is_unlocked ? `
                        <span class="badge badge-green text-[9px]">Unlocked</span>
                      ` : `
                        <span class="badge badge-purple text-[9px]">Level ${loc.unlock_level}</span>
                      `}
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed font-medium">
                      ${loc.description}
                    </p>

                    <div class="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Traffic</span>
                        <div class="text-xs font-black text-slate-800">${Number(loc.customer_traffic_multiplier).toFixed(2)}x</div>
                      </div>
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Tip Boost</span>
                        <div class="text-xs font-black text-emerald-600">+${Math.round((loc.tip_multiplier - 1.0) * 100)}%</div>
                      </div>
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Fav Category</span>
                        <div class="text-xs font-black text-orange-600">${loc.popular_category}</div>
                      </div>
                    </div>
                  </div>

                  <!-- Action Buttons -->
                  <div class="pt-2 border-t border-slate-100">
                    ${loc.is_current ? `
                      <button disabled class="w-full bg-orange-100 text-orange-700 py-2.5 rounded-xl font-black text-xs cursor-default">
                        🚚 Currently Parked Here
                      </button>
                    ` : loc.is_unlocked ? `
                      <button onclick="window.views.locations.switchLocation(${loc.id})" class="w-full btn-secondary text-xs font-black py-2.5 hover:border-orange-500 hover:text-orange-600 shadow-xs">
                        🚚 Drive Truck Here
                      </button>
                    ` : `
                      <button onclick="window.views.locations.unlockLocation(${loc.id})" ${(!meetsLevel || !canAfford) ? 'disabled' : ''} class="w-full btn-primary text-xs font-black py-2.5 shadow-md ${(!meetsLevel || !canAfford) ? 'opacity-50 cursor-not-allowed' : ''}">
                        <span>🔓</span> Unlock Spot (${Number(loc.unlock_cost).toLocaleString()} Coins)
                      </button>
                    `}
                  </div>

                </div>
              `;
            }).join('')}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load locations</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.locations.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  async unlockLocation(locationId) {
    try {
      const res = await window.api.unlockLocation(locationId);
      window.toast.success(res.message);
      window.soundEngine?.playLevelUp();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to unlock location.');
    }
  },

  async switchLocation(locationId) {
    try {
      const res = await window.api.switchLocation(locationId);
      window.toast.success(res.message);
      window.soundEngine?.playCoin();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to switch location.');
    }
  }
};
