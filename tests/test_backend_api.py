"""
Integration tests for SnackPop FastAPI backend API.
Tests:
- /api/v1/health
- /api/v1/profile/{player_id}
- /api/v1/levels/submit (with anti-cheat verification)
- /api/v1/leaderboard
- /api/v1/daily-quests
- /api/v1/recipes
"""

import pytest

def test_health_check(client):
    response = client.get("/api/v1/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "healthy"
    assert "SnackPop" in data["game"]

def test_get_profile(client):
    response = client.get("/api/v1/profile/player_test_123")
    assert response.status_code == 200
    data = response.json()
    assert data["player_id"] == "player_test_123"
    assert data["coins"] >= 300
    assert data["highest_unlocked_level"] >= 1

def test_submit_valid_level_score(client):
    payload = {
        "player_id": "player_test_123",
        "level_number": 1,
        "score": 12500,
        "stars": 3,
        "moves_used": 12,
        "moves_remaining": 8,
        "cascades_count": 5
    }
    response = client.post("/api/v1/levels/submit", json=payload)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert data["verified"] is True
    assert data["stars"] == 3
    assert data["coins_awarded"] == 90

def test_submit_invalid_cheated_score(client):
    payload = {
        "player_id": "cheater_999",
        "level_number": 1,
        "score": 99999999,  # Impossibly high score for 1 move
        "stars": 3,
        "moves_used": 1,
        "moves_remaining": 19,
        "cascades_count": 1
    }
    response = client.post("/api/v1/levels/submit", json=payload)
    assert response.status_code == 400

def test_get_leaderboard(client):
    response = client.get("/api/v1/leaderboard?limit=5")
    assert response.status_code == 200
    data = response.json()
    assert len(data) <= 5
    assert data[0]["rank"] == 1
    assert data[0]["total_score"] >= data[1]["total_score"]

def test_get_daily_quests(client):
    response = client.get("/api/v1/daily-quests")
    assert response.status_code == 200
    data = response.json()
    assert len(data["quests"]) >= 3

def test_get_recipes(client):
    response = client.get("/api/v1/recipes")
    assert response.status_code == 200
    data = response.json()
    assert len(data) >= 3
    assert any(r["icon"] == "🍕" for r in data)
