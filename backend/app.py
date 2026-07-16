from flask_cors import CORS
from routes.dashboard import dashboard
from flask import Flask
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager

from config import Config
from database.db import db
from database.models import User, Task
from routes.auth import auth
from routes.task import task
from routes.streak import streak
from routes.stats import stats
from routes.achievement import achievement
from routes.habit import habit

app = Flask(__name__)
app.config.from_object(Config)
CORS(app, origins=["http://localhost:5173"])

# Initialize Database
db.init_app(app)
jwt = JWTManager(app)

# Initialize Flask-Migrate
migrate = Migrate(app, db)

# Register Blueprints
app.register_blueprint(auth, url_prefix="/api/auth")
app.register_blueprint(task, url_prefix="/api/task")
app.register_blueprint(streak, url_prefix="/api/streak")
app.register_blueprint(
    dashboard,
    url_prefix="/api/dashboard"
)
app.register_blueprint(
    stats,
    url_prefix="/api/stats"
)
app.register_blueprint(
    achievement,
    url_prefix="/api/achievement"
)

app.register_blueprint(
    habit,
    url_prefix="/api/habit"
)


@app.route("/")
def home():
    return {
        "message": "Welcome to TaskZen Backend 🚀",
        "status": "Running"
    }


if __name__ == "__main__":
    with app.app_context():
        db.create_all()   # Abhi ke liye tables automatically create karega

    app.run(debug=True)