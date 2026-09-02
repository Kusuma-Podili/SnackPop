from setuptools import setup, find_packages

setup(
    name="snackpop-saga",
    version="1.0.0",
    description="Candy Crush-Style Food Matching Game (SnackPop Saga) Backend and Simulation Suite",
    author="Kusuma Podili",
    author_email="podilikusuma15@gmail.com",
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        "fastapi>=0.110.0",
        "uvicorn[standard]>=0.28.0",
        "pydantic>=2.6.4",
        "pytest>=8.0.0",
        "httpx>=0.27.0",
        "python-multipart>=0.0.9"
    ],
    entry_points={
        "console_scripts": [
            "snackpop=run:main",
        ],
    },
    python_requires=">=3.10",
)
