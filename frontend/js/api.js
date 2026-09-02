/**
 * API Client for Food Truck Tycoon.
 */
class ApiClient {
  constructor() {
    this.baseUrl = window.location.origin + '/api';
  }

  getToken() {
    return localStorage.getItem('tycoon_token');
  }

  setToken(token) {
    localStorage.setItem('tycoon_token', token);
  }

  clearToken() {
    localStorage.removeItem('tycoon_token');
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const token = this.getToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401 && !endpoint.includes('/auth/login')) {
        this.clearToken();
        window.gameState?.setUser(null);
        window.app?.showView('landing');
        window.toast?.error('Session expired. Please log in again.');
        throw new Error('Unauthorized');
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.detail || 'An unexpected error occurred.');
      }
      return data;
    } catch (err) {
      console.error(`API Error [${endpoint}]:`, err);
      throw err;
    }
  }

  // Auth Endpoints
  async register(username, email, password, role = 'PLAYER') {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password, role }),
    });
  }

  async login(username_or_email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username_or_email, password }),
    });
  }

  async getMe() {
    return this.request('/auth/me');
  }

  // Player & Truck Endpoints
  async getPlayerProfile() {
    return this.request('/player/profile');
  }

  async getFoodTruck() {
    return this.request('/truck');
  }

  async upgradeTruck() {
    return this.request('/truck/upgrade', { method: 'POST' });
  }

  async updateTruckCustomization(customization) {
    return this.request('/truck/customize', {
      method: 'PUT',
      body: JSON.stringify(customization),
    });
  }

  async upgradeEquipment(equipment_type, target_tier) {
    return this.request('/truck/equipment/upgrade', {
      method: 'POST',
      body: JSON.stringify({ equipment_type, target_tier }),
    });
  }

  // Food & Menu
  async getFoods() {
    return this.request('/foods');
  }

  // Ingredients & Inventory
  async getInventory() {
    return this.request('/inventory');
  }

  async getIngredientsMarket() {
    return this.request('/inventory/market');
  }

  async buyIngredient(ingredient_id, quantity) {
    return this.request('/inventory/buy', {
      method: 'POST',
      body: JSON.stringify({ ingredient_id, quantity }),
    });
  }

  // Orders & Cooking Minigame
  async getActiveOrders() {
    return this.request('/orders/active');
  }

  async getOrderHistory() {
    return this.request('/orders/history');
  }

  async generateCustomerOrder() {
    return this.request('/orders/spawn', { method: 'POST' });
  }

  async startCooking(order_id, item_id) {
    return this.request('/cooking/start', {
      method: 'POST',
      body: JSON.stringify({ order_id, item_id }),
    });
  }

  async finishCooking(order_id, item_id, timing_accuracy) {
    return this.request('/cooking/finish', {
      method: 'POST',
      body: JSON.stringify({ order_id, item_id, timing_accuracy }),
    });
  }

  async serveOrder(order_id) {
    return this.request('/cooking/serve', {
      method: 'POST',
      body: JSON.stringify({ order_id }),
    });
  }

  // Locations
  async getLocations() {
    return this.request('/locations');
  }

  async unlockLocation(location_id) {
    return this.request(`/locations/${location_id}/unlock`, { method: 'POST' });
  }

  async switchLocation(location_id) {
    return this.request(`/locations/${location_id}/switch`, { method: 'POST' });
  }

  // Missions & Achievements
  async getMissions() {
    return this.request('/missions');
  }

  async claimMissionReward(mission_id) {
    return this.request(`/missions/${mission_id}/claim`, { method: 'POST' });
  }

  async getAchievements() {
    return this.request('/achievements');
  }

  // Daily Rewards
  async getDailyRewardStatus() {
    return this.request('/rewards/daily/status');
  }

  async claimDailyReward() {
    return this.request('/rewards/daily/claim', { method: 'POST' });
  }

  // Analytics & Leaderboard
  async getLeaderboard(metric = 'revenue') {
    return this.request(`/leaderboard?metric=${metric}`);
  }

  async getBusinessAnalytics() {
    return this.request('/analytics/business');
  }

  // Admin Portal
  async getAdminGlobalStats() {
    return this.request('/admin/stats');
  }

  async getAdminPlayers() {
    return this.request('/admin/players');
  }

  async adjustAdminPlayer(player_id, changes) {
    return this.request(`/admin/players/${player_id}/adjust`, {
      method: 'POST',
      body: JSON.stringify(changes),
    });
  }

  async getAdminSettings() {
    return this.request('/admin/settings');
  }

  async updateAdminSetting(key, value) {
    return this.request('/admin/settings', {
      method: 'PUT',
      body: JSON.stringify({ key, value }),
    });
  }

  async createFoodItem(foodData) {
    return this.request('/admin/foods', {
      method: 'POST',
      body: JSON.stringify(foodData),
    });
  }

  async updateFoodItem(foodId, foodData) {
    return this.request(`/admin/foods/${foodId}`, {
      method: 'PUT',
      body: JSON.stringify(foodData),
    });
  }
}

window.api = new ApiClient();
