import { BlockerType, FoodType, IngredientType, SpecialType } from '../engine/types';

export class FoodSprites {
  public static getFoodSvg(foodType: FoodType | null, specialType: SpecialType = SpecialType.NONE): string {
    if (!foodType && specialType !== SpecialType.RAINBOW_CHEF_HAT) return '';

    let baseSvg = '';
    switch (foodType) {
      case FoodType.PIZZA:
        baseSvg = `
          <g class="food-base food-pizza">
            <!-- Crust -->
            <path d="M 12 18 Q 50 4 88 18 L 50 88 Z" fill="#D97706" stroke="#B45309" stroke-width="2.5" stroke-linejoin="round"/>
            <!-- Cheese Layer -->
            <path d="M 16 22 Q 50 10 84 22 L 50 82 Z" fill="#FBBF24" />
            <!-- Pepperoni Slices -->
            <circle cx="38" cy="36" r="7" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <circle cx="62" cy="40" r="6.5" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <circle cx="48" cy="58" r="6" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <!-- Basil Herbs -->
            <path d="M 32 48 Q 36 44 40 48 Q 36 52 32 48 Z" fill="#16A34A"/>
            <path d="M 58 28 Q 62 24 66 28 Q 62 32 58 28 Z" fill="#16A34A"/>
          </g>`;
        break;

      case FoodType.BURGER:
        baseSvg = `
          <g class="food-base food-burger">
            <!-- Top Bun -->
            <path d="M 15 42 Q 50 10 85 42 Z" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
            <!-- Sesame Seeds -->
            <ellipse cx="35" cy="28" rx="2.5" ry="1.2" fill="#FEF3C7" transform="rotate(-15 35 28)"/>
            <ellipse cx="50" cy="22" rx="2.5" ry="1.2" fill="#FEF3C7"/>
            <ellipse cx="65" cy="28" rx="2.5" ry="1.2" fill="#FEF3C7" transform="rotate(15 65 28)"/>
            <!-- Lettuce -->
            <path d="M 12 43 Q 25 38 38 44 Q 50 38 62 44 Q 75 38 88 43 L 86 49 Q 50 47 14 49 Z" fill="#22C55E"/>
            <!-- Tomato Slice -->
            <rect x="18" y="48" width="64" height="7" rx="3.5" fill="#EF4444"/>
            <!-- Cheese Slice -->
            <path d="M 16 54 L 84 54 L 75 62 L 50 56 L 25 62 Z" fill="#FACC15"/>
            <!-- Patty -->
            <rect x="15" y="58" width="70" height="12" rx="5" fill="#78350F" stroke="#451A03" stroke-width="1.5"/>
            <!-- Bottom Bun -->
            <path d="M 18 70 Q 50 72 82 70 L 80 82 Q 50 90 20 82 Z" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
          </g>`;
        break;

      case FoodType.DONUT:
        baseSvg = `
          <g class="food-base food-donut">
            <!-- Dough Base -->
            <circle cx="50" cy="50" r="38" fill="#F59E0B" stroke="#D97706" stroke-width="2"/>
            <!-- Strawberry Icing -->
            <path d="M 50 12 C 72 12 88 28 88 50 C 88 64 78 72 74 66 C 70 60 62 68 56 62 C 50 56 42 66 36 60 C 30 54 24 62 20 54 C 14 46 12 36 20 24 C 28 12 38 12 50 12 Z" fill="#EC4899"/>
            <!-- Donut Hole -->
            <circle cx="50" cy="50" r="14" fill="#1E293B" stroke="#D97706" stroke-width="1.5"/>
            <!-- Colorful Sprinkles -->
            <rect x="32" y="24" width="7" height="3" rx="1.5" fill="#38BDF8" transform="rotate(25 32 24)"/>
            <rect x="64" y="28" width="7" height="3" rx="1.5" fill="#FACC15" transform="rotate(-30 64 28)"/>
            <rect x="42" y="32" width="7" height="3" rx="1.5" fill="#4ADE80" transform="rotate(70 42 32)"/>
            <rect x="70" y="48" width="7" height="3" rx="1.5" fill="#A855F7" transform="rotate(10 70 48)"/>
            <rect x="25" y="44" width="7" height="3" rx="1.5" fill="#FACC15" transform="rotate(-45 25 44)"/>
          </g>`;
        break;

      case FoodType.STRAWBERRY:
        baseSvg = `
          <g class="food-base food-strawberry">
            <!-- Strawberry Body -->
            <path d="M 50 88 C 18 65 14 34 32 24 C 42 18 58 18 68 24 C 86 34 82 65 50 88 Z" fill="#E11D48" stroke="#9F1239" stroke-width="2"/>
            <!-- Seeds -->
            <circle cx="36" cy="38" r="1.8" fill="#FEF08A"/>
            <circle cx="50" cy="34" r="1.8" fill="#FEF08A"/>
            <circle cx="64" cy="38" r="1.8" fill="#FEF08A"/>
            <circle cx="42" cy="50" r="1.8" fill="#FEF08A"/>
            <circle cx="58" cy="50" r="1.8" fill="#FEF08A"/>
            <circle cx="50" cy="65" r="1.8" fill="#FEF08A"/>
            <circle cx="36" cy="62" r="1.8" fill="#FEF08A"/>
            <circle cx="64" cy="62" r="1.8" fill="#FEF08A"/>
            <!-- Green Leaves Crown -->
            <path d="M 50 12 C 48 20 38 24 30 22 C 38 26 42 32 44 36 C 46 28 54 28 56 36 C 58 32 62 26 70 22 C 62 24 52 20 50 12 Z" fill="#15803D" stroke="#14532D" stroke-width="1.5"/>
          </g>`;
        break;

      case FoodType.CAKE:
        baseSvg = `
          <g class="food-base food-cake">
            <!-- Cake Slice Body -->
            <path d="M 15 65 L 75 82 L 85 45 L 25 28 Z" fill="#FB7185" stroke="#E11D48" stroke-width="2"/>
            <!-- Cream Layers -->
            <path d="M 18 55 L 77 72" stroke="#FFF1F2" stroke-width="4" stroke-linecap="round"/>
            <path d="M 22 42 L 81 59" stroke="#FFF1F2" stroke-width="4" stroke-linecap="round"/>
            <!-- Top Frosting -->
            <path d="M 25 28 L 85 45 L 65 24 L 15 20 Z" fill="#FFF1F2"/>
            <!-- Cherry on Top -->
            <circle cx="45" cy="18" r="7" fill="#BE123C"/>
            <path d="M 45 12 Q 52 4 58 6" stroke="#15803D" stroke-width="2" fill="none"/>
          </g>`;
        break;

      case FoodType.FRIES:
        baseSvg = `
          <g class="food-base food-fries">
            <!-- Red Box -->
            <path d="M 24 45 L 76 45 L 70 88 L 30 88 Z" fill="#DC2626" stroke="#991B1B" stroke-width="2"/>
            <path d="M 24 45 Q 50 55 76 45" fill="#EF4444"/>
            <!-- Golden Fries -->
            <rect x="28" y="16" width="7" height="34" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(-10 28 16)"/>
            <rect x="38" y="12" width="7" height="38" rx="2" fill="#FACC15" stroke="#D97706" stroke-width="1" transform="rotate(-3 38 12)"/>
            <rect x="48" y="10" width="7" height="40" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(4 48 10)"/>
            <rect x="58" y="14" width="7" height="36" rx="2" fill="#FACC15" stroke="#D97706" stroke-width="1" transform="rotate(12 58 14)"/>
            <rect x="66" y="20" width="7" height="30" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(20 66 20)"/>
            <!-- Box Logo -->
            <circle cx="50" cy="68" r="10" fill="#FDE047"/>
            <text x="50" y="73" font-size="12" font-weight="bold" fill="#DC2626" text-anchor="middle">M</text>
          </g>`;
        break;

      case FoodType.TACO:
        baseSvg = `
          <g class="food-base food-taco">
            <!-- Taco Shell Outer -->
            <path d="M 12 60 C 12 30 50 18 88 50 C 70 78 30 82 12 60 Z" fill="#F59E0B" stroke="#B45309" stroke-width="2.5"/>
            <!-- Meat Filling -->
            <path d="M 24 55 Q 50 35 78 52 Q 50 62 24 55 Z" fill="#78350F"/>
            <!-- Lettuce & Cheese Bits -->
            <circle cx="34" cy="46" r="4" fill="#22C55E"/>
            <circle cx="48" cy="40" r="4" fill="#22C55E"/>
            <circle cx="62" cy="44" r="4" fill="#22C55E"/>
            <rect x="40" y="44" width="8" height="3" fill="#FACC15" transform="rotate(15 40 44)"/>
            <circle cx="54" cy="46" r="3.5" fill="#EF4444"/>
          </g>`;
        break;

      case FoodType.SUSHI:
        baseSvg = `
          <g class="food-base food-sushi">
            <!-- Nori Wrap Outer -->
            <ellipse cx="50" cy="50" rx="34" ry="26" fill="#1E293B" stroke="#0F172A" stroke-width="2.5"/>
            <!-- White Rice -->
            <ellipse cx="50" cy="50" rx="28" ry="20" fill="#F8FAFC"/>
            <!-- Salmon / Tuna Center -->
            <circle cx="46" cy="48" r="8" fill="#F97316"/>
            <!-- Avocado Slice -->
            <circle cx="56" cy="46" r="6" fill="#84CC16"/>
            <!-- Cucumber Bit -->
            <circle cx="50" cy="58" r="5" fill="#22C55E"/>
          </g>`;
        break;
    }

    // Special Overlays
    let overlaySvg = '';
    switch (specialType) {
      case SpecialType.STRIPED_HORIZONTAL:
        overlaySvg = `
          <g class="special-overlay striped-h">
            <line x1="8" y1="50" x2="92" y2="50" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" filter="drop-shadow(0 0 4px #38BDF8)"/>
            <line x1="12" y1="42" x2="88" y2="42" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
            <line x1="12" y1="58" x2="88" y2="58" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
          </g>`;
        break;

      case SpecialType.STRIPED_VERTICAL:
        overlaySvg = `
          <g class="special-overlay striped-v">
            <line x1="50" y1="8" x2="50" y2="92" stroke="#FFFFFF" stroke-width="7" stroke-linecap="round" filter="drop-shadow(0 0 4px #38BDF8)"/>
            <line x1="42" y1="12" x2="42" y2="88" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
            <line x1="58" y1="12" x2="58" y2="88" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
          </g>`;
        break;

      case SpecialType.WRAPPED_BOMB:
        overlaySvg = `
          <g class="special-overlay wrapped-bomb">
            <!-- Explosive Glow Ring -->
            <circle cx="50" cy="50" r="42" fill="none" stroke="#F59E0B" stroke-width="4" stroke-dasharray="8 6" filter="drop-shadow(0 0 6px #EF4444)"/>
            <!-- Sparkles -->
            <polygon points="50,14 54,26 66,30 54,34 50,46 46,34 34,30 46,26" fill="#FBBF24"/>
            <polygon points="76,64 78,72 86,74 78,76 76,84 74,76 66,74 74,72" fill="#FBBF24"/>
          </g>`;
        break;

      case SpecialType.RAINBOW_CHEF_HAT:
        baseSvg = `
          <g class="food-base food-rainbow-hat">
            <defs>
              <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#EF4444" />
                <stop offset="25%" stop-color="#F59E0B" />
                <stop offset="50%" stop-color="#10B981" />
                <stop offset="75%" stop-color="#3B82F6" />
                <stop offset="100%" stop-color="#8B5CF6" />
              </linearGradient>
            </defs>
            <!-- Chef Hat Puff -->
            <path d="M 28 52 C 14 46 16 26 32 24 C 34 10 66 10 68 24 C 84 26 86 46 72 52 Z" fill="url(#rainbowGrad)" stroke="#FFFFFF" stroke-width="2.5" filter="drop-shadow(0 0 8px #F43F5E)"/>
            <!-- Hat Band -->
            <rect x="28" y="52" width="44" height="14" rx="3" fill="#F8FAFC" stroke="#E2E8F0" stroke-width="2"/>
            <circle cx="50" cy="59" r="4" fill="#F59E0B"/>
            <!-- Stars -->
            <polygon points="20,18 22,23 27,24 23,28 24,33 20,30 16,33 17,28 13,24 18,23" fill="#FDE047"/>
            <polygon points="80,18 82,23 87,24 83,28 84,33 80,30 76,33 77,28 73,24 78,23" fill="#FDE047"/>
          </g>`;
        break;
    }

    return `
      <svg viewBox="0 0 100 100" class="food-svg-icon" xmlns="http://www.w3.org/2000/svg">
        ${baseSvg}
        ${overlaySvg}
      </svg>
    `;
  }

