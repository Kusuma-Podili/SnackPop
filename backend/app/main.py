"""
SnackPop Saga Backend Server Entry Point.
FastAPI application with REST APIs, CORS, and static asset serving.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
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

# Mount frontend directory if exists
frontend_dir = os.path.join(os.path.dirname(__file__), "..", "..", "frontend")
if os.path.exists(frontend_dir):
    app.mount("/", StaticFiles(directory=frontend_dir, html=True), name="frontend")
