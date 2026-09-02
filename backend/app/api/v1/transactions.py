"""
Financial Transactions Ledger API Endpoints.
"""
from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_player
from backend.app.models import User, PlayerProfile, Transaction
from backend.app.schemas.location import TransactionOut

router = APIRouter(prefix="/transactions", tags=["Transactions"])

@router.get("", response_model=List[TransactionOut])
def get_transaction_history(
    player_data: tuple[User, PlayerProfile] = Depends(get_current_player),
    db: Session = Depends(get_db)
):
    """Retrieve recent financial ledger transactions for the player."""
    _, profile = player_data
    txs = db.query(Transaction).filter_by(player_id=profile.id)\
        .order_by(Transaction.created_at.desc()).limit(50).all()
    return txs
