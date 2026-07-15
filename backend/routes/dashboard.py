from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database.models import User, Task

dashboard = Blueprint("dashboard", __name__)


@dashboard.route("/", methods=["GET"])
@jwt_required()
def get_dashboard():

    user_id = int(get_jwt_identity())

    user = User.query.get(user_id)

    total_tasks = Task.query.filter_by(user_id=user_id).count()

    completed_tasks = Task.query.filter_by(
        user_id=user_id,
        completed=True
    ).count()

    pending_tasks = total_tasks - completed_tasks

    completion_rate = 0

    if total_tasks > 0:
        completion_rate = round(
            (completed_tasks / total_tasks) * 100,
            2
        )

    return jsonify({

        "name": user.name,

        "current_streak": user.current_streak,

        "best_streak": user.best_streak,

        "total_tasks": total_tasks,

        "completed_tasks": completed_tasks,

        "pending_tasks": pending_tasks,

        "completion_rate": completion_rate

    }), 200