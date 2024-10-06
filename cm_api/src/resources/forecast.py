import requests
from flask import current_app, request, session, g
from flask.views import MethodView
from flask_smorest import Blueprint
from datetime import datetime, timedelta
import pytz
from src.common.enums import (
    Parameters,
    PrecipitationInterval,
    PrecipitationUnit,
    TemperatureLevel,
    TemperatureUnit,
    RangeTypes,
    TimePeriods,
)
from marshmallow import Schema, fields
from src.common.decorators import get_token, request_token
from src.common.chatgpt import crops_recommendations_by_forecast
from src.common.cache import cache

ForecasttBlueprint = Blueprint(
    name="forecast",
    import_name=__name__,
    url_prefix="/api/forecast",
    description="This endpoints return forecast data",
)

TIME_PERIOD_DESCRIPTIONS = {
    TimePeriods.HOUR_2: "2 hours",
    TimePeriods.HOUR_3: "3 hours",
    TimePeriods.HOUR_6: "6 hours",
    TimePeriods.HOUR_12: "12 hours",
    TimePeriods.DAY_1: "1 day",
    TimePeriods.WEEK_1: "1 week",
    TimePeriods.MONTH_1: "1 month",
}


def create_time_period_list():
    return [
        {"key": time_period.value, "description": description}
        for time_period, description in TIME_PERIOD_DESCRIPTIONS.items()
    ]


class QueryArgsSchema(Schema):
    latitude = fields.String(
        required=True, description="Latitude of the required location"
    )
    longitude = fields.String(
        required=True, description="Latitude of the required location"
    )
    range_type = fields.Enum(
        RangeTypes, by_value=True, required=True, description="Forecast range type"
    )
    range_value = fields.Int(required=True, description="Forecast range value")
    time_period = fields.Enum(
        TimePeriods,
        by_value=True,
        required=True,
        description="Time period for forecast",
    )


class TimePeriodResponseSchema(Schema):
    key = fields.String()
    description = fields.String()


@ForecasttBlueprint.route("/")
class Forecast(MethodView):
    @ForecasttBlueprint.arguments(QueryArgsSchema, location="query")
    # Enable the cache for development purposes
    # @cache.cached(timeout=1800, key_prefix="forecast")
    @get_token
    def get(self, query_args):

        token = g.get("token")

        headers = {
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }

        latitude = query_args.get("latitude")
        longitude = query_args.get("longitude")
        range_type = query_args.get("range_type")
        range_value = query_args.get("range_value")
        time_period = query_args.get("time_period")

        base_url = current_app.config["METEOMATIC_BASE_URL"]
        timezone = pytz.timezone("America/Costa_Rica")
        current_datetime = datetime.now(timezone)
        current_iso_format = current_datetime.isoformat()

        days = range_value
        if range_type.value == RangeTypes.MONTHS.value:
            days = range_value * 30

        end_datetime = current_datetime + timedelta(days=days)
        end_iso_format = end_datetime.isoformat()

        current_precipitation_request = (
            f"{base_url}/{current_iso_format}--{end_iso_format}:{time_period.value}"
            f"/{Parameters.PRECIPITATION.value}{PrecipitationInterval.HOUR_1.value}:{PrecipitationUnit.MILLIMETER.value}"
            f",{Parameters.TEMPERATURE.value}{TemperatureLevel.ABOVE_GROUND_2M.value}:{TemperatureUnit.CELSIUS.value}"
            f"/{latitude},{longitude}/json?model=mix&access_token={token}"
        )

        current_temperature_request = (
            f"{base_url}/{current_iso_format}-{end_iso_format}:{time_period}"
            f"/{Parameters.TEMPERATURE.value}{TemperatureLevel.ABOVE_GROUND_2M.value}:{TemperatureUnit.CELSIUS.value}"
            f"/{latitude},{longitude}/json?model=mix&access_token={token}"
        )

        data = {"forecast": [], "ai_suggestions": {}}
        try:
            response = requests.get(url=current_precipitation_request)
            raw_data = response.json()
            temperature_data = [
                d
                for d in raw_data["data"]
                if Parameters.TEMPERATURE.value in d["parameter"]
            ][0]["coordinates"][0]["dates"]
            precipitation_data = [
                d
                for d in raw_data["data"]
                if Parameters.PRECIPITATION.value in d["parameter"]
            ][0]["coordinates"][0]["dates"]
            for temp, precip in zip(temperature_data, precipitation_data):
                data["forecast"].append(
                    {
                        "date": temp["date"],
                        "temperature": temp["value"],
                        "precipitation": precip["value"],
                    }
                )

            ai_suggestions = crops_recommendations_by_forecast(data["forecast"])
            data["ai_suggestions"] = ai_suggestions
        except Exception as e:
            print(str(e))

        return data


@ForecasttBlueprint.route("/time-periods")
class Periods(MethodView):
    @ForecasttBlueprint.response(200, TimePeriodResponseSchema(many=True))
    def get(self):
        time_period_list = create_time_period_list()
        return time_period_list