  public static getBlockerSvg(blockerType: BlockerType): string {
    switch (blockerType) {
      case BlockerType.FROSTING_1:
        return `
          <svg viewBox="0 0 100 100" class="blocker-svg frosting-1" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="92" height="92" rx="14" fill="#BAE6FD" fill-opacity="0.65" stroke="#38BDF8" stroke-width="3" stroke-dasharray="6 4"/>
            <!-- Frost Ice Shards -->
            <line x1="20" y1="20" x2="35" y2="35" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="80" y1="30" x2="65" y2="45" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
          </svg>`;

      case BlockerType.FROSTING_2:
        return `
          <svg viewBox="0 0 100 100" class="blocker-svg frosting-2" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="92" height="92" rx="14" fill="#7DD3FC" fill-opacity="0.85" stroke="#0284C7" stroke-width="4"/>
            <!-- Double Ice Cracks -->
            <path d="M 18 22 L 40 45 L 30 75 M 82 25 L 60 48 L 70 80" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round"/>
          </svg>`;

      case BlockerType.CHOCOLATE_MOLD:
        return `
          <svg viewBox="0 0 100 100" class="blocker-svg chocolate-mold" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="88" height="88" rx="12" fill="#451A03" stroke="#270D02" stroke-width="3"/>
            <rect x="18" y="18" width="28" height="28" rx="4" fill="#78350F"/>
            <rect x="54" y="18" width="28" height="28" rx="4" fill="#78350F"/>
            <rect x="18" y="54" width="28" height="28" rx="4" fill="#78350F"/>
            <rect x="54" y="54" width="28" height="28" rx="4" fill="#78350F"/>
          </svg>`;

      case BlockerType.CHEFS_LOCK:
        return `
          <svg viewBox="0 0 100 100" class="blocker-svg chefs-lock" xmlns="http://www.w3.org/2000/svg">
            <!-- Chains -->
            <line x1="10" y1="10" x2="90" y2="90" stroke="#94A3B8" stroke-width="6" stroke-dasharray="10 8"/>
            <line x1="90" y1="10" x2="10" y2="90" stroke="#94A3B8" stroke-width="6" stroke-dasharray="10 8"/>
            <!-- Padlock in Center -->
            <rect x="36" y="45" width="28" height="24" rx="4" fill="#F59E0B" stroke="#B45309" stroke-width="2"/>
            <path d="M 42 45 L 42 34 C 42 26 58 26 58 34 L 58 45" stroke="#94A3B8" stroke-width="4" fill="none"/>
            <circle cx="50" cy="55" r="3" fill="#78350F"/>
          </svg>`;

      default:
        return '';
    }
  }

