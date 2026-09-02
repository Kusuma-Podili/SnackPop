/**
 * Business Analytics & P&L Reporting View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.analytics = {
  analyticsData: null,

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Analyzing Business Metrics...</div>
      </div>
    `;

    try {
      this.analyticsData = await window.api.getBusinessAnalytics();
      const a = this.analyticsData;

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Header -->
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-sm space-y-2">
            <div class="flex items-center gap-2">
              <span class="text-2xl">📈</span>
              <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Business Intelligence & P&L Report</h2>
            </div>
            <p class="text-xs text-slate-500 font-medium">
              Real-time financial performance, profitability breakdown, category sales mix, and operational efficiency.
            </p>
          </div>

          <!-- Financial P&L Cards -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-amber-500">
              <span class="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Gross Revenue</span>
              <div class="text-xl sm:text-2xl font-black text-slate-900">${Number(a.total_revenue).toLocaleString()} 💰</div>
              <p class="text-[11px] text-slate-500">Customer sales & tips</p>
            </div>

            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-rose-500">
              <span class="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Total Expenses</span>
              <div class="text-xl sm:text-2xl font-black text-rose-600">-${Number(a.total_expenses).toLocaleString()} 💰</div>
              <p class="text-[11px] text-slate-500">Ingredients & upgrades</p>
            </div>

            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-emerald-500">
              <span class="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Net Profit</span>
              <div class="text-xl sm:text-2xl font-black text-emerald-600">+${Number(a.net_profit).toLocaleString()} 💰</div>
              <p class="text-[11px] text-slate-500">Gross profit after costs</p>
            </div>

            <div class="tycoon-card p-4 space-y-1 border-t-4 border-t-blue-500">
              <span class="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider">Profit Margin</span>
              <div class="text-xl sm:text-2xl font-black text-blue-600">${a.profit_margin_pct}%</div>
              <p class="text-[11px] text-slate-500">Overall return on capital</p>
            </div>

          </div>

          <!-- Operational & Sales Metrics -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Quality & Satisfaction -->
            <div class="tycoon-card p-5 space-y-4">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Operational Quality</h4>
              
              <div class="space-y-3">
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span class="text-xs font-bold text-slate-600">Perfect Cook Ratio</span>
                  <span class="text-xs font-extrabold text-emerald-600">${a.perfect_cooks_rate}%</span>
                </div>

                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span class="text-xs font-bold text-slate-600">Average Customer Rating</span>
                  <span class="text-xs font-extrabold text-amber-600">⭐ ${Number(a.average_customer_rating).toFixed(1)} / 5.0</span>
                </div>

                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span class="text-xs font-bold text-slate-600">Average Order Ticket</span>
                  <span class="text-xs font-extrabold text-slate-800">${a.average_order_value} 💰</span>
                </div>
              </div>
            </div>

            <!-- Product Performance -->
            <div class="tycoon-card p-5 space-y-4">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Menu Performance</h4>
              
              <div class="space-y-3">
                <div class="p-3 bg-emerald-50 rounded-xl border border-emerald-100 space-y-0.5">
                  <span class="text-[10px] font-extrabold uppercase text-emerald-700">🏆 Top Selling Dish</span>
                  <div class="text-xs font-black text-slate-900">${a.most_popular_food}</div>
                </div>

                <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-0.5">
                  <span class="text-[10px] font-extrabold uppercase text-slate-500">📉 Slowest Selling Dish</span>
                  <div class="text-xs font-bold text-slate-700">${a.least_popular_food}</div>
                </div>

                <div class="p-3 bg-blue-50 rounded-xl border border-blue-100 space-y-0.5">
                  <span class="text-[10px] font-extrabold uppercase text-blue-700">🗺️ Best Performing Spot</span>
                  <div class="text-xs font-black text-slate-900">${a.best_performing_location}</div>
                </div>
              </div>
            </div>

            <!-- Sales Category Breakdown (Chart.js Canvas) -->
            <div class="tycoon-card p-5 space-y-3 flex flex-col items-center justify-between">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider self-start">Sales Category Mix</h4>
              <div class="relative w-48 h-48">
                <canvas id="categoryChart"></canvas>
              </div>
              <span class="text-[11px] text-slate-400 font-medium">Revenue by food category</span>
            </div>

          </div>

          <!-- Financial Transactions Ledger -->
          <div class="tycoon-card p-6 space-y-4 bg-white border border-slate-200">
            <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Recent Financial Transactions</h4>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase">
                  <tr>
                    <th class="p-3">Type</th>
                    <th class="p-3">Description</th>
                    <th class="p-3">Amount</th>
                    <th class="p-3">Balance After</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100">
                  ${a.recent_transactions.map(t => {
                    const isPositive = t.amount > 0;
                    return `
                      <tr class="hover:bg-slate-50 transition">
                        <td class="p-3">
                          <span class="badge ${isPositive ? 'badge-green' : 'badge-red'} font-bold">
                            ${t.transaction_type}
                          </span>
                        </td>
                        <td class="p-3 font-medium text-slate-700">${t.description}</td>
                        <td class="p-3 font-black ${isPositive ? 'text-emerald-600' : 'text-rose-600'}">
                          ${isPositive ? '+' : ''}${t.amount} 💰
                        </td>
                        <td class="p-3 font-extrabold text-slate-800">${t.balance_after} 💰</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      `;

      // Render Chart.js
      setTimeout(() => {
        const ctx = document.getElementById('categoryChart');
        if (ctx && window.Chart) {
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Burgers', 'Fries', 'Drinks', 'Mexican', 'Other'],
              datasets: [{
                data: [45, 20, 15, 10, 10],
                backgroundColor: ['#FF6B35', '#F59E0B', '#3B82F6', '#10B981', '#8B5CF6'],
                borderWidth: 2,
                borderColor: '#ffffff'
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false }
              }
            }
          });
        }
      }, 50);

    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load analytics</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.analytics.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  }
};
