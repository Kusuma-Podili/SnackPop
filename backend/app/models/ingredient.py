"""
Ingredient and Player Inventory Database Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, UniqueConstraint
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class Ingredient(Base):
    __tablename__ = "ingredients"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    category = Column(String(50), nullable=False) # Produce, Meat, Dairy, Bakery, Sauces, Grains, Beverages, Spices
    unit_cost = Column(Integer, nullable=False) # In coins
    unit_type = Column(String(20), default="pcs", nullable=False) # pcs, slice, scoop, bottle, packet
    icon = Column(String(50), default="🍅", nullable=False)
    min_level = Column(Integer, default=1, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    used_in_recipes = relationship("RecipeIngredient", back_populates="ingredient", cascade="all, delete-orphan")
    inventory_records = relationship("PlayerInventory", back_populates="ingredient", cascade="all, delete-orphan")

class PlayerInventory(Base):
    __tablename__ = "player_inventories"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    ingredient_id = Column(Integer, ForeignKey("ingredients.id", ondelete="CASCADE"), nullable=False)
    quantity = Column(Integer, default=0, nullable=False)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow, nullable=False)

    # Ensure unique player-ingredient pair
    __table_args__ = (UniqueConstraint('player_id', 'ingredient_id', name='_player_ingredient_uc'),)

    # Relationships
    player = relationship("PlayerProfile", back_populates="inventory")
    ingredient = relationship("Ingredient", back_populates="inventory_records")
