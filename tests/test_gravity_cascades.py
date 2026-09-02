"""
Integration tests for Gravity Engine, cascade scoring, and hole avoidance.
"""

import pytest

def simulate_gravity_column(column, fill_value="RANDOM"):
    """
    Simulates falling down a single column.
    None represents empty slot.
    'HOLE' represents inactive hole.
    """
    length = len(column)
    new_col = list(column)

    # Fall down
    for r in range(length - 1, -1, -1):
        if new_col[r] == "HOLE":
            continue
        if new_col[r] is None:
            # find above
            for above in range(r - 1, -1, -1):
                if new_col[above] == "HOLE":
                    continue
                if new_col[above] is not None:
                    new_col[r] = new_col[above]
                    new_col[above] = None
                    break

    # Fill empty from top
    for r in range(length):
        if new_col[r] is None:
            new_col[r] = fill_value

    return new_col

def calculate_cascade_points(cleared_count, cascade_step):
    multipliers = {1: 1.0, 2: 1.5, 3: 2.0, 4: 3.0, 5: 4.0}
    mult = multipliers.get(cascade_step, 5.0)
    return round(cleared_count * 60 * mult)

def test_gravity_simple_drop():
    col = ["PIZZA", None, None, "BURGER"]
    result = simulate_gravity_column(col, fill_value="NEW_FOOD")
    assert result[3] == "BURGER"
    assert result[2] == "PIZZA"
    assert result[1] == "NEW_FOOD"
    assert result[0] == "NEW_FOOD"

def test_gravity_with_hole():
    col = ["DONUT", "HOLE", None, "STRAWBERRY"]
    result = simulate_gravity_column(col, fill_value="NEW_FOOD")
    assert result[3] == "STRAWBERRY"
    assert result[2] == "DONUT"
    assert result[1] == "HOLE"
    assert result[0] == "NEW_FOOD"

def test_cascade_score_progression():
    step1_pts = calculate_cascade_points(3, 1)
    step2_pts = calculate_cascade_points(3, 2)
    step3_pts = calculate_cascade_points(3, 3)
    step4_pts = calculate_cascade_points(3, 4)

    assert step1_pts == 180  # 3 * 60 * 1.0
    assert step2_pts == 270  # 3 * 60 * 1.5 (Sweet!)
    assert step3_pts == 360  # 3 * 60 * 2.0 (Tasty!)
    assert step4_pts == 540  # 3 * 60 * 3.0 (Delicious!)
    assert step4_pts > step3_pts > step2_pts > step1_pts
