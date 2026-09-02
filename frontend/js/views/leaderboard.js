/**
 * Global Leaderboard View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.leaderboard = {
  activeMetric: 'revenue',

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Leaderboard Rankings...</div>
      </div>
    `;

    try {
      const ranks = await window.api.getLeaderboard(this.activeMetric);

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Leaderboard Header -->
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-sm space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">🏅</span>
                  <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Global Tycoon Leaderboard</h2>
                </div>
                <p class="text-xs text-slate-500 font-medium">
                  Compete against food entrepreneurs worldwide for culinary supremacy.
                </p>
              </div>

              <!-- Metric Filters -->
              <div class="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl">
                <button onclick="window.views.leaderboard.setMetric('revenue')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.activeMetric === 'revenue' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
                  💰 Revenue
                </button>
                <button onclick="window.views.leaderboard.setMetric('reputation')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.activeMetric === 'reputation' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
                  ⭐ Reputation
                </button>
                <button onclick="window.views.leaderboard.setMetric('orders')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.activeMetric === 'orders' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
                  🍽️ Orders
                </button>
                <button onclick="window.views.leaderboard.setMetric('level')" class="px-3 py-1.5 rounded-lg text-xs font-bold transition ${this.activeMetric === 'level' ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
                  🎖️ Level
                </button>
              </div>
            </div>
          </div>

          <!-- Leaderboard Table -->
          <div class="tycoon-card overflow-hidden border border-slate-200 bg-white">
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase tracking-wider">
                  <tr>
                    <th class="p-4 w-16 text-center">Rank</th>
                    <th class="p-4">Chef & Food Truck</th>
                    <th class="p-4">Level</th>
                    <th class="p-4">Total Revenue</th>
                    <th class="p-4">Reputation</th>
                    <th class="p-4">Orders Served</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${ranks.map(r => {
                    const isTop1 = r.rank === 1;
                    const isTop2 = r.rank === 2;
                    const isTop3 = r.rank === 3;
                    let rankBadge = `${r.rank}`;
                    if (isTop1) rankBadge = '🥇';
                    if (isTop2) rankBadge = '🥈';
                    if (isTop3) rankBadge = '🥉';

                    return `
                      <tr class="transition ${r.is_current_player ? 'bg-orange-50/80 font-bold border-l-4 border-l-orange-500' : 'hover:bg-slate-50/80'}">
                        <td class="p-4 text-center font-black text-sm ${isTop1 ? 'text-amber-500 text-base' : 'text-slate-600'}">
                          ${rankBadge}
                        </td>
                        <td class="p-4">
                          <div class="flex items-center gap-3">
                            <div class="w-9 h-9 rounded-full bg-orange-500 text-white font-black flex items-center justify-center text-sm shadow-xs">
                              👨‍🍳
                            </div>
                            <div>
                              <strong class="text-slate-900 block font-extrabold">
                                ${r.player_name} ${r.is_current_player ? '<span class="text-[10px] text-orange-600 ml-1">(You)</span>' : ''}
                              </strong>
                              <span class="text-[10px] text-slate-400 font-medium">Food Truck Master</span>
                            </div>
                          </div>
                        </td>
                        <td class="p-4">
                          <span class="badge badge-orange font-bold">Lvl ${r.level}</span>
                        </td>
                        <td class="p-4 font-black text-slate-900">
                          ${Number(r.total_revenue).toLocaleString()} 💰
                        </td>
                        <td class="p-4 font-extrabold text-yellow-600">
                          ⭐ ${Number(r.reputation).toFixed(1)} / 5.0
                        </td>
                        <td class="p-4 font-extrabold text-slate-700">
                          ${Number(r.orders_completed).toLocaleString()} Orders
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load leaderboard</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.leaderboard.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  setMetric(m) {
    this.activeMetric = m;
    this.render();
  }
};
