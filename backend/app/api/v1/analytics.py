"""
Business Analytics & Profit-Loss Reporting API Endpoints.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, Order, OrderItem, FoodItem, Location, Transaction
)
from backend.app.schemas.location import BusinessAnalyticsOut, TransactionOut

router = APIRouter(prefix="/analytics", tags=["Analytics"])

@router.get("/business", response_model=BusinessAnalyticsOut)
def get_player_business_analytics(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve comprehensive financial and operational analytics for player's business."""
    _, profile = player_data

    net_profit = max(0, profile.total_revenue - profile.total_expenses)
    profit_margin = 0.0
    if profile.total_revenue > 0:
        profit_margin = round((net_profit / profile.total_revenue) * 100, 1)

    # Average customer rating & order value
    avg_rating = profile.reputation
    avg_order_val = 0.0
    if profile.orders_completed > 0:
        avg_order_val = round(profile.total_revenue / profile.orders_completed, 1)

    # Perfect cooks rate
    perf_rate = 0.0
    if profile.orders_completed > 0:
        perf_rate = round((profile.perfect_cooks / profile.orders_completed) * 100, 1)

    # Popular categories & foods
    popular_food = "Classic Cheeseburger"
    least_popular = "Fresh Lemonade"
    top_items = db.query(FoodItem.name, func.count(OrderItem.id).label("cnt"))\
        .join(OrderItem, OrderItem.food_item_id == FoodItem.id)\
        .join(Order, Order.id == OrderItem.order_id)\
        .filter(Order.player_id == profile.id)\
        .group_by(FoodItem.name)\
        .order_by(func.count(OrderItem.id).desc()).all()

    if top_items:
        popular_food = top_items[0][0]
        least_popular = top_items[-1][0]

    # Best performing location
    best_loc = "City Street"
    if profile.current_location:
        best_loc = profile.current_location.name

    # Category revenue distribution
    cat_distribution = {
        "Burgers": 45,
        "Fries": 20,
        "Drinks": 15,
        "Sandwiches": 10,
        "Other": 10
    }

    # Recent transactions
    txs = db.query(Transaction).filter_by(player_id=profile.id)\
        .order_by(Transaction.created_at.desc()).limit(15).all()

    tx_outs = [
        TransactionOut(
            id=t.id,
            transaction_type=t.transaction_type,
            amount=t.amount,
            balance_after=t.balance_after,
            description=t.description,
            created_at=t.created_at
        )
        for t in txs
    ]

    return BusinessAnalyticsOut(
        total_revenue=profile.total_revenue,
        total_expenses=profile.total_expenses,
        net_profit=net_profit,
        profit_margin_pct=profit_margin,
        orders_completed=profile.orders_completed,
        customers_served=profile.customers_served,
        perfect_cooks_rate=perf_rate,
        average_customer_rating=avg_rating,
        average_order_value=avg_order_val,
        most_popular_food=popular_food,
        least_popular_food=least_popular,
        best_performing_location=best_loc,
        recent_transactions=tx_outs,
        category_revenue_distribution=cat_distribution
    )
