import {
  BlockerType,
  BoardConfig,
  FoodType,
  GridPosition,
  IngredientType
} from '../engine/types';

export enum LevelObjectiveType {
  TARGET_SCORE = 'TARGET_SCORE',
  CLEAR_FROSTING = 'CLEAR_FROSTING',
  COLLECT_INGREDIENTS = 'COLLECT_INGREDIENTS',
  TIMED_FRENZY = 'TIMED_FRENZY',
  BOSS_CHEF_DUEL = 'BOSS_CHEF_DUEL'
}

export interface LevelDefinition {
  levelNumber: number;
  worldNumber: number;
  worldName: string;
  title: string;
  description: string;
  objectiveType: LevelObjectiveType;
  moves: number;
  timeLimitSeconds?: number;
  targetScore: number;
  starThresholds: [number, number, number]; // [1-star, 2-star, 3-star]
  targetFrostingCount?: number;
  targetIngredients?: { type: IngredientType; count: number }[];
  boardConfig: BoardConfig;
}

// Generate the full suite of 50 Handcrafted Levels across 5 Culinary Worlds
export const ALL_LEVELS: LevelDefinition[] = [];

// Helper to assemble levels
function createLevel(def: LevelDefinition): LevelDefinition {
  return def;
}

// WORLD 1: Morning Bakery (Levels 1 to 10)
for (let i = 1; i <= 10; i++) {
  const allowedFoods = [FoodType.DONUT, FoodType.STRAWBERRY, FoodType.CAKE, FoodType.PIZZA];
  if (i > 4) allowedFoods.push(FoodType.BURGER);

  const isFrostingLevel = i % 2 === 0;
  const initialFrostings: { pos: GridPosition; level: number }[] = [];

  if (isFrostingLevel) {
    // Add frosting patches
    const frostCount = 6 + i * 2;
    for (let r = 2; r <= 5; r++) {
      for (let c = 2; c <= 5; c++) {
        if (initialFrostings.length < frostCount) {
          initialFrostings.push({ pos: { row: r, col: c }, level: i > 6 ? 2 : 1 });
        }
      }
    }
  }

  ALL_LEVELS.push(createLevel({
    levelNumber: i,
    worldNumber: 1,
    worldName: 'Morning Bakery',
    title: `Bakery Lesson #${i}: ${isFrostingLevel ? 'Glaze Clearance' : 'Sweet Start'}`,
    description: isFrostingLevel
      ? 'Clear away all the sweet frosting glazes by matching adjacent bakery snacks!'
      : 'Score enough points by matching sweet breakfast delights within the move limit!',
    objectiveType: isFrostingLevel ? LevelObjectiveType.CLEAR_FROSTING : LevelObjectiveType.TARGET_SCORE,
    moves: Math.max(10, Math.round(25 - (i - 1) * (15 / 49))),
    targetScore: 1000 + (i - 1) * 350,
    starThresholds: [1000 + (i - 1) * 350, 2000 + (i - 1) * 500, 3500 + (i - 1) * 800],
    targetFrostingCount: isFrostingLevel ? initialFrostings.length : undefined,
    boardConfig: {
      rows: 8,
      cols: 8,
      allowedFoods,
      initialFrostings
    }
  }));
}

