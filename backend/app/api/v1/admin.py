"""
Admin Portal API Endpoints: Player Management, Food & Recipe Builder, Game Settings, Global Stats.
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from backend.app.api.deps import get_db, require_admin
from backend.app.models import (
    User, PlayerProfile, FoodItem, Ingredient, RecipeIngredient,
    Location, Order, GameSetting
)
from backend.app.schemas.admin import (
    AdminGlobalStats, AdminPlayerOut, AdminAdjustPlayer, AdminGameSettingUpdate
)
from backend.app.schemas.food import FoodItemCreate, FoodItemOut

router = APIRouter(prefix="/admin", tags=["Admin Portal"])

@router.get("/stats", response_model=AdminGlobalStats)
def get_admin_global_stats(
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """Retrieve global platform-wide statistics across all players."""
    total_players = db.query(PlayerProfile).count()
    active_players = db.query(User).filter(User.is_active == 1, User.role == "PLAYER").count()
    total_orders = db.query(func.coalesce(func.sum(PlayerProfile.orders_completed), 0)).scalar()
    total_rev = db.query(func.coalesce(func.sum(PlayerProfile.total_revenue), 0)).scalar()
    
    avg_rating = db.query(func.coalesce(func.avg(PlayerProfile.reputation), 4.5)).scalar()

    pop_food = "Classic Cheeseburger"
    pop_loc = "City Street"

    tot_ings = db.query(Ingredient).count()
    tot_recipes = db.query(FoodItem).count()

    return AdminGlobalStats(
        total_players=total_players,
        active_players=active_players,
        total_orders=total_orders,
        total_game_revenue=total_rev,
        most_popular_food=pop_food,
        most_popular_location=pop_loc,
        average_customer_rating=round(float(avg_rating), 1),
        total_ingredients_catalog=tot_ings,
        total_recipes_catalog=tot_recipes
    )

@router.get("/players", response_model=List[AdminPlayerOut])
def get_all_players(
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """Retrieve all player profiles for management and inspection."""
    profiles = db.query(PlayerProfile).all()
    result = []
    for p in profiles:
        result.append(AdminPlayerOut(
            id=p.id,
            user_id=p.user_id,
            username=p.user.username if p.user else "Unknown",
            email=p.user.email if p.user else "Unknown",
            name=p.name,
            level=p.level,
            coins=p.coins,
            reputation=p.reputation,
            orders_completed=p.orders_completed,
            total_revenue=p.total_revenue,
            is_active=p.user.is_active if p.user else 1,
            created_at=p.created_at
        ))
    return result

@router.post("/players/{player_id}/adjust")
def adjust_player_stats(
    player_id: int,
    adj: AdminAdjustPlayer,
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """Adjust a player's coins, XP, level, reputation, or account active status."""
    profile = db.query(PlayerProfile).filter_by(id=player_id).first()
    if not profile:
        raise HTTPException(status_code=404, detail="Player not found.")

    if adj.coins_delta:
        profile.coins = max(0, profile.coins + adj.coins_delta)
    if adj.xp_delta:
        profile.xp = max(0, profile.xp + adj.xp_delta)
    if adj.level_set is not None:
        profile.level = max(1, adj.level_set)
    if adj.reputation_set is not None:
        profile.reputation = max(1.0, min(5.0, adj.reputation_set))
    if adj.is_active_set is not None and profile.user:
        profile.user.is_active = adj.is_active_set

    db.commit()

    return {
        "success": True,
        "message": f"Successfully updated stats for {profile.name}!",
        "coins": profile.coins,
        "level": profile.level,
        "reputation": profile.reputation,
        "is_active": profile.user.is_active if profile.user else 1
    }

@router.get("/settings")
def get_game_settings(
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """List all customizable game balance settings."""
    settings = db.query(GameSetting).all()
    return [{"key": s.key, "value": s.value, "category": s.category, "description": s.description} for s in settings]

@router.put("/settings")
def update_game_setting(
    set_in: AdminGameSettingUpdate,
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """Update a specific game setting parameter."""
    gs = db.query(GameSetting).filter_by(key=set_in.key).first()
    if not gs:
        gs = GameSetting(key=set_in.key, value=set_in.value, description=set_in.description)
        db.add(gs)
    else:
        gs.value = set_in.value
        if set_in.description:
            gs.description = set_in.description

    db.commit()
    return {"success": True, "message": f"Setting '{set_in.key}' updated to '{set_in.value}'."}

@router.post("/foods")
def create_food_item(
    food_in: FoodItemCreate,
    admin_user: User = Depends(require_admin),
    db: Session = Depends(get_db)
):
    """Create a new food recipe in the game catalog."""
    if db.query(FoodItem).filter_by(name=food_in.name).first():
        raise HTTPException(status_code=400, detail="Food item with this name already exists.")

    new_food = FoodItem(
        name=food_in.name,
        category=food_in.category,
        description=food_in.description,
        selling_price=food_in.selling_price,
        base_prep_time=food_in.base_prep_time,
        cook_station=food_in.cook_station,
        difficulty=food_in.difficulty,
        required_level=food_in.required_level,
        popularity_score=food_in.popularity_score,
        icon=food_in.icon,
        is_available=food_in.is_available
    )
    db.add(new_food)
    db.flush()

    for ing in food_in.ingredients:
        ri = RecipeIngredient(
            food_item_id=new_food.id,
            ingredient_id=ing["ingredient_id"],
            quantity_required=ing.get("quantity", 1)
        )
        db.add(ri)

    db.commit()
    return {"success": True, "message": f"Created food item '{new_food.name}'!", "food_id": new_food.id}
