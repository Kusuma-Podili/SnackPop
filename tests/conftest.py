"""
Pytest configuration, database fixtures, and test client setup.
"""
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from backend.app.core.database import Base, get_db
from backend.app.db.seed_data import seed_database
from backend.app.main import app

@pytest.fixture(scope="function")
def test_db():
    """Create a completely isolated in-memory SQLite database per test."""
    test_engine = create_engine(
        "sqlite:///:memory:",
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    Base.metadata.create_all(bind=test_engine)
    TestingSession = sessionmaker(autocommit=False, autoflush=False, bind=test_engine)
    session = TestingSession()
    seed_database(session)
    try:
        yield TestingSession, session
    finally:
        session.close()
        Base.metadata.drop_all(bind=test_engine)
        test_engine.dispose()

@pytest.fixture(scope="function")
def client(test_db):
    """Test client using overridden database dependency."""
    TestingSession, _ = test_db

    def override_get_db():
        db = TestingSession()
        try:
            yield db
        finally:
            db.close()

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as c:
        yield c
    app.dependency_overrides.clear()

@pytest.fixture(scope="function")
def db_session(test_db):
    """Direct database session for assertions."""
    TestingSession, _ = test_db
    session = TestingSession()
    try:
        yield session
    finally:
        session.close()
