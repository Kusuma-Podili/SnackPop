/**
 * Orders History & Ledger View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.orders = {
  ordersList: [],

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Order History...</div>
      </div>
    `;

    try {
      this.ordersList = await window.api.getOrderHistory();

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Header -->
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div class="space-y-1">
              <div class="flex items-center gap-2">
                <span class="text-2xl">📋</span>
                <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Customer Order History</h2>
              </div>
              <p class="text-xs text-slate-500 font-medium">
                Detailed record of all served customer orders, ratings, tips, and items prepared.
              </p>
            </div>

            <button onclick="window.app.showView('cooking')" class="btn-primary text-xs font-black py-2.5 px-4 shadow-sm">
              <span>🍳</span> Start New Shift
            </button>
          </div>

          <!-- Orders Table / List -->
          <div class="tycoon-card overflow-hidden border border-slate-200 bg-white">
            ${this.ordersList.length > 0 ? `
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs">
                  <thead class="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase tracking-wider">
                    <tr>
                      <th class="p-4">Customer</th>
                      <th class="p-4">Dishes Ordered</th>
                      <th class="p-4">Cook Rating</th>
                      <th class="p-4">Revenue</th>
                      <th class="p-4">Tip</th>
                      <th class="p-4">Customer Review</th>
                      <th class="p-4">Status</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100">
                    ${this.ordersList.map(ord => `
                      <tr class="hover:bg-slate-50/80 transition">
                        <td class="p-4">
                          <div class="flex items-center gap-2.5">
                            <span class="text-2xl">${ord.customer_type === 'VIP' ? '👑' : ord.customer_type === 'FOOD_CRITIC' ? '🧐' : '😀'}</span>
                            <div>
                              <strong class="text-slate-900 block font-bold">${ord.customer_name}</strong>
                              <span class="text-[10px] text-slate-400 font-bold uppercase">${ord.customer_type}</span>
                            </div>
                          </div>
                        </td>
                        <td class="p-4">
                          <div class="flex flex-wrap gap-1">
                            ${ord.items.map(it => `
                              <span class="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-bold text-slate-700">
                                ${it.food_icon} ${it.food_name}
                              </span>
                            `).join('')}
                          </div>
                        </td>
                        <td class="p-4">
                          <span class="badge ${ord.cooking_rating === 'PERFECT' ? 'badge-green' : ord.cooking_rating === 'GOOD' ? 'badge-blue' : ord.cooking_rating === 'BURNED' ? 'badge-red' : 'badge-orange'} font-bold">
                            ${ord.cooking_rating || 'GOOD'}
                          </span>
                        </td>
                        <td class="p-4 font-black text-slate-800">
                          ${ord.total_price} 💰
                        </td>
                        <td class="p-4 font-black text-emerald-600">
                          +${ord.tip_amount} 💰
                        </td>
                        <td class="p-4 font-bold text-yellow-600">
                          ⭐ ${Number(ord.customer_rating).toFixed(1)} / 5.0
                        </td>
                        <td class="p-4">
                          <span class="badge badge-green font-bold">${ord.status}</span>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            ` : `
              <div class="p-12 text-center space-y-3">
                <div class="text-4xl">📭</div>
                <h4 class="font-extrabold text-sm text-slate-700">No completed orders yet</h4>
                <p class="text-xs text-slate-500">Go to the Kitchen to serve your first customer!</p>
                <button onclick="window.app.showView('cooking')" class="btn-primary text-xs py-2 px-5">
                  <span>🍳</span> Open Kitchen
                </button>
              </div>
            `}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load orders</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.orders.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  }
};
