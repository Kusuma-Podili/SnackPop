"""
Achievements & Milestone Trophies API Endpoints.
"""
from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, Achievement, PlayerAchievement, Transaction, PlayerLocation
)
from backend.app.schemas.location import AchievementOut

router = APIRouter(prefix="/achievements", tags=["Achievements"])

def get_achievement_metric(profile: PlayerProfile, req_type: str, db: Session) -> float:
    if req_type == "orders_count":
        return float(profile.orders_completed)
    elif req_type == "revenue_total":
        return float(profile.total_revenue)
    elif req_type == "perfect_count":
        return float(profile.perfect_cooks)
    elif req_type == "level_reach":
        return float(profile.level)
    elif req_type == "locations_count":
        return float(db.query(PlayerLocation).filter_by(player_id=profile.id).count())
    elif req_type == "reputation_reach":
        return float(profile.reputation)
    return 0.0

@router.get("", response_model=List[AchievementOut])
def get_achievements_list(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve all achievements with auto-unlocking and live progress."""
    _, profile = player_data
    achievements = db.query(Achievement).order_by(Achievement.requirement_type, Achievement.requirement_value).all()
    
    unlocked_map = {
        pa.achievement_id: pa
        for pa in db.query(PlayerAchievement).filter_by(player_id=profile.id).all()
    }

    result = []
    new_unlocks = []

    for ach in achievements:
        current_val = get_achievement_metric(profile, ach.requirement_type, db)
        is_already_unlocked = (ach.id in unlocked_map)

        if not is_already_unlocked and current_val >= ach.requirement_value:
            # Auto unlock & reward
            new_pa = PlayerAchievement(
                player_id=profile.id,
                achievement_id=ach.id,
                unlocked_at=datetime.utcnow()
            )
            db.add(new_pa)
            profile.coins += ach.reward_coins
            profile.xp += ach.reward_xp

            tx = Transaction(
                player_id=profile.id,
                transaction_type="ACHIEVEMENT_REWARD",
                amount=ach.reward_coins,
                balance_after=profile.coins,
                description=f"Unlocked Achievement: {ach.title} (+{ach.reward_coins} coins, +{ach.reward_xp} XP)"
            )
            db.add(tx)
            new_unlocks.append(ach)
            is_already_unlocked = True

        progress_pct = min(1.0, current_val / max(0.001, ach.requirement_value))

        result.append(AchievementOut(
            id=ach.id,
            code=ach.code,
            title=ach.title,
            description=ach.description,
            category=ach.category,
            requirement_type=ach.requirement_type,
            requirement_value=ach.requirement_value,
            reward_coins=ach.reward_coins,
            reward_xp=ach.reward_xp,
            icon=ach.icon,
            is_unlocked=is_already_unlocked,
            current_progress=round(progress_pct * 100, 1)
        ))

    if new_unlocks:
        db.commit()

    return result
