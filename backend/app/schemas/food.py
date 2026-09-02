"""
Food and Recipe Schemas.
"""
from typing import List, Optional
from pydantic import BaseModel

class RecipeIngredientOut(BaseModel):
    ingredient_id: int
    ingredient_name: str
    quantity_required: int
    unit_cost: int
    unit_type: str
    icon: str

class FoodItemOut(BaseModel):
    id: int
    name: str
    category: str
    description: Optional[str] = None
    selling_price: int
    base_prep_time: float
    cook_station: str
    difficulty: str
    required_level: int
    popularity_score: float
    icon: str
    is_available: bool
    is_unlocked_for_player: bool = True
    profit_margin: Optional[int] = 0
    ingredients: List[RecipeIngredientOut] = []

    class Config:
        from_attributes = True

class FoodItemCreate(BaseModel):
    name: str
    category: str
    description: Optional[str] = None
    selling_price: int
    base_prep_time: float = 4.0
    cook_station: str = "GRILL"
    difficulty: str = "EASY"
    required_level: int = 1
    popularity_score: float = 1.0
    icon: str = "🍔"
    is_available: bool = True
    ingredients: List[dict] = [] # list of {ingredient_id, quantity_required}
