"""
Automated unit and integration tests for Admin Management, RBAC Enforcement, and Game Balance Config.
"""
from backend.app.models import User, PlayerProfile, FoodItem, GameSetting

def get_admin_token(client):
    res = client.post("/api/auth/login", json={"username_or_email": "admin", "password": "AdminSecret2026!"})
    return res.json()["access_token"]

def get_player_token(client):
    res = client.post("/api/auth/login", json={"username_or_email": "chef_mario", "password": "PlayerSecret123!"})
    return res.json()["access_token"]

def test_admin_global_stats(client):
    token = get_admin_token(client)
    res = client.get("/api/admin/stats", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    data = res.json()
    assert data["total_players"] >= 1
    assert data["total_recipes_catalog"] >= 5

def test_admin_player_adjustment(client, db_session):
    token = get_admin_token(client)
    # 1. Get players
    list_res = client.get("/api/admin/players", headers={"Authorization": f"Bearer {token}"})
    assert list_res.status_code == 200
    players = list_res.json()
    mario = next(p for p in players if p["username"] == "chef_mario")

    # 2. Adjust coins & level
    adj_res = client.post(f"/api/admin/players/{mario['id']}/adjust", headers={"Authorization": f"Bearer {token}"}, json={
        "coins_delta": 5000,
        "level_set": 10
    })
    assert adj_res.status_code == 200
    data = adj_res.json()
    assert data["success"] is True
    assert data["level"] == 10

    # Verify in DB
    profile = db_session.query(PlayerProfile).filter_by(id=mario["id"]).first()
    assert profile.level == 10

def test_admin_create_food_recipe(client):
    token = get_admin_token(client)
    res = client.post("/api/admin/foods", headers={"Authorization": f"Bearer {token}"}, json={
        "name": "Truffle Gold Burger",
        "category": "Burgers",
        "description": "Gourmet truffle infused burger with gold leaf.",
        "selling_price": 150,
        "base_prep_time": 6.0,
        "cook_station": "GRILL",
        "difficulty": "HARD",
        "required_level": 5,
        "popularity_score": 2.5,
        "icon": "🍔",
        "ingredients": [
            {"ingredient_id": 1, "quantity": 1}
        ]
    })
    assert res.status_code == 200
    assert res.json()["success"] is True

def test_admin_update_game_settings(client):
    token = get_admin_token(client)
    res = client.put("/api/admin/settings", headers={"Authorization": f"Bearer {token}"}, json={
        "key": "BASE_PATIENCE_SECONDS",
        "value": "45.0"
    })
    assert res.status_code == 200
    assert res.json()["success"] is True

def test_player_forbidden_from_admin_endpoints(client):
    """Ensure players CANNOT access any admin endpoints (403 Forbidden)."""
    player_token = get_player_token(client)
    
    # Try stats
    stats_res = client.get("/api/admin/stats", headers={"Authorization": f"Bearer {player_token}"})
    assert stats_res.status_code == 403
    assert "admin privileges required" in stats_res.json()["detail"].lower()

    # Try player adjust
    adj_res = client.post("/api/admin/players/1/adjust", headers={"Authorization": f"Bearer {player_token}"}, json={"coins_delta": 9999})
    assert adj_res.status_code == 403

    # Try settings
    set_res = client.put("/api/admin/settings", headers={"Authorization": f"Bearer {player_token}"}, json={"key": "test", "value": "1"})
    assert set_res.status_code == 403
