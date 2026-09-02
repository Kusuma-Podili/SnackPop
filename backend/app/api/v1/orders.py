"""
Customer Order Generation & Active Queue API Endpoints.
"""
import random
from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, FoodTruck, FoodItem, Order, OrderItem,
    OrderStatus, Location, RecipeIngredient
)
from backend.app.schemas.order import OrderOut, OrderItemOut
from backend.app.services.cooking_engine import generate_customer_archetype

router = APIRouter(prefix="/orders", tags=["Orders"])

def serialize_order(o: Order) -> OrderOut:
    items_out = []
    for item in o.items:
        req_ings = []
        if item.food_item and item.food_item.ingredients:
            for ri in item.food_item.ingredients:
                req_ings.append({
                    "ingredient_id": ri.ingredient_id,
                    "ingredient_name": ri.ingredient.name if ri.ingredient else "Unknown",
                    "quantity": ri.quantity_required,
                    "icon": ri.ingredient.icon if ri.ingredient else "🍅"
                })

        items_out.append(OrderItemOut(
            id=item.id,
            food_item_id=item.food_item_id,
            food_name=item.food_item.name if item.food_item else "Custom Dish",
            food_icon=item.food_item.icon if item.food_item else "🍔",
            cook_station=item.food_item.cook_station if item.food_item else "GRILL",
            base_prep_time=item.food_item.base_prep_time if item.food_item else 4.0,
            quantity=item.quantity,
            unit_price=item.unit_price,
            prep_status=item.prep_status,
            cook_progress=item.cook_progress,
            quality=item.quality,
            required_ingredients=req_ings
        ))

    return OrderOut(
        id=o.id,
        customer_name=o.customer_name,
        customer_type=o.customer_type,
        customer_avatar=o.customer_avatar,
        status=o.status,
        total_price=o.total_price,
        tip_amount=o.tip_amount,
        xp_awarded=o.xp_awarded,
        initial_patience=o.initial_patience,
        patience_remaining=o.patience_remaining,
        customer_satisfaction=o.customer_satisfaction,
        customer_rating=o.customer_rating,
        cooking_rating=o.cooking_rating,
        created_at=o.created_at,
        items=items_out
    )

@router.get("/active", response_model=List[OrderOut])
def get_active_orders(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve all current pending/preparing customer orders in queue."""
    _, profile = player_data
    orders = db.query(Order).filter(
        Order.player_id == profile.id,
        Order.status.in_([OrderStatus.PENDING.value, OrderStatus.PREPARING.value, OrderStatus.READY.value])
    ).order_by(Order.created_at.asc()).all()

    return [serialize_order(o) for o in orders]

@router.get("/history", response_model=List[OrderOut])
def get_order_history(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve history of completed orders."""
    _, profile = player_data
    orders = db.query(Order).filter(
        Order.player_id == profile.id,
        Order.status.in_([OrderStatus.COMPLETED.value, OrderStatus.CANCELLED.value])
    ).order_by(Order.completed_at.desc(), Order.created_at.desc()).limit(30).all()

    return [serialize_order(o) for o in orders]

@router.post("/spawn", response_model=OrderOut)
def spawn_customer_order(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Dynamically spawn a new customer order based on location & unlocked recipes."""
    _, profile = player_data
    truck = db.query(FoodTruck).filter_by(player_id=profile.id).first()

    # Check active queue capacity
    active_count = db.query(Order).filter(
        Order.player_id == profile.id,
        Order.status.in_([OrderStatus.PENDING.value, OrderStatus.PREPARING.value, OrderStatus.READY.value])
    ).count()

    max_queue = truck.customer_capacity if truck else 3
    if active_count >= max_queue:
        raise HTTPException(
            status_code=400,
            detail=f"Customer queue is full ({active_count}/{max_queue}). Serve current orders before accepting new customers."
        )

    # Get unlocked foods for player level
    unlocked_foods = db.query(FoodItem).filter(
        FoodItem.required_level <= profile.level,
        FoodItem.is_available == True
    ).all()

    if not unlocked_foods:
        raise HTTPException(status_code=400, detail="No unlocked recipes available for cooking.")

    # Archetype & Location multiplier
    c_archetype = generate_customer_archetype()
    
    # Determine item count (Hungry archetype orders 2-3 items, others 1-2)
    item_count = 1
    if c_archetype["type"] == "HUNGRY":
        item_count = random.choice([2, 3])
    elif random.random() < 0.35 and len(unlocked_foods) > 1:
        item_count = 2

    selected_foods = random.choices(unlocked_foods, k=item_count)

    # Calculate total price
    total_price = sum(f.selling_price for f in selected_foods)

    # Create Order
    new_order = Order(
        player_id=profile.id,
        customer_name=c_archetype["name"],
        customer_type=c_archetype["type"],
        customer_avatar=c_archetype["avatar"],
        status=OrderStatus.PENDING.value,
        total_price=total_price,
        tip_amount=0,
        xp_awarded=0,
        initial_patience=c_archetype["patience"],
        patience_remaining=c_archetype["patience"],
        customer_satisfaction=1.0,
        customer_rating=5.0,
        location_id=profile.current_location_id,
        created_at=datetime.utcnow()
    )
    db.add(new_order)
    db.flush()

    # Create Order Items
    for food in selected_foods:
        item = OrderItem(
            order_id=new_order.id,
            food_item_id=food.id,
            quantity=1,
            unit_price=food.selling_price,
            prep_status="PENDING",
            cook_progress=0.0
        )
        db.add(item)

    db.commit()
    db.refresh(new_order)

    return serialize_order(new_order)
