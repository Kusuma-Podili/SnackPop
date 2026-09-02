"""
Core application configuration settings.
"""
import os

class Settings:
    PROJECT_NAME: str = "Food Truck Tycoon"
    API_V1_STR: str = "/api"
    SECRET_KEY: str = os.getenv("SECRET_KEY", "food-truck-tycoon-super-secret-production-key-2026")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7  # 7 days
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./food_truck_tycoon.db")
    
    # Game Economy Constants
    STARTING_COINS: int = 500
    STARTING_STORAGE: int = 50
    STARTING_REPUTATION: float = 4.0
    BASE_XP_PER_ORDER: int = 25
    BASE_XP_PER_LEVEL: int = 100
    XP_GROWTH_FACTOR: float = 1.35

settings = Settings()
