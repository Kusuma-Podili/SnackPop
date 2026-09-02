"""
Cooking Simulation Engine: Quality Evaluation, Customer AI & Modifiers.
"""
import random
from typing import Optional
from backend.app.models.order import CookingRating, CustomerArchetype, Order, OrderItem
from backend.app.models.player import PlayerProfile
from backend.app.models.truck import FoodTruck
from backend.app.models.food import FoodItem

CUSTOMER_ARCHETYPES = [
    {
        "type": CustomerArchetype.REGULAR.value,
        "name_pool": ["Alex", "Sam", "Taylor", "Jordan", "Casey", "Morgan", "Riley", "Chris"],
        "avatars": ["avatar-1", "avatar-2", "avatar-3", "avatar-4"],
        "patience_base": 32.0,
        "tip_factor": 1.0,
        "rep_impact": 0.1,
        "weight": 40
    },
    {
        "type": CustomerArchetype.HUNGRY.value,
        "name_pool": ["Big Ben", "Hungry Dave", "Gourmet Greg", "Tank", "Bulldozer Bob"],
        "avatars": ["avatar-5", "avatar-6"],
        "patience_base": 34.0,
        "tip_factor": 1.15,
        "rep_impact": 0.1,
        "weight": 25
    },
    {
        "type": CustomerArchetype.VIP.value,
        "name_pool": ["Lord Sterling", "Lady Victoria", "Senator Hayes", "CEO Morgan", "Duchess Claire"],
        "avatars": ["avatar-7", "avatar-8"],
        "patience_base": 24.0,
        "tip_factor": 2.2,
        "rep_impact": 0.25,
        "weight": 12
    },
    {
        "type": CustomerArchetype.IMPATIENT.value,
        "name_pool": ["Speedy Pete", "Rush Roger", "Busy Beatrice", "Fast Frank", "Stressed Steve"],
        "avatars": ["avatar-9", "avatar-10"],
        "patience_base": 18.0,
        "tip_factor": 1.3,
        "rep_impact": 0.15,
        "weight": 15
    },
    {
        "type": CustomerArchetype.FOOD_CRITIC.value,
        "name_pool": ["Chef Anton Ego", "Critic Clementine", "Gourmet Gordon", "Michelin Max"],
        "avatars": ["avatar-11", "avatar-12"],
        "patience_base": 28.0,
        "tip_factor": 1.8,
        "rep_impact": 0.5,
        "weight": 8
    }
]

def generate_customer_archetype() -> dict:
    """Randomly pick customer archetype based on weight distribution."""
    weights = [c["weight"] for c in CUSTOMER_ARCHETYPES]
    chosen = random.choices(CUSTOMER_ARCHETYPES, weights=weights, k=1)[0]
    return {
        "type": chosen["type"],
        "name": random.choice(chosen["name_pool"]),
        "avatar": random.choice(chosen["avatars"]),
        "patience": chosen["patience_base"],
        "tip_factor": chosen["tip_factor"],
        "rep_impact": chosen["rep_impact"]
    }

def evaluate_cooking_quality(timing_accuracy: float) -> tuple[str, float]:
    """
    Evaluate cooking accuracy (0.0 to 1.0) where 1.0 is exact sweet spot center.
    Returns (CookingRating, satisfaction_multiplier).
    """
    if timing_accuracy >= 0.85:
        return CookingRating.PERFECT.value, 1.35
    elif timing_accuracy >= 0.55:
        return CookingRating.GOOD.value, 1.0
    elif timing_accuracy >= 0.25:
        return CookingRating.LATE.value, 0.65
    else:
        return CookingRating.BURNED.value, 0.0

def calculate_order_completion(
    order: Order,
    profile: PlayerProfile,
    truck: FoodTruck
) -> dict:
    """
    Calculate final earnings, tips, satisfaction rating, and XP on order service.
    """
    # Check item ratings
    item_qualities = [item.quality for item in order.items if item.quality]
    if not item_qualities:
        overall_quality = CookingRating.GOOD.value
    elif any(q == CookingRating.BURNED.value for q in item_qualities):
        overall_quality = CookingRating.BURNED.value
    elif all(q == CookingRating.PERFECT.value for q in item_qualities):
        overall_quality = CookingRating.PERFECT.value
    elif any(q == CookingRating.PERFECT.value for q in item_qualities):
        overall_quality = CookingRating.GOOD.value
    else:
        overall_quality = item_qualities[0]

    order.cooking_rating = overall_quality

    # Find customer archetype data
    c_info = next((c for c in CUSTOMER_ARCHETYPES if c["type"] == order.customer_type), CUSTOMER_ARCHETYPES[0])
    
    # Calculate patience retention ratio
    patience_ratio = max(0.1, min(1.0, order.patience_remaining / max(1.0, order.initial_patience)))

    # Calculate earnings
    base_revenue = order.total_price
    tip_amount = 0
    xp_awarded = 25 * len(order.items)

    if overall_quality == CookingRating.PERFECT.value:
        # High tip & bonus XP
        tip_percent = 0.25 * c_info["tip_factor"] * patience_ratio
        tip_amount = int(round(base_revenue * tip_percent)) + 5
        xp_awarded += 30 * len(order.items)
        customer_rating = min(5.0, 4.5 + (0.5 * patience_ratio))
        rep_delta = c_info["rep_impact"]
        profile.perfect_cooks += 1
    elif overall_quality == CookingRating.GOOD.value:
        tip_percent = 0.10 * c_info["tip_factor"] * patience_ratio
        tip_amount = int(round(base_revenue * tip_percent))
        xp_awarded += 10 * len(order.items)
        customer_rating = min(5.0, 3.8 + (0.7 * patience_ratio))
        rep_delta = c_info["rep_impact"] * 0.5
    elif overall_quality == CookingRating.LATE.value:
        tip_amount = 0
        customer_rating = 2.5
        rep_delta = -0.1
    else: # BURNED
        tip_amount = 0
        base_revenue = max(0, int(base_revenue * 0.3)) # Customer barely pays 30% for ruined meal
        xp_awarded = 5
        customer_rating = 1.0
        rep_delta = -c_info["rep_impact"]
        profile.burned_cooks += 1

    order.tip_amount = tip_amount
    order.customer_rating = round(customer_rating, 1)
    order.customer_satisfaction = round(customer_rating / 5.0, 2)
    order.xp_awarded = xp_awarded

    # Update Player Profile
    total_coins_earned = base_revenue + tip_amount
    profile.coins += total_coins_earned
    profile.total_revenue += total_coins_earned
    profile.xp += xp_awarded
    profile.orders_completed += 1
    profile.customers_served += 1
    profile.reputation = max(1.0, min(5.0, round(profile.reputation + (rep_delta * 0.1), 2)))

    # Level Up Check
    while profile.xp >= profile.xp_to_next_level:
        profile.xp -= profile.xp_to_next_level
        profile.level += 1
        profile.xp_to_next_level = int(round(100 * (1.35 ** (profile.level - 1))))
        profile.coins += profile.level * 100 # Level up bonus coins

    return {
        "overall_quality": overall_quality,
        "base_revenue": base_revenue,
        "tip_amount": tip_amount,
        "total_coins": total_coins_earned,
        "xp_awarded": xp_awarded,
        "customer_rating": order.customer_rating,
        "new_level": profile.level,
        "current_coins": profile.coins
    }
