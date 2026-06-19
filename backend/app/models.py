from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from .database import Base

class Lead(Base):
    __tablename__ = "leads"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    contact = Column(String, nullable=False)
    terrarium_size = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow)