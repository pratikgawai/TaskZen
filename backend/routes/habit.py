from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from database.db import db
from database.models import Habit

habit = Blueprint("habit", __name__)


# Create Habit
@habit.route("/create", methods=["POST"])
@jwt_required()
def create_habit():

    user_id = int(get_jwt_identity())

    data = request.get_json()

    new_habit = Habit(
        title=data["title"],
        description=data.get("description"),
        frequency=data.get("frequency", "Daily"),
        user_id=user_id
    )

    db.session.add(new_habit)
    db.session.commit()

    return jsonify({
        "message": "Habit Created Successfully"
    }), 201


# Get All Habits
@habit.route("/all", methods=["GET"])
@jwt_required()
def get_all_habits():

    user_id = int(get_jwt_identity())

    habits = Habit.query.filter_by(user_id=user_id).all()

    return jsonify([habit.to_dict() for habit in habits]), 200


# Update Habit
@habit.route("/update/<int:habit_id>", methods=["PUT"])
@jwt_required()
def update_habit(habit_id):

    user_id = int(get_jwt_identity())

    habit = Habit.query.filter_by(
        id=habit_id,
        user_id=user_id
    ).first()

    if not habit:
        return jsonify({
            "message": "Habit not found"
        }), 404

    data = request.get_json()

    habit.title = data.get("title", habit.title)
    habit.description = data.get("description", habit.description)
    habit.frequency = data.get("frequency", habit.frequency)

    db.session.commit()

    return jsonify({
        "message": "Habit Updated Successfully"
    }), 200


# Delete Habit
@habit.route("/delete/<int:habit_id>", methods=["DELETE"])
@jwt_required()
def delete_habit(habit_id):

    user_id = int(get_jwt_identity())

    habit = Habit.query.filter_by(
        id=habit_id,
        user_id=user_id
    ).first()

    if not habit:
        return jsonify({
            "message": "Habit not found"
        }), 404

    db.session.delete(habit)
    db.session.commit()

    return jsonify({
        "message": "Habit Deleted Successfully"
    }), 200


# Complete Habit
@habit.route("/complete/<int:habit_id>", methods=["PATCH"])
@jwt_required()
def complete_habit(habit_id):

    user_id = int(get_jwt_identity())

    habit = Habit.query.filter_by(
        id=habit_id,
        user_id=user_id
    ).first()

    if not habit:
        return jsonify({
            "message": "Habit not found"
        }), 404

    habit.completed = True

    db.session.commit()

    return jsonify({
        "message": "Habit Completed Successfully"
    }), 200