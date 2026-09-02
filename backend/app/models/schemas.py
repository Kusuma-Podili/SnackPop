"""
Pydantic schemas and data models for SnackPop backend API.
"""

from typing import Dict, List, Optional
from pydantic import BaseModel, Field

class PlayerProfile(BaseModel):
    player_id: str
    player_name: str
    coins: int = 300
    highest_unlocked_level: int = 1
    total_stars: int = 0
    level_stars: Dict[int, int] = Field(default_factory=dict)
    level_high_scores: Dict[int, int] = Field(default_factory=dict)
    unlocked_recipes: List[str] = Field(default_factory=list)
    boosters: Dict[str, int] = Field(default_factory=lambda: {
        "spatula": 3,
        "rollingPin": 2,
        "blender": 2,
        "extraMoves": 2,
        "startFlavorBomb": 1
    })

class ScoreSubmissionRequest(BaseModel):
    player_id: str
    level_number: int
    score: int
    stars: int
    moves_used: int
    moves_remaining: int
    cascades_count: int
    recorded_actions: Optional[List[Dict]] = None

class ScoreSubmissionResponse(BaseModel):
    success: bool
    verified: bool
    level_number: int
    score: int
    stars: int
    coins_awarded: int
    new_high_score: bool
    global_rank: Optional[int] = None
    message: str

class LeaderboardEntry(BaseModel):
    rank: int
    player_name: str
    total_stars: int
    total_score: int
    highest_level: int

class DailyQuest(BaseModel):
    quest_id: str
    title: str
    description: str
    target_count: int
    current_count: int = 0
    reward_coins: int
    reward_booster: Optional[str] = None
    is_completed: bool = False
    is_claimed: bool = False

class DailyQuestsResponse(BaseModel):
    date: str
    quests: List[DailyQuest]

class RecipeData(BaseModel):
    id: str
    name: str
    category: str
    icon: str
    required_stars: int
    buff_description: str
    lore: str
