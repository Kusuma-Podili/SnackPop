"""
Authentication schemas.
"""
from typing import Optional
from pydantic import BaseModel, EmailStr, Field

class UserRegister(BaseModel):
    username: str = Field(..., min_length=3, max_length=50)
    email: EmailStr
    password: str = Field(..., min_length=6)
    role: Optional[str] = "PLAYER"

class UserLogin(BaseModel):
    username_or_email: str
    password: str

class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    role: str
    user_id: int
    username: str
    player_id: Optional[int] = None

class UserOut(BaseModel):
    id: int
    username: str
    email: str
    role: str
    is_active: int

    class Config:
        from_attributes = True
