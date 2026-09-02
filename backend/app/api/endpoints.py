"""
FastAPI REST API routes for SnackPop.
"""

from fastapi import APIRouter, HTTPException
from typing import List
from datetime import datetime

from ..models.schemas import (
    PlayerProfile,
    ScoreSubmissionRequest,
    ScoreSubmissionResponse,
    LeaderboardEntry,
    DailyQuestsResponse,
    DailyQuest,
    RecipeData
)
from ..services.anti_cheat import AntiCheatValidator
from ..services.leaderboard_service import LeaderboardService

router = APIRouter(prefix="/api/v1")

# In-memory user cache
_player_database = {}

@router.get("/health")
async def health_check():
    return {"status": "healthy", "game": "SnackPop Match-3 Saga", "version": "1.0.0"}

@router.get("/profile/{player_id}", response_model=PlayerProfile)
async def get_profile(player_id: str):
    if player_id not in _player_database:
        _player_database[player_id] = PlayerProfile(
            player_id=player_id,
            player_name=f"Chef_{player_id[:6]}"
        )
    return _player_database[player_id]

@router.post("/levels/submit", response_model=ScoreSubmissionResponse)
async def submit_level_score(req: ScoreSubmissionRequest):
    is_valid = AntiCheatValidator.verify_submission(req)
    if not is_valid:
        raise HTTPException(status_code=400, detail="Score verification failed. Move logs or math inconsistent.")

    profile = await get_profile(req.player_id)
    prev_high = profile.level_high_scores.get(req.level_number, 0)
    is_new_high = req.score > prev_high

    if is_new_high:
        profile.level_high_scores[req.level_number] = req.score

    prev_stars = profile.level_stars.get(req.level_number, 0)
    if req.stars > prev_stars:
        profile.level_stars[req.level_number] = req.stars

    if req.level_number >= profile.highest_unlocked_level and req.stars >= 1:
        profile.highest_unlocked_level = min(50, req.level_number + 1)

    coins_awarded = req.stars * 30
    profile.coins += coins_awarded
    profile.total_stars = sum(profile.level_stars.values())

    # Update leaderboard
    total_score = sum(profile.level_high_scores.values())
    rank = LeaderboardService.submit_player_score(
        profile.player_name,
        profile.total_stars,
        total_score,
        profile.highest_unlocked_level
    )

    return ScoreSubmissionResponse(
        success=True,
        verified=True,
        level_number=req.level_number,
        score=req.score,
        stars=req.stars,
        coins_awarded=coins_awarded,
        new_high_score=is_new_high,
        global_rank=rank,
        message="Level score successfully verified and saved."
    )

@router.get("/leaderboard", response_model=List[LeaderboardEntry])
async def get_leaderboard(limit: int = 10):
    return LeaderboardService.get_global_rankings(limit)

@router.get("/daily-quests", response_model=DailyQuestsResponse)
async def get_daily_quests():
    today_str = datetime.now().strftime("%Y-%m-%d")
    quests = [
        DailyQuest(
            quest_id="quest_1",
            title="Pizza Craving",
            description="Match and clear 40 Pizza slices across any levels.",
            target_count=40,
            reward_coins=75
        ),
        DailyQuest(
            quest_id="quest_2",
            title="Special Delivery",
            description="Create 5 Striped Foods or Wrapped Bombs.",
            target_count=5,
            reward_coins=100,
            reward_booster="spatula"
        ),
        DailyQuest(
            quest_id="quest_3",
            title="Three Star Master",
            description="Achieve 3 Stars on 2 different levels today.",
            target_count=2,
            reward_coins=150,
            reward_booster="rollingPin"
        )
    ]
    return DailyQuestsResponse(date=today_str, quests=quests)

@router.get("/recipes", response_model=List[RecipeData])
async def get_recipes():
    return [
        RecipeData(
            id="classic_margherita",
            name="Artisan Margherita Pizza",
            category="Italian",
            icon="🍕",
            required_stars=3,
            buff_description="+5% bonus score when clearing Pizza matches.",
            lore="Crafted with San Marzano tomatoes, buffalo mozzarella, and fresh basil leaves."
        ),
        RecipeData(
            id="supreme_truffle_burger",
            name="Wagyu Truffle Burger",
            category="Gourmet American",
            icon="🍔",
            required_stars=9,
            buff_description="+5% bonus score when clearing Burger matches.",
            lore="Seared prime Wagyu beef patty drizzled with black truffle aioli on a brioche bun."
        ),
        RecipeData(
            id="royal_glazed_donut",
            name="Royal Ruby Strawberry Donut",
            category="Bakery & Sweets",
            icon="🍩",
            required_stars=15,
            buff_description="+10% chance for 4-matches to spawn an extra Wrapped Bomb.",
            lore="Glazed with organic alpine strawberry nectar and sprinkled with edible gold flakes."
        )
    ]
