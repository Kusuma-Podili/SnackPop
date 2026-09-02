/**
 * Interactive Real-Time Cooking & Customer Service Simulator.
 */
window.views = window.views || {};

window.views.cooking = {
  activeOrders: [],
  selectedOrderId: null,
  cookingItem: null,
  cookTimer: null,
  cookProgress: 0,
  cookSpeed: 1.0,
  isOpen: true,
  autoSpawnInterval: null,

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Entering Cooking Arena...</div>
      </div>
    `;

    try {
      this.activeOrders = await window.api.getActiveOrders();
      window.gameState.setActiveOrders(this.activeOrders);

      const truck = window.gameState.truck || { cooking_speed_multiplier: 1.0, customer_capacity: 3 };
      this.cookSpeed = truck.cooking_speed_multiplier || 1.0;

      // Select first order if none selected
      if (!this.selectedOrderId && this.activeOrders.length > 0) {
        this.selectedOrderId = this.activeOrders[0].id;
      }

      this.renderKitchenArena(container);
      this.startShiftLoop();
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load cooking arena</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.cooking.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  renderKitchenArena(container) {
    const selectedOrder = this.activeOrders.find(o => o.id === this.selectedOrderId) || (this.activeOrders.length > 0 ? this.activeOrders[0] : null);
    if (selectedOrder) this.selectedOrderId = selectedOrder.id;

    const truck = window.gameState.truck || { customer_capacity: 3 };
    const queueFull = this.activeOrders.length >= truck.customer_capacity;

    container.innerHTML = `
      <div class="space-y-6 pb-12">
        
        <!-- Shift Status & Action Bar -->
        <div class="tycoon-card p-4 sm:p-5 bg-white border border-orange-100 shadow-sm flex flex-wrap items-center justify-between gap-4">
          
          <div class="flex items-center gap-3">
            <div class="w-3.5 h-3.5 rounded-full ${this.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-slate-400'}"></div>
            <div>
              <div class="flex items-center gap-2">
                <h2 class="text-base sm:text-lg font-black text-slate-900 leading-none">
                  ${this.isOpen ? '🔥 Shift in Progress: Open for Business' : '⏸️ Shift Paused'}
                </h2>
                <span class="badge ${this.isOpen ? 'badge-green' : 'badge-orange'} text-[10px]">
                  ${this.isOpen ? 'Active' : 'Break'}
                </span>
              </div>
              <span class="text-xs text-slate-500 font-medium">
                Customer Queue: <strong>${this.activeOrders.length} / ${truck.customer_capacity}</strong> patrons waiting
              </span>
            </div>
          </div>

          <!-- Shift Controls -->
          <div class="flex items-center gap-2.5 ml-auto">
            <button onclick="window.views.cooking.toggleShift()" class="px-3.5 py-2 rounded-xl border text-xs font-extrabold transition ${this.isOpen ? 'border-slate-200 text-slate-600 hover:bg-slate-50' : 'border-emerald-300 bg-emerald-50 text-emerald-700'}">
              ${this.isOpen ? '⏸️ Take Break' : '▶️ Resume Shift'}
            </button>

            <button onclick="window.views.cooking.spawnNewCustomer()" ${queueFull ? 'disabled' : ''} class="btn-primary py-2 px-4 text-xs font-black shadow-xs ${queueFull ? 'opacity-40 cursor-not-allowed' : ''}">
              <span>🔔</span> Next Customer
            </button>
          </div>

        </div>

        <!-- Customer Queue Carousel -->
        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Customer Line (${this.activeOrders.length})</span>
            <span>Select customer to cook their order</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            ${this.activeOrders.length > 0 ? this.activeOrders.map(ord => {
              const isSelected = ord.id === this.selectedOrderId;
              const isReady = ord.status === 'READY';
              const archetype = ord.customer_type;
              
              let badgeColor = 'badge-blue';
              if (archetype === 'VIP') badgeColor = 'badge-purple';
              if (archetype === 'FOOD_CRITIC') badgeColor = 'badge-yellow';
              if (archetype === 'IMPATIENT') badgeColor = 'badge-red';
              if (archetype === 'HUNGRY') badgeColor = 'badge-orange';

              return `
                <div onclick="window.views.cooking.selectOrder(${ord.id})" class="tycoon-card p-4 cursor-pointer transition flex flex-col justify-between gap-3 border-2 ${isSelected ? 'border-orange-500 bg-orange-50/20 shadow-md' : 'border-slate-200 hover:border-orange-200'}">
                  
                  <div class="flex items-start justify-between">
                    <div class="flex items-center gap-2.5">
                      <div class="w-10 h-10 rounded-2xl bg-orange-100 flex items-center justify-center text-xl shadow-xs">
                        ${archetype === 'VIP' ? '👑' : archetype === 'FOOD_CRITIC' ? '🧐' : archetype === 'IMPATIENT' ? '⏰' : archetype === 'HUNGRY' ? '😋' : '😀'}
                      </div>
                      <div>
                        <h4 class="font-extrabold text-sm text-slate-900 leading-tight">${ord.customer_name}</h4>
                        <span class="badge ${badgeColor} text-[9px] mt-0.5">${archetype}</span>
                      </div>
                    </div>
                    <span class="font-extrabold text-xs text-amber-600 bg-amber-50 border border-amber-200 px-2 py-1 rounded-lg">
                      ${ord.total_price} 💰
                    </span>
                  </div>

                  <!-- Order Items mini summary -->
                  <div class="space-y-1">
                    ${ord.items.map(it => `
                      <div class="flex items-center justify-between text-xs py-0.5">
                        <span class="font-bold text-slate-700">${it.food_icon} ${it.food_name}</span>
                        <span class="text-[10px] font-extrabold uppercase ${it.prep_status === 'READY' ? 'text-emerald-600' : it.prep_status === 'COOKING' ? 'text-amber-600 animate-pulse' : 'text-slate-400'}">
                          ${it.prep_status}
                        </span>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Ready to serve indicator -->
                  ${isReady ? `
                    <div class="p-2 bg-emerald-500 text-white text-center rounded-xl text-xs font-black pulse-glow">
                      🔔 Order Plated & Ready to Serve!
                    </div>
                  ` : ''}

                </div>
              `;
            }).join('') : `
              <div class="col-span-full tycoon-card p-8 text-center space-y-3 bg-slate-50 border-dashed border-2 border-slate-200">
                <div class="text-4xl">📭</div>
                <h4 class="font-extrabold text-sm text-slate-700">No Customers in Line</h4>
                <p class="text-xs text-slate-500">Click "Next Customer" above to welcome hungry diners to your food truck!</p>
                <button onclick="window.views.cooking.spawnNewCustomer()" class="btn-primary text-xs py-2 px-5">
                  <span>🔔</span> Ring Customer Bell
                </button>
              </div>
            `}
          </div>
        </div>

        <!-- Interactive Kitchen Cooking Arena (Selected Order) -->
        ${selectedOrder ? `
          <div class="tycoon-card p-6 bg-white border border-orange-100 shadow-md space-y-6">
            
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <span class="text-[10px] font-extrabold uppercase text-orange-600 tracking-wider">Active Cooking Ticket</span>
                <h3 class="text-lg font-black text-slate-900">${selectedOrder.customer_name}'s Order</h3>
              </div>
              <div class="flex items-center gap-3">
                <span class="text-xs font-bold text-slate-500">Ticket Total: <strong class="text-amber-600 font-extrabold">${selectedOrder.total_price} Coins</strong></span>
                ${selectedOrder.status === 'READY' ? `
                  <button onclick="window.views.cooking.serveOrder(${selectedOrder.id})" class="btn-success text-xs font-black py-2 px-5 shadow-md pulse-glow">
                    <span>🔔</span> SERVE ORDER & COLLECT COINS
                  </button>
                ` : ''}
              </div>
            </div>

            <!-- Items Station Grid -->
            <div class="grid md:grid-cols-2 gap-6">
              ${selectedOrder.items.map(item => this.renderDishCookingCard(selectedOrder, item)).join('')}
            </div>

          </div>
        ` : ''}

      </div>
    `;
  },

  renderDishCookingCard(order, item) {
    const isCookingThis = this.cookingItem && this.cookingItem.itemId === item.id;
    const isReady = item.prep_status === 'READY';
    const isBurned = item.prep_status === 'BURNED';
    const isPending = item.prep_status === 'PENDING';

    return `
      <div class="tycoon-card p-5 space-y-4 border ${isReady ? 'border-emerald-300 bg-emerald-50/10' : isBurned ? 'border-rose-300 bg-rose-50/10' : isCookingThis ? 'border-orange-400 bg-orange-50/15' : 'border-slate-200'}">
        
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <span class="text-4xl">${item.food_icon}</span>
            <div>
              <h4 class="font-extrabold text-sm text-slate-900">${item.food_name}</h4>
              <span class="badge badge-orange text-[9px]">${item.cook_station}</span>
            </div>
          </div>
          <span class="badge ${isReady ? 'badge-green' : isBurned ? 'badge-red' : isCookingThis ? 'badge-yellow' : 'badge-blue'} text-[10px]">
            ${item.prep_status}
          </span>
        </div>

        <!-- Recipe Ingredients Required -->
        <div class="space-y-1 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
          <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Required Ingredients</span>
          <div class="flex flex-wrap gap-2 pt-1">
            ${item.required_ingredients.map(ing => `
              <span class="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-700 font-bold shadow-2xs">
                <span>${ing.icon}</span> ${ing.quantity}x ${ing.ingredient_name}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Interactive Sweet-Spot Timing Gauge (Active when cooking) -->
        ${isCookingThis ? `
          <div class="space-y-2 pt-2 bg-slate-900 text-white p-4 rounded-2xl">
            <div class="flex items-center justify-between text-xs font-bold">
              <span class="text-orange-400">🔥 Live Grill Timing Gauge</span>
              <span id="cook-status-text" class="font-extrabold text-emerald-400">SIZZLING...</span>
            </div>

            <!-- Gauge Track -->
            <div class="timing-track border border-slate-700">
              <div class="timing-zone-undercook" title="Undercooked (0-50%)"></div>
              <div class="timing-zone-good" title="Good (50-75%)"></div>
              <div class="timing-zone-perfect" title="PERFECT (75-90%)"></div>
              <div class="timing-zone-burned" title="Burned (90-100%)"></div>
              <div id="timing-needle" class="timing-needle" style="left: ${this.cookProgress}%"></div>
            </div>

            <div class="flex items-center justify-between text-[10px] text-slate-400 px-1">
              <span>Raw</span>
              <span>Good</span>
              <span class="text-emerald-300 font-bold">⭐ PERFECT</span>
              <span class="text-rose-400 font-bold">Burned</span>
            </div>

            <button onclick="window.views.cooking.stopAndPlateItem(${order.id}, ${item.id})" class="w-full btn-primary py-3 font-black text-sm shadow-lg mt-2">
              ⚡ FLIP & PLATE DISH NOW!
            </button>
          </div>
        ` : isPending ? `
          <button onclick="window.views.cooking.startCookingItem(${order.id}, ${item.id})" class="w-full btn-secondary text-xs font-bold py-2.5 hover:border-orange-400 hover:text-orange-600">
            🍳 Start Cooking (${item.food_name})
          </button>
        ` : isReady ? `
          <div class="p-2.5 bg-emerald-100 text-emerald-800 text-center rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5">
            <span>✅</span> Cooked to ${item.quality || 'PERFECT'} Quality! Ready for customer.
          </div>
        ` : `
          <div class="p-2.5 bg-rose-100 text-rose-800 text-center rounded-xl text-xs font-extrabold">
            ❌ Dish Burned! Please remake.
          </div>
          <button onclick="window.views.cooking.startCookingItem(${order.id}, ${item.id})" class="w-full btn-secondary text-xs font-bold py-2">
            🔄 Remake Dish
          </button>
        `}

      </div>
    `;
  },

  selectOrder(orderId) {
    this.selectedOrderId = orderId;
    window.soundEngine?.playClick();
    this.render();
  },

  async spawnNewCustomer() {
    try {
      const ord = await window.api.generateCustomerOrder();
      window.toast.info(`New Customer Arrived: ${ord.customer_name} (${ord.customer_type})`);
      window.soundEngine?.playOrderReady();
      await this.render();
    } catch (err) {
      window.toast.warning(err.message || 'Customer queue full.');
    }
  },

  async startCookingItem(orderId, itemId) {
    try {
      const res = await window.api.startCooking(orderId, itemId);
      window.soundEngine?.playSizzle(3.0);
      
      this.cookingItem = {
        orderId,
        itemId,
        cookStation: res.cook_station,
        baseTime: res.base_prep_time || 4.0
      };
      this.cookProgress = 0;

      this.render();

      // Launch needle animation timer
      if (this.cookTimer) clearInterval(this.cookTimer);
      
      const stepIntervalMs = 50;
      const totalDurationSec = Math.max(2.0, (this.cookingItem.baseTime / this.cookSpeed));
      const totalSteps = (totalDurationSec * 1000) / stepIntervalMs;
      const progressIncrement = 100 / totalSteps;

      this.cookTimer = setInterval(() => {
        this.cookProgress += progressIncrement;
        const needle = document.getElementById('timing-needle');
        if (needle) needle.style.left = `${Math.min(100, this.cookProgress)}%`;

        if (this.cookProgress >= 100) {
          // Burned!
          clearInterval(this.cookTimer);
          this.stopAndPlateItem(orderId, itemId);
        }
      }, stepIntervalMs);

    } catch (err) {
      window.toast.error(err.message || 'Cannot start cooking.');
    }
  },

  async stopAndPlateItem(orderId, itemId) {
    if (this.cookTimer) clearInterval(this.cookTimer);

    // Calculate accuracy: 80% is dead center sweet spot (75%-88% is Perfect)
    const progress = this.cookProgress;
    let accuracy = 0.0;

    if (progress >= 72 && progress <= 88) {
      accuracy = 0.95; // PERFECT!
    } else if (progress >= 50 && progress < 72) {
      accuracy = 0.70; // GOOD
    } else if (progress > 88 && progress <= 95) {
      accuracy = 0.60; // Slightly overcooked GOOD
    } else if (progress < 50) {
      accuracy = 0.40; // LATE / UNDERCOOKED
    } else {
      accuracy = 0.10; // BURNED
    }

    try {
      const res = await window.api.finishCooking(orderId, itemId, accuracy);
      if (res.quality === 'PERFECT') {
        window.toast.success('🌟 PERFECT COOK! Maximum satisfaction bonus!');
        window.soundEngine?.playCoin();
      } else if (res.quality === 'GOOD') {
        window.toast.info('👍 Nicely Cooked!');
      } else {
        window.toast.warning('⚠️ Food burned/undercooked!');
        window.soundEngine?.playBurned();
      }

      this.cookingItem = null;
      this.cookProgress = 0;
      await this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to plate dish.');
    }
  },

  async serveOrder(orderId) {
    try {
      const res = await window.api.serveOrder(orderId);
      window.soundEngine?.playOrderReady();
      window.soundEngine?.playCoin();

      const r = res.result;
      const html = `
        <div class="text-center space-y-5">
          <div class="w-16 h-16 mx-auto rounded-full bg-emerald-100 flex items-center justify-center text-3xl shadow-sm">
            🎉
          </div>

          <div class="space-y-1">
            <h3 class="text-xl font-black text-slate-900">Order Served Successfully!</h3>
            <p class="text-xs text-slate-500 font-medium">${res.message}</p>
          </div>

          <div class="grid grid-cols-3 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-center">
            <div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Revenue</span>
              <div class="text-base font-extrabold text-slate-800">+${r.base_revenue} 💰</div>
            </div>
            <div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">Tip Bonus</span>
              <div class="text-base font-extrabold text-emerald-600">+${r.tip_amount} 💰</div>
            </div>
            <div>
              <span class="text-[10px] font-bold text-slate-400 uppercase">XP Gained</span>
              <div class="text-base font-extrabold text-orange-600">+${r.xp_awarded} ⭐</div>
            </div>
          </div>

          <div class="flex items-center justify-center gap-1 text-amber-500 text-lg">
            Customer Rating: <strong>⭐ ${r.customer_rating} / 5.0</strong>
          </div>

          <button onclick="window.modal.close()" class="btn-primary w-full py-3 text-sm font-extrabold shadow-md">
            🚀 Continue Cooking Shift
          </button>
        </div>
      `;
      window.modal.open(html);

      await window.app.refreshProfile();
      this.selectedOrderId = null;
      await this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to serve order.');
    }
  },

  toggleShift() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      window.toast.success('Shift resumed. Customers arriving!');
    } else {
      window.toast.info('Shift paused.');
    }
    this.render();
  },

  startShiftLoop() {
    if (this.autoSpawnInterval) clearInterval(this.autoSpawnInterval);
    // Automatically spawn customer every 20 seconds if open and queue has space
    this.autoSpawnInterval = setInterval(async () => {
      if (this.isOpen && this.activeOrders.length === 0) {
        try {
          await window.api.generateCustomerOrder();
          this.activeOrders = await window.api.getActiveOrders();
          this.render();
        } catch (e) {
          // ignore
        }
      }
    }, 15000);
  }
};
