from flask import Flask, session
from flask_smorest import Api
from config import Config
from src.resources.current import CurrentBlueprint
from flask_cors import CORS

def create_app():    
    app = Flask(__name__)
    CORS(app)

    app.config.from_object(Config)

    api = Api(app)
    api.register_blueprint(CurrentBlueprint)    

    return app