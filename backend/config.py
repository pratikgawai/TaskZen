# import os
# from dotenv import load_dotenv

# load_dotenv()

# class Config:
#     SECRET_KEY = os.getenv("SECRET_KEY")

#     JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

# SQLALCHEMY_DATABASE_URI = (

#     f"mysql+pymysql://{os.getenv('root')}:"
#     f"{os.getenv('mgRlIkkGLVYLzVWhNjJmvsXMGwIzsXDo')}@"
#     f"{os.getenv('mysql.railway.internal')}:"
#     f"{os.getenv('3306')}/"
#     f"{os.getenv('railway')}"
# )
# SQLALCHEMY_TRACK_MODIFICATIONS = False              


import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("taskzen_secret_key")

    JWT_SECRET_KEY = os.getenv("taskzen_backend_project_2026_super_secret_key_123456789")

    SQLALCHEMY_DATABASE_URI = (
        f"mysql+pymysql://{os.getenv('root')}:"
        f"{os.getenv('mgRlIkkGLVYLzVWhNjJmvsXMGwIzsXDo')}@"
        f"{os.getenv('mysql.railway.internal')}:"
        f"{os.getenv('3306')}/"
        f"{os.getenv('railway')}"
    )


    SQLALCHEMY_TRACK_MODIFICATIONS = False