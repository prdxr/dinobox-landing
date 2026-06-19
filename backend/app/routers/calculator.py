from fastapi import APIRouter, Query
from ..schemas import CalculatorResult

router = APIRouter(prefix="/api/calculator", tags=["calculator"])

@router.get("/", response_model=CalculatorResult)
def calculate(
    length: float = Query(..., gt=0, description="Длина террариума в см"),
    width: float = Query(..., gt=0, description="Ширина в см"),
    height: float = Query(..., gt=0, description="Высота в см"),
    pet_type: str = Query(..., description="Тип питомца: хамелеон, змей, черепаха")
):
    volume = length * width * height / 1000
    # TODO: add logic for volume affecting stats

    if pet_type.lower() == "хамелеон":
        heater = 75
        lamp = "UVB 10.0 + тепловая лампа 50W"
        humidity = "60-80%"
    elif pet_type.lower() == "змей":
        heater = 50
        lamp = "инфракрасная 40W"
        humidity = "40-60%"
    elif pet_type.lower() == "черепаха":
        heater = 60
        lamp = "UVB 5.0 + тепловая 50W"
        humidity = "50-70%"
    else:
        heater = 60
        lamp = "UVB 5.0"
        humidity = "50-70%"

    return CalculatorResult(
        heater_power_watt=heater,
        lamp_type=lamp,
        humidity_target=humidity
    )