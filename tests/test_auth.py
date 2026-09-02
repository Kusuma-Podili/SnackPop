"""
Automated unit and integration tests for Authentication and RBAC.
"""
from backend.app.models.player import PlayerProfile
from backend.app.models.truck import FoodTruck
from backend.app.models.ingredient import PlayerInventory

def test_user_registration_creates_profile_and_truck(client, db_session):
    """Test player registration initializes player profile, food truck, and inventory."""
    payload = {
        "username": "gourmet_sam",
        "email": "sam@foodtrucktycoon.com",
        "password": "SuperSecretPassword123!",
        "role": "PLAYER"
    }
    response = client.post("/api/auth/register", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert "access_token" in data
    assert data["role"] == "PLAYER"
    assert data["username"] == "gourmet_sam"
    assert data["player_id"] is not None

    # Check database state
    db_session.expire_all()
    profile = db_session.query(PlayerProfile).filter_by(id=data["player_id"]).first()
    assert profile is not None
    assert profile.coins == 500
    assert profile.level == 1

    truck = db_session.query(FoodTruck).filter_by(player_id=profile.id).first()
    assert truck is not None
    assert truck.tier_level == 1

    # Check starter inventory items
    inventory_count = db_session.query(PlayerInventory).filter_by(player_id=profile.id).count()
    assert inventory_count > 0

def test_duplicate_registration_rejected(client):
    """Test duplicate usernames and emails return 400."""
    payload = {
        "username": "chef_mario", # already in seed
        "email": "unique_email@test.com",
        "password": "Password123!"
    }
    response = client.post("/api/auth/register", json=payload)
    assert response.status_code == 400
    assert "username already exists" in response.json()["detail"].lower()

def test_login_success(client):
    """Test valid credentials return valid JWT token."""
    response = client.post("/api/auth/login", json={
        "username_or_email": "chef_mario",
        "password": "PlayerSecret123!"
    })
    assert response.status_code == 200
    data = response.json()
    assert "access_token" in data
    assert data["role"] == "PLAYER"
    assert data["username"] == "chef_mario"

def test_login_invalid_password(client):
    """Test invalid credentials return 401."""
    response = client.post("/api/auth/login", json={
        "username_or_email": "chef_mario",
        "password": "WrongPasswordHere"
    })
    assert response.status_code == 401
    assert "incorrect" in response.json()["detail"].lower()

def test_admin_login(client):
    """Test seeded admin account can log in with ADMIN role."""
    response = client.post("/api/auth/login", json={
        "username_or_email": "admin",
        "password": "AdminSecret2026!"
    })
    assert response.status_code == 200
    data = response.json()
    assert data["role"] == "ADMIN"

def test_auth_me_endpoint(client):
    """Test /api/auth/me returns authenticated user details with token."""
    # 1. Login
    login_res = client.post("/api/auth/login", json={
        "username_or_email": "chef_mario",
        "password": "PlayerSecret123!"
    })
    token = login_res.json()["access_token"]

    # 2. Query /auth/me
    me_res = client.get("/api/auth/me", headers={"Authorization": f"Bearer {token}"})
    assert me_res.status_code == 200
    data = me_res.json()
    assert data["username"] == "chef_mario"
    assert data["player_profile"] is not None
    assert data["player_profile"]["coins"] == 650
