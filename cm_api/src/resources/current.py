import requests
from flask import current_app, request, session,g
from flask.views import MethodView
from flask_smorest import Blueprint
from datetime import datetime
import pytz
from src.common.enums import (
    Parameters,
    PrecipitationInterval,
    PrecipitationUnit,
    TemperatureLevel,
    TemperatureUnit
)
from marshmallow import Schema, fields
from src.common.decorators import get_token, request_token

CurrentBlueprint = Blueprint(
    name="current",
    import_name=__name__,
    url_prefix="/current",
    description="This endpoints return data for current time",
)


class QueryArgsSchema(Schema):
    latitude = fields.String(
        required=True, description="Latitude of the required location"
    )
    longitude = fields.String(
        required=True, description="Latitude of the required location"
    )


@CurrentBlueprint.route("/")
class Current(MethodView):
    @CurrentBlueprint.arguments(QueryArgsSchema, location="query")
    @get_token
    def get(self, query_args):

        token = g.get("token")

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }

        latitude = query_args.get("latitude")
        longitude = query_args.get("longitude")

        base_url = current_app.config["METEOMATIC_BASE_URL"]
        timezone = pytz.timezone("America/Costa_Rica")
        current_time = datetime.now(timezone)
        iso_format = current_time.isoformat()

        current_precipitation_request = (
            f"{base_url}/{iso_format}"
            f"/{Parameters.PRECIPITATION.value}{PrecipitationInterval.HOUR_3.value}:{PrecipitationUnit.MILLIMETER.value}/"
            f"{latitude},{longitude}/json?model=mix&access_token={token}"
        )

        current_temperature_request = (
            f"{base_url}/{iso_format}"
            f"/{Parameters.TEMPERATURE.value}{TemperatureLevel.ABOVE_GROUND_2M.value}:{TemperatureUnit.CELSIUS.value}/"
            f"{latitude},{longitude}/json?model=mix&access_token={token}"
        )       

        data = {}
        try:            
            response = requests.get(url=current_precipitation_request)
            precipitation_data = response.json()            
            data["precipitation"] = precipitation_data["data"][0]["coordinates"][0]["dates"][0]["value"]
            response = requests.get(url=current_temperature_request)
            temperature_data = response.json()   
            data["temperature"] = temperature_data["data"][0]["coordinates"][0]["dates"][0]["value"]            
        except Exception as e:
            print(str(e))
        
        
        return data


