"""
Transaction and Game Settings Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Transaction(Base):
    __tablename__ = "transactions"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    
    # SALE, INGREDIENT_PURCHASE, TRUCK_UPGRADE, EQUIPMENT_UPGRADE, LOCATION_UNLOCK, MISSION_REWARD, DAILY_REWARD, CUSTOMIZATION
    transaction_type = Column(String(50), nullable=False)
    amount = Column(Integer, nullable=False) # Positive for income, negative for expenses
    balance_after = Column(Integer, nullable=False)
    description = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    player = relationship("PlayerProfile", back_populates="transactions")

class GameSetting(Base):
    __tablename__ = "game_settings"

    id = Column(Integer, primary_key=True, index=True)
    key = Column(String(100), unique=True, index=True, nullable=False)
    value = Column(Text, nullable=False)
    category = Column(String(50), default="GENERAL", nullable=False)
    description = Column(String(255), nullable=True)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)
