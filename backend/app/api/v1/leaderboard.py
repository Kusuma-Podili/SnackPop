"""
Global Leaderboard API Endpoints.
"""
from typing import List
from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from sqlalchemy import desc
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import User, PlayerProfile
from backend.app.schemas.location import LeaderboardEntry

router = APIRouter(prefix="/leaderboard", tags=["Leaderboard"])

@router.get("", response_model=List[LeaderboardEntry])
def get_global_leaderboard(
    metric: str = Query("revenue", enum=["revenue", "reputation", "orders", "level"]),
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve global tycoon rankings sorted by chosen metric."""
    _, profile = player_data

    order_column = PlayerProfile.total_revenue
    if metric == "reputation":
        order_column = PlayerProfile.reputation
    elif metric == "orders":
        order_column = PlayerProfile.orders_completed
    elif metric == "level":
        order_column = PlayerProfile.level

    players = db.query(PlayerProfile).order_by(desc(order_column), desc(PlayerProfile.total_revenue)).limit(50).all()

    result = []
    for rank, p in enumerate(players, start=1):
        result.append(LeaderboardEntry(
            rank=rank,
            player_id=p.id,
            player_name=p.name,
            avatar=p.avatar,
            level=p.level,
            total_revenue=p.total_revenue,
            reputation=p.reputation,
            orders_completed=p.orders_completed,
            is_current_player=(p.id == profile.id)
        ))
    return result
