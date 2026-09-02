/**
 * Food Menu & Recipe Catalog View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.menu = {
  foods: [],
  selectedCategory: 'ALL',

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Recipe Book...</div>
      </div>
    `;

    try {
      this.foods = await window.api.getFoods();
      const profile = window.gameState.playerProfile || { level: 1 };

      const categories = ['ALL', 'Burgers', 'Pizza', 'Sandwiches', 'Fries', 'Indian Food', 'Chinese Food', 'Mexican Food', 'Desserts', 'Drinks', 'Combo Meals'];

      const filtered = this.foods.filter(f => {
        return this.selectedCategory === 'ALL' || f.category.toLowerCase() === this.selectedCategory.toLowerCase();
      });

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Menu Header -->
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-sm space-y-4">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div class="space-y-1">
                <div class="flex items-center gap-2">
                  <span class="text-2xl">📜</span>
                  <h2 class="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">Recipe Book & Food Catalog</h2>
                </div>
                <p class="text-xs text-slate-500 font-medium">
                  Unlock gourmet recipes as your Chef Level increases. Master preparation to maximize dish profit margins!
                </p>
              </div>

              <!-- Level Summary -->
              <div class="flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-2 rounded-2xl">
                <span class="text-base">👨‍🍳</span>
                <div class="text-xs">
                  <span class="text-slate-500 font-bold">Chef Level:</span>
                  <strong class="text-orange-700 font-black ml-1">Lvl ${profile.level}</strong>
                </div>
              </div>
            </div>

            <!-- Category Tabs -->
            <div class="flex items-center gap-1.5 overflow-x-auto pb-1 border-t border-slate-100 pt-3">
              ${categories.map(cat => `
                <button onclick="window.views.menu.setCategory('${cat}')" class="px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${this.selectedCategory === cat ? 'bg-orange-500 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}">
                  ${cat}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Food Items Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            ${filtered.map(food => {
              const isLocked = !food.is_unlocked_for_player;

              return `
                <div class="tycoon-card p-5 space-y-4 flex flex-col justify-between border-2 ${isLocked ? 'border-slate-200 bg-slate-50/70 opacity-75' : 'border-orange-100 hover:border-orange-300'}">
                  
                  <div class="space-y-3">
                    <div class="flex items-start justify-between">
                      <div class="flex items-center gap-3">
                        <span class="text-4xl">${food.icon}</span>
                        <div>
                          <h3 class="font-extrabold text-base text-slate-900 leading-tight">${food.name}</h3>
                          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wide">${food.category}</span>
                        </div>
                      </div>
                      ${isLocked ? `
                        <span class="badge badge-purple text-[9px]">🔒 Lvl ${food.required_level}</span>
                      ` : `
                        <span class="badge badge-green text-[9px]">✅ Unlocked</span>
                      `}
                    </div>

                    <p class="text-xs text-slate-600 leading-relaxed font-medium">
                      ${food.description || 'Delicious freshly prepared specialty food item.'}
                    </p>

                    <!-- Financial breakdown -->
                    <div class="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Selling Price</span>
                        <div class="text-xs font-black text-slate-800">${food.selling_price} 💰</div>
                      </div>
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Net Margin</span>
                        <div class="text-xs font-black text-emerald-600">+${food.profit_margin} 💰</div>
                      </div>
                      <div>
                        <span class="text-[9px] font-bold text-slate-400 uppercase">Prep Time</span>
                        <div class="text-xs font-black text-orange-600">${food.base_prep_time}s</div>
                      </div>
                    </div>

                    <!-- Recipe Ingredients -->
                    <div class="space-y-1">
                      <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Recipe Ingredients:</span>
                      <div class="flex flex-wrap gap-1.5">
                        ${food.ingredients.map(ing => `
                          <span class="inline-flex items-center gap-1 text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700 font-bold">
                            <span>${ing.icon}</span> ${ing.quantity_required}x ${ing.ingredient_name}
                          </span>
                        `).join('')}
                      </div>
                    </div>
                  </div>

                  <div class="pt-2 border-t border-slate-100">
                    <button onclick="window.app.showView('inventory')" class="w-full btn-secondary text-xs font-bold py-2 hover:border-orange-400 hover:text-orange-600">
                      📦 Buy Ingredients &rarr;
                    </button>
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
          <h3 class="text-lg font-bold text-slate-800">Failed to load recipes</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.menu.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  setCategory(cat) {
    this.selectedCategory = cat;
    this.render();
  }
};
