"""
Mission and Achievement Database Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Boolean, UniqueConstraint
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Mission(Base):
    __tablename__ = "missions"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    mission_type = Column(String(20), default="DAILY", nullable=False) # DAILY, LIFETIME
    
    target_key = Column(String(50), nullable=False) # orders_completed, coins_earned, perfect_cooks, locations_unlocked, burgers_sold
    target_value = Column(Integer, nullable=False)
    
    reward_coins = Column(Integer, default=100, nullable=False)
    reward_xp = Column(Integer, default=50, nullable=False)
    reward_item = Column(String(100), nullable=True)
    
    icon = Column(String(50), default="🎯", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    player_progress = relationship("PlayerMission", back_populates="mission", cascade="all, delete-orphan")

class PlayerMission(Base):
    __tablename__ = "player_missions"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    mission_id = Column(Integer, ForeignKey("missions.id", ondelete="CASCADE"), nullable=False)
    
    current_value = Column(Integer, default=0, nullable=False)
    is_completed = Column(Boolean, default=False, nullable=False)
    is_claimed = Column(Boolean, default=False, nullable=False)
    claimed_at = Column(DateTime, nullable=True)

    __table_args__ = (UniqueConstraint('player_id', 'mission_id', name='_player_mission_uc'),)

    # Relationships
    player = relationship("PlayerProfile", back_populates="missions")
    mission = relationship("Mission", back_populates="player_progress")

class Achievement(Base):
    __tablename__ = "achievements"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String(50), unique=True, nullable=False)
    title = Column(String(100), nullable=False)
    description = Column(String(255), nullable=False)
    category = Column(String(50), default="GENERAL", nullable=False)
    
    requirement_type = Column(String(50), nullable=False) # orders_count, revenue_total, perfect_count, level_reach, locations_count, reputation_reach
    requirement_value = Column(Float, nullable=False)
    
    reward_coins = Column(Integer, default=200, nullable=False)
    reward_xp = Column(Integer, default=100, nullable=False)
    icon = Column(String(50), default="🏆", nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    unlocked_by_players = relationship("PlayerAchievement", back_populates="achievement", cascade="all, delete-orphan")

class PlayerAchievement(Base):
    __tablename__ = "player_achievements"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    achievement_id = Column(Integer, ForeignKey("achievements.id", ondelete="CASCADE"), nullable=False)
    unlocked_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    __table_args__ = (UniqueConstraint('player_id', 'achievement_id', name='_player_achievement_uc'),)

    # Relationships
    player = relationship("PlayerProfile", back_populates="achievements")
    achievement = relationship("Achievement", back_populates="unlocked_by_players")
