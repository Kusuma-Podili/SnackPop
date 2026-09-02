/**
 * Missions & Daily Quests View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.missions = {
  missionsList: [],

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Missions...</div>
      </div>
    `;

    try {
      this.missionsList = await window.api.getMissions();

      const daily = this.missionsList.filter(m => m.mission_type === 'DAILY');
      const lifetime = this.missionsList.filter(m => m.mission_type === 'LIFETIME');

      container.innerHTML = `
        <div class="space-y-8 pb-12">
          
          <!-- Missions Header -->
          <div class="tycoon-card p-6 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white shadow-lg space-y-2 rounded-3xl">
            <div class="flex items-center gap-2">
              <span class="text-2xl">🎯</span>
              <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">Tycoon Missions & Quests</h2>
            </div>
            <p class="text-xs sm:text-sm text-orange-100 font-medium max-w-xl">
              Complete daily business milestones and lifetime achievements to earn extra coins, bonus XP, and exclusive rewards!
            </p>
          </div>

          <!-- Daily Missions Section -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-xl">⚡</span>
              <h3 class="text-lg font-black text-slate-900">Daily Business Goals</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              ${daily.map(m => this.renderMissionCard(m)).join('')}
            </div>
          </div>

          <!-- Lifetime Milestone Quests -->
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <span class="text-xl">🏆</span>
              <h3 class="text-lg font-black text-slate-900">Lifetime Tycoon Milestones</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              ${lifetime.map(m => this.renderMissionCard(m)).join('')}
            </div>
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load missions</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.missions.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  renderMissionCard(m) {
    const progressPct = Math.min(100, Math.round((m.current_value / m.target_value) * 100));

    return `
      <div class="tycoon-card p-5 space-y-4 flex flex-col justify-between border-2 ${m.is_claimed ? 'border-slate-200 bg-slate-50/70 opacity-75' : m.is_completed ? 'border-emerald-400 bg-emerald-50/20 shadow-md' : 'border-slate-200'}">
        
        <div class="space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <span class="text-3xl">${m.icon}</span>
              <div>
                <h4 class="font-extrabold text-sm text-slate-900 leading-tight">${m.title}</h4>
                <span class="text-xs text-slate-500 font-medium">${m.description}</span>
              </div>
            </div>
            <span class="badge ${m.mission_type === 'DAILY' ? 'badge-orange' : 'badge-purple'} text-[9px]">
              ${m.mission_type}
            </span>
          </div>

          <!-- Progress bar -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-xs font-bold">
              <span class="text-slate-500">Progress</span>
              <span class="text-slate-800">${m.current_value} / ${m.target_value} (${progressPct}%)</span>
            </div>
            <div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div class="h-full rounded-full transition-all duration-300 ${m.is_completed ? 'bg-emerald-500' : 'bg-orange-500'}" style="width: ${progressPct}%"></div>
            </div>
          </div>

          <!-- Reward Pills -->
          <div class="flex items-center gap-2 text-xs pt-1">
            <span class="bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg font-black">
              +${m.reward_coins} 💰
            </span>
            <span class="bg-orange-50 text-orange-900 border border-orange-200 px-2.5 py-1 rounded-lg font-black">
              +${m.reward_xp} ⭐ XP
            </span>
          </div>
        </div>

        <!-- Action Button -->
        <div class="pt-2 border-t border-slate-100">
          ${m.is_claimed ? `
            <button disabled class="w-full bg-slate-100 text-slate-400 py-2.5 rounded-xl font-bold text-xs cursor-default">
              ✅ Reward Claimed
            </button>
          ` : m.is_completed ? `
            <button onclick="window.views.missions.claimReward(${m.id})" class="w-full btn-success text-xs font-black py-2.5 shadow-md pulse-glow">
              🎉 Claim Reward (+${m.reward_coins} Coins)
            </button>
          ` : `
            <button onclick="window.app.showView('cooking')" class="w-full btn-secondary text-xs font-bold py-2 hover:border-orange-400 hover:text-orange-600">
              🍳 Cook to Complete &rarr;
            </button>
          `}
        </div>

      </div>
    `;
  },

  async claimReward(missionId) {
    try {
      const res = await window.api.claimMissionReward(missionId);
      window.toast.success(res.message);
      window.soundEngine?.playLevelUp();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to claim reward.');
    }
  }
};
