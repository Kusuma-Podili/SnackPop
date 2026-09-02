# 🚚 Food Truck Tycoon

A production-grade, highly engaging, full-stack cooking and food-business simulation game. 

Start from a humble food cart on City Street and grow into a global food truck mogul! Manage ingredient supply chains, master multi-station recipe preparation, serve dynamic customer archetypes within tight timers, upgrade your truck to Tier 5 Elite, unlock 6 vibrant city hotspots, complete daily missions, and compete on the global leaderboard.

---

## 🎮 Core Gameplay Loop

```
[ Buy Wholesale Stock ] ──► [ Receive Customer Orders ] ──► [ Sizzle & Cook (Sweet-Spot Timing) ]
           ▲                                                                    │
           │                                                                    ▼
[ Upgrade Truck & Equipment ] ◄── [ Earn Coins + XP + Tips ] ◄── [ Serve & Earn Star Ratings ]
           │
           ▼
[ Unlock 6 City Hotspots & Gourmet Recipes ] ──► [ Complete Missions & Top Global Leaderboard ]
```

---

## 🌟 Key Features

### 1. 🍳 Precision Multi-Station Cooking Arena
* **Station 1: Prep & Chopping**: Dynamic recipe ingredient validation against active truck inventory.
* **Station 2: Live Sweet-Spot Timing Gauge**: Real-time interactive meter with needle movement. Hit the sweet spot for **PERFECT (⭐)**, **GOOD (👍)**, **LATE (⚠️)**, or avoid **BURNED (❌)**.
* **Station 3: Plating & Assembly**: Plate multiple dishes on customer tickets.
* **Station 4: Service Bell & Tipping**: Calculates satisfaction ratings, tips, XP bonuses, and reputation shifts.
* **Procedural Sound Design**: Synthesized Web Audio API sound effects (sizzling pan, timer ticks, cash register chimes, level-up fanfares, error buzzers) with zero external broken assets.

### 2. 👥 Dynamic Customer AI System
* **5 Customer Archetypes**:
  * `VIP`: High-rolling dignitaries who award up to 2.2x tips on PERFECT dishes but have fast patience drain.
  * `FOOD_CRITIC`: Influential judges who boost or reduce reputation significantly based on cooking precision.
  * `HUNGRY`: Multi-item orders (2-3 dishes) providing massive coin payouts.
  * `IMPATIENT`: Fast-paced diners who demand quick service.
  * `REGULAR`: Steady, balanced customers.

### 3. 🚚 5-Tier Truck Progression & Visual Workshop
* **Truck Tiers**:
  * **Tier 1: Basic Cart** (50 Storage, 1.0x Speed, 3 Queue Cap)
  * **Tier 2: Improved Truck** (80 Storage, 1.15x Speed, 4 Queue Cap)
  * **Tier 3: Professional Rig** (120 Storage, 1.35x Speed, 5 Queue Cap)
  * **Tier 4: Premium Cruiser** (180 Storage, 1.60x Speed, 6 Queue Cap)
  * **Tier 5: Elite Tycoon Flagship** (250 Storage, 2.00x Speed, 8 Queue Cap)
* **Kitchen Equipment Shop**: Upgrade Grills, Fryers, Commercial Fridges, and Stainless Prep Tables with real gameplay multiplier effects.
* **Custom Customizer**: Dynamic SVG visualizer reflecting custom paint schemes, neon signage, decals, and wheel rims in real-time.

### 4. 📦 Wholesale Inventory Marketplace
* Real storage capacity limits, low-stock alerts, category filters, and quick bulk purchasing.
* Automatic ingredient deductions upon cooking.

### 5. 🗺️ 6 Playable City Hotspots
1. **City Street** (Free, Level 1)
2. **Beach Boardwalk** (800 Coins, Level 2)
3. **University Campus** (2,000 Coins, Level 4)
4. **Business District** (5,000 Coins, Level 6)
5. **Festival Grounds** (10,000 Coins, Level 9)
6. **Downtown Metropolis** (25,000 Coins, Level 13)

