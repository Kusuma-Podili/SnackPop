"""
Interactive Cooking Execution & Dish Serving API Endpoints.
"""
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, FoodTruck, FoodItem, Order, OrderItem,
    OrderStatus, PlayerInventory, Transaction, CookingRating
)
from backend.app.schemas.order import (
    StartCookingRequest, FinishCookingRequest, ServeOrderRequest, OrderOut
)
from backend.app.api.v1.orders import serialize_order
from backend.app.services.cooking_engine import evaluate_cooking_quality, calculate_order_completion

router = APIRouter(prefix="/cooking", tags=["Cooking Engine"])

@router.post("/start")
def start_cooking_item(
    req: StartCookingRequest,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """
    Validate ingredients in player inventory, deduct them, and start cooking the dish.
    """
    _, profile = player_data
    order = db.query(Order).filter_by(id=req.order_id, player_id=profile.id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found.")

    item = db.query(OrderItem).filter_by(id=req.item_id, order_id=order.id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Order item not found.")

    if item.prep_status in ["COOKING", "READY"]:
        return {"success": True, "message": "Item is already in cooking stage."}

    food = item.food_item
    if not food:
        raise HTTPException(status_code=404, detail="Food recipe not found.")

    # 1. Check all required ingredients in player inventory
    missing_ingredients = []
    inventory_map = {
        inv.ingredient_id: inv
        for inv in db.query(PlayerInventory).filter_by(player_id=profile.id).all()
    }

    for req_ing in food.ingredients:
        user_inv = inventory_map.get(req_ing.ingredient_id)
        if not user_inv or user_inv.quantity < req_ing.quantity_required:
            ing_name = req_ing.ingredient.name if req_ing.ingredient else "Ingredient"
            missing_ingredients.append(f"{req_ing.quantity_required}x {ing_name}")

    if missing_ingredients:
        raise HTTPException(
            status_code=400,
            detail=f"Cannot cook {food.name}! Missing required ingredients: {', '.join(missing_ingredients)}. Visit the Inventory Market to restock."
        )

    # 2. Atomically deduct ingredients
    for req_ing in food.ingredients:
        user_inv = inventory_map[req_ing.ingredient_id]
        user_inv.quantity -= req_ing.quantity_required

    item.prep_status = "COOKING"
    order.status = OrderStatus.PREPARING.value

    db.commit()

    return {
        "success": True,
        "message": f"Started cooking {food.name}!",
        "order_id": order.id,
        "item_id": item.id,
        "cook_station": food.cook_station,
        "base_prep_time": food.base_prep_time
    }

@router.post("/finish")
def finish_cooking_item(
    req: FinishCookingRequest,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """
    Evaluate cooking quality based on precision sweet-spot timing accuracy (0.0 to 1.0).
    """
    _, profile = player_data
    order = db.query(Order).filter_by(id=req.order_id, player_id=profile.id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found.")

    item = db.query(OrderItem).filter_by(id=req.item_id, order_id=order.id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Order item not found.")

    quality, _ = evaluate_cooking_quality(req.timing_accuracy)
    item.quality = quality
    item.prep_status = "READY" if quality != CookingRating.BURNED.value else "BURNED"
    item.cook_progress = 1.0

    # If all items ready, set order to READY
    all_ready = all(i.prep_status in ["READY", "BURNED"] for i in order.items)
    if all_ready:
        order.status = OrderStatus.READY.value

    db.commit()

    return {
        "success": True,
        "quality": quality,
        "message": f"Cook finished with {quality} rating!",
        "item_id": item.id,
        "order_id": order.id,
        "order_status": order.status
    }

@router.post("/serve")
def serve_completed_order(
    req: ServeOrderRequest,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """
    Serve the fully prepared order to customer, calculate revenue, tips, and update progression.
    """
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()
    order = db.query(Order).filter_by(id=req.order_id, player_id=profile.id).first()

    if not order:
        raise HTTPException(status_code=404, detail="Order not found.")

    if order.status == OrderStatus.COMPLETED.value:
        raise HTTPException(status_code=400, detail="Order has already been served and completed.")

    # Calculate earnings and rating
    result = calculate_order_completion(order, profile, truck)
    order.status = OrderStatus.COMPLETED.value
    order.completed_at = datetime.utcnow()

    # Record sale transaction
    tx = Transaction(
        player_id=profile.id,
        transaction_type="SALE",
        amount=result["total_coins"],
        balance_after=profile.coins,
        description=f"Served {order.customer_name}'s order: {result['overall_quality']} cook (+{result['base_revenue']} sale, +{result['tip_amount']} tip)"
    )
    db.add(tx)
    db.commit()

    return {
        "success": True,
        "message": f"Served {order.customer_name}! Earned {result['total_coins']} Coins & {result['xp_awarded']} XP!",
        "result": result,
        "order": serialize_order(order)
    }
