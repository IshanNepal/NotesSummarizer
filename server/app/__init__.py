from flask import Flask
from .extensions import init_Extensions

'''Creating app using a fucntion for initializing'''
def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    '''Initializing Extensions'''
    init_Extensions(app)

    '''Registering Blueprint'''
    from app.routes.app import app_bp
    app.register_blueprint(app_bp, url_prefix='/api/app')
    
    return app