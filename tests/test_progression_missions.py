"""
Automated unit and integration tests for Locations, Missions, Achievements, Leaderboard, and Business Analytics.
"""
from backend.app.models import Location, PlayerProfile, PlayerLocation, Mission, Achievement

def get_auth_token(client, username="chef_mario", password="PlayerSecret123!"):
    res = client.post("/api/auth/login", json={"username_or_email": username, "password": password})
    return res.json()["access_token"]

def test_locations_list_and_unlock(client, db_session):
    token = get_auth_token(client)
    # 1. Get locations
    res = client.get("/api/locations", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    locations = res.json()
    assert len(locations) >= 6

    # City Street unlocked
    city = next(l for l in locations if l["name"] == "City Street")
    assert city["is_unlocked"] is True
    assert city["is_current"] is True

    # Beach Boardwalk locked
    beach = next(l for l in locations if l["name"] == "Beach Boardwalk")
    assert beach["is_unlocked"] is False

    # 2. Give player level 2 and 1500 coins to unlock Beach
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.level = 2
    profile.coins = 1500
    db_session.commit()

    unlock_res = client.post(f"/api/locations/{beach['id']}/unlock", headers={"Authorization": f"Bearer {token}"})
    assert unlock_res.status_code == 200
    assert unlock_res.json()["success"] is True

    # Check updated location
    profile_res = client.get("/api/player/profile", headers={"Authorization": f"Bearer {token}"})
    assert profile_res.json()["current_location_id"] == beach["id"]

def test_food_catalog_and_profit_margins(client):
    token = get_auth_token(client)
    res = client.get("/api/foods", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    foods = res.json()
    assert len(foods) >= 5

    # Check Burger has profit margin
    burger = next(f for f in foods if "burger" in f["name"].lower())
    assert burger["profit_margin"] > 0
    assert len(burger["ingredients"]) > 0

def test_missions_progress_and_claim(client, db_session):
    token = get_auth_token(client)
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.orders_completed = 3 # Meets First Steps Chef (target 3)
    db_session.commit()

    # 1. Get missions
    res = client.get("/api/missions", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    missions = res.json()
    first_step = next(m for m in missions if m["title"] == "First Steps Chef")
    assert first_step["is_completed"] is True
    assert first_step["is_claimed"] is False

    # 2. Claim reward
    claim_res = client.post(f"/api/missions/{first_step['id']}/claim", headers={"Authorization": f"Bearer {token}"})
    assert claim_res.status_code == 200
    assert claim_res.json()["success"] is True

def test_achievements_auto_unlock(client, db_session):
    token = get_auth_token(client)
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.orders_completed = 1 # Meets First Order
    db_session.commit()

    res = client.get("/api/achievements", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    achs = res.json()
    first_order = next(a for a in achs if a["code"] == "FIRST_ORDER")
    assert first_order["is_unlocked"] is True

def test_leaderboard_and_analytics(client):
    token = get_auth_token(client)
    # Leaderboard
    lb_res = client.get("/api/leaderboard?metric=revenue", headers={"Authorization": f"Bearer {token}"})
    assert lb_res.status_code == 200
    ranks = lb_res.json()
    assert len(ranks) >= 1
    assert any(r["is_current_player"] for r in ranks)

    # Analytics
    an_res = client.get("/api/analytics/business", headers={"Authorization": f"Bearer {token}"})
    assert an_res.status_code == 200
    an_data = an_res.json()
    assert "total_revenue" in an_data
    assert "net_profit" in an_data
    assert "average_customer_rating" in an_data
