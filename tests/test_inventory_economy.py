"""
Automated unit and integration tests for Inventory, Economy, Truck Upgrades, and Daily Rewards.
"""
from backend.app.models import Ingredient, PlayerProfile, FoodTruck, PlayerInventory

def get_auth_token(client, username="chef_mario", password="PlayerSecret123!"):
    res = client.post("/api/auth/login", json={"username_or_email": username, "password": password})
    return res.json()["access_token"]

def test_get_inventory(client):
    token = get_auth_token(client)
    res = client.get("/api/inventory", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    items = res.json()
    assert len(items) > 0
    # Burger Bun should be in inventory
    buns = [i for i in items if i["ingredient_name"] == "Burger Bun"]
    assert len(buns) == 1
    assert buns[0]["quantity"] == 4

def test_buy_ingredient_success(client, db_session):
    token = get_auth_token(client)
    # Get tomato ingredient
    tomato = db_session.query(Ingredient).filter_by(name="Tomato").first()
    assert tomato is not None

    res = client.post("/api/inventory/buy", headers={"Authorization": f"Bearer {token}"}, json={
        "ingredient_id": tomato.id,
        "quantity": 5
    })
    assert res.status_code == 200
    data = res.json()
    assert data["success"] is True
    assert data["total_cost"] == tomato.unit_cost * 5

    # Check updated coins
    profile_res = client.get("/api/player/profile", headers={"Authorization": f"Bearer {token}"})
    assert profile_res.json()["coins"] == 650 - (tomato.unit_cost * 5)

def test_buy_ingredient_insufficient_coins(client, db_session):
    token = get_auth_token(client)
    # Drain coins
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.coins = 2
    db_session.commit()

    tomato = db_session.query(Ingredient).filter_by(name="Tomato").first()
    res = client.post("/api/inventory/buy", headers={"Authorization": f"Bearer {token}"}, json={
        "ingredient_id": tomato.id,
        "quantity": 10
    })
    assert res.status_code == 400
    assert "insufficient coins" in res.json()["detail"].lower()

def test_buy_ingredient_storage_limit_exceeded(client, db_session):
    token = get_auth_token(client)
    # Set truck capacity to 20
    truck = db_session.query(FoodTruck).first()
    truck.storage_capacity = 20
    db_session.commit()

    tomato = db_session.query(Ingredient).filter_by(name="Tomato").first()
    res = client.post("/api/inventory/buy", headers={"Authorization": f"Bearer {token}"}, json={
        "ingredient_id": tomato.id,
        "quantity": 100
    })
    assert res.status_code == 400
    assert "storage limit exceeded" in res.json()["detail"].lower()

def test_truck_tier_upgrade(client, db_session):
    token = get_auth_token(client)
    # Give player level 2 and 2000 coins
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.level = 2
    profile.coins = 2000
    db_session.commit()

    res = client.post("/api/truck/upgrade", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    truck_data = res.json()
    assert truck_data["tier_level"] == 2
    assert truck_data["storage_capacity"] >= 80

def test_equipment_upgrade(client, db_session):
    token = get_auth_token(client)
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    profile.level = 3
    profile.coins = 1500
    db_session.commit()

    res = client.post("/api/truck/equipment/upgrade", headers={"Authorization": f"Bearer {token}"}, json={
        "equipment_type": "GRILL",
        "target_tier": 2
    })
    assert res.status_code == 200
    truck_data = res.json()
    assert truck_data["grill_tier"] == 2

def test_daily_rewards_flow(client, db_session):
    token = get_auth_token(client)
    # Check status
    status_res = client.get("/api/rewards/daily/status", headers={"Authorization": f"Bearer {token}"})
    assert status_res.status_code == 200
    assert "daily_streak" in status_res.json()

    # Claim reward
    claim_res = client.post("/api/rewards/daily/claim", headers={"Authorization": f"Bearer {token}"})
    assert claim_res.status_code == 200
    assert claim_res.json()["success"] is True

    # Claim second time on same day -> Should fail
    dup_res = client.post("/api/rewards/daily/claim", headers={"Authorization": f"Bearer {token}"})
    assert dup_res.status_code == 400
    assert "already claimed" in dup_res.json()["detail"].lower()
