from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

'''Initiating Instances'''
db = SQLAlchemy()
cors = CORS()

'''Function for Initializing Extensions'''
def init_Extensions(app):
    db.init_app(app)
    cors.init_app(app)