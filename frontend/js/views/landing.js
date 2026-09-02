/**
 * Landing Page View for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.landing = {
  render() {
    return `
      <div class="space-y-12 pb-16">
        
        <!-- Hero Section -->
        <section class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 text-white p-8 sm:p-14 shadow-xl shadow-orange-500/20">
          <div class="relative z-10 max-w-3xl space-y-6">
            <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-extrabold uppercase tracking-wider text-amber-100 border border-white/20">
              🔥 Next-Gen Food Tycoon Simulation
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Build Your Ultimate <br/>
              <span class="text-amber-200 underline decoration-wavy decoration-white/40">Food Truck Empire!</span>
            </h1>

            <p class="text-base sm:text-lg text-orange-100 font-medium leading-relaxed max-w-2xl">
              Start with a humble food truck on City Street. Master real-time recipe prep, serve hungry & VIP customers before their patience runs out, upgrade kitchen gear, manage ingredient supply chains, unlock 6 dynamic locations, and dominate the global leaderboard!
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-3.5 pt-2">
              <button onclick="window.app.showAuth('register')" class="bg-white text-orange-600 hover:bg-orange-50 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition transform flex items-center gap-2.5 text-base">
                <span>🚀</span> Start Cooking Now
              </button>

              <button onclick="window.app.quickDemoLogin('player')" class="bg-orange-700/80 hover:bg-orange-700 text-white border border-orange-400/50 font-bold px-5 py-3.5 rounded-2xl backdrop-blur-sm transition flex items-center gap-2 text-sm">
                <span>👨‍🍳</span> Quick Play (Demo Chef)
              </button>

              <button onclick="window.app.quickDemoLogin('admin')" class="bg-slate-900/80 hover:bg-slate-900 text-purple-200 border border-purple-400/40 font-bold px-4 py-3.5 rounded-2xl backdrop-blur-sm transition flex items-center gap-2 text-sm">
                <span>⚙️</span> Admin Demo
              </button>
            </div>
          </div>

          <!-- Decorative Floating Food Icons -->
          <div class="absolute -right-8 -bottom-8 opacity-20 sm:opacity-30 text-9xl sm:text-[14rem] pointer-events-none select-none bounce-slow">
            🍔
          </div>
          <div class="absolute right-32 top-10 opacity-25 text-7xl pointer-events-none select-none pulse-glow hidden sm:block">
            🌮
          </div>
          <div class="absolute right-12 top-40 opacity-25 text-7xl pointer-events-none select-none bounce-slow hidden sm:block">
            🍕
          </div>
        </section>

        <!-- Core Gameplay Loop -->
        <section class="space-y-6">
          <div class="text-center max-w-xl mx-auto space-y-2">
            <h2 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">The Tycoon Gameplay Loop</h2>
            <p class="text-sm text-slate-500 font-medium">From street cart to multi-city food empire in 6 addictive steps.</p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">🛒</div>
              <h3 class="font-extrabold text-sm text-slate-900">1. Buy Stock</h3>
              <p class="text-xs text-slate-500">Source wholesale fresh ingredients at best market prices.</p>
            </div>

            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">⏱️</div>
              <h3 class="font-extrabold text-sm text-slate-900">2. Cook Fast</h3>
              <p class="text-xs text-slate-500">Hit sweet-spot timers on Grill & Fryer for PERFECT rating.</p>
            </div>

            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">⭐</div>
              <h3 class="font-extrabold text-sm text-slate-900">3. Serve & Tip</h3>
              <p class="text-xs text-slate-500">Delight VIPs and Food Critics to earn bonus tips & XP.</p>
            </div>

            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">🚚</div>
              <h3 class="font-extrabold text-sm text-slate-900">4. Upgrade Truck</h3>
              <p class="text-xs text-slate-500">Upgrade to Level 5 Elite Truck and pro kitchen equipment.</p>
            </div>

            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">🗺️</div>
              <h3 class="font-extrabold text-sm text-slate-900">5. Expand Spots</h3>
              <p class="text-xs text-slate-500">Unlock Beach Boardwalk, University, and Downtown.</p>
            </div>

            <div class="tycoon-card p-4 text-center space-y-2">
              <div class="text-3xl">👑</div>
              <h3 class="font-extrabold text-sm text-slate-900">6. Rank #1</h3>
              <p class="text-xs text-slate-500">Top the global tycoon leaderboard and earn achievements.</p>
            </div>
          </div>
        </section>

        <!-- Feature Pillars -->
        <section class="grid md:grid-cols-3 gap-6">
          <div class="tycoon-card p-6 space-y-3 border-l-4 border-l-orange-500">
            <div class="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-2xl">
              🍳
            </div>
            <h3 class="text-lg font-extrabold text-slate-900">Precision Cooking Engine</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Multi-station preparation: chop produce, manage live grill/fryer heat gauges, assemble ingredients, and plate before the customer walkout timer expires.
            </p>
          </div>

          <div class="tycoon-card p-6 space-y-3 border-l-4 border-l-amber-500">
            <div class="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center text-2xl">
              💰
            </div>
            <h3 class="text-lg font-extrabold text-slate-900">Realistic Supply Chain Economy</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              Live inventory management, unit cost calculations, profit margins, storage limits, and detailed financial P&L reporting.
            </p>
          </div>

          <div class="tycoon-card p-6 space-y-3 border-l-4 border-l-emerald-500">
            <div class="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-2xl">
              🏆
            </div>
            <h3 class="text-lg font-extrabold text-slate-900">Deep Progression & Quests</h3>
            <p class="text-sm text-slate-600 leading-relaxed">
              20+ player levels, 10 food categories, 15+ unlockable achievements, daily missions, 7-day login streaks, and global competitive leaderboards.
            </p>
          </div>
        </section>

        <!-- Testimonial / Quick Start Banner -->
        <section class="tycoon-card p-8 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="space-y-1">
            <h3 class="text-xl font-extrabold">Ready to fire up the grill?</h3>
            <p class="text-sm text-slate-300">Join thousands of food entrepreneurs and start cooking right in your browser!</p>
          </div>
          <button onclick="window.app.showAuth('register')" class="btn-primary flex-shrink-0 text-sm py-3 px-6">
            <span>🔥</span> Create Free Account
          </button>
        </section>

      </div>
    `;
  }
};
