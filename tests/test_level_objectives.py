"""
Unit tests for Level Objectives and Win/Loss evaluation.
"""

import pytest

def evaluate_level_state(objective_type, current_score, target_score, moves_remaining, frostings_remaining, ingredients_remaining):
    stars = 0
    if current_score >= target_score * 2.5:
        stars = 3
    elif current_score >= target_score * 1.5:
        stars = 2
    elif current_score >= target_score:
        stars = 1

    is_won = False
    if objective_type == "TARGET_SCORE":
        is_won = current_score >= target_score
    elif objective_type == "CLEAR_FROSTING":
        is_won = frostings_remaining == 0 and stars >= 1
    elif objective_type == "COLLECT_INGREDIENTS":
        is_won = ingredients_remaining == 0 and stars >= 1

    is_lost = not is_won and moves_remaining <= 0

    return {
        "is_won": is_won,
        "is_lost": is_lost,
        "stars": stars
    }

def test_target_score_win():
    state = evaluate_level_state(
        objective_type="TARGET_SCORE",
        current_score=15000,
        target_score=10000,
        moves_remaining=5,
        frostings_remaining=0,
        ingredients_remaining=0
    )
    assert state["is_won"] is True
    assert state["is_lost"] is False
    assert state["stars"] >= 1

def test_target_score_loss_out_of_moves():
    state = evaluate_level_state(
        objective_type="TARGET_SCORE",
        current_score=8500,
        target_score=10000,
        moves_remaining=0,
        frostings_remaining=0,
        ingredients_remaining=0
    )
    assert state["is_won"] is False
    assert state["is_lost"] is True
    assert state["stars"] == 0

def test_frosting_clearance_win():
    state = evaluate_level_state(
        objective_type="CLEAR_FROSTING",
        current_score=12000,
        target_score=10000,
        moves_remaining=8,
        frostings_remaining=0,
        ingredients_remaining=0
    )
    assert state["is_won"] is True
    assert state["is_lost"] is False

def test_frosting_clearance_unmet_frostings():
    state = evaluate_level_state(
        objective_type="CLEAR_FROSTING",
        current_score=15000,
        target_score=10000,
        moves_remaining=5,
        frostings_remaining=2,
        ingredients_remaining=0
    )
    assert state["is_won"] is False
    assert state["is_lost"] is False
