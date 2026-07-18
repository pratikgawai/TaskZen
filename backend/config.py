import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY")

    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

SQLALCHEMY_DATABASE_URI = (

    f"mysql+pymysql://{os.getenv('root')}:"
    f"{os.getenv('mgRlIkkGLVYLzVWhNjJmvsXMGwIzsXDo')}@"
    f"{os.getenv('mysql.railway.internal')}:"
    f"{os.getenv('3306')}/"
    f"{os.getenv('railway')}"
)
SQLALCHEMY_TRACK_MODIFICATIONS = False              