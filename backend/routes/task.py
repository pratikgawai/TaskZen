from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from datetime import date
from database.models import User, Task

from database.db import db
from database.models import Task

task = Blueprint("task", __name__)


@task.route("/create", methods=["POST"])
@jwt_required()
def create_task():

    user_id = get_jwt_identity()
    user_id = int(user_id)

    data = request.get_json()

    task = Task(
        title=data["title"],
        description=data.get("description"),
        priority=data.get("priority"),
        category=data.get("category"),
        due_date=data.get("due_date"),
        completed=False,
        user_id=user_id
    )

    db.session.add(task)
    db.session.commit()

    return jsonify({
        "message": "Task Created Successfully"
    }), 201
@task.route("/all", methods=["GET"])
@jwt_required()
def get_all_tasks():

    user_id = int(get_jwt_identity())

    tasks = Task.query.filter_by(user_id=user_id).all()

    return jsonify([
        {
            "id": task.id,
            "title": task.title,
            "description": task.description,
            "priority": task.priority,
            "category": task.category,
            "completed": task.completed
        }
        for task in tasks
    ]), 200

@task.route("/update/<int:task_id>", methods=["PUT"])
@jwt_required()
def update_task(task_id):

    user_id = int(get_jwt_identity())

    task = Task.query.filter_by(id=task_id, user_id=user_id).first()

    if not task:
        return jsonify({
            "message": "Task not found"
        }), 404

    data = request.get_json()

    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.priority = data.get("priority", task.priority)
    task.category = data.get("category", task.category)

    db.session.commit()

    return jsonify({
        "message": "Task Updated Successfully"
    }), 200

@task.route("/delete/<int:task_id>", methods=["DELETE"])
@jwt_required()
def delete_task(task_id):

    user_id = int(get_jwt_identity())

    task = Task.query.filter_by(
        id=task_id,
        user_id=user_id
    ).first()

    if not task:
        return jsonify({
            "message": "Task not found"
        }), 404

    db.session.delete(task)
    db.session.commit()

    return jsonify({
        "message": "Task Deleted Successfully"
    }), 200

from datetime import date

@task.route("/complete/<int:task_id>", methods=["PATCH"])
@jwt_required()
def complete_task(task_id):

    user_id = int(get_jwt_identity())

    task = Task.query.filter_by(
        id=task_id,
        user_id=user_id
    ).first()

    if not task:
        return jsonify({
            "message": "Task not found"
        }), 404

    if task.completed:
        return jsonify({
            "message": "Task already completed"
        }), 200

    task.completed = True

    user = User.query.get(user_id)

    today = date.today()

    if user.last_completed_date != today:

        if user.last_completed_date is None:

            user.current_streak = 1

        else:

            difference = (today - user.last_completed_date).days

            if difference == 1:
                user.current_streak += 1

            elif difference > 1:
                user.current_streak = 1

        user.last_completed_date = today

        if user.current_streak > user.best_streak:
            user.best_streak = user.current_streak

    db.session.commit()

    return jsonify({
        "message": "Task Completed Successfully",
        "current_streak": user.current_streak,
        "best_streak": user.best_streak
    }), 200