"""
Food Truck and Equipment Schemas.
"""
from typing import Optional
from pydantic import BaseModel, Field

class FoodTruckOut(BaseModel):
    id: int
    player_id: int
    name: str
    tier_level: int
    color: str
    signboard_text: str
    signboard_style: str
    decal: str
    wheels: str
    grill_tier: int
    fryer_tier: int
    fridge_tier: int
    prep_table_tier: int
    storage_capacity: int
    cooking_speed_multiplier: float
    customer_capacity: int

    class Config:
        from_attributes = True

class TruckCustomizationUpdate(BaseModel):
    name: Optional[str] = None
    color: Optional[str] = None
    signboard_text: Optional[str] = None
    signboard_style: Optional[str] = None
    decal: Optional[str] = None
    wheels: Optional[str] = None

class EquipmentUpgradeRequest(BaseModel):
    equipment_type: str = Field(..., description="GRILL, FRYER, FRIDGE, PREP_TABLE")
    target_tier: int = Field(..., ge=1, le=3)
