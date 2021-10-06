"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import os
#JWT
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity
from api.encrypted import encrypted_pass, compare_pass

api = Blueprint('api', __name__)


@api.route('/register/user', methods=['POST'])
def handle_register():
    body = request.get_json()
    pass_encrypt = encrypted_pass(body['password'])
    print(pass_encrypt)

    if body:
        new_user = User(email = body['email'], password = pass_encrypt ,name = body['name'],surname = body['surname'], is_active=True)
        db.session.add(new_user)
        db.session.commit()
    access_token = create_access_token(identity=new_user.email)
    return jsonify(access_token=access_token),200

@api.route('/users', methods=['GET'])

def handle_user():
    users = User.query.all()     
    return jsonify(list(map(lambda user: user.serialize(), users))),200

@api.route('/login', methods=['POST'])
def handle_login():
    body = request.get_json()
    print(body)    
    user = User.query.filter_by(email=body['email']).first()   
    if(user is None):
        return "user not exist or invalid password", 404
    validate_password = compare_pass(body['password'], user.password_bcrypt())
    if (validate_password == False):
        return "password incorrect", 401
    access_token = create_access_token(identity=user.email)
    return jsonify({"access_token": access_token, "user":body['email']}),200
    
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200