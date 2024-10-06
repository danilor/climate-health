import os
from flask import session, g, current_app
from functools import wraps
from datetime import datetime, timedelta
import requests
from requests.auth import HTTPBasicAuth


def request_token():
    username = os.getenv("USER1")
    password = os.getenv("USER1_PASSWORD")
    # Perform the GET request with basic authentication
    response = requests.get(
        f"https://login.meteomatics.com/api/v1/token",
        auth=HTTPBasicAuth(username, password),
    )

    token_data = response.json()
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
            session["expires"] = datetime.now() + timedelta(hours=1)
            session["token"] = request_token()
            g.token = session["token"]
            g.expires = session["expires"]

        return f(*args, **kwargs)

    return wrapper
