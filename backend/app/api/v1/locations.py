"""
Locations & Territory Expansion API Endpoints.
"""
from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import (
    User, PlayerProfile, Location, PlayerLocation, Transaction
)
from backend.app.schemas.location import LocationOut

router = APIRouter(prefix="/locations", tags=["Locations"])

@router.get("", response_model=List[LocationOut])
def get_locations_list(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """List all game locations with player unlock and active status."""
    _, profile = player_data
    locations = db.query(Location).order_by(Location.unlock_level, Location.id).all()
    unlocked_ids = {
        pl.location_id
        for pl in db.query(PlayerLocation).filter_by(player_id=profile.id).all()
    }

    result = []
    for loc in locations:
        is_unlocked = (loc.id in unlocked_ids)
        is_current = (profile.current_location_id == loc.id)
        result.append(LocationOut(
            id=loc.id,
            name=loc.name,
            description=loc.description,
            unlock_level=loc.unlock_level,
            unlock_cost=loc.unlock_cost,
            customer_traffic_multiplier=loc.customer_traffic_multiplier,
            tip_multiplier=loc.tip_multiplier,
            patience_drain_multiplier=loc.patience_drain_multiplier,
            popular_category=loc.popular_category,
            difficulty_rating=loc.difficulty_rating,
            background_theme=loc.background_theme,
            icon=loc.icon,
            is_unlocked=is_unlocked,
            is_current=is_current
        ))
    return result

@router.post("/{location_id}/unlock")
def unlock_new_location(
    location_id: int,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Unlock a new business location using coins."""
    _, profile = player_data
    loc = db.query(Location).filter_by(id=location_id).first()
    if not loc:
        raise HTTPException(status_code=404, detail="Location not found.")

    # Check if already unlocked
    existing = db.query(PlayerLocation).filter_by(
        player_id=profile.id,
        location_id=loc.id
    ).first()
    if existing:
        raise HTTPException(status_code=400, detail=f"You have already unlocked {loc.name}!")

    if profile.level < loc.unlock_level:
        raise HTTPException(
            status_code=400,
            detail=f"Chef Level {loc.unlock_level} required to expand to {loc.name}."
        )

    if profile.coins < loc.unlock_cost:
        raise HTTPException(
            status_code=400,
            detail=f"Insufficient coins. Expansion requires {loc.unlock_cost} coins (You have {profile.coins})."
        )

    # Deduct coins & unlock
    if loc.unlock_cost > 0:
        profile.coins -= loc.unlock_cost
        profile.total_expenses += loc.unlock_cost

    new_pl = PlayerLocation(
        player_id=profile.id,
        location_id=loc.id
    )
    db.add(new_pl)

    # Automatically set as current location
    profile.current_location_id = loc.id

    if loc.unlock_cost > 0:
        tx = Transaction(
            player_id=profile.id,
            transaction_type="LOCATION_UNLOCK",
            amount=-loc.unlock_cost,
            balance_after=profile.coins,
            description=f"Unlocked new location: {loc.name}"
        )
        db.add(tx)

    db.commit()

    return {
        "success": True,
        "message": f"Successfully expanded to {loc.name}! Food truck relocated.",
        "location_id": loc.id,
        "remaining_coins": profile.coins
    }

@router.post("/{location_id}/switch")
def switch_active_location(
    location_id: int,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Move food truck to an already unlocked location."""
    _, profile = player_data
    loc = db.query(Location).filter_by(id=location_id).first()
    if not loc:
        raise HTTPException(status_code=404, detail="Location not found.")

    unlocked = db.query(PlayerLocation).filter_by(
        player_id=profile.id,
        location_id=loc.id
    ).first()
    if not unlocked:
        raise HTTPException(status_code=400, detail=f"Location {loc.name} is locked. Please unlock it first.")

    profile.current_location_id = loc.id
    db.commit()

    return {
        "success": True,
        "message": f"Food truck moved to {loc.name}!",
        "current_location_id": loc.id
    }
