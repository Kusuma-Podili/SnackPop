# 🍬🍕 SnackPop Saga - Candy Crush Food Matching Game 🍕🍬

A production-grade, highly engaging, full-stack **Candy Crush-style Match-3 Game** built with modern web technologies, procedural Web Audio sound synthesis, particle physics, 50+ handcrafted multi-world levels, cloud save persistence, anti-cheat validation, and global leaderboards.

---

## 🎮 Core Gameplay Mechanics

### 1. 🍕 Food Archetypes
Match 3 or more identical foods in rows or columns:
* 🍕 **Artisan Pizza**
* 🍔 **Wagyu Burger**
* 🍩 **Glazed Donut**
* 🍓 **Alpine Strawberry**
* 🍰 **Berry Layer Cake**
* 🍟 **Crispy Belgian Fries**
* 🌮 **Flame-Grilled Taco**
* 🍣 **Salmon Nigiri Sushi**

---

### 2. ⚡ Special Foods & Synthesis Combos
* **4-in-a-Line** ──► **Striped Food (Horizontal / Vertical)**:
  * Emits a piercing laser beam clearing an entire row or column.
* **5 in T-Shape / L-Shape / Cross** ──► **Wrapped Sizzle Bomb**:
  * Explodes a 3x3 surrounding zone twice with dynamic screen shake.
* **5 in a Straight Line** ──► **Rainbow Chef Hat / Flavor Bomb**:
  * Swapping with any food clears all tiles of that food type across the entire board!

#### 💥 Super-Special Combinations:
1. **Striped + Striped** ──► Cross-board laser beam clearing 1 row and 1 column simultaneously.
2. **Striped + Bomb** ──► Mega Blaster clearing 3 full rows and 3 full columns!
3. **Rainbow Hat + Striped** ──► Converts all target foods on board into Striped Foods and detonates them all!
4. **Rainbow Hat + Rainbow Hat** ──► Total Cosmic Board Wipeout!

---

## 🗺️ 5 Culinary Worlds (50+ Handcrafted Levels)

1. **World 1: Morning Bakery** (Levels 1–10)
   * Introductions to basic matches, strawberry and donut glazes, and score goals.
2. **World 2: Fast Food Fiesta** (Levels 11–20)
   * Striped food combos, fry oil glazes, and Golden Spatula drop missions.
3. **World 3: Italian Piazza** (Levels 21–30)
   * Melted mozzarella double frostings and encroaching chocolate mold blockers.
4. **World 4: Sweet Tooth Kingdom** (Levels 31–40)
   * Royal Chef Trophies, checkerboard hole obstacles, and multi-layer sugar glazes.
5. **World 5: Gourmet Galaxy** (Levels 41–50)
   * Master-level 8-food challenges and the Grand Master Finale (Level 50).

---

## 🛠️ Boosters & Power-Ups

* 🥄 **Chef's Spatula**: Smashes any single tile or blocker without spending a move.
* 🥖 **Rolling Pin**: Wipes out an entire designated horizontal row.
* 🌪️ **Blender**: Shuffles the entire board layout.
* ➕ **+5 Extra Moves**: Clutch move booster when running low.
* 🌈 **Pre-Game Flavor Bomb**: Begin the level with a Rainbow Chef Hat placed on board.

---

## 🔊 Procedural Web Audio Synthesis & Visual Juice

* **Zero Missing Assets**: All audio is synthesized via the Web Audio API in real-time.
* **Harmonic Pentatonic Scale**: Consecutive cascade combo matches pitch up harmonically (C4 ➔ D4 ➔ E4 ➔ G4 ➔ A4 ➔ C5 ➔ C6).
* **2D Canvas Particle Simulation**: Crumb bursts, sparkle star trails, shockwaves, and victory confetti.
* **Screen Juice Engine**: Dynamic camera trauma, directional screen shake, and impact hit-stops.

---

## 🏆 Daily Rewards, Cookbook & Trophies

* 🎡 **Lucky Chef Daily Spin Wheel**: Spin daily for free boosters, gold coins, and extra lives.
* 📖 **Master Chef Cookbook**: Unlock 25+ gourmet recipes with permanent passive score buffs.
* 🏆 **Culinary Achievements**: 20+ milestone trophies awarding kitchen gold.
* ❤️ **5-Life Energy System**: 20-minute persistent recharge timer with instant coin refills.

---

## 🚀 Quick Start Guide

### 1. Requirements
* Python 3.10+
* Modern Web Browser (Chrome, Firefox, Edge, Safari)

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run Backend & Launch Game
```bash
python run.py
```
Open your browser at `http://127.0.0.1:8000`.

---

## 🧪 Automated Test Suite (24 Test Cases)

Run the full pytest suite:
```bash
pytest -v --tb=short
```

### Test Coverage:
* `test_match_detection.py`: 3-match, 4-match line, 5-match line, and L/T/Cross pattern recognition.
* `test_gravity_cascades.py`: Gravity falls, hole avoidance, refill math, and combo score progression.
* `test_super_combos.py`: Super combo interaction matrices.
* `test_level_objectives.py`: Target score, frosting clearance, and move limit rules.
* `test_backend_api.py`: FastAPI REST routes, anti-cheat validation, and leaderboards.

---

## 📐 Architecture

```
food-game/
├── backend/
│   └── app/
│       ├── api/
│       │   └── endpoints.py
│       ├── models/
│       │   └── schemas.py
│       ├── services/
│       │   ├── anti_cheat.py
│       │   └── leaderboard_service.py
│       └── main.py
├── frontend/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── bundle.js
│   ├── src/
│   │   ├── assets/
│   │   │   └── food_sprites.ts
│   │   ├── audio/
│   │   │   ├── music_generator.ts
│   │   │   └── synth.ts
│   │   ├── components/
│   │   │   ├── achievements.ts
│   │   │   ├── cookbook.ts
│   │   │   ├── daily_spin_wheel.ts
│   │   │   ├── game_screen.ts
│   │   │   ├── modals.ts
│   │   │   └── settings_modal.ts
│   │   ├── engine/
│   │   │   ├── board.ts
│   │   │   ├── combo_resolver.ts
│   │   │   ├── gravity.ts
│   │   │   ├── match_detector.ts
│   │   │   ├── move_validator.ts
│   │   │   ├── score_calculator.ts
│   │   │   ├── special_creators.ts
│   │   │   └── types.ts
│   │   ├── juice/
│   │   │   ├── floating_text.ts
│   │   │   ├── particle_emitter.ts
│   │   │   ├── screen_shake.ts
│   │   │   └── tile_animator.ts
│   │   ├── levels/
│   │   │   ├── level_definitions.ts
│   │   │   ├── objective_manager.ts
│   │   │   └── world_map.ts
│   │   ├── systems/
│   │   │   ├── booster_manager.ts
│   │   │   ├── lives_system.ts
│   │   │   └── save_system.ts
│   │   └── main.ts
│   └── index.html
├── tests/
│   ├── conftest.py
│   ├── test_backend_api.py
│   ├── test_gravity_cascades.py
│   ├── test_level_objectives.py
│   ├── test_match_detection.py
│   └── test_super_combos.py
├── .github/
│   └── workflows/
│       └── ci.yml
├── requirements.txt
├── run.py
└── README.md
```

---
*Built with ❤️ for culinary puzzle enthusiasts everywhere.*
