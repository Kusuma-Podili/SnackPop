"""
Unit tests for Special-with-Special super combo mechanics.
Tests:
- Striped + Striped (Cross Beam clear)
- Striped + Bomb (Mega 3x3 beam)
- Rainbow Hat + Regular Food (Clears all target foods)
- Rainbow Hat + Rainbow Hat (Full board wipeout)
"""

import pytest

def resolve_special_combo_type(spec_a, spec_b):
    if spec_a == "RAINBOW" and spec_b == "RAINBOW":
        return "COSMIC_BOARD_WIPEOUT"
    if (spec_a == "RAINBOW" and "STRIPED" in spec_b) or (spec_b == "RAINBOW" and "STRIPED" in spec_a):
        return "RAINBOW_STRIPE_STORM"
    if (spec_a == "RAINBOW" and spec_b == "BOMB") or (spec_b == "RAINBOW" and spec_a == "BOMB"):
        return "RAINBOW_BOMB_SHOCKWAVE"
    if spec_a == "RAINBOW" or spec_b == "RAINBOW":
        return "FLAVOR_EXTRACTION"
    if "STRIPED" in spec_a and spec_b == "BOMB":
        return "MEGA_3X3_BLASTER"
    if spec_a == "BOMB" and "STRIPED" in spec_b:
        return "MEGA_3X3_BLASTER"
    if "STRIPED" in spec_a and "STRIPED" in spec_b:
        return "CROSS_LASER_SLICE"
    if spec_a == "BOMB" and spec_b == "BOMB":
        return "BIG_BANG_BOMB"
    return "NONE"

def test_striped_striped_cross_clear():
    combo = resolve_special_combo_type("STRIPED_H", "STRIPED_V")
    assert combo == "CROSS_LASER_SLICE"

def test_striped_bomb_mega_blaster():
    combo = resolve_special_combo_type("STRIPED_H", "BOMB")
    assert combo == "MEGA_3X3_BLASTER"

def test_rainbow_rainbow_board_wipeout():
    combo = resolve_special_combo_type("RAINBOW", "RAINBOW")
    assert combo == "COSMIC_BOARD_WIPEOUT"

def test_rainbow_striped_storm():
    combo = resolve_special_combo_type("RAINBOW", "STRIPED_V")
    assert combo == "RAINBOW_STRIPE_STORM"

def test_rainbow_regular_food_clear():
    combo = resolve_special_combo_type("RAINBOW", "NONE")
    assert combo == "FLAVOR_EXTRACTION"
