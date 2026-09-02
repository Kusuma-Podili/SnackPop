"""
Food Truck, Customization, and Equipment API Endpoints.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import User, PlayerProfile, FoodTruck, Transaction
from backend.app.schemas.truck import (
    FoodTruckOut, TruckCustomizationUpdate, EquipmentUpgradeRequest
)

router = APIRouter(prefix="/truck", tags=["Food Truck"])

TRUCK_TIER_CONFIG = {
    1: {"name": "Basic Truck", "storage": 50, "speed": 1.0, "customers": 3, "cost": 0, "min_level": 1},
    2: {"name": "Improved Truck", "storage": 80, "speed": 1.15, "customers": 4, "cost": 1200, "min_level": 2},
    3: {"name": "Professional Truck", "storage": 120, "speed": 1.35, "customers": 5, "cost": 3500, "min_level": 4},
    4: {"name": "Premium Truck", "storage": 180, "speed": 1.60, "customers": 6, "cost": 8000, "min_level": 7},
    5: {"name": "Elite Truck", "storage": 250, "speed": 2.00, "customers": 8, "cost": 20000, "min_level": 10},
}

EQUIPMENT_CONFIG = {
    "GRILL": {
        2: {"cost": 600, "min_level": 2, "multiplier_boost": 0.35, "desc": "Professional Grill - 35% Faster Grilling"},
        3: {"cost": 1800, "min_level": 5, "multiplier_boost": 0.75, "desc": "Industrial Master Grill - 75% Faster Grilling"},
    },
    "FRYER": {
        2: {"cost": 500, "min_level": 2, "multiplier_boost": 0.35, "desc": "Turbo Deep Fryer - 35% Faster Frying"},
        3: {"cost": 1500, "min_level": 5, "multiplier_boost": 0.75, "desc": "Commercial Vortex Fryer - 75% Faster Frying"},
    },
    "FRIDGE": {
        2: {"cost": 400, "min_level": 2, "storage_boost": 30, "desc": "Large Commercial Fridge - +30 Storage Capacity"},
        3: {"cost": 1200, "min_level": 4, "storage_boost": 70, "desc": "Industrial Walk-In Cooler - +70 Storage Capacity"},
    },
    "PREP_TABLE": {
        2: {"cost": 450, "min_level": 2, "desc": "Stainless Prep Table - Faster ingredient staging"},
        3: {"cost": 1100, "min_level": 4, "desc": "Executive Prep Suite - Maximum efficiency"},
    }
}

@router.get("", response_model=FoodTruckOut)
def get_food_truck(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Get the current player's food truck and equipment details."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    if not truck:
        raise HTTPException(status_code=404, detail="Food truck not found.")
    return truck

@router.post("/upgrade", response_model=FoodTruckOut)
def upgrade_truck_tier(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Upgrade the food truck to the next tier."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    if not truck:
        raise HTTPException(status_code=404, detail="Food truck not found.")

    next_tier = truck.tier_level + 1
    if next_tier > 5:
        raise HTTPException(status_code=400, detail="Food truck is already at maximum tier (Elite Truck)!")

    tier_info = TRUCK_TIER_CONFIG[next_tier]
    if profile.level < tier_info["min_level"]:
        raise HTTPException(
            status_code=400,
            detail=f"Chef Level {tier_info['min_level']} required to upgrade to {tier_info['name']}."
        )

    if profile.coins < tier_info["cost"]:
        raise HTTPException(
            status_code=400,
            detail=f"Insufficient coins. Upgrade requires {tier_info['cost']} coins (You have {profile.coins})."
        )

    # Deduct coins & record transaction
    profile.coins -= tier_info["cost"]
    profile.total_expenses += tier_info["cost"]
    truck.tier_level = next_tier
    
    # Calculate new stats with fridge bonuses
    fridge_bonus = 0
    if truck.fridge_tier == 2:
        fridge_bonus = 30
    elif truck.fridge_tier == 3:
        fridge_bonus = 70

    truck.storage_capacity = tier_info["storage"] + fridge_bonus
    truck.customer_capacity = tier_info["customers"]
    truck.cooking_speed_multiplier = tier_info["speed"]

    tx = Transaction(
        player_id=profile.id,
        transaction_type="TRUCK_UPGRADE",
        amount=-tier_info["cost"],
        balance_after=profile.coins,
        description=f"Upgraded food truck to {tier_info['name']} (Tier {next_tier})"
    )
    db.add(tx)
    db.commit()
    db.refresh(truck)
    return truck

@router.put("/customize", response_model=FoodTruckOut)
def customize_truck(
    custom_in: TruckCustomizationUpdate,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Update cosmetic customization of the food truck."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    if not truck:
        raise HTTPException(status_code=404, detail="Food truck not found.")

    if custom_in.name is not None:
        truck.name = custom_in.name.strip()
    if custom_in.color is not None:
        truck.color = custom_in.color.strip()
    if custom_in.signboard_text is not None:
        truck.signboard_text = custom_in.signboard_text.strip()
    if custom_in.signboard_style is not None:
        truck.signboard_style = custom_in.signboard_style.strip()
    if custom_in.decal is not None:
        truck.decal = custom_in.decal.strip()
    if custom_in.wheels is not None:
        truck.wheels = custom_in.wheels.strip()

    db.commit()
    db.refresh(truck)
    return truck

@router.post("/equipment/upgrade", response_model=FoodTruckOut)
def upgrade_equipment(
    eq_in: EquipmentUpgradeRequest,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Upgrade kitchen equipment (Grill, Fryer, Refrigerator, Prep Table)."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    if not truck:
        raise HTTPException(status_code=404, detail="Food truck not found.")

    eq_type = eq_in.equipment_type.upper()
    if eq_type not in EQUIPMENT_CONFIG:
        raise HTTPException(status_code=400, detail=f"Invalid equipment type '{eq_type}'.")

    target_tier = eq_in.target_tier
    if target_tier not in EQUIPMENT_CONFIG[eq_type]:
        raise HTTPException(status_code=400, detail=f"Invalid target tier {target_tier} for {eq_type}.")

    current_tier = getattr(truck, f"{eq_type.lower()}_tier", 1)
    if target_tier <= current_tier:
        raise HTTPException(status_code=400, detail=f"{eq_type} is already at or above Tier {target_tier}.")

    if target_tier > current_tier + 1:
        raise HTTPException(status_code=400, detail=f"Must upgrade to Tier {current_tier + 1} first.")

    eq_info = EQUIPMENT_CONFIG[eq_type][target_tier]
    if profile.level < eq_info["min_level"]:
        raise HTTPException(
            status_code=400,
            detail=f"Chef Level {eq_info['min_level']} required to purchase {eq_info['desc']}."
        )

    if profile.coins < eq_info["cost"]:
        raise HTTPException(
            status_code=400,
            detail=f"Insufficient coins. Equipment requires {eq_info['cost']} coins (You have {profile.coins})."
        )

    # Deduct coins & apply upgrade
    profile.coins -= eq_info["cost"]
    profile.total_expenses += eq_info["cost"]
    setattr(truck, f"{eq_type.lower()}_tier", target_tier)

    # Apply specific equipment perks
    if eq_type == "FRIDGE":
        base_cap = TRUCK_TIER_CONFIG[truck.tier_level]["storage"]
        truck.storage_capacity = base_cap + eq_info.get("storage_boost", 0)

    tx = Transaction(
        player_id=profile.id,
        transaction_type="EQUIPMENT_UPGRADE",
        amount=-eq_info["cost"],
        balance_after=profile.coins,
        description=f"Purchased {eq_info['desc']}"
    )
    db.add(tx)
    db.commit()
    db.refresh(truck)
    return truck
