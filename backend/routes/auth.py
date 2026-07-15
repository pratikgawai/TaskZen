from flask import Blueprint, request, jsonify
from database.db import db
from database.models import User
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

auth = Blueprint("auth", __name__)


@auth.route("/register", methods=["POST"])
def register():

    

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    

    if not name or not email or not password:
        return jsonify({
            "message": "All fields are required"
        }), 400

    existing_user = User.query.filter_by(email=email).first()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 409

    hashed_password = generate_password_hash(password)

    user = User(
        name=name,
        email=email,
        password=hashed_password
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "User Registered Successfully"
    }), 201

@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    user = User.query.filter_by(email=email).first()

    if not user:
        return jsonify({
            "message": "Invalid Email"
        }), 404

    if not check_password_hash(user.password, password):
        return jsonify({
            "message": "Invalid Password"
        }), 401

    token = create_access_token(identity=str(user.id))

    return jsonify({
        "message": "Login Successful",
        "token": token,
        "user": user.to_dict()
    }), 200
