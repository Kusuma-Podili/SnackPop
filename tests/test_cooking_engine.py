"""
Automated unit and integration tests for Order Spawning, Inventory Deductions, and Cooking Mechanics.
"""
from backend.app.models import Order, OrderItem, PlayerProfile, PlayerInventory, Ingredient

def get_auth_token(client, username="chef_mario", password="PlayerSecret123!"):
    res = client.post("/api/auth/login", json={"username_or_email": username, "password": password})
    return res.json()["access_token"]

def test_spawn_customer_order(client):
    token = get_auth_token(client)
    res = client.post("/api/orders/spawn", headers={"Authorization": f"Bearer {token}"})
    assert res.status_code == 200
    data = res.json()
    assert "id" in data
    assert len(data["items"]) >= 1
    assert data["status"] == "PENDING"
    assert data["customer_name"] is not None

def test_start_cooking_deducts_ingredients(client, db_session):
    token = get_auth_token(client)
    # 1. Spawn order
    spawn_res = client.post("/api/orders/spawn", headers={"Authorization": f"Bearer {token}"})
    order_data = spawn_res.json()
    order_id = order_data["id"]
    item_id = order_data["items"][0]["id"]

    # 2. Start cooking
    cook_res = client.post("/api/cooking/start", headers={"Authorization": f"Bearer {token}"}, json={
        "order_id": order_id,
        "item_id": item_id
    })
    assert cook_res.status_code == 200
    assert cook_res.json()["success"] is True

def test_start_cooking_missing_ingredients_fails(client, db_session):
    token = get_auth_token(client)
    # Wipe inventory
    profile = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first()
    db_session.query(PlayerInventory).filter_by(player_id=profile.id).delete()
    db_session.commit()

    spawn_res = client.post("/api/orders/spawn", headers={"Authorization": f"Bearer {token}"})
    order_data = spawn_res.json()

    cook_res = client.post("/api/cooking/start", headers={"Authorization": f"Bearer {token}"}, json={
        "order_id": order_data["id"],
        "item_id": order_data["items"][0]["id"]
    })
    assert cook_res.status_code == 400
    assert "missing required ingredients" in cook_res.json()["detail"].lower()

def test_cooking_quality_evaluation_and_serving(client, db_session):
    token = get_auth_token(client)
    # 1. Spawn
    spawn_res = client.post("/api/orders/spawn", headers={"Authorization": f"Bearer {token}"})
    order_data = spawn_res.json()
    order_id = order_data["id"]

    # 2. Cook all items with 0.95 accuracy (PERFECT)
    for item in order_data["items"]:
        client.post("/api/cooking/start", headers={"Authorization": f"Bearer {token}"}, json={
            "order_id": order_id,
            "item_id": item["id"]
        })
        finish_res = client.post("/api/cooking/finish", headers={"Authorization": f"Bearer {token}"}, json={
            "order_id": order_id,
            "item_id": item["id"],
            "timing_accuracy": 0.95
        })
        assert finish_res.status_code == 200
        assert finish_res.json()["quality"] == "PERFECT"

    # 3. Serve order
    initial_coins = db_session.query(PlayerProfile).filter_by(name="Chef Mario").first().coins
    serve_res = client.post("/api/cooking/serve", headers={"Authorization": f"Bearer {token}"}, json={
        "order_id": order_id
    })
    assert serve_res.status_code == 200
    serve_data = serve_res.json()
    assert serve_data["success"] is True
    assert serve_data["result"]["overall_quality"] == "PERFECT"
    assert serve_data["result"]["tip_amount"] > 0
    assert serve_data["result"]["current_coins"] > initial_coins
