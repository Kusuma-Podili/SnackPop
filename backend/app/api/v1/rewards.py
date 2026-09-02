"""
Daily Login Streak Rewards API Endpoints.
"""
from datetime import date, timedelta
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, Transaction, Ingredient, PlayerInventory
)

router = APIRouter(prefix="/rewards", tags=["Rewards"])

DAILY_STREAK_TABLE = {
    1: {"coins": 100, "xp": 25, "item": None, "desc": "Day 1 Starter Bonus - 100 Coins"},
    2: {"coins": 150, "xp": 40, "item": None, "desc": "Day 2 Bonus - 150 Coins + 40 XP"},
    3: {"coins": 250, "xp": 60, "item": None, "desc": "Day 3 Bonus - 250 Coins + 60 XP"},
    4: {"coins": 200, "xp": 80, "item": "Ingredient Supply Crate (10x Fresh Produce)", "desc": "Day 4 Ingredient Pack"},
    5: {"coins": 500, "xp": 100, "item": None, "desc": "Day 5 High Roller - 500 Coins + 100 XP"},
    6: {"coins": 400, "xp": 200, "item": None, "desc": "Day 6 Master Chef - 400 Coins + 200 XP"},
    7: {"coins": 1000, "xp": 400, "item": "Golden Chef Trophy Decal", "desc": "Day 7 Grand Tycoon - 1,000 Coins + 400 XP"},
}

@router.get("/daily/status")
def get_daily_reward_status(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Get the current daily login streak status and whether bonus can be claimed."""
    _, profile = player_data
    today = date.today()

    can_claim = True
    if profile.last_daily_reward_date and profile.last_daily_reward_date >= today:
        can_claim = False

    return {
        "daily_streak": profile.daily_streak,
        "last_daily_reward_date": profile.last_daily_reward_date.isoformat() if profile.last_daily_reward_date else None,
        "can_claim": can_claim,
        "streak_table": DAILY_STREAK_TABLE
    }

@router.post("/daily/claim")
def claim_daily_reward(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Claim today's daily login bonus."""
    _, profile = player_data
    today = date.today()

    if profile.last_daily_reward_date and profile.last_daily_reward_date >= today:
        raise HTTPException(
            status_code=400,
            detail="You have already claimed your daily reward today! Come back tomorrow."
        )

    # Determine streak continuity
    if profile.last_daily_reward_date and (today - profile.last_daily_reward_date).days == 1:
        new_streak = profile.daily_streak + 1
    else:
        new_streak = 1

    profile.daily_streak = new_streak
    profile.last_daily_reward_date = today

    streak_day = (new_streak - 1) % 7 + 1
    reward_info = DAILY_STREAK_TABLE[streak_day]

    coins_reward = reward_info["coins"]
    xp_reward = reward_info["xp"]

    profile.coins += coins_reward
    profile.xp += xp_reward

    # If day 4, grant free ingredients
    if streak_day == 4:
        bun = db.query(Ingredient).filter_by(name="Burger Bun").first()
        patty = db.query(Ingredient).filter_by(name="Beef Patty").first()
        if bun:
            inv = db.query(PlayerInventory).filter_by(player_id=profile.id, ingredient_id=bun.id).first()
            if inv: inv.quantity += 5
            else: db.add(PlayerInventory(player_id=profile.id, ingredient_id=bun.id, quantity=5))
        if patty:
            inv = db.query(PlayerInventory).filter_by(player_id=profile.id, ingredient_id=patty.id).first()
            if inv: inv.quantity += 5
            else: db.add(PlayerInventory(player_id=profile.id, ingredient_id=patty.id, quantity=5))

    tx = Transaction(
        player_id=profile.id,
        transaction_type="DAILY_REWARD",
        amount=coins_reward,
        balance_after=profile.coins,
        description=f"Claimed Day {streak_day} Login Bonus: +{coins_reward} coins, +{xp_reward} XP"
    )
    db.add(tx)
    db.commit()

    return {
        "success": True,
        "message": f"Claimed Day {streak_day} Bonus! +{coins_reward} Coins, +{xp_reward} XP!",
        "daily_streak": new_streak,
        "coins_earned": coins_reward,
        "xp_earned": xp_reward,
        "total_coins": profile.coins
    }