  public static getIngredientSvg(ingType: IngredientType): string {
    switch (ingType) {
      case IngredientType.GOLDEN_SPATULA:
        return `
          <svg viewBox="0 0 100 100" class="ingredient-svg spatula" xmlns="http://www.w3.org/2000/svg">
            <g transform="rotate(25 50 50)">
              <!-- Spatula Head -->
              <rect x="34" y="12" width="32" height="42" rx="4" fill="#FACC15" stroke="#CA8A04" stroke-width="2.5"/>
              <line x1="42" y1="18" x2="42" y2="44" stroke="#713F12" stroke-width="2"/>
              <line x1="50" y1="18" x2="50" y2="44" stroke="#713F12" stroke-width="2"/>
              <line x1="58" y1="18" x2="58" y2="44" stroke="#713F12" stroke-width="2"/>
              <!-- Neck and Handle -->
              <rect x="46" y="54" width="8" height="34" rx="3" fill="#78350F" stroke="#451A03" stroke-width="2"/>
              <circle cx="50" cy="82" r="2.5" fill="#FACC15"/>
            </g>
          </svg>`;

      case IngredientType.CHEF_TROPHY:
        return `
          <svg viewBox="0 0 100 100" class="ingredient-svg trophy" xmlns="http://www.w3.org/2000/svg">
            <!-- Cup Body -->
            <path d="M 28 20 L 72 20 L 68 55 C 68 66 58 72 50 72 C 42 72 32 66 32 55 Z" fill="#FACC15" stroke="#CA8A04" stroke-width="2"/>
            <!-- Handles -->
            <path d="M 28 26 C 14 26 14 48 29 48" stroke="#CA8A04" stroke-width="4" fill="none"/>
            <path d="M 72 26 C 86 26 86 48 71 48" stroke="#CA8A04" stroke-width="4" fill="none"/>
            <!-- Stem and Base -->
            <rect x="46" y="72" width="8" height="12" fill="#CA8A04"/>
            <path d="M 32 84 L 68 84 L 64 92 L 36 92 Z" fill="#78350F"/>
            <!-- Star on Cup -->
            <polygon points="50,32 52,38 58,38 53,42 55,48 50,44 45,48 47,42 42,38 48,38" fill="#FFFFFF"/>
          </svg>`;

      default:
        return '';
    }
  }
}
