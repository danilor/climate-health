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
    

def get_token(f):    
    @wraps(f)
    def wrapper(*args, **kwargs):
        if session.get("token") and :
            g.token = session.get("token")
                      
        else:
            session["expires"] = datetime.now() + timedelta(hours=1)
            session["token"] = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoicG9ycmFzX2pvc2UiLCJpc3MiOiJsb2dpbi5tZXRlb21hdGljcy5jb20iLCJleHAiOjE3MjgxNzkwNDYsInN1YiI6ImFjY2VzcyJ9.jRJbc4AFtUyXenGWkUB9UaqkN_OhbfTZGwScMAaSWr9hCy4h0y8mBAZ61E1YaVmq4OjHNQnSmha2z_chDHy6eA"
            g.token = session["token"]
            g.expires = session["expires"]

        return f(*args, **kwargs)
    return wrapper