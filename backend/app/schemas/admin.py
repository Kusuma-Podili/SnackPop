"""
Admin Management Schemas.
"""
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel

class AdminGlobalStats(BaseModel):
    total_players: int
    active_players: int
    total_orders: int
    total_game_revenue: int
    most_popular_food: str
    most_popular_location: str
    average_customer_rating: float
    total_ingredients_catalog: int
    total_recipes_catalog: int

class AdminPlayerOut(BaseModel):
    id: int
    user_id: int
    username: str
    email: str
    name: str
    level: int
    coins: int
    reputation: float
    orders_completed: int
    total_revenue: int
    is_active: int
    created_at: datetime

class AdminAdjustPlayer(BaseModel):
    coins_delta: Optional[int] = 0
    xp_delta: Optional[int] = 0
    level_set: Optional[int] = None
    reputation_set: Optional[float] = None
    is_active_set: Optional[int] = None

class AdminGameSettingUpdate(BaseModel):
    key: str
    value: str
    description: Optional[str] = None
