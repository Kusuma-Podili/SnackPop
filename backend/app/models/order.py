"""
Order and Customer Transaction Models.
"""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey, Enum as SQLEnum
from sqlalchemy.orm import relationship
import enum
from backend.app.core.database import Base

class OrderStatus(str, enum.Enum):
    PENDING = "PENDING"
    PREPARING = "PREPARING"
    READY = "READY"
    SERVED = "SERVED"
    COMPLETED = "COMPLETED"
    CANCELLED = "CANCELLED"

class CookingRating(str, enum.Enum):
    PERFECT = "PERFECT"
    GOOD = "GOOD"
    LATE = "LATE"
    BURNED = "BURNED"

class CustomerArchetype(str, enum.Enum):
    REGULAR = "REGULAR"
    HUNGRY = "HUNGRY"
    VIP = "VIP"
    IMPATIENT = "IMPATIENT"
    FOOD_CRITIC = "FOOD_CRITIC"

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    player_id = Column(Integer, ForeignKey("player_profiles.id", ondelete="CASCADE"), nullable=False)
    customer_name = Column(String(100), nullable=False)
    customer_type = Column(String(50), default=CustomerArchetype.REGULAR.value, nullable=False)
    customer_avatar = Column(String(100), default="avatar-1", nullable=False)
    
    status = Column(String(30), default=OrderStatus.PENDING.value, nullable=False)
    
    total_price = Column(Integer, default=0, nullable=False)
    tip_amount = Column(Integer, default=0, nullable=False)
    xp_awarded = Column(Integer, default=0, nullable=False)
    
    # Patience & satisfaction
    initial_patience = Column(Float, default=30.0, nullable=False) # seconds
    patience_remaining = Column(Float, default=30.0, nullable=False)
    customer_satisfaction = Column(Float, default=1.0, nullable=False) # 0.0 to 1.0
    customer_rating = Column(Float, default=5.0, nullable=False) # 1.0 to 5.0
    cooking_rating = Column(String(30), default=CookingRating.GOOD.value, nullable=True)
    
    location_id = Column(Integer, ForeignKey("locations.id"), nullable=True)
    
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)
    completed_at = Column(DateTime, nullable=True)

    # Relationships
    player = relationship("PlayerProfile", back_populates="orders")
    items = relationship("OrderItem", back_populates="order", cascade="all, delete-orphan")
    location = relationship("Location")

class OrderItem(Base):
    __tablename__ = "order_items"

    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer, ForeignKey("orders.id", ondelete="CASCADE"), nullable=False)
    food_item_id = Column(Integer, ForeignKey("food_items.id", ondelete="CASCADE"), nullable=False)
    quantity = Column(Integer, default=1, nullable=False)
    unit_price = Column(Integer, nullable=False)
    
    # Per-item cooking state
    prep_status = Column(String(30), default="PENDING", nullable=False) # PENDING, PREPPING, COOKING, READY, BURNED
    cook_progress = Column(Float, default=0.0, nullable=False) # 0.0 to 1.0
    quality = Column(String(30), nullable=True) # PERFECT, GOOD, LATE, BURNED

    # Relationships
    order = relationship("Order", back_populates="items")
    food_item = relationship("FoodItem", back_populates="order_items")
