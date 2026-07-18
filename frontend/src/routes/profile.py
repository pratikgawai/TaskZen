from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database.models import User, Task, Habit, Achievement

profile = Blueprint("profile", __name__)


@profile.route("/", methods=["GET"])
@jwt_required()
def get_profile():

    user_id = int(get_jwt_identity())

    user = User.query.get(user_id)

    total_tasks = Task.query.filter_by(user_id=user_id).count()

    completed_tasks = Task.query.filter_by(
        user_id=user_id,
        completed=True
    ).count()

    total_habits = Habit.query.filter_by(user_id=user_id).count()

    achievements = Achievement.query.filter_by(
        user_id=user_id,
        unlocked=True
    ).count()

    return jsonify({

        "name": user.name,

        "email": user.email,

        "current_streak": user.current_streak,

        "best_streak": user.best_streak,

        "total_tasks": total_tasks,

        "completed_tasks": completed_tasks,

        "total_habits": total_habits,

        "achievements": achievements

    }), 200