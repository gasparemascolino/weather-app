import requests
from decouple import config

API_KEY = config("OPENWEATHER_API_KEY")
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

def fetch_weather(city_name: str):
    try:
        response = requests.get(BASE_URL, params={"q": city_name, "appid": API_KEY, "units": "metric"})
        response.raise_for_status()
        data = response.json()
        return {
            "temperature": data["main"]["temp"],
            "feels_like": data["main"]["feels_like"],
            "humidity": data["main"]["humidity"],
        }
    except requests.RequestException as e:
        return {"error": str(e)}
