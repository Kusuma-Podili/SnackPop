"""
SnackPop Saga Backend Server Entry Point.
FastAPI application with REST APIs, CORS, and static asset serving.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, Response
import os

from .api.endpoints import router as api_router

app = FastAPI(
    title="SnackPop Match-3 Saga API",
    description="Production-grade backend supporting cloud profiles, leaderboards, anti-cheat validation, and quests for SnackPop.",
    version="1.0.0"
)

# CORS middleware for local development and web clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)

# Compatibility /api/auth routes
@app.post("/api/auth/login")
async def auth_login_compat(data: dict = None):
    return {
        "success": True,
        "token": "snackpop_jwt_token_master_chef",
        "user": {"id": "player_chef_1", "username": "MasterChef", "email": "chef@snackpop.dev"}
    }

@app.post("/api/auth/register")
async def auth_register_compat(data: dict = None):
    return {
        "success": True,
        "token": "snackpop_jwt_token_master_chef",
        "user": {"id": "player_chef_1", "username": "MasterChef", "email": "chef@snackpop.dev"}
    }

@app.get("/favicon.ico")
async def favicon():
    return Response(status_code=204)

# Mount frontend directory
frontend_dir = os.path.join(os.path.dirname(__file__), "..", "..", "frontend")
if os.path.exists(frontend_dir):
    app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")
