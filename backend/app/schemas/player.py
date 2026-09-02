"""
Player profile and progression schemas.
"""
from datetime import date, datetime
from typing import Optional, List
from pydantic import BaseModel, Field

class PlayerProfileOut(BaseModel):
    id: int
    user_id: int
    name: str
    avatar: str
    level: int
    xp: int
    xp_to_next_level: int
    coins: int
    reputation: float
    current_location_id: Optional[int]
    total_revenue: int
    total_expenses: int
    orders_completed: int
    customers_served: int
    perfect_cooks: int
    burned_cooks: int
    daily_streak: int
    last_daily_reward_date: Optional[date]
    created_at: datetime

    class Config:
        from_attributes = True

class PlayerProfileUpdate(BaseModel):
    name: Optional[str] = None
    avatar: Optional[str] = None
    current_location_id: Optional[int] = None
