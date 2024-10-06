from flask import session, g, current_app
from functools import wraps
from datetime import datetime, timedelta
import requests
from requests.auth import HTTPBasicAuth

def request_token():
    username = 'porras_jose'
    password = 'Wsj6JXG3x9'
    base_url = current_app.config["METEOMATIC_BASE_URL"]
    # Perform the GET request with basic authentication
    response = requests.get(
        f'https://login.meteomatics.com/api/v1/token',
        auth=HTTPBasicAuth(username, password)
    )

    token_data =  response.json()
    return token_data["access_token"]

def is_token_expired():
    time = session.get("expires")    
    if not time or time.replace(tzinfo=None) < datetime.now():
        return True
    return False


def get_token(f):    
    @wraps(f)
    def wrapper(*args, **kwargs):        
        if session.get("token") and not is_token_expired():
            g.token = session.get("token")                      
        else:
            session["expires"] = datetime.now() + timedelta(minutes=5)
            session["token"] = request_token()
            g.token = session["token"]
            g.expires = session["expires"]

        return f(*args, **kwargs)
    return wrapper