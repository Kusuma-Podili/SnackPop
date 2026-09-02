"""
Database initialization and tables creation.
"""
from backend.app.core.database import engine, Base, SessionLocal
from backend.app.db.seed_data import seed_database
# Import models to register tables
from backend.app import models

def init_db():
    """Create all database tables and seed with initial content."""
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_database(db)
    finally:
        db.close()

if __name__ == "__main__":
    init_db()
