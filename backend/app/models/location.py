"""
Location and Player Unlocked Locations Database Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Location(Base):
    __tablename__ = "locations"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    description = Column(String(255), nullable=False)
    unlock_level = Column(Integer, default=1, nullable=False)
    unlock_cost = Column(Integer, default=0, nullable=False)
    
    # Mechanics multipliers
    customer_traffic_multiplier = Column(Float, default=1.0, nullable=False)
    tip_multiplier = Column(Float, default=1.0, nullable=False)
    patience_drain_multiplier = Column(Float, default=1.0, nullable=False)
    
    popular_category = Column(String(50), default="Burgers", nullable=False)
    difficulty_rating = Column(Integer, default=1, nullable=False) # 1 to 5 stars
    background_theme = Column(String(50), default="city-street", nullable=False)
    icon = Column(String(50), default="🏙️", nullable=False)
    
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    unlocked_by_players = relationship("PlayerLocation", back_populates="location", cascade="all, delete-orphan")

class PlayerLocation(Base):
    __tablename__ = "player_locations"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    location_id = Column(Integer, ForeignKey("locations.id", ondelete="CASCADE"), nullable=False)
    unlocked_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    __table_args__ = (UniqueConstraint('player_id', 'location_id', name='_player_location_uc'),)

    # Relationships
    player = relationship("PlayerProfile", back_populates="unlocked_locations")
    location = relationship("Location", back_populates="unlocked_by_players")
