"""
Player Profile and Progression Database Models.
"""
from datetime import datetime, date
from sqlalchemy import Column, Integer, String, Float, DateTime, Date, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class PlayerProfile(Base):
    __tablename__ = "player_profiles"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), unique=True, nullable=False)
    name = Column(String(100), nullable=False)
    avatar = Column(String(255), default="chef-1", nullable=False)
    level = Column(Integer, default=1, nullable=False)
    xp = Column(Integer, default=0, nullable=False)
    xp_to_next_level = Column(Integer, default=100, nullable=False)
    coins = Column(Integer, default=500, nullable=False)
    reputation = Column(Float, default=4.0, nullable=False)  # 1.0 to 5.0 stars
    
    current_location_id = Column(Integer, ForeignKey("locations.id"), nullable=True)
    
    # Financial statistics
    total_revenue = Column(Integer, default=0, nullable=False)
    total_expenses = Column(Integer, default=0, nullable=False)
    orders_completed = Column(Integer, default=0, nullable=False)
    customers_served = Column(Integer, default=0, nullable=False)
    perfect_cooks = Column(Integer, default=0, nullable=False)
    burned_cooks = Column(Integer, default=0, nullable=False)
    
    # Daily Login Streak
    last_daily_reward_date = Column(Date, nullable=True)
    daily_streak = Column(Integer, default=0, nullable=False)
    
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    user = relationship("User", back_populates="player_profile")
    truck = relationship("FoodTruck", back_populates="player", uselist=False, cascade="all, delete-orphan")
    inventory = relationship("PlayerInventory", back_populates="player", cascade="all, delete-orphan")
    unlocked_locations = relationship("PlayerLocation", back_populates="player", cascade="all, delete-orphan")
    missions = relationship("PlayerMission", back_populates="player", cascade="all, delete-orphan")
    achievements = relationship("PlayerAchievement", back_populates="player", cascade="all, delete-orphan")
    orders = relationship("Order", back_populates="player", cascade="all, delete-orphan")
    transactions = relationship("Transaction", back_populates="player", cascade="all, delete-orphan")
    current_location = relationship("Location", foreign_keys=[current_location_id])
