/**
 * Achievements & Trophy Showcase View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.achievements = {
  achievementsList: [],

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Trophy Room...</div>
      </div>
    `;

    try {
      this.achievementsList = await window.api.getAchievements();
      const unlockedCount = this.achievementsList.filter(a => a.is_unlocked).length;
      const totalCount = this.achievementsList.length;

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Trophy Banner -->
          <div class="tycoon-card p-6 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 text-white shadow-lg space-y-3 rounded-3xl">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">🏆</span>
                  <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">Trophy Room & Hall of Fame</h2>
                </div>
                <p class="text-xs sm:text-sm text-yellow-100 font-medium max-w-xl">
                  Unlock milestone badges as you cook, serve, and build your food empire.
                </p>
              </div>

              <!-- Unlocked Trophies Count -->
              <div class="bg-white/20 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 text-center">
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-amber-100">Badges Unlocked</span>
                <div class="text-xl sm:text-2xl font-black text-white">${unlockedCount} / ${totalCount}</div>
              </div>
            </div>
          </div>

          <!-- Achievements Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${this.achievementsList.map(ach => `
              <div class="tycoon-card p-5 space-y-4 border-2 flex flex-col justify-between ${ach.is_unlocked ? 'border-amber-400 bg-amber-50/20 shadow-md' : 'border-slate-200 bg-slate-50/60 opacity-70'}">
                
                <div class="space-y-3">
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-2xl ${ach.is_unlocked ? 'bg-amber-400 text-amber-950 shadow-md' : 'bg-slate-200 text-slate-400'} flex items-center justify-center text-2xl">
                        ${ach.icon}
                      </div>
                      <div>
                        <h4 class="font-extrabold text-sm text-slate-900 leading-tight">${ach.title}</h4>
                        <span class="badge ${ach.is_unlocked ? 'badge-green' : 'badge-orange'} text-[9px] mt-0.5">
                          ${ach.is_unlocked ? '✅ UNLOCKED' : 'IN PROGRESS'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p class="text-xs text-slate-600 leading-relaxed font-medium">
                    ${ach.description}
                  </p>

                  <!-- Progress Bar -->
                  <div class="space-y-1">
                    <div class="flex items-center justify-between text-[11px] font-bold">
                      <span class="text-slate-400">Progress</span>
                      <span class="text-slate-700">${ach.current_progress}%</span>
                    </div>
                    <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div class="h-full rounded-full transition-all duration-300 ${ach.is_unlocked ? 'bg-amber-500' : 'bg-orange-400'}" style="width: ${ach.current_progress}%"></div>
                    </div>
                  </div>
                </div>

                <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span class="font-bold text-slate-400">Reward:</span>
                  <div class="flex items-center gap-2">
                    <span class="font-extrabold text-amber-600">+${ach.reward_coins} 💰</span>
                    <span class="font-extrabold text-orange-600">+${ach.reward_xp} ⭐</span>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load achievements</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.achievements.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  }
};