// WORLD 2: Fast Food Fiesta (Levels 11 to 20)
for (let i = 11; i <= 20; i++) {
  const allowedFoods = [FoodType.BURGER, FoodType.FRIES, FoodType.TACO, FoodType.PIZZA, FoodType.DONUT];
  const isIngredientLevel = i % 2 === 1;
  const initialIngredients: { pos: GridPosition; type: IngredientType }[] = [];
  const initialFrostings: { pos: GridPosition; level: number }[] = [];

  if (isIngredientLevel) {
    initialIngredients.push({ pos: { row: 0, col: 2 }, type: IngredientType.GOLDEN_SPATULA });
    if (i > 14) initialIngredients.push({ pos: { row: 0, col: 5 }, type: IngredientType.GOLDEN_SPATULA });
  } else {
    for (let r = 1; r < 7; r++) {
      initialFrostings.push({ pos: { row: r, col: 1 }, level: 1 });
      initialFrostings.push({ pos: { row: r, col: 6 }, level: 1 });
    }
  }

  ALL_LEVELS.push(createLevel({
    levelNumber: i,
    worldNumber: 2,
    worldName: 'Fast Food Fiesta',
    title: `Fiesta Kitchen #${i}: ${isIngredientLevel ? 'Spatula Drop' : 'Crispy Crunch'}`,
    description: isIngredientLevel
      ? 'Drop the Golden Spatulas all the way down to the bottom exit row!'
      : 'Clear the greasy fry oil glazes and score big combos!',
    objectiveType: isIngredientLevel ? LevelObjectiveType.COLLECT_INGREDIENTS : LevelObjectiveType.CLEAR_FROSTING,
    moves: Math.max(20, 32 - (i - 10)),
    targetScore: 12000 + (i - 10) * 3000,
    starThresholds: [12000 + (i - 10) * 3000, 24000 + (i - 10) * 4500, 40000 + (i - 10) * 6000],
    targetIngredients: isIngredientLevel ? [{ type: IngredientType.GOLDEN_SPATULA, count: initialIngredients.length }] : undefined,
    targetFrostingCount: !isIngredientLevel ? initialFrostings.length : undefined,
    boardConfig: {
      rows: 8,
      cols: 8,
      allowedFoods,
      initialIngredients,
      initialFrostings,
      exits: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  }));
}

// WORLD 3: Italian Piazza (Levels 21 to 30)
for (let i = 21; i <= 30; i++) {
  const allowedFoods = [FoodType.PIZZA, FoodType.BURGER, FoodType.STRAWBERRY, FoodType.SUSHI, FoodType.CAKE];
  const initialMolds: GridPosition[] = [];
  const initialFrostings: { pos: GridPosition; level: number }[] = [];

  // Add chocolate mold spread obstacles in corners
  if (i >= 23) {
    initialMolds.push({ row: 7, col: 0 }, { row: 7, col: 7 });
    if (i >= 26) initialMolds.push({ row: 0, col: 0 }, { row: 0, col: 7 });
  }

  for (let r = 2; r <= 5; r++) {
    for (let c = 2; c <= 5; c++) {
      initialFrostings.push({ pos: { row: r, col: c }, level: 2 });
    }
  }

  ALL_LEVELS.push(createLevel({
    levelNumber: i,
    worldNumber: 3,
    worldName: 'Italian Piazza',
    title: `Piazza Trattoria #${i}: Melted Mozzarella`,
    description: 'Double-layer cheese glazes and encroaching chocolate mold! Clear before they expand!',
    objectiveType: LevelObjectiveType.CLEAR_FROSTING,
    moves: Math.max(22, 34 - (i - 20)),
    targetScore: 30000 + (i - 20) * 4500,
    starThresholds: [30000 + (i - 20) * 4500, 55000 + (i - 20) * 6000, 90000 + (i - 20) * 8000],
    targetFrostingCount: initialFrostings.length,
    boardConfig: {
      rows: 8,
      cols: 8,
      allowedFoods,
      initialFrostings,
      initialMolds,
      holes: i >= 25 ? [{ row: 3, col: 3 }, { row: 3, col: 4 }, { row: 4, col: 3 }, { row: 4, col: 4 }] : undefined
    }
  }));
}

// WORLD 4: Sweet Tooth Kingdom (Levels 31 to 40)
for (let i = 31; i <= 40; i++) {
  const allowedFoods = [FoodType.DONUT, FoodType.CAKE, FoodType.STRAWBERRY, FoodType.FRIES, FoodType.TACO, FoodType.SUSHI];
  const initialIngredients: { pos: GridPosition; type: IngredientType }[] = [];
  const initialFrostings: { pos: GridPosition; level: number }[] = [];

  const isTrophyLevel = i % 2 === 0;
  if (isTrophyLevel) {
    initialIngredients.push(
      { pos: { row: 0, col: 1 }, type: IngredientType.CHEF_TROPHY },
      { pos: { row: 0, col: 6 }, type: IngredientType.CHEF_TROPHY }
    );
  }

  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if ((r + c) % 2 === 0 && initialFrostings.length < 24) {
        initialFrostings.push({ pos: { row: r, col: c }, level: 2 });
      }
    }
  }

  ALL_LEVELS.push(createLevel({
    levelNumber: i,
    worldNumber: 4,
    worldName: 'Sweet Tooth Kingdom',
    title: `Candy Castle #${i}: ${isTrophyLevel ? 'Royal Trophy Quest' : 'Sugar Citadel'}`,
    description: isTrophyLevel
      ? 'Escort the Chef Trophies past complex checkerboard obstacles to victory!'
      : 'Break through hardened double sugar glazes across the royal candy ballroom!',
    objectiveType: isTrophyLevel ? LevelObjectiveType.COLLECT_INGREDIENTS : LevelObjectiveType.CLEAR_FROSTING,
    moves: Math.max(22, 35 - (i - 30)),
    targetScore: 60000 + (i - 30) * 6000,
    starThresholds: [60000 + (i - 30) * 6000, 110000 + (i - 30) * 9000, 180000 + (i - 30) * 12000],
    targetIngredients: isTrophyLevel ? [{ type: IngredientType.CHEF_TROPHY, count: 2 }] : undefined,
    targetFrostingCount: !isTrophyLevel ? initialFrostings.length : undefined,
    boardConfig: {
      rows: 8,
      cols: 8,
      allowedFoods,
      initialFrostings,
      initialIngredients,
      holes: [{ row: 0, col: 0 }, { row: 0, col: 7 }, { row: 7, col: 0 }, { row: 7, col: 7 }]
    }
  }));
}

