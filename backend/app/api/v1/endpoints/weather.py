from fastapi import APIRouter, HTTPException
from app.services.weather_service import fetch_weather

router = APIRouter()

@router.get("/weather/{city_name}")
def get_weather(city_name: str):
    weather_data = fetch_weather(city_name)
    if "error" in weather_data:
        raise HTTPException(status_code=400, detail=weather_data["error"])
    return weather_data
