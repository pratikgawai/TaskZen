from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

streak = Blueprint("streak", __name__)


@streak.route("/me", methods=["GET"])
@jwt_required()
def my_streak():

    user_id = int(get_jwt_identity())

    return jsonify({
        "message": "Streak API Working",
        "user_id": user_id
    })