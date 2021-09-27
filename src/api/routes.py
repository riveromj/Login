"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/register/user', methods=['POST'])
def handle_register():
    body = request.get_json()
    if body:
        new_user = User(email = body['email'], password = body['password'],name = body['name'],surname = body['surname'], is_active=True)
        db.session.add(new_user)
        db.session.commit()
    response_body = {
        "message": "user successfully"
    }

    return jsonify(response_body), 200

@api.route('/users', methods=['GET'])
def handle_user():
    users = User.query.all()     
    return jsonify(list(map(lambda user: user.serialize(), users))),200

@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json()
    response_body = {
        "message": "user successfully"
    }

    return jsonify(response_body), 200