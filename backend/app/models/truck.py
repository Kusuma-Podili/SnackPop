"""
Food Truck and Kitchen Equipment Database Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class FoodTruck(Base):
    __tablename__ = "food_trucks"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), unique=True, nullable=False)
    name = Column(String(100), default="The Flavor Cruiser", nullable=False)
    
    # Tier level 1 to 5: Basic, Improved, Professional, Premium, Elite
    tier_level = Column(Integer, default=1, nullable=False)
    
    # Customization styling
    color = Column(String(50), default="#FF6B6B", nullable=False)
    signboard_text = Column(String(50), default="HOT & FRESH", nullable=False)
    signboard_style = Column(String(50), default="neon-amber", nullable=False)
    decal = Column(String(50), default="flames", nullable=False)
    wheels = Column(String(50), default="standard-chrome", nullable=False)
    
    # Equipment Tiers (1 to 3)
    grill_tier = Column(Integer, default=1, nullable=False)  # 1x, 1.35x, 1.75x speed
    fryer_tier = Column(Integer, default=1, nullable=False)  # 1x, 1.35x, 1.75x speed
    fridge_tier = Column(Integer, default=1, nullable=False) # 50, 100, 200 storage cap
    prep_table_tier = Column(Integer, default=1, nullable=False) # +slots
    
    # Operational stats
    storage_capacity = Column(Integer, default=50, nullable=False)
    cooking_speed_multiplier = Column(Float, default=1.0, nullable=False)
    customer_capacity = Column(Integer, default=3, nullable=False)
    
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Relationships
    player = relationship("PlayerProfile", back_populates="truck")
