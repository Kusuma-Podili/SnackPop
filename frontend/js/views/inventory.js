/**
 * Inventory & Wholesale Market View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.inventory = {
  inventoryItems: [],
  selectedCategory: 'ALL',
  searchQuery: '',

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Inventory Market...</div>
      </div>
    `;

    try {
      this.inventoryItems = await window.api.getInventory();
      const truck = window.gameState.truck || { storage_capacity: 50 };
      const profile = window.gameState.playerProfile || { coins: 0, level: 1 };

      const totalItemsStored = this.inventoryItems.reduce((acc, item) => acc + (item.quantity || 0), 0);
      const capacityPct = Math.min(100, (totalItemsStored / truck.storage_capacity) * 100);
      const isNearFull = capacityPct >= 85;

      const categories = ['ALL', 'Produce', 'Meat', 'Dairy', 'Bakery', 'Grains', 'Sauces'];

      // Filter items
      const filtered = this.inventoryItems.filter(item => {
        const matchesCat = this.selectedCategory === 'ALL' || item.category.toLowerCase() === this.selectedCategory.toLowerCase();
        const matchesSearch = !this.searchQuery || item.ingredient_name.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Storage Capacity & Market Header -->
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-sm space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">📦</span>
                  <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Wholesale Ingredient Market</h2>
                </div>
                <p class="text-xs text-slate-500 font-medium">
                  Source fresh stock for recipes. Restock before starting rush hour cooking shifts!
                </p>
              </div>

              <!-- Storage Meter -->
              <div class="w-full sm:w-64 space-y-1.5 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="text-slate-500">Storage Capacity</span>
                  <span class="${isNearFull ? 'text-rose-600' : 'text-slate-800'}">${totalItemsStored} / ${truck.storage_capacity} Units</span>
                </div>
                <div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                  <div class="h-full rounded-full transition-all duration-300 ${isNearFull ? 'bg-rose-500' : capacityPct > 60 ? 'bg-amber-500' : 'bg-emerald-500'}" style="width: ${capacityPct}%"></div>
                </div>
                <div class="flex justify-between items-center text-[10px] text-slate-400">
                  <span>${truck.storage_capacity - totalItemsStored} slots free</span>
                  <button onclick="window.app.showView('truck')" class="text-orange-600 font-bold hover:underline">Upgrade &rarr;</button>
                </div>
              </div>
            </div>

            <!-- Filters & Search -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2 border-t border-slate-100">
              
              <!-- Category Tabs -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                ${categories.map(cat => `
                  <button onclick="window.views.inventory.setCategory('${cat}')" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${this.selectedCategory === cat ? 'bg-orange-500 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
                    ${cat}
                  </button>
                `).join('')}
              </div>

              <!-- Search -->
              <div class="relative min-w-[200px]">
                <input type="text" placeholder="Search ingredient..." value="${this.searchQuery}" oninput="window.views.inventory.setSearch(this.value)" class="w-full pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-orange-500">
                <span class="absolute left-2.5 top-2 text-xs text-slate-400">🔍</span>
              </div>

            </div>
          </div>

          <!-- Ingredients Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            ${filtered.length > 0 ? filtered.map(item => {
              const isLocked = profile.level < item.min_level;
              const isLow = item.quantity < 3;
              const maxAffordable = Math.floor(profile.coins / item.unit_cost);
              const maxFit = Math.max(0, truck.storage_capacity - totalItemsStored);
              const maxCanBuy = Math.min(maxAffordable, maxFit);

              return `
                <div class="tycoon-card p-4 space-y-3 flex flex-col justify-between border ${isLow ? 'border-amber-300 bg-amber-50/10' : 'border-slate-200'}">
                  
                  <div class="space-y-2">
                    <div class="flex items-start justify-between">
                      <div class="flex items-center gap-2.5">
                        <span class="text-3xl">${item.icon}</span>
                        <div>
                          <h4 class="font-extrabold text-sm text-slate-900 leading-tight">${item.ingredient_name}</h4>
                          <span class="text-[10px] font-bold text-slate-400 uppercase">${item.category}</span>
                        </div>
                      </div>
                      ${isLow ? `
                        <span class="badge badge-red text-[9px] font-bold">Low Stock</span>
                      ` : ''}
                    </div>

                    <div class="flex items-center justify-between p-2 bg-slate-50 rounded-xl border border-slate-100 text-xs font-bold">
                      <span class="text-slate-500">In Truck:</span>
                      <strong class="text-slate-800 text-sm font-black">${item.quantity} <span class="text-[10px] font-normal text-slate-400">${item.unit_type}</span></strong>
                    </div>

                    <div class="flex items-center justify-between text-xs">
                      <span class="text-slate-500 font-medium">Wholesale Price:</span>
                      <strong class="text-amber-600 font-extrabold">${item.unit_cost} Coins / ${item.unit_type}</strong>
                    </div>
                  </div>

                  <!-- Buy Controls -->
                  <div class="pt-2 border-t border-slate-100 space-y-2">
                    ${isLocked ? `
                      <div class="p-2 bg-slate-100 text-slate-500 text-center rounded-xl text-xs font-bold">
                        🔒 Unlocks at Chef Level ${item.min_level}
                      </div>
                    ` : `
                      <div class="flex items-center gap-1.5">
                        <button onclick="window.views.inventory.quickBuy(${item.ingredient_id}, 1)" ${maxCanBuy < 1 ? 'disabled' : ''} class="flex-1 py-1.5 bg-slate-100 hover:bg-orange-100 hover:text-orange-700 text-slate-700 font-extrabold text-xs rounded-lg transition disabled:opacity-40">
                          +1
                        </button>
                        <button onclick="window.views.inventory.quickBuy(${item.ingredient_id}, 5)" ${maxCanBuy < 5 ? 'disabled' : ''} class="flex-1 py-1.5 bg-slate-100 hover:bg-orange-100 hover:text-orange-700 text-slate-700 font-extrabold text-xs rounded-lg transition disabled:opacity-40">
                          +5
                        </button>
                        <button onclick="window.views.inventory.quickBuy(${item.ingredient_id}, 10)" ${maxCanBuy < 10 ? 'disabled' : ''} class="flex-1 py-1.5 bg-slate-100 hover:bg-orange-100 hover:text-orange-700 text-slate-700 font-extrabold text-xs rounded-lg transition disabled:opacity-40">
                          +10
                        </button>
                        <button onclick="window.views.inventory.quickBuy(${item.ingredient_id}, ${maxCanBuy})" ${maxCanBuy < 1 ? 'disabled' : ''} class="flex-1 py-1.5 bg-orange-500 hover:bg-orange-600 text-white font-black text-xs rounded-lg shadow-xs transition disabled:opacity-40">
                          +Max
                        </button>
                      </div>
                    `}
                  </div>

                </div>
              `;
            }).join('') : `
              <div class="col-span-full tycoon-card p-8 text-center space-y-2">
                <div class="text-3xl">🔍</div>
                <h4 class="font-bold text-slate-800 text-sm">No ingredients found</h4>
                <p class="text-xs text-slate-500">Try changing your category filter or search query.</p>
              </div>
            `}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load inventory market</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.inventory.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  setCategory(cat) {
    this.selectedCategory = cat;
    this.render();
  },

  setSearch(q) {
    this.searchQuery = q;
    this.render();
  },

  async quickBuy(ingredientId, qty) {
    if (!qty || qty <= 0) {
      window.toast.warning('No available storage or coins to purchase.');
      return;
    }

    try {
      const res = await window.api.buyIngredient(ingredientId, qty);
      window.toast.success(res.message);
      window.soundEngine.playCoin();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Purchase failed.');
    }
  }
};
