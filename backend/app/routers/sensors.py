from fastapi import APIRouter
import random

router = APIRouter(prefix="/api/sensors", tags=["sensors"])

@router.get("/current")
def get_current_sensors():
    return {
        "temperature": round(random.uniform(25.0, 32.0), 1),
        "humidity": round(random.uniform(50, 60), 0),
        "light_level": random.randint(25000, 28000)
    }