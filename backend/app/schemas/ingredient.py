"""
Ingredient and Inventory Schemas.
"""
from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field

class IngredientOut(BaseModel):
    id: int
    name: str
    category: str
    unit_cost: int
    unit_type: str
    icon: str
    min_level: int

    class Config:
        from_attributes = True

class PlayerInventoryOut(BaseModel):
    ingredient_id: int
    ingredient_name: str
    category: str
    unit_cost: int
    unit_type: str
    icon: str
    quantity: int
    min_level: int
    is_low_stock: bool = False

class BuyIngredientRequest(BaseModel):
    ingredient_id: int
    quantity: int = Field(..., gt=0)

class BulkBuyRequest(BaseModel):
    items: list[BuyIngredientRequest]
