from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import leads, calculator, sensors
from .database import engine, Base

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Terrarium IoT API",
    description="API для умного террариума",
    version="1.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Vite
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(leads.router)
app.include_router(calculator.router)
app.include_router(sensors.router)

@app.get("/")
def root():
    return {"message": "Terrarium Smart Solutions API"}