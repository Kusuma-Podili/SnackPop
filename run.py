"""
SnackPop Saga Application Runner.
Starts the FastAPI backend server and launches the SnackPop game in default web browser.
"""

import sys
import os
import webbrowser
import uvicorn

if sys.platform == "win32":
    import io
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

def main():
    print("=" * 60)
    print(" 🍬🍕 SnackPop Saga - Food Matching Match-3 Game 🍕🍬")
    print("=" * 60)
    print("Starting backend server at http://127.0.0.1:8000 ...")
    print("Press Ctrl+C to terminate.")

    # Auto-open browser
    webbrowser.open("http://127.0.0.1:8000")

    uvicorn.run(
        "backend.app.main:app",
        host="127.0.0.1",
        port=8000,
        reload=False
    )

if __name__ == "__main__":
    main()
