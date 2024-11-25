from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db.database import Base, engine
from app.api.v1.endpoints import cities, weather

Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost:8080",  # frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cities.router, prefix="/api")
app.include_router(weather.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "Welcome to the Weather API"}