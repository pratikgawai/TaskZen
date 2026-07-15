from routes.auth import auth


from flask import Flask
from config import Config
from database.db import db

# Models import karna zaroori hai
from database.models import User

app = Flask(__name__)
app.config.from_object(Config)

db.init_app(app)

app.register_blueprint(auth, url_prefix="/api/auth")

@app.route("/")
def home():
    return {
        "message": "Welcome to TaskZen Backend 🚀",
        "status": "Running"
    }

if __name__ == "__main__":
    with app.app_context():
        db.create_all()   # Users table create karega

    app.run(debug=True)