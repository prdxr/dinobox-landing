from pydantic import BaseModel
from datetime import datetime
from typing import Optional

class LeadCreate(BaseModel):
    name: str
    contact: str
    terrarium_size: Optional[str] = None

class LeadResponse(LeadCreate):
    id: int
    created_at: datetime

class CalculatorParams(BaseModel):
    length: float
    width: float
    height: float
    pet_type: str

class CalculatorResult(BaseModel):
    heater_power_watt: int
    lamp_type: str
    humidity_target: str