// WORLD 5: Gourmet Galaxy (Levels 41 to 50+)
for (let i = 41; i <= 50; i++) {
  const allowedFoods = [
    FoodType.PIZZA,
    FoodType.BURGER,
    FoodType.DONUT,
    FoodType.STRAWBERRY,
    FoodType.CAKE,
    FoodType.FRIES,
    FoodType.TACO,
    FoodType.SUSHI
  ];

  const initialFrostings: { pos: GridPosition; level: number }[] = [];
  const initialIngredients: { pos: GridPosition; type: IngredientType }[] = [];
  const initialMolds: GridPosition[] = [];

  // Full master layout
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (r >= 2 && r <= 5 && c >= 2 && c <= 5) {
        initialFrostings.push({ pos: { row: r, col: c }, level: 2 });
      }
    }
  }

  if (i === 50) {
    // Grand Master Chef Final Showdown Level!
    initialIngredients.push(
      { pos: { row: 0, col: 2 }, type: IngredientType.CHEF_TROPHY },
      { pos: { row: 0, col: 5 }, type: IngredientType.GOLDEN_SPATULA }
    );
    initialMolds.push({ row: 7, col: 0 }, { row: 7, col: 7 });
  }

  ALL_LEVELS.push(createLevel({
    levelNumber: i,
    worldNumber: 5,
    worldName: 'Gourmet Galaxy',
    title: i === 50 ? '🌟 Grand Master Chef Ultimate Finale 🌟' : `Galactic Culinary Arena #${i}`,
    description: i === 50
      ? 'The ultimate cooking showdown! Rescue all trophies, smash the celestial frostings, and become the Grand Master Food Crush Champion!'
      : 'Master level difficulty with all 8 food types, rotating obstacles, and tight move targets!',
    objectiveType: i === 50 ? LevelObjectiveType.COLLECT_INGREDIENTS : LevelObjectiveType.CLEAR_FROSTING,
    moves: i === 50 ? 30 : Math.max(20, 32 - (i - 40)),
    targetScore: 100000 + (i - 40) * 10000,
    starThresholds: [100000 + (i - 40) * 10000, 200000 + (i - 40) * 18000, 350000 + (i - 40) * 25000],
    targetFrostingCount: i === 50 ? undefined : initialFrostings.length,
    targetIngredients: i === 50 ? [
      { type: IngredientType.CHEF_TROPHY, count: 1 },
      { type: IngredientType.GOLDEN_SPATULA, count: 1 }
    ] : undefined,
    boardConfig: {
      rows: 8,
      cols: 8,
      allowedFoods,
      initialFrostings,
      initialIngredients,
      initialMolds,
      holes: [{ row: 3, col: 3 }, { row: 3, col: 4 }, { row: 4, col: 3 }, { row: 4, col: 4 }]
    }
  }));
}

export function getLevelDefinition(levelNumber: number): LevelDefinition {
  const found = ALL_LEVELS.find(l => l.levelNumber === levelNumber);
  return found || ALL_LEVELS[0];
}
