/**
 * Player Dashboard View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.dashboard = {
  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Tycoon Dashboard...</div>
      </div>
    `;

    try {
      const profile = await window.api.getPlayerProfile();
      window.gameState.setPlayerProfile(profile);

      let truck = null;
      try {
        truck = await window.api.getFoodTruck();
        window.gameState.setTruck(truck);
      } catch (e) {
        console.warn('Truck fetch error:', e);
      }

      const p = profile;
      const profit = Math.max(0, p.total_revenue - p.total_expenses);
      const tierNames = ["Basic", "Improved", "Professional", "Premium", "Elite"];
      const truckTierName = tierNames[(truck?.tier_level || 1) - 1] + " Truck";

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Welcome Hero Banner -->
          <div class="tycoon-card bg-gradient-to-r from-orange-500 via-amber-500 to-red-500 text-white p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg shadow-orange-500/15">
            <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div class="space-y-2">
                <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide text-amber-100">
                  <span>👨‍🍳</span> Chef Profile: ${p.name}
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tight">
                  Welcome to Your Kitchen, Chef!
                </h2>
                <p class="text-xs sm:text-sm text-orange-100 font-medium max-w-xl">
                  Your <strong class="text-white">${truck?.name || 'Food Truck'}</strong> (${truckTierName}) is parked on <strong class="text-white">City Street</strong>. Stock up on ingredients and open for business!
                </p>
              </div>

              <!-- Quick Launch Actions -->
              <div class="flex flex-wrap items-center gap-3">
                <button onclick="window.app.showView('cooking')" class="bg-white text-orange-600 hover:bg-orange-50 font-black px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition transform flex items-center gap-2 text-sm sm:text-base">
                  <span class="text-xl">🔥</span> Start Business Shift
                </button>
                <button onclick="window.app.openDailyRewardsModal()" class="bg-orange-700/80 hover:bg-orange-700 text-white font-bold px-4 py-3 rounded-2xl border border-orange-400/40 text-xs sm:text-sm flex items-center gap-2">
                  <span>🎁</span> Daily Bonus
                </button>
              </div>
            </div>
            
            <div class="absolute right-4 -bottom-6 opacity-15 text-8xl pointer-events-none select-none">
              🚚
            </div>
          </div>

          <!-- KPI Metric Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <!-- Total Revenue -->
            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-amber-500">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Revenue</span>
                <span class="text-xl">💰</span>
              </div>
              <div class="text-xl sm:text-2xl font-black text-slate-900">
                ${Number(p.total_revenue).toLocaleString()} <span class="text-xs text-amber-600 font-bold">Coins</span>
              </div>
              <p class="text-[11px] text-slate-500 font-medium">Lifetime sales & tips</p>
            </div>

            <!-- Net Profit -->
            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-emerald-500">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Net Profit</span>
                <span class="text-xl">📈</span>
              </div>
              <div class="text-xl sm:text-2xl font-black text-emerald-600">
                +${Number(profit).toLocaleString()} <span class="text-xs text-emerald-700 font-bold">Coins</span>
              </div>
              <p class="text-[11px] text-slate-500 font-medium">After ingredient & gear costs</p>
            </div>

            <!-- Orders Completed -->
            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-blue-500">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Orders Served</span>
                <span class="text-xl">🍽️</span>
              </div>
              <div class="text-xl sm:text-2xl font-black text-slate-900">
                ${Number(p.orders_completed).toLocaleString()}
              </div>
              <p class="text-[11px] text-slate-500 font-medium">${p.perfect_cooks} Perfect Cook Ratings</p>
            </div>

            <!-- Customer Reputation -->
            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-yellow-400">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Reputation</span>
                <span class="text-xl">⭐</span>
              </div>
              <div class="text-xl sm:text-2xl font-black text-slate-900">
                ${Number(p.reputation).toFixed(1)} / 5.0
              </div>
              <p class="text-[11px] text-slate-500 font-medium">Customer satisfaction score</p>
            </div>

          </div>

          <!-- Quick Navigation Hub -->
          <div class="space-y-3">
            <h3 class="text-base font-extrabold text-slate-800 tracking-tight">Quick Operations</h3>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              
              <button onclick="window.app.showView('cooking')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🍳
                </div>
                <span class="font-bold text-xs text-slate-800">Cooking Shift</span>
                <span class="text-[10px] text-slate-400">Serve Live Queue</span>
              </button>

              <button onclick="window.app.showView('truck')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🚚
                </div>
                <span class="font-bold text-xs text-slate-800">Food Truck</span>
                <span class="text-[10px] text-slate-400">Tier ${truck?.tier_level || 1} Upgrade</span>
              </button>

              <button onclick="window.app.showView('inventory')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  📦
                </div>
                <span class="font-bold text-xs text-slate-800">Inventory Market</span>
                <span class="text-[10px] text-slate-400">Buy Fresh Stock</span>
              </button>

              <button onclick="window.app.showView('locations')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🗺️
                </div>
                <span class="font-bold text-xs text-slate-800">Locations</span>
                <span class="text-[10px] text-slate-400">6 Urban Spots</span>
              </button>

              <button onclick="window.app.showView('missions')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🎯
                </div>
                <span class="font-bold text-xs text-slate-800">Missions</span>
                <span class="text-[10px] text-slate-400">Daily Quests</span>
              </button>

              <button onclick="window.app.showView('leaderboard')" class="tycoon-card p-4 text-center hover:bg-orange-50/50 transition flex flex-col items-center gap-2 group">
                <div class="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center text-2xl group-hover:scale-110 transition">
                  🏅
                </div>
                <span class="font-bold text-xs text-slate-800">Leaderboard</span>
                <span class="text-[10px] text-slate-400">Global Ranks</span>
              </button>

            </div>
          </div>

          <!-- Truck Summary & Equipment Snapshot -->
          <div class="grid md:grid-cols-2 gap-6">
            
            <!-- Truck Snapshot -->
            <div class="tycoon-card p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">🚚</span>
                  <div>
                    <h4 class="font-extrabold text-sm text-slate-900">${truck?.name || 'My Food Truck'}</h4>
                    <span class="text-xs text-orange-600 font-bold">${truckTierName}</span>
                  </div>
                </div>
                <button onclick="window.app.showView('truck')" class="text-xs font-bold text-orange-600 hover:underline">
                  Manage Gear &rarr;
                </button>
              </div>

              <div class="grid grid-cols-3 gap-2.5 pt-2">
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-extrabold uppercase text-slate-400">Storage</span>
                  <div class="text-base font-extrabold text-slate-800 mt-0.5">${truck?.storage_capacity || 50} Items</div>
                </div>
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-extrabold uppercase text-slate-400">Speed Boost</span>
                  <div class="text-base font-extrabold text-orange-600 mt-0.5">${Number(truck?.cooking_speed_multiplier || 1.0).toFixed(2)}x</div>
                </div>
                <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                  <span class="text-[10px] font-extrabold uppercase text-slate-400">Queue Cap</span>
                  <div class="text-base font-extrabold text-slate-800 mt-0.5">${truck?.customer_capacity || 3} Patrons</div>
                </div>
              </div>
            </div>

            <!-- Daily Goals Snapshot -->
            <div class="tycoon-card p-6 space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2.5">
                  <span class="text-2xl">🎯</span>
                  <div>
                    <h4 class="font-extrabold text-sm text-slate-900">Active Missions</h4>
                    <span class="text-xs text-slate-500 font-medium">Daily & Milestone Objectives</span>
                  </div>
                </div>
                <button onclick="window.app.showView('missions')" class="text-xs font-bold text-orange-600 hover:underline">
                  View All &rarr;
                </button>
              </div>

              <div class="space-y-2 pt-1">
                <div class="p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-center justify-between">
                  <div class="space-y-0.5">
                    <span class="text-xs font-bold text-slate-900">First Steps Chef</span>
                    <p class="text-[11px] text-slate-500">Complete 3 food orders</p>
                  </div>
                  <span class="text-xs font-extrabold text-amber-800">+150 Coins</span>
                </div>

                <div class="p-3 bg-blue-50/60 rounded-xl border border-blue-200/60 flex items-center justify-between">
                  <div class="space-y-0.5">
                    <span class="text-xs font-bold text-slate-900">Rush Hour Champion</span>
                    <p class="text-[11px] text-slate-500">Serve 10 customers</p>
                  </div>
                  <span class="text-xs font-extrabold text-blue-800">+400 Coins</span>
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
          <h3 class="text-lg font-bold text-slate-800">Failed to load dashboard data</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.dashboard.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  }
};
