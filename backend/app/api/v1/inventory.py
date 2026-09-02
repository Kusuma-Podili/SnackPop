"""
Inventory and Ingredient Marketplace API Endpoints.
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, FoodTruck, Ingredient, PlayerInventory, Transaction
)
from backend.app.schemas.ingredient import (
    IngredientOut, PlayerInventoryOut, BuyIngredientRequest, BulkBuyRequest
)

router = APIRouter(prefix="/inventory", tags=["Inventory"])

@router.get("", response_model=List[PlayerInventoryOut])
def get_player_inventory(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Get list of all ingredients in player's stock with low-stock warnings."""
    _, profile = player_data
    all_ingredients = db.query(Ingredient).order_by(Ingredient.min_level, Ingredient.category).all()
    player_stocks = {
        inv.ingredient_id: inv.quantity
        for inv in db.query(PlayerInventory).filter_by(player_id=profile.id).all()
    }

    result = []
    for ing in all_ingredients:
        qty = player_stocks.get(ing.id, 0)
        result.append(PlayerInventoryOut(
            ingredient_id=ing.id,
            ingredient_name=ing.name,
            category=ing.category,
            unit_cost=ing.unit_cost,
            unit_type=ing.unit_type,
            icon=ing.icon,
            quantity=qty,
            min_level=ing.min_level,
            is_low_stock=(qty < 3)
        ))
    return result

@router.get("/market", response_model=List[IngredientOut])
def get_ingredient_market(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Get all wholesale ingredients available in the market."""
    ingredients = db.query(Ingredient).order_by(Ingredient.min_level, Ingredient.name).all()
    return ingredients

@router.post("/buy")
def buy_ingredient(
    buy_in: BuyIngredientRequest,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Purchase a specific quantity of an ingredient."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    ingredient = db.query(Ingredient).filter_by(id=buy_in.ingredient_id).first()

    if not ingredient:
        raise HTTPException(status_code=404, detail="Ingredient not found.")

    if profile.level < ingredient.min_level:
        raise HTTPException(
            status_code=400,
            detail=f"Chef Level {ingredient.min_level} required to purchase {ingredient.name}."
        )

    total_cost = ingredient.unit_cost * buy_in.quantity
    if profile.coins < total_cost:
        raise HTTPException(
            status_code=400,
            detail=f"Insufficient coins. Total cost is {total_cost} coins (You have {profile.coins})."
        )

    # Calculate current inventory volume
    current_stored_total = db.query(func.coalesce(func.sum(PlayerInventory.quantity), 0))\
        .filter(PlayerInventory.player_id == profile.id).scalar()

    if current_stored_total + buy_in.quantity > truck.storage_capacity:
        available_space = max(0, truck.storage_capacity - current_stored_total)
        raise HTTPException(
            status_code=400,
            detail=f"Truck storage limit exceeded! Maximum capacity is {truck.storage_capacity} items (You have {available_space} slots left). Upgrade truck or fridge to expand storage."
        )

    # Deduct coins
    profile.coins -= total_cost
    profile.total_expenses += total_cost

    # Update or create inventory item
    inv_item = db.query(PlayerInventory).filter_by(
        player_id=profile.id,
        ingredient_id=ingredient.id
    ).first()

    if inv_item:
        inv_item.quantity += buy_in.quantity
    else:
        inv_item = PlayerInventory(
            player_id=profile.id,
            ingredient_id=ingredient.id,
            quantity=buy_in.quantity
        )
        db.add(inv_item)

    # Record transaction
    tx = Transaction(
        player_id=profile.id,
        transaction_type="INGREDIENT_PURCHASE",
        amount=-total_cost,
        balance_after=profile.coins,
        description=f"Purchased {buy_in.quantity}x {ingredient.name} for {total_cost} coins"
    )
    db.add(tx)
    db.commit()

    return {
        "success": True,
        "message": f"Successfully purchased {buy_in.quantity}x {ingredient.name}!",
        "ingredient_id": ingredient.id,
        "new_quantity": inv_item.quantity,
        "remaining_coins": profile.coins,
        "total_cost": total_cost
    }
