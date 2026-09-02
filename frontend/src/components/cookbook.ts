import { FoodType } from '../engine/types';
import { SaveSystem } from '../systems/save_system';
import { SoundFXEngine } from '../audio/synth';

export interface RecipeEntry {
  id: string;
  name: string;
  category: string;
  icon: string;
  primaryFood: FoodType;
  requiredStars: number;
  buffDescription: string;
  lore: string;
}

export const GOURMET_RECIPES: RecipeEntry[] = [
  {
    id: 'classic_margherita',
    name: 'Artisan Margherita Pizza',
    category: 'Italian',
    icon: '🍕',
    primaryFood: FoodType.PIZZA,
    requiredStars: 3,
    buffDescription: '+5% bonus score when clearing Pizza matches.',
    lore: 'Crafted with San Marzano tomatoes, fresh buffalo mozzarella, and aromatic basil leaves.'
  },
  {
    id: 'supreme_truffle_burger',
    name: 'Wagyu Truffle Burger',
    category: 'Gourmet American',
    icon: '🍔',
    primaryFood: FoodType.BURGER,
    requiredStars: 9,
    buffDescription: '+5% bonus score when clearing Burger matches.',
    lore: 'Seared prime Wagyu beef patty drizzled with black winter truffle aioli on a toasted brioche bun.'
  },
  {
    id: 'royal_glazed_donut',
    name: 'Royal Ruby Strawberry Donut',
    category: 'Bakery & Sweets',
    icon: '🍩',
    primaryFood: FoodType.DONUT,
    requiredStars: 15,
    buffDescription: '+10% chance for 4-matches to spawn an extra Wrapped Bomb.',
    lore: 'Glazed with organic alpine strawberry nectar and sprinkled with edible 24k gold flakes.'
  },
  {
    id: 'parisian_berry_shortcake',
    name: 'Parisian Berry Layer Cake',
    category: 'French Pastry',
    icon: '🍰',
    primaryFood: FoodType.CAKE,
    requiredStars: 24,
    buffDescription: '+8% bonus score on all cascading combos.',
    lore: 'Delicate sponge cake infused with Madagascan vanilla beans and layered with whipped mascarpone.'
  },
  {
    id: 'golden_belgian_frites',
    name: 'Double-Fried Belgian Fries',
    category: 'Street Food',
    icon: '🍟',
    primaryFood: FoodType.FRIES,
    requiredStars: 36,
    buffDescription: '+5% extra moves on all Ingredient Drop levels.',
    lore: 'Hand-cut Bintje potatoes twice fried to golden crispy perfection with sea salt and garlic aioli.'
  },
  {
    id: 'tokyo_salmon_nigiri',
    name: 'Imperial Salmon Nigiri',
    category: 'Japanese Cuisine',
    icon: '🍣',
    primaryFood: FoodType.SUSHI,
    requiredStars: 48,
    buffDescription: '+10% bonus score when activating Striped foods.',
    lore: 'Freshly sliced King Salmon over seasoned sushi rice with a touch of freshly grated wasabi.'
  },
  {
    id: 'oaxacan_street_taco',
    name: 'Oaxacan Flame-Grilled Taco',
    category: 'Mexican Cuisine',
    icon: '🌮',
    primaryFood: FoodType.TACO,
    requiredStars: 60,
    buffDescription: '+15% bonus score when detonating Wrapped Bombs.',
    lore: 'Charred al pastor pork with caramelized pineapple, cilantro, and roasted habanero salsa.'
  },
  {
    id: 'grand_galaxy_feast',
    name: '🌟 Grand Master Cosmic Banquet 🌟',
    category: 'Cosmic Haute Cuisine',
    icon: '👑',
    primaryFood: FoodType.PIZZA,
    requiredStars: 90,
    buffDescription: '+20% total score on all level completions!',
    lore: 'The ultimate culinary masterpiece crafted by the Galaxy’s greatest Food Crush Champion.'
  }
];

export class CookbookModal {
  private container: HTMLElement;
  private onClose: () => void;

  constructor(container: HTMLElement, onClose: () => void) {
    this.container = container;
    this.onClose = onClose;
  }

  public render(): void {
    const saveData = SaveSystem.load();
    let totalStars = 0;
    Object.values(saveData.levelStars).forEach(s => totalStars += s);

    let recipesHtml = '';
    GOURMET_RECIPES.forEach(recipe => {
      const isUnlocked = totalStars >= recipe.requiredStars;

      recipesHtml += `
        <div class="recipe-card ${isUnlocked ? 'recipe-unlocked' : 'recipe-locked'}">
          <div class="recipe-icon-box">
            <span class="recipe-icon">${recipe.icon}</span>
            <span class="recipe-status-badge">${isUnlocked ? '✨ UNLOCKED' : `🔒 ${recipe.requiredStars} ⭐ Req`}</span>
          </div>
          <div class="recipe-info">
            <h3 class="recipe-title">${recipe.name}</h3>
            <span class="recipe-cat">${recipe.category}</span>
            <p class="recipe-buff"><strong>Passive Buff:</strong> ${recipe.buffDescription}</p>
            <p class="recipe-lore">${recipe.lore}</p>
          </div>
        </div>
      `;
    });

    const html = `
      <div class="modal-backdrop cookbook-modal">
        <div class="modal-card cookbook-card">
          <button class="modal-close-btn" id="btn-close-cookbook">✕</button>
          <div class="cookbook-header">
            <h2 class="cookbook-title">📖 Master Chef Recipe Encyclopedia 📖</h2>
            <p class="cookbook-sub">Earn stars across the culinary worlds to unlock gourmet recipes and permanent passive score bonuses!</p>
            <div class="stars-counter-banner">⭐ Your Collection: <strong>${totalStars} Stars</strong></div>
          </div>

          <div class="recipes-scroll-grid">
            ${recipesHtml}
          </div>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    const closeBtn = document.getElementById('btn-close-cookbook');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        SoundFXEngine.playClick();
        this.container.innerHTML = '';
        this.onClose();
      });
    }
  }
}
