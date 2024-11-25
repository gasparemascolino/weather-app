from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.models.city import City
from app.schemas.city import CityCreate, CityResponse
from app.db.database import get_db

router = APIRouter()

@router.post("/cities", response_model=CityResponse)
def create_city(city: CityCreate, db: Session = Depends(get_db)):
    db_city = db.query(City).filter(City.name == city.name).first()
    if db_city:
        raise HTTPException(status_code=400, detail="City already exists")
    new_city = City(name=city.name)
    db.add(new_city)
    db.commit()
    db.refresh(new_city)
    return new_city

@router.get("/cities", response_model=list[CityResponse])
def list_cities(db: Session = Depends(get_db)):
    return db.query(City).all()

@router.delete("/cities/{city_id}")
def delete_city(city_id: int, db: Session = Depends(get_db)):
    city = db.query(City).filter(City.id == city_id).first()
    if not city:
        raise HTTPException(status_code=404, detail="City not found")
    db.delete(city)
    db.commit()
    return {"message": "City deleted"}
