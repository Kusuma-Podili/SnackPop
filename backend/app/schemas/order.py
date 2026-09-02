"""
Order, Customer and Cooking Request/Response Schemas.
"""
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field

class OrderItemOut(BaseModel):
    id: int
    food_item_id: int
    food_name: str
    food_icon: str
    cook_station: str
    base_prep_time: float
    quantity: int
    unit_price: int
    prep_status: str
    cook_progress: float
    quality: Optional[str] = None
    required_ingredients: List[dict] = []

class OrderOut(BaseModel):
    id: int
    customer_name: str
    customer_type: str
    customer_avatar: str
    status: str
    total_price: int
    tip_amount: int
    xp_awarded: int
    initial_patience: float
    patience_remaining: float
    customer_satisfaction: float
    customer_rating: float
    cooking_rating: Optional[str]
    created_at: datetime
    items: List[OrderItemOut] = []

class StartCookingRequest(BaseModel):
    order_id: int
    item_id: int

class FinishCookingRequest(BaseModel):
    order_id: int
    item_id: int
    timing_accuracy: float = Field(..., ge=0.0, le=1.0, description="1.0 is dead center on the sweet spot")

class ServeOrderRequest(BaseModel):
    order_id: int
