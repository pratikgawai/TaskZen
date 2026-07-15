from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database.models import Task

stats = Blueprint("stats", __name__)


@stats.route("/", methods=["GET"])
@jwt_required()
def get_statistics():

    user_id = int(get_jwt_identity())

    total = Task.query.filter_by(user_id=user_id).count()

    completed = Task.query.filter_by(
        user_id=user_id,
        completed=True
    ).count()

    pending = total - completed

    high = Task.query.filter_by(
        user_id=user_id,
        priority="High"
    ).count()

    medium = Task.query.filter_by(
        user_id=user_id,
        priority="Medium"
    ).count()

    low = Task.query.filter_by(
        user_id=user_id,
        priority="Low"
    ).count()

    completion_rate = 0

    if total > 0:
        completion_rate = round(
            (completed / total) * 100,
            2
        )

    return jsonify({

        "total_tasks": total,

        "completed_tasks": completed,

        "pending_tasks": pending,

        "completion_rate": completion_rate,

        "high_priority": high,

        "medium_priority": medium,

        "low_priority": low

    }), 200