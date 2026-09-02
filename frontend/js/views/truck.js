/**
 * Food Truck Tycoon - Truck Workshop, Upgrades & Visual Customizer.
 */
window.views = window.views || {};

window.views.truck = {
  truckData: null,
  activeTab: 'upgrade', // 'upgrade', 'equipment', 'customize'

  async render() {
    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="flex items-center justify-center p-12">
        <div class="text-orange-500 font-bold text-base animate-pulse">Loading Truck Workshop...</div>
      </div>
    `;

    try {
      this.truckData = await window.api.getFoodTruck();
      window.gameState.setTruck(this.truckData);
      const t = this.truckData;
      const profile = window.gameState.playerProfile || {};

      const tierNames = ["Basic Cart", "Improved Truck", "Professional Rig", "Premium Cruiser", "Elite Tycoon Flagship"];
      const tierName = tierNames[t.tier_level - 1] || "Basic Truck";
      const nextTier = t.tier_level + 1;
      const isMaxTier = nextTier > 5;

      const TRUCK_TIERS = {
        2: { name: "Improved Truck", storage: 80, speed: 1.15, customers: 4, cost: 1200, min_level: 2 },
        3: { name: "Professional Rig", storage: 120, speed: 1.35, customers: 5, cost: 3500, min_level: 4 },
        4: { name: "Premium Cruiser", storage: 180, speed: 1.60, customers: 6, cost: 8000, min_level: 7 },
        5: { name: "Elite Tycoon Flagship", storage: 250, speed: 2.00, customers: 8, cost: 20000, min_level: 10 },
      };

      const nextTierData = TRUCK_TIERS[nextTier];

      container.innerHTML = `
        <div class="space-y-6 pb-12">
          
          <!-- Header & Visual Truck Canvas -->
          <div class="tycoon-card p-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl relative overflow-hidden shadow-xl border-slate-700">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              
              <div class="space-y-2 text-center lg:text-left">
                <div class="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-extrabold uppercase">
                  ⭐ Tier ${t.tier_level} / 5 • ${tierName}
                </div>
                <h2 class="text-2xl sm:text-3xl font-black tracking-tight text-white">${t.name}</h2>
                <p class="text-xs sm:text-sm text-slate-300 max-w-md">
                  Equipped with high-performance kitchen units. Upgrade tier and equipment to cook up to 2x faster and hold up to 250 ingredients!
                </p>

                <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                  <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">
                    <span>📦</span> Storage: <strong class="text-amber-400">${t.storage_capacity}</strong>
                  </div>
                  <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">
                    <span>⚡</span> Cooking Speed: <strong class="text-emerald-400">${Number(t.cooking_speed_multiplier).toFixed(2)}x</strong>
                  </div>
                  <div class="flex items-center gap-2 bg-slate-800/80 border border-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold">
                    <span>👥</span> Customer Line: <strong class="text-blue-400">${t.customer_capacity}</strong>
                  </div>
                </div>
              </div>

              <!-- Interactive Visual SVG Truck Render -->
              <div class="w-full max-w-sm flex flex-col items-center justify-center p-4 bg-slate-950/60 rounded-2xl border border-slate-700/60">
                <div class="relative w-full max-w-[280px] h-[160px] flex items-center justify-center">
                  
                  <!-- Truck SVG Graphics -->
                  <svg viewBox="0 0 320 180" class="w-full h-full drop-shadow-2xl">
                    <!-- Truck Body Base -->
                    <path d="M 30,130 L 30,45 Q 30,35 40,35 L 210,35 Q 220,35 225,45 L 245,80 L 290,80 Q 300,80 300,90 L 300,130 Q 300,135 295,135 L 30,135 Z" fill="${t.color}" stroke="#0F172A" stroke-width="4"/>
                    
                    <!-- Cabin Window -->
                    <path d="M 230,50 L 245,75 L 285,75 L 285,50 Z" fill="#93C5FD" stroke="#1E293B" stroke-width="2"/>
                    <path d="M 235,53 L 245,72" stroke="#FFFFFF" stroke-width="2" opacity="0.6"/>

                    <!-- Service Window Counter -->
                    <rect x="50" y="50" width="140" height="55" rx="6" fill="#1E293B" stroke="#F8FAFC" stroke-width="2"/>
                    
                    <!-- Neon Signboard text -->
                    <rect x="55" y="20" width="130" height="22" rx="4" fill="#0F172A" stroke="#F59E0B" stroke-width="2"/>
                    <text x="120" y="35" font-size="10" font-weight="900" fill="#FBBF24" text-anchor="middle" letter-spacing="1">
                      ${t.signboard_text.toUpperCase()}
                    </text>

                    <!-- Service Window Interior Glow -->
                    <rect x="55" y="55" width="130" height="45" rx="4" fill="#FEF3C7" opacity="0.9"/>
                    <text x="120" y="82" font-size="18" text-anchor="middle">👨‍🍳 🍔 🍟</text>

                    <!-- Decal on side -->
                    <text x="215" y="115" font-size="20" text-anchor="middle">${t.decal === 'flames' ? '🔥' : t.decal === 'burger' ? '🍔' : t.decal === 'star' ? '⭐' : '👑'}</text>

                    <!-- Wheels -->
                    <circle cx="75" cy="135" r="22" fill="#1E293B" stroke="#0F172A" stroke-width="4"/>
                    <circle cx="75" cy="135" r="12" fill="#94A3B8"/>
                    <circle cx="75" cy="135" r="5" fill="#475569"/>

                    <circle cx="255" cy="135" r="22" fill="#1E293B" stroke="#0F172A" stroke-width="4"/>
                    <circle cx="255" cy="135" r="12" fill="#94A3B8"/>
                    <circle cx="255" cy="135" r="5" fill="#475569"/>

                    <!-- Headlights -->
                    <polygon points="295,95 300,95 298,105 295,105" fill="#FDE047"/>
                  </svg>
                </div>
                <span class="text-[11px] font-bold text-slate-400 mt-2">Live Custom Rig Preview</span>
              </div>

            </div>
          </div>

          <!-- Workshop Tabs -->
          <div class="flex border-b border-slate-200 gap-4">
            <button onclick="window.views.truck.switchTab('upgrade')" class="pb-3 px-2 font-extrabold text-sm border-b-2 transition ${this.activeTab === 'upgrade' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-800'}">
              🚀 Truck Tier Upgrade
            </button>
            <button onclick="window.views.truck.switchTab('equipment')" class="pb-3 px-2 font-extrabold text-sm border-b-2 transition ${this.activeTab === 'equipment' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-800'}">
              🍳 Kitchen Equipment
            </button>
            <button onclick="window.views.truck.switchTab('customize')" class="pb-3 px-2 font-extrabold text-sm border-b-2 transition ${this.activeTab === 'customize' ? 'border-orange-500 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-800'}">
              🎨 Paint & Visual Decals
            </button>
          </div>

          <!-- Active Tab Content -->
          <div id="truck-tab-content">
            ${this.renderTabContent(t, profile, isMaxTier, nextTierData)}
          </div>

        </div>
      `;
    } catch (err) {
      container.innerHTML = `
        <div class="tycoon-card p-8 text-center space-y-4">
          <div class="text-3xl text-rose-500">⚠️</div>
          <h3 class="text-lg font-bold text-slate-800">Failed to load truck workshop</h3>
          <p class="text-xs text-slate-500">${err.message}</p>
          <button onclick="window.views.truck.render()" class="btn-primary text-xs py-2 px-4">Retry</button>
        </div>
      `;
    }
  },

  switchTab(tab) {
    this.activeTab = tab;
    this.render();
  },

  renderTabContent(t, profile, isMaxTier, nextTierData) {
    if (this.activeTab === 'upgrade') {
      if (isMaxTier) {
        return `
          <div class="tycoon-card p-8 text-center space-y-3 bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
            <div class="text-5xl">👑</div>
            <h3 class="text-xl font-black text-slate-900">MAXIMUM TRUCK TIER ACHIEVED!</h3>
            <p class="text-sm text-slate-600 max-w-md mx-auto">
              Your Food Truck is an Elite Tycoon Flagship with maximum storage capacity, 2x cooking speed, and supreme customer capacity!
            </p>
          </div>
        `;
      }

      const canAfford = (profile.coins || 0) >= nextTierData.cost;
      const meetsLevel = (profile.level || 1) >= nextTierData.min_level;

      return `
        <div class="grid md:grid-cols-2 gap-6">
          
          <!-- Current vs Next Tier Comparison -->
          <div class="tycoon-card p-6 space-y-4">
            <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Next Tier Specifications</h4>
            
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-xs font-bold text-slate-600">Model Name</span>
                <span class="text-xs font-extrabold text-orange-600">${nextTierData.name}</span>
              </div>

              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-xs font-bold text-slate-600">Ingredient Storage Capacity</span>
                <div class="text-xs font-bold text-slate-800">
                  <span>${t.storage_capacity}</span> &rarr; <strong class="text-emerald-600">${nextTierData.storage} Slots</strong>
                </div>
              </div>

              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-xs font-bold text-slate-600">Base Cooking Speed Multiplier</span>
                <div class="text-xs font-bold text-slate-800">
                  <span>${Number(t.cooking_speed_multiplier).toFixed(2)}x</span> &rarr; <strong class="text-emerald-600">${Number(nextTierData.speed).toFixed(2)}x Speed</strong>
                </div>
              </div>

              <div class="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="text-xs font-bold text-slate-600">Max Customer Line Capacity</span>
                <div class="text-xs font-bold text-slate-800">
                  <span>${t.customer_capacity}</span> &rarr; <strong class="text-emerald-600">${nextTierData.customers} Patrons</strong>
                </div>
              </div>
            </div>
          </div>

          <!-- Upgrade CTA Card -->
          <div class="tycoon-card p-6 flex flex-col justify-between space-y-6 border-2 border-orange-200 bg-orange-50/20">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="badge badge-orange">Upgrade Investment</span>
                <span class="text-xs font-extrabold ${meetsLevel ? 'text-emerald-600' : 'text-rose-600'}">
                  ${meetsLevel ? `✅ Level ${nextTierData.min_level} Met` : `❌ Chef Level ${nextTierData.min_level} Required`}
                </span>
              </div>

              <div class="text-3xl font-black text-slate-900">
                ${Number(nextTierData.cost).toLocaleString()} <span class="text-sm font-bold text-amber-600">Coins</span>
              </div>
              <p class="text-xs text-slate-500 leading-relaxed">
                Upgrading your truck provides immediate permanent capacity increases, unlocks higher revenue locations, and allows cooking multiple dishes simultaneously.
              </p>
            </div>

            <button onclick="window.views.truck.performTierUpgrade()" ${(!canAfford || !meetsLevel) ? 'disabled' : ''} class="w-full btn-primary py-3.5 text-sm font-extrabold ${(!canAfford || !meetsLevel) ? 'opacity-50 cursor-not-allowed' : ''}">
              <span>🚀</span> Upgrade to ${nextTierData.name}
            </button>
          </div>

        </div>
      `;
    }

    if (this.activeTab === 'equipment') {
      const eqItems = [
        {
          type: 'GRILL',
          name: 'Burger & Steak Grill',
          icon: '🥩',
          tier: t.grill_tier,
          tiers: {
            1: 'Standard Hotplate (1.0x Speed)',
            2: 'Professional Flat-top Grill (+35% Speed)',
            3: 'Industrial Master Griddle (+75% Speed)'
          },
          nextCost: t.grill_tier === 1 ? 600 : t.grill_tier === 2 ? 1800 : null,
          minLevel: t.grill_tier === 1 ? 2 : 5
        },
        {
          type: 'FRYER',
          name: 'Crispy Deep Fryer',
          icon: '🍟',
          tier: t.fryer_tier,
          tiers: {
            1: 'Standard Basket Fryer (1.0x Speed)',
            2: 'Turbo Double Deep Fryer (+35% Speed)',
            3: 'Commercial Vortex Fryer (+75% Speed)'
          },
          nextCost: t.fryer_tier === 1 ? 500 : t.fryer_tier === 2 ? 1500 : null,
          minLevel: t.fryer_tier === 1 ? 2 : 5
        },
        {
          type: 'FRIDGE',
          name: 'Commercial Refrigerator',
          icon: '🧊',
          tier: t.fridge_tier,
          tiers: {
            1: 'Standard Chiller Unit',
            2: 'Large Commercial Fridge (+30 Capacity)',
            3: 'Walk-In Industrial Cooler (+70 Capacity)'
          },
          nextCost: t.fridge_tier === 1 ? 400 : t.fridge_tier === 2 ? 1200 : null,
          minLevel: t.fridge_tier === 1 ? 2 : 4
        },
        {
          type: 'PREP_TABLE',
          name: 'Stainless Prep Table',
          icon: '🔪',
          tier: t.prep_table_tier,
          tiers: {
            1: 'Basic Cutting Station',
            2: 'Stainless Assembly Station (+1 Slot)',
            3: 'Executive Chef Prep Suite (+2 Slots)'
          },
          nextCost: t.prep_table_tier === 1 ? 450 : t.prep_table_tier === 2 ? 1100 : null,
          minLevel: t.prep_table_tier === 1 ? 2 : 4
        }
      ];

      return `
        <div class="grid sm:grid-cols-2 gap-4">
          ${eqItems.map(eq => {
            const isMax = eq.tier >= 3;
            const canAfford = eq.nextCost && (profile.coins || 0) >= eq.nextCost;
            const meetsLvl = eq.minLevel && (profile.level || 1) >= eq.minLevel;

            return `
              <div class="tycoon-card p-5 space-y-4 border ${eq.tier > 1 ? 'border-orange-200' : 'border-slate-200'}">
                <div class="flex items-start justify-between">
                  <div class="flex items-center gap-3">
                    <span class="text-3xl">${eq.icon}</span>
                    <div>
                      <h4 class="font-extrabold text-sm text-slate-900">${eq.name}</h4>
                      <span class="badge ${eq.tier === 3 ? 'badge-purple' : eq.tier === 2 ? 'badge-blue' : 'badge-orange'} mt-0.5">
                        Tier ${eq.tier} / 3
                      </span>
                    </div>
                  </div>
                </div>

                <div class="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 font-medium">
                  Current: <strong class="text-slate-800">${eq.tiers[eq.tier]}</strong>
                </div>

                ${!isMax ? `
                  <div class="space-y-2 pt-1">
                    <div class="flex items-center justify-between text-xs">
                      <span class="font-bold text-slate-500">Next: ${eq.tiers[eq.tier + 1]}</span>
                      <strong class="text-amber-600 font-extrabold">${Number(eq.nextCost).toLocaleString()} Coins</strong>
                    </div>

                    <button onclick="window.views.truck.performEquipmentUpgrade('${eq.type}', ${eq.tier + 1})" ${(!canAfford || !meetsLvl) ? 'disabled' : ''} class="w-full btn-secondary text-xs font-bold py-2 ${(!canAfford || !meetsLvl) ? 'opacity-50 cursor-not-allowed' : 'hover:border-orange-400 hover:text-orange-600'}">
                      <span>⚡</span> Upgrade (${meetsLvl ? `${eq.nextCost} Coins` : `Req Lvl ${eq.minLevel}`})
                    </button>
                  </div>
                ` : `
                  <div class="text-center py-2 bg-emerald-50 rounded-xl text-emerald-700 font-extrabold text-xs">
                    ✅ Maximum Efficiency Reached
                  </div>
                `}
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    if (this.activeTab === 'customize') {
      const colors = [
        { name: "Tomato Red", hex: "#FF6B6B" },
        { name: "Sunny Amber", hex: "#F59E0B" },
        { name: "Avocado Green", hex: "#10B981" },
        { name: "Cobalt Blue", hex: "#3B82F6" },
        { name: "Royal Purple", hex: "#8B5CF6" },
        { name: "Obsidian Black", hex: "#1E293B" },
      ];

      return `
        <form onsubmit="window.views.truck.saveCustomization(event)" class="tycoon-card p-6 space-y-6 max-w-2xl">
          <h4 class="font-extrabold text-sm text-slate-900 uppercase tracking-wider">Truck Customization & Decals</h4>

          <!-- Truck Name -->
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Truck Fleet Name</label>
            <input type="text" id="cust-truck-name" value="${t.name}" required maxlength="40" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:outline-none">
          </div>

          <!-- Body Color -->
          <div>
            <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Body Paint Scheme</label>
            <div class="flex flex-wrap items-center gap-3">
              ${colors.map(c => `
                <label class="flex items-center gap-2 p-2 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-50 transition">
                  <input type="radio" name="truck-color" value="${c.hex}" ${t.color === c.hex ? 'checked' : ''} class="accent-orange-500">
                  <span class="w-4 h-4 rounded-full border" style="background-color: ${c.hex}"></span>
                  <span class="text-xs font-bold text-slate-700">${c.name}</span>
                </label>
              `).join('')}
            </div>
          </div>

          <!-- Neon Signboard Text -->
          <div class="grid sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Neon Sign Text</label>
              <input type="text" id="cust-sign-text" value="${t.signboard_text}" required maxlength="20" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:outline-none uppercase">
            </div>
            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Side Decal Graphic</label>
              <select id="cust-decal" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-orange-500 focus:outline-none">
                <option value="flames" ${t.decal === 'flames' ? 'selected' : ''}>🔥 Hot Flames</option>
                <option value="burger" ${t.decal === 'burger' ? 'selected' : ''}>🍔 Golden Burger</option>
                <option value="star" ${t.decal === 'star' ? 'selected' : ''}>⭐ Five Stars</option>
                <option value="crown" ${t.decal === 'crown' ? 'selected' : ''}>👑 Tycoon Crown</option>
              </select>
            </div>
          </div>

          <button type="submit" class="btn-primary py-3 px-6 text-sm font-extrabold">
            <span>💾</span> Save Truck Styling
          </button>
        </form>
      `;
    }
  },

  async performTierUpgrade() {
    try {
      const res = await window.api.upgradeTruck();
      window.toast.success(`Upgraded to Tier ${res.tier_level} Truck! Storage & Speed Boosted!`);
      window.soundEngine.playLevelUp();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Upgrade failed.');
    }
  },

  async performEquipmentUpgrade(type, targetTier) {
    try {
      const res = await window.api.upgradeEquipment(type, targetTier);
      window.toast.success(`Upgraded ${type} to Tier ${targetTier}! Efficiency improved!`);
      window.soundEngine.playCoin();
      await window.app.refreshProfile();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Equipment upgrade failed.');
    }
  },

  async saveCustomization(e) {
    e.preventDefault();
    const name = document.getElementById('cust-truck-name').value;
    const signText = document.getElementById('cust-sign-text').value;
    const decal = document.getElementById('cust-decal').value;
    const colorEl = document.querySelector('input[name="truck-color"]:checked');
    const color = colorEl ? colorEl.value : '#FF6B6B';

    try {
      const res = await window.api.updateTruckCustomization({
        name,
        signboard_text: signText,
        decal,
        color
      });
      window.toast.success('Food truck custom styling saved!');
      window.soundEngine.playCoin();
      this.render();
    } catch (err) {
      window.toast.error(err.message || 'Failed to save customization.');
    }
  }
};
