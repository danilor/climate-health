import os
from datetime import timedelta


class Config:
    PROPAGATE_EXCEPTIONS = True
    API_TITLE = 'Climate Health REST API'
    API_VERSION = 'V1'
    OPENAPI_VERSION = '3.0.3'
    OPENAPI_URL_PREFIX = '/'
    OPENAPI_SWAGGER_UI_PATH = '/docs'
    OPENAPI_SWAGGER_UI_URL = 'https://cdn.jsdelivr.net/npm/swagger-ui-dist/'    
    METEOMATIC_BASE_URL = "https://api.meteomatics.com"
    PERMANENT_SESSION_LIFETIME = timedelta(hours=1)
    SECRET_KEY = "me_mio"

    @staticmethod
    def init_app(app):
        pass