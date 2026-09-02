"""
Food Truck Tycoon Server Launcher.
"""
import uvicorn

if __name__ == "__main__":
    print("=========================================================")
    print("[SERVER] Launching Food Truck Tycoon Game Server on http://localhost:8000")
    print("   Admin Account:  admin / AdminSecret2026!")
    print("   Demo Player:    chef_mario / PlayerSecret123!")
    print("=========================================================")
    uvicorn.run("backend.app.main:app", host="127.0.0.1", port=8000, reload=True)
