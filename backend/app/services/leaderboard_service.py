"""
Leaderboard management service for SnackPop.
Maintains global, regional, and level-specific high score rankings.
"""

from typing import List, Dict
from ..models.schemas import LeaderboardEntry

class LeaderboardService:
    # In-memory storage seeded with high-ranking culinary masters
    _global_leaderboard: List[Dict] = [
        {"player_name": "GordonRamsay_AI", "total_stars": 150, "total_score": 8940000, "highest_level": 50},
        {"player_name": "Chef_Auguste", "total_stars": 146, "total_score": 7820000, "highest_level": 49},
        {"player_name": "Pastry_Queen", "total_stars": 142, "total_score": 7100000, "highest_level": 48},
        {"player_name": "PizzaNinja99", "total_stars": 138, "total_score": 6450000, "highest_level": 46},
        {"player_name": "BurgerBaron", "total_stars": 132, "total_score": 5890000, "highest_level": 45},
        {"player_name": "SushiSensei", "total_stars": 125, "total_score": 5210000, "highest_level": 42},
        {"player_name": "DonutDreamer", "total_stars": 118, "total_score": 4670000, "highest_level": 40},
        {"player_name": "TacoTitan", "total_stars": 105, "total_score": 3980000, "highest_level": 35},
        {"player_name": "BerryBlaster", "total_stars": 92, "total_score": 3240000, "highest_level": 31},
        {"player_name": "FryFanatic", "total_stars": 80, "total_score": 2650000, "highest_level": 27}
    ]

    @classmethod
    def get_global_rankings(cls, limit: int = 10) -> List[LeaderboardEntry]:
        sorted_list = sorted(cls._global_leaderboard, key=lambda x: x["total_score"], reverse=True)
        return [
            LeaderboardEntry(
                rank=i + 1,
                player_name=entry["player_name"],
                total_stars=entry["total_stars"],
                total_score=entry["total_score"],
                highest_level=entry["highest_level"]
            )
            for i, entry in enumerate(sorted_list[:limit])
        ]

    @classmethod
    def submit_player_score(cls, player_name: str, total_stars: int, total_score: int, highest_level: int) -> int:
        existing = next((item for item in cls._global_leaderboard if item["player_name"] == player_name), None)
        if existing:
            existing["total_stars"] = max(existing["total_stars"], total_stars)
            existing["total_score"] = max(existing["total_score"], total_score)
            existing["highest_level"] = max(existing["highest_level"], highest_level)
        else:
            cls._global_leaderboard.append({
                "player_name": player_name,
                "total_stars": total_stars,
                "total_score": total_score,
                "highest_level": highest_level
            })

        sorted_list = sorted(cls._global_leaderboard, key=lambda x: x["total_score"], reverse=True)
        for i, entry in enumerate(sorted_list):
            if entry["player_name"] == player_name:
                return i + 1
        return len(sorted_list)
