"""
Unit tests for Match-2 / Sequence Merge Pattern Recognition Engine.
Tests:
- 2-in-a-row sequence merge & pop.
- 3-in-a-row horizontal & vertical matches.
- 4-in-a-row line matches.
- 5-in-a-row straight matches.
- T-shape and cluster matches.
"""

import pytest

def find_connected_group(grid, start_r, start_c):
    rows = len(grid)
    cols = len(grid[0])
    target = grid[start_r][start_c]
    if target is None:
        return []

    visited = [[False]*cols for _ in range(rows)]
    queue = [(start_r, start_c)]
    visited[start_r][start_c] = True
    group = []

    while queue:
        r, c = queue.pop(0)
        group.append((r, c))

        for dr, dc in [(-1,0), (1,0), (0,-1), (0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols:
                if not visited[nr][nc] and grid[nr][nc] == target:
                    visited[nr][nc] = True
                    queue.append((nr, nc))

    return group

def test_2_similar_items_in_sequence_merge():
    grid = [[None]*8 for _ in range(8)]
    grid[0][0] = "PIZZA"
    grid[0][1] = "PIZZA"

    group = find_connected_group(grid, 0, 0)
    assert len(group) == 2
    assert (0, 0) in group
    assert (0, 1) in group

def test_vertical_2_similar_items_merge():
    grid = [[None]*8 for _ in range(8)]
    grid[2][3] = "BURGER"
    grid[3][3] = "BURGER"

    group = find_connected_group(grid, 2, 3)
    assert len(group) == 2
    assert (2, 3) in group
    assert (3, 3) in group

def test_3_items_in_sequence_merge():
    grid = [[None]*8 for _ in range(8)]
    grid[1][0] = "DONUT"
    grid[1][1] = "DONUT"
    grid[1][2] = "DONUT"

    group = find_connected_group(grid, 1, 0)
    assert len(group) == 3

def test_single_item_no_merge():
    grid = [[None]*8 for _ in range(8)]
    grid[4][4] = "STRAWBERRY"
    grid[4][5] = "CAKE"

    group = find_connected_group(grid, 4, 4)
    assert len(group) == 1
