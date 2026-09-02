/**
 * Authentication View (Login / Register) for Food Truck Tycoon.
 */
window.views = window.views || {};

window.views.auth = {
  mode: 'login', // 'login' or 'register'
  role: 'PLAYER',

  setMode(mode) {
    this.mode = mode;
    this.render();
  },

  setRole(role) {
    this.role = role;
    this.render();
  },

  render() {
    const isLogin = this.mode === 'login';
    const isPlayer = this.role === 'PLAYER';

    const container = document.getElementById('app-view');
    if (!container) return;

    container.innerHTML = `
      <div class="max-w-md mx-auto my-8">
        <div class="tycoon-card p-8 bg-white border border-orange-100 shadow-xl space-y-6">
          
          <!-- Header -->
          <div class="text-center space-y-2">
            <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-3xl shadow-lg shadow-orange-200">
              ${isPlayer ? '👨‍🍳' : '⚙️'}
            </div>
            <h2 class="text-2xl font-black text-slate-900 tracking-tight">
              ${isLogin ? 'Welcome Back!' : 'Join Food Truck Tycoon'}
            </h2>
            <p class="text-xs text-slate-500 font-medium">
              ${isLogin ? 'Log in to manage your kitchen & grow your empire' : 'Create your chef account and get 500 starter coins!'}
            </p>
          </div>

          <!-- Role Selector -->
          <div class="flex p-1 bg-slate-100 rounded-xl">
            <button onclick="window.views.auth.setRole('PLAYER')" class="flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${isPlayer ? 'bg-white text-orange-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
              👨‍🍳 Player
            </button>
            <button onclick="window.views.auth.setRole('ADMIN')" class="flex-1 py-1.5 text-xs font-extrabold rounded-lg transition ${!isPlayer ? 'bg-white text-purple-600 shadow-xs' : 'text-slate-500 hover:text-slate-800'}">
              ⚙️ Admin
            </button>
          </div>

          <!-- Auth Form -->
          <form id="auth-form" onsubmit="window.views.auth.handleSubmit(event)" class="space-y-4">
            
            ${!isLogin ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Username</label>
                <input type="text" id="auth-username" required minlength="3" placeholder="e.g. MasterChefAlex" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition">
              </div>
            ` : ''}

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                ${isLogin ? 'Username or Email' : 'Email Address'}
              </label>
              <input type="${isLogin ? 'text' : 'email'}" id="auth-login-id" required placeholder="${isLogin ? 'e.g. chef_mario or admin' : 'chef@example.com'}" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition">
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Password</label>
              <input type="password" id="auth-password" required minlength="6" placeholder="••••••••" class="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition">
            </div>

            <button type="submit" id="auth-submit-btn" class="w-full btn-primary py-3 text-sm font-extrabold shadow-md">
              <span>${isLogin ? '🚀 Sign In' : '🎉 Create Account'}</span>
            </button>
          </form>

          <!-- Quick Fill Demo Accounts -->
          <div class="border-t border-slate-100 pt-4 space-y-2">
            <span class="block text-[11px] font-bold text-slate-400 text-center uppercase tracking-wider">Quick Fill Demo Credentials</span>
            <div class="grid grid-cols-2 gap-2">
              <button onclick="window.views.auth.fillDemo('player')" class="px-2.5 py-1.5 rounded-lg border border-orange-200 text-orange-700 bg-orange-50/50 hover:bg-orange-100 text-xs font-bold transition">
                👨‍🍳 Demo Player
              </button>
              <button onclick="window.views.auth.fillDemo('admin')" class="px-2.5 py-1.5 rounded-lg border border-purple-200 text-purple-700 bg-purple-50/50 hover:bg-purple-100 text-xs font-bold transition">
                ⚙️ Demo Admin
              </button>
            </div>
          </div>

          <!-- Switch Mode Footer -->
          <div class="text-center pt-2">
            <p class="text-xs text-slate-500">
              ${isLogin ? "Don't have an account yet?" : "Already have an account?"}
              <button onclick="window.views.auth.setMode('${isLogin ? 'register' : 'login'}')" class="font-extrabold text-orange-600 hover:underline ml-1">
                ${isLogin ? 'Sign up free' : 'Sign in'}
              </button>
            </p>
          </div>

        </div>
      </div>
    `;
  },

  fillDemo(type) {
    this.mode = 'login';
    this.render();
    const idInput = document.getElementById('auth-login-id');
    const pwdInput = document.getElementById('auth-password');
    if (type === 'player') {
      this.role = 'PLAYER';
      this.render();
      document.getElementById('auth-login-id').value = 'chef_mario';
      document.getElementById('auth-password').value = 'PlayerSecret123!';
    } else {
      this.role = 'ADMIN';
      this.render();
      document.getElementById('auth-login-id').value = 'admin';
      document.getElementById('auth-password').value = 'AdminSecret2026!';
    }
  },

  async handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('auth-submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<span>⏳ Processing...</span>';

    try {
      if (this.mode === 'register') {
        const username = document.getElementById('auth-username').value;
        const email = document.getElementById('auth-login-id').value;
        const password = document.getElementById('auth-password').value;
        const res = await window.api.register(username, email, password, this.role);
        window.api.setToken(res.access_token);
        window.toast.success('Account created! Welcome to Food Truck Tycoon!');
        await window.app.bootstrapSession();
      } else {
        const loginId = document.getElementById('auth-login-id').value;
        const password = document.getElementById('auth-password').value;
        const res = await window.api.login(loginId, password);
        window.api.setToken(res.access_token);
        window.toast.success(`Welcome back, ${res.username}!`);
        await window.app.bootstrapSession();
      }
    } catch (err) {
      window.toast.error(err.message || 'Authentication failed.');
      btn.disabled = false;
      btn.innerHTML = `<span>${this.mode === 'login' ? '🚀 Sign In' : '🎉 Create Account'}</span>`;
    }
  }
};
