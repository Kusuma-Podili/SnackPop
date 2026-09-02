"""
Food Recipes & Menu Catalog API Endpoints.
"""
from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import User, PlayerProfile, FoodItem
from backend.app.schemas.food import FoodItemOut, RecipeIngredientOut

router = APIRouter(prefix="/foods", tags=["Food & Menu"])

@router.get("", response_model=List[FoodItemOut])
def get_food_catalog(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """List all dishes in the food catalog with recipe ingredients and profit margin."""
    _, profile = player_data
    foods = db.query(FoodItem).order_by(FoodItem.required_level, FoodItem.category).all()

    result = []
    for f in foods:
        recipe_ings = []
        cost_sum = 0
        for ri in f.ingredients:
            if ri.ingredient:
                cost_sum += ri.ingredient.unit_cost * ri.quantity_required
                recipe_ings.append(RecipeIngredientOut(
                    ingredient_id=ri.ingredient_id,
                    ingredient_name=ri.ingredient.name,
                    quantity_required=ri.quantity_required,
                    unit_cost=ri.ingredient.unit_cost,
                    unit_type=ri.ingredient.unit_type,
                    icon=ri.ingredient.icon
                ))

        profit_margin = max(0, f.selling_price - cost_sum)

        result.append(FoodItemOut(
            id=f.id,
            name=f.name,
            category=f.category,
            description=f.description,
            selling_price=f.selling_price,
            base_prep_time=f.base_prep_time,
            cook_station=f.cook_station,
            difficulty=f.difficulty,
            required_level=f.required_level,
            popularity_score=f.popularity_score,
            icon=f.icon,
            is_available=f.is_available,
            is_unlocked_for_player=(profile.level >= f.required_level),
            profit_margin=profit_margin,
            ingredients=recipe_ings
        ))
    return result
