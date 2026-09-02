/**
 * Player Profile & Chef Card View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.profile = {
  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Chef Profile...</div>
      </div>
    `;

    try {
      const profile = await window.api.getPlayerProfile();
      window.gameState.setPlayerProfile(profile);
      const truck = window.gameState.truck || { name: 'Flavor Cruiser', tier_level: 1 };
      const p = profile;

      container.innerHTML = `
        <div class="space-y-6 max-w-3xl mx-auto pb-12">
          
          <!-- Profile Card -->
          <div class="tycoon-card p-6 sm:p-8 bg-white border border-orange-100 shadow-md space-y-6">
            
            <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-6 border-b border-slate-100 text-center sm:text-left">
              <div class="w-24 h-24 rounded-3xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-5xl shadow-lg shadow-orange-200">
                👨‍🍳
              </div>

              <div class="space-y-2 flex-1">
                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <h2 class="text-2xl font-black text-slate-900">${p.name}</h2>
                  <span class="badge badge-orange font-black">Level ${p.level} Chef</span>
                </div>
                <p class="text-xs text-slate-500 font-medium">
                  Head Executive Chef & Owner of <strong class="text-slate-800">${truck.name}</strong>
                </p>

                <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-1">
                  <div class="bg-amber-50 text-amber-900 border border-amber-200 px-3 py-1 rounded-xl text-xs font-black">
                    💰 ${Number(p.coins).toLocaleString()} Coins
                  </div>
                  <div class="bg-yellow-50 text-yellow-900 border border-yellow-200 px-3 py-1 rounded-xl text-xs font-black">
                    ⭐ ${Number(p.reputation).toFixed(1)} / 5.0 Rating
                  </div>
                  <div class="bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-xl text-xs font-black">
                    🍽️ ${p.orders_completed} Orders Served
                  </div>
                </div>
              </div>
            </div>

            <!-- Profile Edit Form -->
            <form onsubmit="window.views.profile.saveProfile(event)" class="space-y-4">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Chef Details</h4>
              
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Chef Display Name</label>
                <input type="text" id="prof-name" value="${p.name}" required minlength="2" maxlength="30" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:outline-none">
              </div>

              <button type="submit" class="btn-primary py-2.5 px-5 text-xs font-black shadow-xs">
                <span>💾</span> Update Chef Name
              </button>
            </form>

            <!-- Lifetime Statistics Table -->
            <div class="space-y-3 pt-2">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Career Achievements</h4>
              
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-bold text-slate-400 uppercase">Gross Revenue</span>
                  <div class="text-sm font-black text-slate-800 mt-0.5">${Number(p.total_revenue).toLocaleString()} 💰</div>
                </div>

                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-bold text-slate-400 uppercase">Perfect Cooks</span>
                  <div class="text-sm font-black text-emerald-600 mt-0.5">${p.perfect_cooks} ⭐</div>
                </div>

                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-bold text-slate-400 uppercase">Daily Streak</span>
                  <div class="text-sm font-black text-orange-600 mt-0.5">${p.daily_streak} Days 🔥</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load profile</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.profile.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  async saveProfile(e) {
    e.preventDefault();
    const name = document.getElementById('prof-name').value;
    try {
      await window.api.request('/player/profile', {
        method: 'PUT',
        body: JSON.stringify({ name })
      });
      window.toast.success('Chef profile updated!');
      window.soundEngine?.playCoin();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to update profile.');
    }
  }
};
