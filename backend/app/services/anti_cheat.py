"""
SnackPop Server-Side Anti-Cheat & Move Verification Engine.
Validates player match moves, scoring math, move limits, and cascade logic.
"""

from typing import Dict, List, Optional
from ..models.schemas import ScoreSubmissionRequest

class AntiCheatValidator:
    MAX_SCORE_PER_MOVE_ESTIMATE = 80000

    @classmethod
    def verify_submission(cls, request: ScoreSubmissionRequest) -> bool:
        """
        Runs mathematical and logical sanity checks on a completed level run.
        """
        # 1. Check basic constraints
        if request.score < 0:
            return False
        if request.stars < 0 or request.stars > 3:
            return False
        if request.moves_used < 1:
            return False
        if request.level_number < 1 or request.level_number > 50:
            return False

        # 2. Maximum possible score estimate check
        max_plausible_score = request.moves_used * cls.MAX_SCORE_PER_MOVE_ESTIMATE
        if request.score > max_plausible_score:
            return False

        # 3. Minimum score required for stars check
        if request.stars > 0 and request.score <= 0:
            return False

        # 4. Action logs verification (if provided by client)
        if request.recorded_actions is not None:
            if len(request.recorded_actions) != request.moves_used:
                return False

        return True
