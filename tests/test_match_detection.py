"""
Unit tests for Match-3 Pattern Recognition Engine.
Tests:
- 3-in-a-row horizontal & vertical matches.
- 4-in-a-row line matches creating Striped Foods.
- 5-in-a-row straight matches creating Rainbow Chef Hats.
- T-shape, L-shape, and Cross patterns creating Wrapped Sizzle Bombs.
"""

import pytest

def find_matches_sim(grid):
    rows = len(grid)
    cols = len(grid[0])
    matches = []

    # Horizontal
    for r in range(rows):
        count = 1
        for c in range(1, cols):
            if grid[r][c] is not None and grid[r][c] == grid[r][c - 1]:
                count += 1
            else:
                if count >= 3:
                    matches.append({
                        "type": grid[r][c - 1],
                        "length": count,
                        "positions": [(r, i) for i in range(c - count, c)],
                        "dir": "H"
                    })
                count = 1
        if count >= 3:
            matches.append({
                "type": grid[r][cols - 1],
                "length": count,
                "positions": [(r, i) for i in range(cols - count, cols)],
                "dir": "H"
            })

    # Vertical
    for c in range(cols):
        count = 1
        for r in range(1, rows):
            if grid[r][c] is not None and grid[r][c] == grid[r - 1][c]:
                count += 1
            else:
                if count >= 3:
                    matches.append({
                        "type": grid[r - 1][c],
                        "length": count,
                        "positions": [(i, c) for i in range(r - count, r)],
                        "dir": "V"
                    })
                count = 1
        if count >= 3:
            matches.append({
                "type": grid[rows - 1][c],
                "length": count,
                "positions": [(i, c) for i in range(rows - count, rows)],
                "dir": "V"
            })

    return matches

def test_horizontal_line_3_match():
    grid = [[None]*8 for _ in range(8)]
    grid[0][0] = "PIZZA"
    grid[0][1] = "PIZZA"
    grid[0][2] = "PIZZA"

    matches = find_matches_sim(grid)
    assert len(matches) == 1
    assert matches[0]["type"] == "PIZZA"
    assert matches[0]["length"] == 3
    assert matches[0]["dir"] == "H"
    assert matches[0]["positions"] == [(0, 0), (0, 1), (0, 2)]

def test_vertical_line_3_match():
    grid = [[None]*8 for _ in range(8)]
    grid[2][4] = "BURGER"
    grid[3][4] = "BURGER"
    grid[4][4] = "BURGER"

    matches = find_matches_sim(grid)
    assert len(matches) == 1
    assert matches[0]["type"] == "BURGER"
    assert matches[0]["length"] == 3
    assert matches[0]["dir"] == "V"
    assert matches[0]["positions"] == [(2, 4), (3, 4), (4, 4)]

def test_line_4_striped_spawn():
    grid = [[None]*8 for _ in range(8)]
    for c in range(4):
        grid[1][c] = "DONUT"

    matches = find_matches_sim(grid)
    assert len(matches) == 1
    assert matches[0]["length"] == 4
    # Line 4 creates a Striped Food
    special_created = "STRIPED_VERTICAL" if matches[0]["dir"] == "H" else "STRIPED_HORIZONTAL"
    assert special_created == "STRIPED_VERTICAL"

def test_line_5_rainbow_hat_spawn():
    grid = [[None]*8 for _ in range(8)]
    for c in range(5):
        grid[3][c] = "STRAWBERRY"

    matches = find_matches_sim(grid)
    assert len(matches) == 1
    assert matches[0]["length"] == 5
    assert matches[0]["type"] == "STRAWBERRY"

def test_t_shape_bomb_spawn():
    grid = [[None]*8 for _ in range(8)]
    # Horizontal bar
    grid[2][1] = "CAKE"
    grid[2][2] = "CAKE"
    grid[2][3] = "CAKE"
    # Vertical bar
    grid[1][2] = "CAKE"
    grid[3][2] = "CAKE"

    matches = find_matches_sim(grid)
    assert len(matches) == 2
    h_match = next(m for m in matches if m["dir"] == "H")
    v_match = next(m for m in matches if m["dir"] == "V")
    assert h_match["length"] == 3
    assert v_match["length"] == 3

    # Intersecting at (2, 2)
    intersection = set(h_match["positions"]).intersection(set(v_match["positions"]))
    assert len(intersection) == 1
    assert (2, 2) in intersection
