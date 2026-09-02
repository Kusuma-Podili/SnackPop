"""
Food Item and Recipe Ingredient Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from backend.app.core.database import Base

class FoodItem(Base):
    __tablename__ = "food_items"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    category = Column(String(50), nullable=False)  # Burgers, Pizza, Sandwiches, Fries, Indian Food, Chinese Food, Mexican Food, Desserts, Drinks, Combo Meals
    description = Column(String(255), nullable=True)
    selling_price = Column(Integer, nullable=False)
    base_prep_time = Column(Float, default=4.0, nullable=False) # In seconds
    cook_station = Column(String(50), default="GRILL", nullable=False) # GRILL, FRYER, STOVE, PREP_ONLY, DRINK_DISPENSER
    difficulty = Column(String(20), default="EASY", nullable=False) # EASY, MEDIUM, HARD
    required_level = Column(Integer, default=1, nullable=False)
    popularity_score = Column(Float, default=1.0, nullable=False)
    icon = Column(String(50), default="🍔", nullable=False)
    is_available = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    # Relationships
    ingredients = relationship("RecipeIngredient", back_populates="food_item", cascade="all, delete-orphan")
    order_items = relationship("OrderItem", back_populates="food_item")

class RecipeIngredient(Base):
    __tablename__ = "recipe_ingredients"

    id = Column(Integer, primary_key=True, index=True)
    food_item_id = Column(Integer, ForeignKey("food_items.id", ondelete="CASCADE"), nullable=False)
    ingredient_id = Column(Integer, ForeignKey("ingredients.id", ondelete="CASCADE"), nullable=False)
    quantity_required = Column(Integer, default=1, nullable=False)

    # Relationships
    food_item = relationship("FoodItem", back_populates="ingredients")
    ingredient = relationship("Ingredient", back_populates="used_in_recipes")
