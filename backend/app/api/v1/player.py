"""
Player Profile Management API Endpoints.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import User, PlayerProfile, Location
from backend.app.schemas.player import PlayerProfileOut, PlayerProfileUpdate

router = APIRouter(prefix="/player", tags=["Player"])

@router.get("/profile", response_model=PlayerProfileOut)
def get_player_profile(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve full profile of the authenticated player."""
    _, profile = player_data
    return profile

@router.put("/profile", response_model=PlayerProfileOut)
def update_player_profile(
    update_in: PlayerProfileUpdate,
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Update editable profile fields such as name or avatar."""
    _, profile = player_data
    if update_in.name is not None:
        profile.name = update_in.name.strip()
    if update_in.avatar is not None:
        profile.avatar = update_in.avatar.strip()
    if update_in.current_location_id is not None:
        loc = db.query(Location).filter_by(id=update_in.current_location_id).first()
        if not loc:
            raise HTTPException(status_code=404, detail="Location not found.")
        profile.current_location_id = loc.id

    db.commit()
    db.refresh(profile)
    return profile
