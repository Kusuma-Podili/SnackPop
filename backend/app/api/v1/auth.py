"""
Authentication API Endpoints: Register, Login, Session Check.
"""
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from backend.app.api.deps import get_db, get_current_user
from backend.app.core.security import get_password_hash, verify_password, create_access_token
from backend.app.models import (
    User, UserRole, PlayerProfile, FoodTruck, Location, PlayerLocation,
    Ingredient, PlayerInventory
)
from backend.app.schemas.auth import UserRegister, UserLogin, TokenResponse, UserOut

router = APIRouter(prefix="/auth", tags=["Authentication"])

@router.post("/register", response_model=TokenResponse, status_code=status.HTTP_201_CREATED)
def register_user(user_in: UserRegister, db: Session = Depends(get_db)):
    """Register a new user account with starter food truck setup for players."""
    # Check if username or email already exists
    if db.query(User).filter(User.username == user_in.username).first():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A user with this username already exists."
        )
    if db.query(User).filter(User.email == user_in.email).first():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="A user with this email address already exists."
        )

    # Validate role
    role = UserRole.PLAYER.value
    if user_in.role and user_in.role.upper() == UserRole.ADMIN.value:
        role = UserRole.ADMIN.value

    # Create User
    new_user = User(
        username=user_in.username.strip(),
        email=user_in.email.strip().lower(),
        hashed_password=get_password_hash(user_in.password),
        role=role,
        is_active=1
    )
    db.add(new_user)
    db.flush()

    player_id = None

    # If player, initialize starter game profile, food truck, city street location, and starter ingredients
    if role == UserRole.PLAYER.value:
        # 1. City street location
        city_loc = db.query(Location).filter(Location.name == "City Street").first()
        loc_id = city_loc.id if city_loc else None

        # 2. Player Profile
        profile = PlayerProfile(
            user_id=new_user.id,
            name=user_in.username.capitalize(),
            avatar="chef-1",
            level=1,
            xp=0,
            xp_to_next_level=100,
            coins=500,
            reputation=4.0,
            current_location_id=loc_id,
            total_revenue=0,
            total_expenses=0,
            orders_completed=0,
            customers_served=0,
            perfect_cooks=0,
            burned_cooks=0,
            daily_streak=0
        )
        db.add(profile)
        db.flush()
        player_id = profile.id

        # 3. Starter Food Truck
        starter_truck = FoodTruck(
            player_id=profile.id,
            name=f"{user_in.username.capitalize()}'s Food Express",
            tier_level=1,
            color="#FF6B6B",
            signboard_text="FRESH & TASTY",
            signboard_style="neon-amber",
            decal="flames",
            wheels="standard-chrome",
            grill_tier=1,
            fryer_tier=1,
            fridge_tier=1,
            prep_table_tier=1,
            storage_capacity=50,
            cooking_speed_multiplier=1.0,
            customer_capacity=3
        )
        db.add(starter_truck)

        # 4. Unlock City Street location
        if loc_id:
            db.add(PlayerLocation(player_id=profile.id, location_id=loc_id))

        # 5. Starter Ingredients Kit
        starter_kit = [
            ("Burger Bun", 8),
            ("Beef Patty", 8),
            ("Cheddar Cheese", 8),
            ("Lettuce", 8),
            ("Tomato", 8),
            ("Secret Burger Sauce", 6),
            ("Potato", 10),
            ("Frying Oil", 4),
            ("Lemon", 8),
            ("Sugar Syrup", 4),
        ]
        for ing_name, qty in starter_kit:
            ing_item = db.query(Ingredient).filter(Ingredient.name == ing_name).first()
            if ing_item:
                db.add(PlayerInventory(
                    player_id=profile.id,
                    ingredient_id=ing_item.id,
                    quantity=qty
                ))

    db.commit()

    token = create_access_token(subject=new_user.id, role=new_user.role)
    return TokenResponse(
        access_token=token,
        token_type="bearer",
        role=new_user.role,
        user_id=new_user.id,
        username=new_user.username,
        player_id=player_id
    )

@router.post("/login", response_model=TokenResponse)
def login_user(creds: UserLogin, db: Session = Depends(get_db)):
    """Authenticate user credentials and return access token."""
    login_id = creds.username_or_email.strip()
    user = db.query(User).filter(
        (User.username == login_id) | (User.email == login_id.lower())
    ).first()

    if not user or not verify_password(creds.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username/email or password."
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="This account has been deactivated. Please contact support."
        )

    player_id = user.player_profile.id if user.player_profile else None
    token = create_access_token(subject=user.id, role=user.role)

    return TokenResponse(
        access_token=token,
        token_type="bearer",
        role=user.role,
        user_id=user.id,
        username=user.username,
        player_id=player_id
    )

@router.get("/me")
def get_current_user_info(
    current_user: User = Depends(get_current_user),
    db: Session = Depends(get_db)
):
    """Return authenticated user and profile state."""
    profile_data = None
    if current_user.player_profile:
        p = current_user.player_profile
        profile_data = {
            "id": p.id,
            "name": p.name,
            "avatar": p.avatar,
            "level": p.level,
            "xp": p.xp,
            "xp_to_next_level": p.xp_to_next_level,
            "coins": p.coins,
            "reputation": p.reputation,
            "current_location_id": p.current_location_id,
            "orders_completed": p.orders_completed,
            "total_revenue": p.total_revenue,
            "total_expenses": p.total_expenses,
            "customers_served": p.customers_served,
            "daily_streak": p.daily_streak,
            "last_daily_reward_date": p.last_daily_reward_date.isoformat() if p.last_daily_reward_date else None
        }
    return {
        "user_id": current_user.id,
        "username": current_user.username,
        "email": current_user.email,
        "role": current_user.role,
        "player_profile": profile_data
    }
