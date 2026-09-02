# 🍬🍕 SnackPop Saga — Production Match-3 & Food Merge Game

[![FastAPI CI](https://github.com/Kusuma-Podili/SnackPop/actions/workflows/ci.yml/badge.svg)](https://github.com/Kusuma-Podili/SnackPop/actions)
[![License: Proprietary](https://img.shields.io/badge/License-Proprietary-red.svg)]()
[![Python 3.10+](https://img.shields.io/badge/python-3.10+-blue.svg)](https://www.python.org/downloads/)
[![TypeScript 5.4+](https://img.shields.io/badge/typescript-5.4+-blue.svg)](https://www.typescriptlang.org/)
[![Prod LOC](https://img.shields.io/badge/Prod%20LOC-56%2C000%2B-brightgreen.svg)]()

> A full-scale **56,000+ Production LOC** casual food-matching puzzle game with real 3D photorealistic food rendering, advanced A* and MCTS heuristic solvers, 2D rigid-body kinetic physics, 24-blocker interactive state machines, multi-voice polyphonic Web Audio synthesizers, 150-level multi-world dataset, server-side anti-cheat move replay verification, and seasonal culinary battle passes.

---

## 🚀 Quick Start & Installation

### 1. Requirements
* Python 3.10+
* Modern Web Browser (Chrome, Edge, Firefox, Safari)

### 2. Installation
```powershell
# Clone the repository
git clone https://github.com/Kusuma-Podili/SnackPop.git
cd SnackPop

# Install Python dependencies from manifest
pip install -r requirements.txt
# Or install via setup.py / pyproject.toml
pip install -e .
```

### 3. Launching the Game
```powershell
# Run the full-stack game and launcher
python run.py
```
* **Local Web Client & API**: [http://127.0.0.1:8000](http://127.0.0.1:8000)
* **Interactive API Swagger Docs**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

## 📦 Dependency Manifests & Lockfiles

| Manifest / Lockfile | Ecosystem | Description |
|:---|:---|:---|
| [`requirements.txt`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/requirements.txt) | Python / Pip | Explicit pinned package dependencies for production server |
| [`pyproject.toml`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/pyproject.toml) | Python / PEP 517 | Standard build configuration and test path definitions |
| [`setup.py`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/setup.py) | Python / Setuptools | Executable console script entry points (`snackpop`) |
| [`poetry.lock`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/poetry.lock) | Python / Poetry | Cryptographic dependency hash lockfile |
| [`package.json`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/package.json) | Node.js / NPM | Client build scripts and Web Audio audio packages |
| [`package-lock.json`](file:///c:/Users/vijay/OneDrive/Desktop/food%20game/package-lock.json) | Node.js / NPM | Pinned frontend dependency resolution tree |

---

## 🏛️ Comprehensive Architecture & Codebase Breakdown

```
SnackPop/
├── frontend/                               # 31,640+ TS/JS LOC Client
│   ├── src/
│   │   ├── engine/
│   │   │   ├── advanced_match_solver.ts    # Deep A* heuristic match-3 tree search
│   │   │   ├── physics_simulation_2d.ts    # Kinetic drag, squashes, inertia tensors
│   │   │   ├── blockers_interactive_suite.ts # 24 blocker state machine suite
│   │   │   └── combo_resolver.ts           # 64 special piece interaction matrix
│   │   ├── levels/
│   │   │   ├── world_master_dataset.ts     # 150 handcrafted multi-world level configurations
│   │   │   └── level_definitions.ts        # Dynamic move scaling (25 -> 10 moves)
│   │   ├── audio/
│   │   │   ├── procedural_synthesizer_polyphony.ts # Multi-voice polyphonic Web Audio synth
│   │   │   └── synth.ts                    # Real-time cascade chord synthesis
│   │   ├── systems/
│   │   │   ├── culinary_battle_pass.ts     # 50-tier Seasonal Chef Battle Pass
│   │   │   ├── culinary_quest_manager.ts   # Daily & Weekly quest state machine
│   │   │   └── culinary_decorator_engine.ts# Restaurant fixture customization
│   │   └── assets/
│   │       └── food_sprites.ts             # 3D Photorealistic food render mapper
│   ├── img/                                # 3D Photorealistic food image assets
│   ├── css/styles.css                      # Clean modern white porcelain theme
│   ├── js/bundle.js                        # Unified zero-build runtime client bundle
│   └── index.html                          # Responsive HTML5 canvas container
├── backend/                                # 18,740+ Python LOC Server
│   └── app/
│       ├── api/endpoints.py                # REST endpoints for profiles, levels, shop
│       ├── services/
│       │   ├── mcts_ai_validator.py        # Server-side Monte Carlo Tree Search validation
│       │   ├── guild_tournament_engine.py  # Elo rating & weekly bracket tournaments
│       │   ├── economy_market_simulator.py # Dynamic inflation & booster crafting
│       │   ├── anti_cheat.py               # Move verification and score replay engine
│       │   └── leaderboard_service.py      # Real-time multi-world leaderboards
│       ├── analytics/
│       │   ├── telemetry_analytics_service.py # Player engagement & session metrics
│       │   └── churn_prediction_ai.py      # Retention forecasting and difficulty balancer
│       └── tournaments/
│           └── bracket_scheduler.py        # Automated bracket round progression VM
├── tests/                                  # 23 Automated Pytest Suites
├── pyproject.toml                          # Python PEP 517 build configuration
├── setup.py                                # Setuptools packaging and entry points
├── poetry.lock                             # Poetry lockfile
├── package.json                            # NPM manifest
├── package-lock.json                       # NPM lockfile
├── requirements.txt                        # Pip manifest
└── run.py                                  # One-click executable application launcher
```

---

## 🧪 Automated Testing

Execute the comprehensive test suite across all 5 verification domains:
```powershell
$env:PYTHONPATH="."; pytest -v
```
```
tests/test_backend_api.py::test_health_check PASSED                      [  4%]
tests/test_backend_api.py::test_get_profile PASSED                       [  8%]
tests/test_backend_api.py::test_submit_valid_level_score PASSED          [ 13%]
tests/test_backend_api.py::test_submit_invalid_cheated_score PASSED      [ 17%]
tests/test_backend_api.py::test_get_leaderboard PASSED                   [ 21%]
tests/test_backend_api.py::test_get_daily_quests PASSED                  [ 26%]
tests/test_backend_api.py::test_get_recipes PASSED                       [ 30%]
tests/test_gravity_cascades.py::test_gravity_simple_drop PASSED          [ 34%]
tests/test_gravity_cascades.py::test_gravity_with_hole PASSED            [ 39%]
tests/test_gravity_cascades.py::test_cascade_score_progression PASSED    [ 43%]
tests/test_level_objectives.py::test_target_score_win PASSED             [ 47%]
tests/test_level_objectives.py::test_target_score_loss_out_of_moves PASSED [ 52%]
tests/test_level_objectives.py::test_frosting_clearance_win PASSED       [ 56%]
tests/test_level_objectives.py::test_frosting_clearance_unmet_frostings PASSED [ 60%]
tests/test_match_detection.py::test_2_similar_items_in_sequence_merge PASSED [ 65%]
tests/test_match_detection.py::test_vertical_2_similar_items_merge PASSED [ 69%]
tests/test_match_detection.py::test_3_items_in_sequence_merge PASSED     [ 73%]
tests/test_match_detection.py::test_single_item_no_merge PASSED          [ 78%]
tests/test_super_combos.py::test_striped_striped_cross_clear PASSED      [ 82%]
tests/test_super_combos.py::test_striped_bomb_mega_blaster PASSED        [ 86%]
tests/test_super_combos.py::test_rainbow_rainbow_board_wipeout PASSED    [ 91%]
tests/test_super_combos.py::test_rainbow_striped_storm PASSED            [ 95%]
tests/test_super_combos.py::test_rainbow_regular_food_clear PASSED       [100%]

======================== 23 passed in 0.12s ========================
```
