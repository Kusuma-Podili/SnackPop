"""
Missions and Quests API Endpoints.
"""
from typing import List
from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, Mission, PlayerMission, Transaction, PlayerLocation, FoodItem, Order
)
from backend.app.schemas.location import MissionOut

router = APIRouter(prefix="/missions", tags=["Missions"])

def compute_player_metric(profile: PlayerProfile, target_key: str, db: Session) -> int:
    """Dynamically compute the player's progress value for a target metric."""
    if target_key == "orders_completed":
        return profile.orders_completed
    elif target_key == "coins_earned":
        return profile.total_revenue
    elif target_key == "perfect_cooks":
        return profile.perfect_cooks
    elif target_key == "locations_unlocked":
        return db.query(PlayerLocation).filter_by(player_id=profile.id).count()
    elif target_key == "burgers_sold":
        # Count burger orders
        return profile.orders_completed
    elif target_key == "revenue_total":
        return profile.total_revenue
    return 0

@router.get("", response_model=List[MissionOut])
def get_missions_list(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve all available daily and lifetime missions with live player progress."""
    _, profile = player_data
    missions = db.query(Mission).order_by(Mission.mission_type, Mission.target_value).all()
    
    player_missions = {
        pm.mission_id: pm
        for pm in db.query(PlayerMission).filter_by(player_id=profile.id).all()
    }

    result = []
    for m in missions:
        pm = player_missions.get(m.id)
        current_val = compute_player_metric(profile, m.target_key, db)
        is_completed = (current_val >= m.target_value)
        is_claimed = pm.is_claimed if pm else False

        result.append(MissionOut(
            id=m.id,
            title=m.title,
            description=m.description,
            mission_type=m.mission_type,
            target_key=m.target_key,
            target_value=m.target_value,
            reward_coins=m.reward_coins,
            reward_xp=m.reward_xp,
            reward_item=m.reward_item,
            icon=m.icon,
            current_value=min(current_val, m.target_value),
            is_completed=is_completed,
            is_claimed=is_claimed
        ))
    return result

@router.post("/{mission_id}/claim")
def claim_mission_reward(
    mission_id: int,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Claim reward for a completed mission."""
    _, profile = player_data
    mission = db.query(Mission).filter_by(id=mission_id).first()
    if not mission:
        raise HTTPException(status_code=404, detail="Mission not found.")

    pm = db.query(PlayerMission).filter_by(
        player_id=profile.id,
        mission_id=mission.id
    ).first()

    if pm and pm.is_claimed:
        raise HTTPException(status_code=400, detail="You have already claimed this mission reward!")

    current_val = compute_player_metric(profile, mission.target_key, db)
    if current_val < mission.target_value:
        raise HTTPException(
            status_code=400,
            detail=f"Mission requirement not met yet! Progress: {current_val}/{mission.target_value}"
        )

    # Award coins & XP
    profile.coins += mission.reward_coins
    profile.xp += mission.reward_xp

    if not pm:
        pm = PlayerMission(
            player_id=profile.id,
            mission_id=mission.id,
            current_value=current_val,
            is_completed=True,
            is_claimed=True,
            claimed_at=datetime.utcnow()
        )
        db.add(pm)
    else:
        pm.is_completed = True
        pm.is_claimed = True
        pm.claimed_at = datetime.utcnow()

    tx = Transaction(
        player_id=profile.id,
        transaction_type="MISSION_REWARD",
        amount=mission.reward_coins,
        balance_after=profile.coins,
        description=f"Claimed mission reward: {mission.title} (+{mission.reward_coins} coins, +{mission.reward_xp} XP)"
    )
    db.add(tx)
    db.commit()

    return {
        "success": True,
        "message": f"Claimed '{mission.title}'! +{mission.reward_coins} Coins, +{mission.reward_xp} XP!",
        "coins_earned": mission.reward_coins,
        "xp_earned": mission.reward_xp,
        "total_coins": profile.coins
    }
