/**
 * SnackPop Match-3 Game Engine - Core Type Definitions
 * 
 * Provides strong typing for grid representations, food archetypes,
 * special powers, combo mechanics, board configurations, and cascade events.
 */

export enum FoodType {
  PIZZA = 'PIZZA',           // 🍕
  BURGER = 'BURGER',         // 🍔
  DONUT = 'DONUT',           // 🍩
  STRAWBERRY = 'STRAWBERRY', // 🍓
  CAKE = 'CAKE',             // 🍰
  FRIES = 'FRIES',           // 🍟
  TACO = 'TACO',             // 🌮
  SUSHI = 'SUSHI'            // 🍣
}

export enum SpecialType {
  NONE = 'NONE',
  STRIPED_HORIZONTAL = 'STRIPED_HORIZONTAL', // Clears entire row
  STRIPED_VERTICAL = 'STRIPED_VERTICAL',     // Clears entire column
  WRAPPED_BOMB = 'WRAPPED_BOMB',             // Explodes 3x3 radius twice
  RAINBOW_CHEF_HAT = 'RAINBOW_CHEF_HAT'      // Clears all foods of chosen color
}

export enum BlockerType {
  NONE = 'NONE',
  FROSTING_1 = 'FROSTING_1',   // 1 hit to clear (Jelly)
  FROSTING_2 = 'FROSTING_2',   // 2 hits to clear (Double Jelly)
  CHOCOLATE_MOLD = 'CHOCOLATE_MOLD', // Spreads if not matched adjacent
  CHEFS_LOCK = 'CHEFS_LOCK',   // Traps food item until matched
  SOLID_BLOCK = 'SOLID_BLOCK'  // Unbreakable obstacle
}

export enum IngredientType {
  NONE = 'NONE',
  GOLDEN_SPATULA = 'GOLDEN_SPATULA', // Collect by dropping to bottom
  CHEF_TROPHY = 'CHEF_TROPHY'        // Collect by dropping to bottom
}

export enum MatchPatternType {
  LINE_3 = 'LINE_3',
  LINE_4_HORIZONTAL = 'LINE_4_HORIZONTAL',
  LINE_4_VERTICAL = 'LINE_4_VERTICAL',
  LINE_5 = 'LINE_5',
  T_SHAPE = 'T_SHAPE',
  L_SHAPE = 'L_SHAPE',
  CROSS = 'CROSS'
}

export interface GridPosition {
  row: number;
  col: number;
}

export interface GridTile {
  id: string;
  row: number;
  col: number;
  foodType: FoodType | null;
  specialType: SpecialType;
  blockerType: BlockerType;
  blockerHealth: number;
  ingredientType: IngredientType;
  isHole: boolean;
  isSpawner: boolean;
  isExit: boolean;
  markedForClear: boolean;
  animationState?: {
    offsetX: number;
    offsetY: number;
    scale: number;
    opacity: number;
    rotation: number;
  };
}

export interface MatchGroup {
  pattern: MatchPatternType;
  foodType: FoodType;
  tiles: GridPosition[];
  specialToSpawn: {
    type: SpecialType;
    position: GridPosition;
  } | null;
}

export interface SwapMove {
  from: GridPosition;
  to: GridPosition;
}

export interface CascadeStep {
  stepIndex: number;
  clearedPositions: GridPosition[];
  specialActivations: {
    sourcePos: GridPosition;
    specialType: SpecialType;
    affectedPositions: GridPosition[];
  }[];
  newSpecialsSpawned: {
    position: GridPosition;
    specialType: SpecialType;
    foodType: FoodType;
  }[];
  fallingTiles: {
    from: GridPosition;
    to: GridPosition;
    tile: GridTile;
  }[];
  newTilesSpawned: {
    position: GridPosition;
    tile: GridTile;
  }[];
  pointsEarned: number;
  comboMultiplier: number;
  comboMessage: string;
}

export interface MoveExecutionResult {
  valid: boolean;
  isSpecialCombo: boolean;
  specialComboType?: string;
  totalPoints: number;
  cascades: CascadeStep[];
  clearedFrostings: number;
  collectedIngredients: IngredientType[];
  chocolateSpread: GridPosition[];
}

export interface HintMove {
  from: GridPosition;
  to: GridPosition;
  potentialScore: number;
  matchSize: number;
  willCreateSpecial: boolean;
}

export interface BoardConfig {
  rows: number;
  cols: number;
  allowedFoods: FoodType[];
  holes?: GridPosition[];
  spawners?: number[]; // column indices
  exits?: number[];    // column indices (typically on bottom row)
  initialFrostings?: { pos: GridPosition; level: number }[];
  initialMolds?: GridPosition[];
  initialLocks?: GridPosition[];
  initialIngredients?: { pos: GridPosition; type: IngredientType }[];
}
