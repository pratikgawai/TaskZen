from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database.models import Achievement

achievement = Blueprint("achievement", __name__)


@achievement.route("/", methods=["GET"])
@jwt_required()
def get_achievements():

    user_id = int(get_jwt_identity())

    achievements = Achievement.query.filter_by(
        user_id=user_id
    ).all()

    return jsonify(
        [a.to_dict() for a in achievements]
    ), 200