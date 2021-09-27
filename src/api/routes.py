"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
import os
#JWT
from flask_jwt_extended import create_access_token

api = Blueprint('api', __name__)


@api.route('/register/user', methods=['POST'])
def handle_register():
    body = request.get_json()
    if body:
        new_user = User(email = body['email'], password = body['password'],name = body['name'],surname = body['surname'], is_active=True)
        db.session.add(new_user)
        db.session.commit()
    access_token = create_access_token(identity=user.email)
    return jsonify(access_token=access_token),200

@api.route('/users', methods=['GET'])
def handle_user():
    users = User.query.all()     
    return jsonify(list(map(lambda user: user.serialize(), users))),200

@api.route('/login', methods=['POST'])
def handle_login():
        
    body = request.get_json()
    print(body) 
    password =body['password']   
    user = User.query.filter_by(email=body['email']).first()   
    if(user is None or user.password != password):
        return "user not exist or invalid password", 404
    access_token = create_access_token(identity=user.email)
    return jsonify(access_token=access_token),200
    
