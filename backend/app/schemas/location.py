"""
Location, Mission, Achievement, and Analytics Schemas.
"""
from datetime import datetime
from typing import List, Optional
from pydantic import BaseModel, Field

class LocationOut(BaseModel):
    id: int
    name: str
    description: str
    unlock_level: int
    unlock_cost: int
    customer_traffic_multiplier: float
    tip_multiplier: float
    patience_drain_multiplier: float
    popular_category: str
    difficulty_rating: int
    background_theme: str
    icon: str
    is_unlocked: bool = False
    is_current: bool = False

    class Config:
        from_attributes = True

class MissionOut(BaseModel):
    id: int
    title: str
    description: str
    mission_type: str
    target_key: str
    target_value: int
    reward_coins: int
    reward_xp: int
    reward_item: Optional[str]
    icon: str
    current_value: int = 0
    is_completed: bool = False
    is_claimed: bool = False

    class Config:
        from_attributes = True

class AchievementOut(BaseModel):
    id: int
    code: str
    title: str
    description: str
    category: str
    requirement_type: str
    requirement_value: float
    reward_coins: int
    reward_xp: int
    icon: str
    is_unlocked: bool = False
    current_progress: float = 0.0

    class Config:
        from_attributes = True

class TransactionOut(BaseModel):
    id: int
    transaction_type: str
    amount: int
    balance_after: int
    description: str
    created_at: datetime

    class Config:
        from_attributes = True

class LeaderboardEntry(BaseModel):
    rank: int
    player_id: int
    player_name: str
    avatar: str
    level: int
    total_revenue: int
    reputation: float
    orders_completed: int
    is_current_player: bool = False

class BusinessAnalyticsOut(BaseModel):
    total_revenue: int
    total_expenses: int
    net_profit: int
    profit_margin_pct: float
    orders_completed: int
    customers_served: int
    perfect_cooks_rate: float
    average_customer_rating: float
    average_order_value: float
    most_popular_food: str
    least_popular_food: str
    best_performing_location: str
    recent_transactions: List[TransactionOut] = []
    category_revenue_distribution: dict = {}
