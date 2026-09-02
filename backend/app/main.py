"""
Main FastAPI Application Entrypoint.
"""
import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from backend.app.core.config import settings
from backend.app.core.database import engine, Base, SessionLocal
from backend.app.db.seed_data import seed_database
from backend.app import models

# Import API Routers
from backend.app.api.v1.auth import router as auth_router
from backend.app.api.v1.player import router as player_router
from backend.app.api.v1.truck import router as truck_router
from backend.app.api.v1.inventory import router as inventory_router
from backend.app.api.v1.rewards import router as rewards_router
from backend.app.api.v1.transactions import router as transactions_router
from backend.app.api.v1.orders import router as orders_router
from backend.app.api.v1.cooking import router as cooking_router
from backend.app.api.v1.locations import router as locations_router
from backend.app.api.v1.foods import router as foods_router
from backend.app.api.v1.missions import router as missions_router
from backend.app.api.v1.achievements import router as achievements_router
from backend.app.api.v1.leaderboard import router as leaderboard_router
from backend.app.api.v1.analytics import router as analytics_router
from backend.app.api.v1.admin import router as admin_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()
    yield

app = FastAPI(
    title="Food Truck Tycoon API",
    description="Backend API for the Food Truck Tycoon simulation game.",
    version="1.0.0",
    lifespan=lifespan
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Core API Routers
app.include_router(auth_router, prefix=settings.API_V1_STR)
app.include_router(player_router, prefix=settings.API_V1_STR)
app.include_router(truck_router, prefix=settings.API_V1_STR)
app.include_router(inventory_router, prefix=settings.API_V1_STR)
app.include_router(rewards_router, prefix=settings.API_V1_STR)
app.include_router(transactions_router, prefix=settings.API_V1_STR)
app.include_router(orders_router, prefix=settings.API_V1_STR)
app.include_router(cooking_router, prefix=settings.API_V1_STR)
app.include_router(locations_router, prefix=settings.API_V1_STR)
app.include_router(foods_router, prefix=settings.API_V1_STR)
app.include_router(missions_router, prefix=settings.API_V1_STR)
app.include_router(achievements_router, prefix=settings.API_V1_STR)
app.include_router(leaderboard_router, prefix=settings.API_V1_STR)
app.include_router(analytics_router, prefix=settings.API_V1_STR)
app.include_router(admin_router, prefix=settings.API_V1_STR)

# Mount Frontend Static Assets
frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend"))
if os.path.exists(frontend_dir):
    app.mount("/static", StaticFiles(directory=frontend_dir), name="static")

    @app.get("/")
    async def serve_index():
        index_file = os.path.join(frontend_dir, "index.html")
        if os.path.exists(index_file):
            return FileResponse(index_file)
        return {"message": "Food Truck Tycoon API is online. Frontend index not found."}

@app.get("/api/health")
async def health_check():
    return {"status": "ok", "game": "Food Truck Tycoon", "version": "1.0.0"}
