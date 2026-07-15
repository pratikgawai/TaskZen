from flask import Blueprint

auth = Blueprint("auth", __name__)

@auth.route("/test")
def test():
    return {
        "message": "Authentication Route Working ✅"
    }