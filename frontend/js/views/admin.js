/**
 * Complete Admin Management Portal for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.admin_dashboard = {
  async render() {
    window.views.admin.activeTab = 'dashboard';
    await window.views.admin.render();
  }
};

window.views.admin_players = {
  async render() {
    window.views.admin.activeTab = 'players';
    await window.views.admin.render();
  }
};

window.views.admin_foods = {
  async render() {
    window.views.admin.activeTab = 'foods';
    await window.views.admin.render();
  }
};

window.views.admin_settings = {
  async render() {
    window.views.admin.activeTab = 'settings';
    await window.views.admin.render();
  }
};

window.views.admin = {
  activeTab: 'dashboard', // 'dashboard', 'players', 'foods', 'settings'
  stats: null,
  players: [],
  settings: [],

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-purple-600 font-bold text-base animate-pulse">Loading Admin Portal...</div>
      </div>
    `;

    try {
      this.stats = await window.api.getAdminGlobalStats();
      if (this.activeTab === 'players') {
        this.players = await window.api.getAdminPlayers();
      } else if (this.activeTab === 'settings') {
        this.settings = await window.api.getAdminSettings();
      }

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Admin Header Banner -->
          <div class="tycoon-card p-6 bg-gradient-to-r from-purple-900 via-slate-900 to-indigo-950 text-white rounded-3xl shadow-xl border border-purple-800 space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide">
                  🛡️ System Administrator Console
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">Food Truck Tycoon Game Admin</h2>
                <p class="text-xs sm:text-sm text-purple-200/80 font-medium">
                  Live game telemetry, economy tuning, player accounts, and recipe catalog management.
                </p>
              </div>

              <div class="flex items-center gap-2 bg-purple-950/80 border border-purple-800 p-2.5 rounded-2xl text-xs font-bold">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>System Online: 100% Health</span>
              </div>
            </div>

            <!-- Admin Tab Switcher -->
            <div class="flex flex-wrap gap-2 pt-2 border-t border-purple-800/60">
              <button onclick="window.views.admin.switchTab('dashboard')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition ${this.activeTab === 'dashboard' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-950/60 text-purple-300 hover:bg-purple-900'}">
                📊 Global Telemetry
              </button>
              <button onclick="window.views.admin.switchTab('players')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition ${this.activeTab === 'players' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-950/60 text-purple-300 hover:bg-purple-900'}">
                👥 Players (${this.stats?.total_players || 0})
              </button>
              <button onclick="window.views.admin.switchTab('foods')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition ${this.activeTab === 'foods' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-950/60 text-purple-300 hover:bg-purple-900'}">
                🍔 Recipe Builder
              </button>
              <button onclick="window.views.admin.switchTab('settings')" class="px-4 py-2 rounded-xl text-xs font-extrabold transition ${this.activeTab === 'settings' ? 'bg-purple-600 text-white shadow-md' : 'bg-purple-950/60 text-purple-300 hover:bg-purple-900'}">
                ⚙️ Game Balance Config
              </button>
            </div>
          </div>

          <!-- Active Admin Subview -->
          <div id="admin-subview">
            ${this.renderActiveTabContent()}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Admin Access Restricted</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.app.showView('landing')" class="btn-primary text-xs py-2 px-4">Return Home</button>
        </div>
      `;
    }
  },

  switchTab(tab) {
    this.activeTab = tab;
    this.render();
  },

  renderActiveTabContent() {
    const s = this.stats || {};

    if (this.activeTab === 'dashboard') {
      return `
        <div class="space-y-6">
          
          <!-- Stat Grid -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div class="tycoon-card p-5 space-y-1 border-t-4 border-t-purple-600 bg-white">
              <span class="text-[10px] font-extrabold uppercase text-slate-400">Total Registered Players</span>
              <div class="text-2xl font-black text-slate-900">${s.total_players} Chefs</div>
              <p class="text-[11px] text-purple-600 font-bold">${s.active_players} Active Players</p>
            </div>

            <div class="tycoon-card p-5 space-y-1 border-t-4 border-t-amber-500 bg-white">
              <span class="text-[10px] font-extrabold uppercase text-slate-400">Total Game Economy</span>
              <div class="text-2xl font-black text-slate-900">${Number(s.total_game_revenue).toLocaleString()} 💰</div>
              <p class="text-[11px] text-slate-500">Total coins generated</p>
            </div>

            <div class="tycoon-card p-5 space-y-1 border-t-4 border-t-blue-500 bg-white">
              <span class="text-[10px] font-extrabold uppercase text-slate-400">Orders Served</span>
              <div class="text-2xl font-black text-slate-900">${Number(s.total_orders).toLocaleString()}</div>
              <p class="text-[11px] text-slate-500">Global dishes plated</p>
            </div>

            <div class="tycoon-card p-5 space-y-1 border-t-4 border-t-emerald-500 bg-white">
              <span class="text-[10px] font-extrabold uppercase text-slate-400">Average Game Rating</span>
              <div class="text-2xl font-black text-slate-900">⭐ ${Number(s.average_customer_rating).toFixed(1)} / 5.0</div>
              <p class="text-[11px] text-slate-500">Overall customer sentiment</p>
            </div>

          </div>

          <!-- Catalog Overview -->
          <div class="grid md:grid-cols-2 gap-6">
            <div class="tycoon-card p-6 space-y-3 bg-white border border-slate-200">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Top Performing Entities</h4>
              <div class="space-y-2">
                <div class="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                  <span class="text-slate-600 font-bold">Most Popular Dish:</span>
                  <strong class="text-orange-600 font-black">${s.most_popular_food}</strong>
                </div>
                <div class="p-3 bg-slate-50 rounded-xl flex items-center justify-between text-xs">
                  <span class="text-slate-600 font-bold">Highest Volume Spot:</span>
                  <strong class="text-blue-600 font-black">${s.most_popular_location}</strong>
                </div>
              </div>
            </div>

            <div class="tycoon-card p-6 space-y-3 bg-white border border-slate-200">
              <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Catalog Complexity</h4>
              <div class="grid grid-cols-2 gap-3 text-center pt-1">
                <div class="p-3 bg-amber-50 rounded-xl border border-amber-200">
                  <span class="text-[10px] font-extrabold uppercase text-amber-800">Ingredients</span>
                  <div class="text-xl font-black text-slate-900">${s.total_ingredients_catalog} Types</div>
                </div>
                <div class="p-3 bg-purple-50 rounded-xl border border-purple-200">
                  <span class="text-[10px] font-extrabold uppercase text-purple-800">Gourmet Recipes</span>
                  <div class="text-xl font-black text-slate-900">${s.total_recipes_catalog} Dishes</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      `;
    }

    if (this.activeTab === 'players') {
      return `
        <div class="tycoon-card p-6 space-y-4 bg-white border border-slate-200">
          <div class="flex items-center justify-between">
            <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Registered Player Accounts</h4>
            <span class="text-xs text-slate-400">${this.players.length} Total Registered</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="bg-slate-50 border-b border-slate-200 text-slate-500 font-extrabold uppercase">
                <tr>
                  <th class="p-3">Player / Chef</th>
                  <th class="p-3">Email</th>
                  <th class="p-3">Level</th>
                  <th class="p-3">Coins</th>
                  <th class="p-3">Reputation</th>
                  <th class="p-3">Orders</th>
                  <th class="p-3">Status</th>
                  <th class="p-3 text-center">Manage</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                ${this.players.map(p => `
                  <tr class="hover:bg-slate-50 transition">
                    <td class="p-3 font-bold text-slate-900">${p.name} (@${p.username})</td>
                    <td class="p-3 text-slate-500">${p.email}</td>
                    <td class="p-3 font-extrabold text-orange-600">Lvl ${p.level}</td>
                    <td class="p-3 font-black text-slate-800">${Number(p.coins).toLocaleString()} 💰</td>
                    <td class="p-3 font-bold text-yellow-600">⭐ ${Number(p.reputation).toFixed(1)}</td>
                    <td class="p-3 font-bold text-slate-700">${p.orders_completed}</td>
                    <td class="p-3">
                      <span class="badge ${p.is_active ? 'badge-green' : 'badge-red'}">
                        ${p.is_active ? 'ACTIVE' : 'BANNED'}
                      </span>
                    </td>
                    <td class="p-3 text-center">
                      <button onclick="window.views.admin.openPlayerAdjustModal(${p.id}, '${p.name}', ${p.coins}, ${p.level}, ${p.is_active})" class="px-2.5 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200 rounded-lg font-bold text-xs transition">
                        ⚙️ Adjust
                      </button>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    if (this.activeTab === 'foods') {
      return `
        <div class="tycoon-card p-6 space-y-6 bg-white border border-slate-200 max-w-2xl">
          <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Create New Recipe Item</h4>
          
          <form onsubmit="window.views.admin.createRecipe(event)" class="space-y-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Dish Name</label>
              <input type="text" id="new-food-name" required placeholder="e.g. Truffle Brioche Burger" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Category</label>
                <select id="new-food-cat" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
                  <option value="Burgers">Burgers</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Sandwiches">Sandwiches</option>
                  <option value="Fries">Fries</option>
                  <option value="Indian Food">Indian Food</option>
                  <option value="Chinese Food">Chinese Food</option>
                  <option value="Mexican Food">Mexican Food</option>
                  <option value="Desserts">Desserts</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Combo Meals">Combo Meals</option>
                </select>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Selling Price (Coins)</label>
                <input type="number" id="new-food-price" required min="10" max="500" value="75" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
              </div>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Prep Time (Sec)</label>
                <input type="number" step="0.5" id="new-food-time" value="5.0" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Required Level</label>
                <input type="number" id="new-food-level" value="2" min="1" max="20" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Icon Emoji</label>
                <input type="text" id="new-food-icon" value="🍔" maxlength="4" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none">
              </div>
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Description</label>
              <textarea id="new-food-desc" rows="2" placeholder="Rich delicious chef special..." class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-purple-500 focus:outline-none"></textarea>
            </div>

            <button type="submit" class="bg-purple-600 hover:bg-purple-700 text-white font-extrabold text-sm py-3 px-6 rounded-xl shadow-md transition">
              ✨ Add Recipe to Game
            </button>
          </form>
        </div>
      `;
    }

    if (this.activeTab === 'settings') {
      return `
        <div class="tycoon-card p-6 space-y-6 bg-white border border-slate-200 max-w-2xl">
          <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Game Balance & Economy Settings</h4>
          
          <div class="space-y-4">
            ${this.settings.map(s => `
              <div class="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div class="flex items-center justify-between">
                  <strong class="text-xs font-extrabold text-purple-900">${s.key}</strong>
                  <span class="badge badge-purple text-[9px]">${s.category}</span>
                </div>
                <p class="text-xs text-slate-500">${s.description || 'Config parameter'}</p>
                <div class="flex items-center gap-2 pt-1">
                  <input type="text" id="setting-${s.key}" value="${s.value}" class="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold">
                  <button onclick="window.views.admin.saveSetting('${s.key}')" class="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-bold">
                    Save
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
  },

  openPlayerAdjustModal(playerId, name, coins, level, isActive) {
    const html = `
      <div class="space-y-4">
        <h3 class="text-lg font-black text-slate-900">Manage Chef: ${name}</h3>
        
        <div class="space-y-3 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Grant / Deduct Coins (Delta)</label>
            <input type="number" id="adj-coins" value="500" class="w-full px-3 py-2 rounded-xl border border-slate-200">
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Set Level (1-20)</label>
            <input type="number" id="adj-level" value="${level}" class="w-full px-3 py-2 rounded-xl border border-slate-200">
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Account Status</label>
            <select id="adj-active" class="w-full px-3 py-2 rounded-xl border border-slate-200">
              <option value="1" ${isActive ? 'selected' : ''}>Active (Allow Login)</option>
              <option value="0" ${!isActive ? 'selected' : ''}>Banned (Deactivate)</option>
            </select>
          </div>
        </div>

        <button onclick="window.views.admin.applyPlayerAdjustment(${playerId})" class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-xl font-extrabold text-xs shadow-md">
          💾 Save Changes
        </button>
      </div>
    `;
    window.modal.open(html);
  },

  async applyPlayerAdjustment(playerId) {
    const coinsDelta = parseInt(document.getElementById('adj-coins').value) || 0;
    const levelSet = parseInt(document.getElementById('adj-level').value) || 1;
    const isActiveSet = parseInt(document.getElementById('adj-active').value);

    try {
      const res = await window.api.adjustAdminPlayer(playerId, {
        coins_delta: coinsDelta,
        level_set: levelSet,
        is_active_set: isActiveSet
      });
      window.modal.close();
      window.toast.success(res.message);
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to adjust player.');
    }
  },

  async createRecipe(e) {
    e.preventDefault();
    const name = document.getElementById('new-food-name').value;
    const category = document.getElementById('new-food-cat').value;
    const sellingPrice = parseInt(document.getElementById('new-food-price').value);
    const basePrepTime = parseFloat(document.getElementById('new-food-time').value);
    const requiredLevel = parseInt(document.getElementById('new-food-level').value);
    const icon = document.getElementById('new-food-icon').value;
    const description = document.getElementById('new-food-desc').value;

    try {
      const res = await window.api.createFoodItem({
        name,
        category,
        selling_price: sellingPrice,
        base_prep_time: basePrepTime,
        required_level: requiredLevel,
        icon,
        description,
        ingredients: [
          { ingredient_id: 1, quantity: 1 },
          { ingredient_id: 8, quantity: 1 }
        ]
      });
      window.toast.success(res.message);
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to create recipe.');
    }
  },

  async saveSetting(key) {
    const valInput = document.getElementById(`setting-${key}`);
    if (!valInput) return;
    try {
      const res = await window.api.updateAdminSetting(key, valInput.value);
      window.toast.success(res.message);
    } catch (err) {
      window.toast.error(err.message || 'Failed to update setting.');
    }
  }
};
