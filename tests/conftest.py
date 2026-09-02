"""
Pytest fixtures and configuration for SnackPop test suite.
"""

import pytest
from fastapi.testclient import TestClient
from backend.app.main import app

@pytest.fixture
def client():
    """FastAPI test client fixture."""
    return TestClient(app)

@pytest.fixture
def sample_board_8x8():
    """8x8 Board representation for test scenarios."""
    return {
        "rows": 8,
        "cols": 8,
        "allowed_foods": ["PIZZA", "BURGER", "DONUT", "STRAWBERRY", "CAKE", "FRIES"]
    }