### 6. 🏆 Progression, Missions & Leaderboard
* 20+ Player Levels with recipe unlocks and coin rewards.
* 7-Day Daily Login Streak calendar with compounding daily rewards.
* Daily & Lifetime Missions with real-time tracking and claimable rewards.
* 10+ Milestone Achievement Trophies.
* Global Leaderboard ranked by Revenue, Reputation, Orders, or Level.
* Business Intelligence Dashboard with P&L reporting, profit margins, and Chart.js analytics.

### 7. 🛡️ Complete Admin Management Portal
* Role-based access control (`PLAYER` vs `ADMIN`).
* Platform-wide telemetry (Total revenue, active players, global order counts).
* Player Account Manager (Inspect profiles, grant coins/XP, set level, ban/activate accounts).
* Recipe Builder (Create new dishes with required ingredients and selling prices).
* Game Balance & Economy Settings Editor.

---

## 🔑 Default Credentials

| Role | Username / Email | Password | Description |
| :--- | :--- | :--- | :--- |
| **Admin** | `admin` or `admin@foodtrucktycoon.com` | `AdminSecret2026!` | Full administrative portal access |
| **Demo Player** | `chef_mario` or `mario@foodtrucktycoon.com` | `PlayerSecret123!` | Starter player with coins, truck & stock |

*New players can also register freely on the landing page.*

---

## 🛠️ Technology Stack

* **Backend**: FastAPI (Python 3.10+), SQLAlchemy 2.0, Pydantic v2, SQLite, Pytest, JWT Authentication (`python-jose`, `bcrypt`).
* **Frontend**: HTML5, Tailwind CSS, Web Audio API (procedural synthesis), Chart.js, Vanilla ES6 JavaScript (zero node build step required).
* **Testing**: Comprehensive Pytest test suite covering 5 modules and 27+ automated assertions.

---

## 🚀 Quickstart Guide

### 1. Install Dependencies
```bash
python -m pip install -r requirements.txt
```

### 2. Initialize Database & Seed Content
```bash
python -m backend.app.db.init_db
```

### 3. Start Game Server
```bash
python run.py
```
Open **http://localhost:8000** in any modern web browser.

Interactive Swagger API docs are available at **http://localhost:8000/docs**.

---

## 🧪 Running Automated Tests

Run the full automated test suite:
```bash
python -m pytest tests/ -v
```

### Test Suite Structure:
1. `tests/test_auth.py`: User registration, profile initialization, duplicate rejection, login verification, RBAC tokens.
2. `tests/test_inventory_economy.py`: Inventory market buying, storage capacity validation, truck tier upgrades, equipment multipliers, 7-day streak rewards.
3. `tests/test_cooking_engine.py`: Dynamic order generation, inventory ingredient deduction, sweet-spot accuracy scoring, order service & tips.
4. `tests/test_progression_missions.py`: Location unlocking & switching, recipe profit margins, daily mission completion, trophy unlocking, leaderboard & analytics.
5. `tests/test_admin_management.py`: Global telemetry stats, player balance adjustments, recipe builder, game settings config, and 403 Forbidden player role enforcement.

---

## 📦 Pull Requests Summary

* **PR 1**: `feat(core)` - Project architecture, SQLite schema, JWT auth, seed data, frontend shell & procedural sound engine.
* **PR 2**: `feat(economy)` - Wholesale inventory marketplace, 5-tier truck upgrades, equipment workshop, and 7-day daily streak.
* **PR 3**: `feat(cooking)` - Real-time multi-station cooking arena, dynamic customer AI, sweet-spot timing needle, and audio synthesis.
* **PR 4**: `feat(progression)` - 6 dynamic city territories, recipe catalog with profit margins, missions, achievements, leaderboard, and P&L business analytics.
* **PR 5**: `feat(admin)` - Full administrative management suite, player inspector, recipe builder, balance tuning, and complete 5-file automated test suite.
