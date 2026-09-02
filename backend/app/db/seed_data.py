"""
Comprehensive Realistic Seed Data for Food Truck Tycoon.
"""
from sqlalchemy.orm import Session
from backend.app.core.security import get_password_hash
from backend.app.models import (
    User, UserRole, PlayerProfile, FoodTruck, FoodItem, Ingredient,
    RecipeIngredient, Location, PlayerLocation, Mission, Achievement,
    PlayerInventory, GameSetting
)

def seed_database(db: Session):
    """Seed initial game data if database is empty."""
    # Check if already seeded
    if db.query(User).filter_by(username="admin").first():
        return

    print("[SEED] Seeding Food Truck Tycoon Database with realistic data...")

    # 1. Create Admin User
    admin_user = User(
        username="admin",
        email="admin@foodtrucktycoon.com",
        hashed_password=get_password_hash("AdminSecret2026!"),
        role=UserRole.ADMIN.value,
        is_active=1
    )
    db.add(admin_user)
    db.flush()

    # 2. Seed Locations
    locations_data = [
        {
            "name": "City Street",
            "description": "A bustling downtown sidewalk with steady pedestrian traffic and hungry office workers.",
            "unlock_level": 1,
            "unlock_cost": 0,
            "customer_traffic_multiplier": 1.0,
            "tip_multiplier": 1.0,
            "patience_drain_multiplier": 1.0,
            "popular_category": "Burgers",
            "difficulty_rating": 1,
            "background_theme": "city-street",
            "icon": "🏙️"
        },
        {
            "name": "Beach Boardwalk",
            "description": "Sun, sand, and hungry beachgoers craving cold drinks, burgers, and crispy snacks.",
            "unlock_level": 2,
            "unlock_cost": 800,
            "customer_traffic_multiplier": 1.25,
            "tip_multiplier": 1.15,
            "patience_drain_multiplier": 0.9,
            "popular_category": "Drinks",
            "difficulty_rating": 2,
            "background_theme": "beach-boardwalk",
            "icon": "🏖️"
        },
        {
            "name": "University Campus",
            "description": "College students studying late, seeking fast food, budget-friendly sandwiches, and noodles.",
            "unlock_level": 4,
            "unlock_cost": 2000,
            "customer_traffic_multiplier": 1.6,
            "tip_multiplier": 1.1,
            "patience_drain_multiplier": 1.15,
            "popular_category": "Sandwiches",
            "difficulty_rating": 3,
            "background_theme": "university-campus",
            "icon": "🎓"
        },
        {
            "name": "Business District",
            "description": "High-profile corporate executives with deep pockets who demand fast, gourmet meals.",
            "unlock_level": 6,
            "unlock_cost": 5000,
            "customer_traffic_multiplier": 1.8,
            "tip_multiplier": 1.6,
            "patience_drain_multiplier": 1.4,
            "popular_category": "Combo Meals",
            "difficulty_rating": 4,
            "background_theme": "business-district",
            "icon": "💼"
        },
        {
            "name": "Festival Grounds",
            "description": "Massive live concerts and cultural festivals with high customer volumes and non-stop orders.",
            "unlock_level": 9,
            "unlock_cost": 10000,
            "customer_traffic_multiplier": 2.4,
            "tip_multiplier": 1.4,
            "patience_drain_multiplier": 1.3,
            "popular_category": "Mexican Food",
            "difficulty_rating": 4,
            "background_theme": "festival-grounds",
            "icon": "🎪"
        },
        {
            "name": "Downtown Metropolis",
            "description": "The pinnacle of urban nightlife. Food critics, celebrities, and thousands of hungry patrons.",
            "unlock_level": 13,
            "unlock_cost": 25000,
            "customer_traffic_multiplier": 3.0,
            "tip_multiplier": 2.0,
            "patience_drain_multiplier": 1.5,
            "popular_category": "Indian Food",
            "difficulty_rating": 5,
            "background_theme": "downtown-metropolis",
            "icon": "🌟"
        }
    ]

    location_objs = {}
    for loc_d in locations_data:
        loc = Location(**loc_d)
        db.add(loc)
        db.flush()
        location_objs[loc.name] = loc

    # 3. Seed Ingredients
    ingredients_data = [
        # Produce
        {"name": "Lettuce", "category": "Produce", "unit_cost": 3, "unit_type": "leaf", "icon": "🥬", "min_level": 1},
        {"name": "Tomato", "category": "Produce", "unit_cost": 4, "unit_type": "slice", "icon": "🍅", "min_level": 1},
        {"name": "Onion", "category": "Produce", "unit_cost": 2, "unit_type": "ring", "icon": "🧅", "min_level": 1},
        {"name": "Potato", "category": "Produce", "unit_cost": 4, "unit_type": "pcs", "icon": "🥔", "min_level": 1},
        {"name": "Jalapeno", "category": "Produce", "unit_cost": 5, "unit_type": "slice", "icon": "🌶️", "min_level": 3},
        {"name": "Avocado", "category": "Produce", "unit_cost": 8, "unit_type": "half", "icon": "🥑", "min_level": 4},
        {"name": "Lemon", "category": "Produce", "unit_cost": 3, "unit_type": "pcs", "icon": "🍋", "min_level": 1},
        
        # Meat & Protein
        {"name": "Beef Patty", "category": "Meat", "unit_cost": 12, "unit_type": "patty", "icon": "🥩", "min_level": 1},
        {"name": "Chicken Breast", "category": "Meat", "unit_cost": 10, "unit_type": "fillet", "icon": "🍗", "min_level": 2},
        {"name": "Pepperoni", "category": "Meat", "unit_cost": 8, "unit_type": "slice", "icon": "🍕", "min_level": 2},
        {"name": "Bacon Strip", "category": "Meat", "unit_cost": 6, "unit_type": "strip", "icon": "🥓", "min_level": 3},
        {"name": "Seasoned Ground Beef", "category": "Meat", "unit_cost": 9, "unit_type": "scoop", "icon": "🌮", "min_level": 3},
        
        # Dairy
        {"name": "Cheddar Cheese", "category": "Dairy", "unit_cost": 5, "unit_type": "slice", "icon": "🧀", "min_level": 1},
        {"name": "Mozzarella", "category": "Dairy", "unit_cost": 7, "unit_type": "grated", "icon": "🧀", "min_level": 2},
        {"name": "Milk", "category": "Dairy", "unit_cost": 4, "unit_type": "cup", "icon": "🥛", "min_level": 2},
        {"name": "Ice Cream Scoop", "category": "Dairy", "unit_cost": 6, "unit_type": "scoop", "icon": "🍨", "min_level": 3},
        
        # Bakery & Grains
        {"name": "Burger Bun", "category": "Bakery", "unit_cost": 5, "unit_type": "bun", "icon": "🍞", "min_level": 1},
        {"name": "Sandwich Bread", "category": "Bakery", "unit_cost": 4, "unit_type": "slice", "icon": "🥪", "min_level": 2},
        {"name": "Pizza Dough", "category": "Bakery", "unit_cost": 8, "unit_type": "base", "icon": "🥖", "min_level": 2},
        {"name": "Taco Shell", "category": "Bakery", "unit_cost": 4, "unit_type": "shell", "icon": "🌮", "min_level": 3},
        {"name": "Basmati Rice", "category": "Grains", "unit_cost": 6, "unit_type": "bowl", "icon": "🍚", "min_level": 4},
        {"name": "Egg Noodles", "category": "Grains", "unit_cost": 5, "unit_type": "portion", "icon": "🍜", "min_level": 3},
        {"name": "Tortilla Chips", "category": "Grains", "unit_cost": 4, "unit_type": "pack", "icon": "🌽", "min_level": 3},
        
        # Sauces & Spices
        {"name": "Secret Burger Sauce", "category": "Sauces", "unit_cost": 2, "unit_type": "dollop", "icon": "🥣", "min_level": 1},
        {"name": "Tomato Marinara", "category": "Sauces", "unit_cost": 3, "unit_type": "ladle", "icon": "🍅", "min_level": 2},
        {"name": "Biryani Masala", "category": "Spices", "unit_cost": 5, "unit_type": "pinch", "icon": "🧂", "min_level": 4},
        {"name": "Soy & Garlic Sauce", "category": "Sauces", "unit_cost": 3, "unit_type": "splash", "icon": "🍶", "min_level": 3},
        {"name": "Frying Oil", "category": "Sauces", "unit_cost": 2, "unit_type": "cup", "icon": "🛢️", "min_level": 1},
        {"name": "Sugar Syrup", "category": "Sauces", "unit_cost": 2, "unit_type": "splash", "icon": "🍯", "min_level": 1},
        {"name": "Chocolate Syrup", "category": "Sauces", "unit_cost": 4, "unit_type": "drizzle", "icon": "🍫", "min_level": 3},
    ]

    ingredient_objs = {}
    for ing_d in ingredients_data:
        ing = Ingredient(**ing_d)
        db.add(ing)
        db.flush()
        ingredient_objs[ing.name] = ing

    # 4. Seed Food Items and Recipes
    food_items_data = [
        # Starter Foods (Level 1)
        {
            "name": "Classic Cheeseburger",
            "category": "Burgers",
            "description": "Juicy beef patty with melted cheddar, crisp lettuce, tomato slice, and secret sauce on a toasted bun.",
            "selling_price": 45,
            "base_prep_time": 4.5,
            "cook_station": "GRILL",
            "difficulty": "EASY",
            "required_level": 1,
            "popularity_score": 1.5,
            "icon": "🍔",
            "ingredients": [
                {"name": "Burger Bun", "qty": 1},
                {"name": "Beef Patty", "qty": 1},
                {"name": "Cheddar Cheese", "qty": 1},
                {"name": "Lettuce", "qty": 1},
                {"name": "Tomato", "qty": 1},
                {"name": "Secret Burger Sauce", "qty": 1},
            ]
        },
        {
            "name": "Crispy French Fries",
            "category": "Fries",
            "description": "Golden crispy potato strips tossed in sea salt, fried to perfection.",
            "selling_price": 25,
            "base_prep_time": 3.5,
            "cook_station": "FRYER",
            "difficulty": "EASY",
            "required_level": 1,
            "popularity_score": 1.4,
            "icon": "🍟",
            "ingredients": [
                {"name": "Potato", "qty": 2},
                {"name": "Frying Oil", "qty": 1},
            ]
        },
        {
            "name": "Fresh Lemonade",
            "category": "Drinks",
            "description": "Hand-squeezed refreshing lemonade with a touch of sweetness.",
            "selling_price": 18,
            "base_prep_time": 2.5,
            "cook_station": "DRINK_DISPENSER",
            "difficulty": "EASY",
            "required_level": 1,
            "popularity_score": 1.2,
            "icon": "🍋",
            "ingredients": [
                {"name": "Lemon", "qty": 2},
                {"name": "Sugar Syrup", "qty": 1},
            ]
        },
        
        # Level 2 Foods
        {
            "name": "Grilled Chicken Sandwich",
            "category": "Sandwiches",
            "description": "Tender grilled chicken breast, fresh lettuce, and ripe tomatoes on toasted bread.",
            "selling_price": 52,
            "base_prep_time": 5.0,
            "cook_station": "GRILL",
            "difficulty": "MEDIUM",
            "required_level": 2,
            "popularity_score": 1.3,
            "icon": "🥪",
            "ingredients": [
                {"name": "Sandwich Bread", "qty": 2},
                {"name": "Chicken Breast", "qty": 1},
                {"name": "Lettuce", "qty": 1},
                {"name": "Tomato", "qty": 1},
            ]
        },
        {
            "name": "Pepperoni Pizza Slice",
            "category": "Pizza",
            "description": "Crispy crust, rich marinara sauce, gooey mozzarella, and spicy pepperoni.",
            "selling_price": 60,
            "base_prep_time": 6.0,
            "cook_station": "GRILL",
            "difficulty": "MEDIUM",
            "required_level": 2,
            "popularity_score": 1.6,
            "icon": "🍕",
            "ingredients": [
                {"name": "Pizza Dough", "qty": 1},
                {"name": "Tomato Marinara", "qty": 1},
                {"name": "Mozzarella", "qty": 1},
                {"name": "Pepperoni", "qty": 2},
            ]
        },
        
        # Level 3 Foods
        {
            "name": "Bacon Double Cheeseburger",
            "category": "Burgers",
            "description": "Two beef patties, double cheddar cheese, crispy smoked bacon, and burger sauce.",
            "selling_price": 75,
            "base_prep_time": 6.5,
            "cook_station": "GRILL",
            "difficulty": "MEDIUM",
            "required_level": 3,
            "popularity_score": 1.8,
            "icon": "🥓",
            "ingredients": [
                {"name": "Burger Bun", "qty": 1},
                {"name": "Beef Patty", "qty": 2},
                {"name": "Cheddar Cheese", "qty": 2},
                {"name": "Bacon Strip", "qty": 2},
                {"name": "Secret Burger Sauce", "qty": 1},
            ]
        },
        {
            "name": "Spicy Street Tacos",
            "category": "Mexican Food",
            "description": "Two crispy taco shells loaded with seasoned beef, shredded lettuce, cheddar, and jalapenos.",
            "selling_price": 58,
            "base_prep_time": 5.0,
            "cook_station": "GRILL",
            "difficulty": "MEDIUM",
            "required_level": 3,
            "popularity_score": 1.4,
            "icon": "🌮",
            "ingredients": [
                {"name": "Taco Shell", "qty": 2},
                {"name": "Seasoned Ground Beef", "qty": 1},
                {"name": "Cheddar Cheese", "qty": 1},
                {"name": "Lettuce", "qty": 1},
                {"name": "Jalapeno", "qty": 1},
            ]
        },
        {
            "name": "Wok-Tossed Noodles",
            "category": "Chinese Food",
            "description": "Sizzling egg noodles tossed with fresh onion, garlic soy sauce, and aromatic seasoning.",
            "selling_price": 55,
            "base_prep_time": 5.5,
            "cook_station": "STOVE",
            "difficulty": "MEDIUM",
            "required_level": 3,
            "popularity_score": 1.3,
            "icon": "🍜",
            "ingredients": [
                {"name": "Egg Noodles", "qty": 1},
                {"name": "Onion", "qty": 1},
                {"name": "Soy & Garlic Sauce", "qty": 1},
                {"name": "Frying Oil", "qty": 1},
            ]
        },
        {
            "name": "Chocolate Milkshake",
            "category": "Desserts",
            "description": "Rich creamy chocolate ice cream blended with cold milk and drizzled with cocoa fudge.",
            "selling_price": 38,
            "base_prep_time": 3.0,
            "cook_station": "DRINK_DISPENSER",
            "difficulty": "EASY",
            "required_level": 3,
            "popularity_score": 1.2,
            "icon": "🥤",
            "ingredients": [
                {"name": "Milk", "qty": 1},
                {"name": "Ice Cream Scoop", "qty": 2},
                {"name": "Chocolate Syrup", "qty": 1},
            ]
        },
        
        # Level 4+ Advanced Foods
        {
            "name": "Royal Chicken Biryani",
            "category": "Indian Food",
            "description": "Fragrant basmati rice slow-cooked with tender chicken and aromatic royal spices.",
            "selling_price": 88,
            "base_prep_time": 7.0,
            "cook_station": "STOVE",
            "difficulty": "HARD",
            "required_level": 4,
            "popularity_score": 1.9,
            "icon": "🍛",
            "ingredients": [
                {"name": "Basmati Rice", "qty": 1},
                {"name": "Chicken Breast", "qty": 1},
                {"name": "Onion", "qty": 1},
                {"name": "Biryani Masala", "qty": 1},
            ]
        },
        {
            "name": "Loaded Supreme Nachos",
            "category": "Mexican Food",
            "description": "Crispy tortilla chips smothered in melted cheese, seasoned beef, salsa tomatoes, and fresh avocado.",
            "selling_price": 68,
            "base_prep_time": 4.5,
            "cook_station": "GRILL",
            "difficulty": "MEDIUM",
            "required_level": 4,
            "popularity_score": 1.5,
            "icon": "🧀",
            "ingredients": [
                {"name": "Tortilla Chips", "qty": 1},
                {"name": "Cheddar Cheese", "qty": 2},
                {"name": "Seasoned Ground Beef", "qty": 1},
                {"name": "Tomato", "qty": 1},
                {"name": "Avocado", "qty": 1},
            ]
        },
        {
            "name": "Tycoon Ultimate Combo Meal",
            "category": "Combo Meals",
            "description": "Bacon double cheeseburger + crispy french fries + chocolate milkshake. The ultimate feast!",
            "selling_price": 125,
            "base_prep_time": 8.0,
            "cook_station": "GRILL",
            "difficulty": "HARD",
            "required_level": 5,
            "popularity_score": 2.2,
            "icon": "🍱",
            "ingredients": [
                {"name": "Burger Bun", "qty": 1},
                {"name": "Beef Patty", "qty": 2},
                {"name": "Cheddar Cheese", "qty": 2},
                {"name": "Bacon Strip", "qty": 1},
                {"name": "Potato", "qty": 2},
                {"name": "Milk", "qty": 1},
                {"name": "Ice Cream Scoop", "qty": 1},
            ]
        }
    ]

    for food_d in food_items_data:
        ingredients_list = food_d.pop("ingredients")
        food = FoodItem(**food_d)
        db.add(food)
        db.flush()
        
        for ing_item in ingredients_list:
            ing_obj = ingredient_objs.get(ing_item["name"])
            if ing_obj:
                rec_ing = RecipeIngredient(
                    food_item_id=food.id,
                    ingredient_id=ing_obj.id,
                    quantity_required=ing_item["qty"]
                )
                db.add(rec_ing)

    # 5. Seed Missions
    missions_data = [
        {"title": "First Steps Chef", "description": "Complete your first 3 food orders successfully.", "mission_type": "DAILY", "target_key": "orders_completed", "target_value": 3, "reward_coins": 150, "reward_xp": 50, "icon": "🎯"},
        {"title": "Rush Hour Champion", "description": "Serve 10 customers during business shifts.", "mission_type": "DAILY", "target_key": "orders_completed", "target_value": 10, "reward_coins": 400, "reward_xp": 120, "icon": "⚡"},
        {"title": "Coin Collector", "description": "Earn 1,000 coins from food sales and tips.", "mission_type": "DAILY", "target_key": "coins_earned", "target_value": 1000, "reward_coins": 300, "reward_xp": 100, "icon": "💰"},
        {"title": "Culinary Masterpiece", "description": "Score 5 PERFECT cooking ratings.", "mission_type": "DAILY", "target_key": "perfect_cooks", "target_value": 5, "reward_coins": 250, "reward_xp": 90, "icon": "⭐"},
        {"title": "Burger Bonanza", "description": "Cook and sell 10 Classic Cheeseburgers.", "mission_type": "LIFETIME", "target_key": "burgers_sold", "target_value": 10, "reward_coins": 500, "reward_xp": 200, "icon": "🍔"},
        {"title": "Empire Builder", "description": "Unlock 3 different food truck locations.", "mission_type": "LIFETIME", "target_key": "locations_unlocked", "target_value": 3, "reward_coins": 1500, "reward_xp": 400, "icon": "🗺️"},
        {"title": "Master Tycoon", "description": "Reach 10,000 total revenue earned.", "mission_type": "LIFETIME", "target_key": "revenue_total", "target_value": 10000, "reward_coins": 3000, "reward_xp": 800, "icon": "👑"},
    ]
    for mis_d in missions_data:
        m = Mission(**mis_d)
        db.add(m)

    # 6. Seed Achievements
    achievements_data = [
        {"code": "FIRST_ORDER", "title": "First Order", "description": "Serve your very first food truck order.", "category": "ORDERS", "requirement_type": "orders_count", "requirement_value": 1, "reward_coins": 100, "reward_xp": 50, "icon": "🍳"},
        {"code": "HOT_SELLER", "title": "Hot Seller", "description": "Complete 25 customer orders.", "category": "ORDERS", "requirement_type": "orders_count", "requirement_value": 25, "reward_coins": 500, "reward_xp": 200, "icon": "🔥"},
        {"code": "CENTURY_CLUB", "title": "Century Club", "description": "Complete 100 customer orders.", "category": "ORDERS", "requirement_type": "orders_count", "requirement_value": 100, "reward_coins": 2000, "reward_xp": 600, "icon": "💯"},
        {"code": "MONEY_MAKER", "title": "Money Maker", "description": "Earn 5,000 coins in total revenue.", "category": "ECONOMY", "requirement_type": "revenue_total", "requirement_value": 5000, "reward_coins": 750, "reward_xp": 250, "icon": "💵"},
        {"code": "TYCOON_STATUS", "title": "Tycoon Status", "description": "Earn 50,000 coins in total revenue.", "category": "ECONOMY", "requirement_type": "revenue_total", "requirement_value": 50000, "reward_coins": 5000, "reward_xp": 1500, "icon": "💎"},
        {"code": "PERFECT_CHEF", "title": "Perfect Chef", "description": "Achieve 10 PERFECT cook ratings.", "category": "SKILL", "requirement_type": "perfect_count", "requirement_value": 10, "reward_coins": 400, "reward_xp": 150, "icon": "⭐"},
        {"code": "FLAWLESS_ARTISAN", "title": "Flawless Artisan", "description": "Achieve 50 PERFECT cook ratings.", "category": "SKILL", "requirement_type": "perfect_count", "requirement_value": 50, "reward_coins": 1500, "reward_xp": 500, "icon": "🌟"},
        {"code": "LOCATION_EXPLORER", "title": "Location Explorer", "description": "Unlock 2 additional business locations.", "category": "EXPANSION", "requirement_type": "locations_count", "requirement_value": 3, "reward_coins": 1000, "reward_xp": 350, "icon": "🗺️"},
        {"code": "CUSTOMER_FAVORITE", "title": "Customer Favorite", "description": "Maintain a stellar 4.8+ customer reputation rating.", "category": "REPUTATION", "requirement_type": "reputation_reach", "requirement_value": 4.8, "reward_coins": 800, "reward_xp": 300, "icon": "❤️"},
        {"code": "LEVEL_10_MASTER", "title": "Master Chef", "description": "Reach Chef Level 10.", "category": "PROGRESSION", "requirement_type": "level_reach", "requirement_value": 10, "reward_coins": 2500, "reward_xp": 1000, "icon": "🎖️"},
    ]
    for ach_d in achievements_data:
        ach = Achievement(**ach_d)
        db.add(ach)

    # 7. Seed Default Game Settings
    settings_data = [
        {"key": "BASE_PATIENCE_SECONDS", "value": "32.0", "category": "GAMEPLAY", "description": "Base patience timer for customers in seconds."},
        {"key": "TIP_PERFECTION_BONUS", "value": "0.35", "category": "ECONOMY", "description": "Bonus tip multiplier for PERFECT cooking."},
        {"key": "GLOBAL_XP_MULTIPLIER", "value": "1.0", "category": "PROGRESSION", "description": "Global XP gain multiplier."},
        {"key": "DAILY_STREAK_BONUS_BASE", "value": "100", "category": "REWARDS", "description": "Base coins for day 1 login streak."}
    ]
    for set_d in settings_data:
        gs = GameSetting(**set_d)
        db.add(gs)

    # 8. Create Starter Demo Player Profile
    demo_user = User(
        username="chef_mario",
        email="mario@foodtrucktycoon.com",
        hashed_password=get_password_hash("PlayerSecret123!"),
        role=UserRole.PLAYER.value,
        is_active=1
    )
    db.add(demo_user)
    db.flush()

    city_loc = location_objs["City Street"]

    demo_profile = PlayerProfile(
        user_id=demo_user.id,
        name="Chef Mario",
        avatar="chef-1",
        level=1,
        xp=25,
        xp_to_next_level=100,
        coins=650,
        reputation=4.5,
        current_location_id=city_loc.id,
        total_revenue=150,
        total_expenses=40,
        orders_completed=3,
        customers_served=3,
        perfect_cooks=2,
        burned_cooks=0,
        daily_streak=1
    )
    db.add(demo_profile)
    db.flush()

    demo_truck = FoodTruck(
        player_id=demo_profile.id,
        name="Mario's Flavor Cruiser",
        tier_level=1,
        color="#FF6B6B",
        signboard_text="FRESH & CRISPY",
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
    db.add(demo_truck)

    # Starter location unlock
    starter_player_loc = PlayerLocation(
        player_id=demo_profile.id,
        location_id=city_loc.id
    )
    db.add(starter_player_loc)

    # Starter inventory stock for demo player
    starter_stocks = [
        ("Burger Bun", 4),
        ("Beef Patty", 4),
        ("Cheddar Cheese", 4),
        ("Lettuce", 4),
        ("Tomato", 4),
        ("Secret Burger Sauce", 3),
        ("Potato", 4),
        ("Frying Oil", 2),
        ("Lemon", 4),
        ("Sugar Syrup", 2),
    ]
    for ing_name, qty in starter_stocks:
        ing_obj = ingredient_objs.get(ing_name)
        if ing_obj:
            inv = PlayerInventory(
                player_id=demo_profile.id,
                ingredient_id=ing_obj.id,
                quantity=qty
            )
            db.add(inv)

    db.commit()
    print("[SEED] Seed completed successfully with Admin, Demo Player, Recipes, Ingredients, Locations, Missions, and Achievements!")
