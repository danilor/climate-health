from enum import Enum

class Parameters(Enum):
    PRECIPITATION = "precip_"
    TEMPERATURE = "t_"

class PrecipitationInterval(Enum):
    MIN_5 = "5min"
    MIN_10 = "10min"
    MIN_15 = "15min"
    MIN_30 = "30min"
    HOUR_1 = "1h"
    HOUR_3 = "3h"
    HOUR_6 = "6h"
    HOUR_12 = "12h"
    HOUR_24 = "24h"


class PrecipitationUnit(Enum):
    MILLIMETER = "mm"


class TemperatureLevel(Enum):
    GROUND_NEG_150CM = "-150cm"
    GROUND_NEG_50CM = "-50cm"
    GROUND_NEG_15CM = "-15cm"
    GROUND_NEG_5CM = "-5cm"
    GROUND_0M = "0m"
    ABOVE_GROUND_2M = "2m"
    ABOVE_GROUND_20000M = "20000m"
    
    HPA_1000 = "1000hPa"
    HPA_950 = "950hPa"
    HPA_925 = "925hPa"
    HPA_900 = "900hPa"
    HPA_850 = "850hPa"
    HPA_800 = "800hPa"
    HPA_700 = "700hPa"
    HPA_500 = "500hPa"
    HPA_300 = "300hPa"
    HPA_250 = "250hPa"
    HPA_200 = "200hPa"
    HPA_150 = "150hPa"
    HPA_100 = "100hPa"
    HPA_70 = "70hPa"
    HPA_50 = "50hPa"
    HPA_10 = "10hPa"

class TemperatureUnit(Enum):
    CELSIUS = "C"
    FAHRENHEIT = "F"
    KELVIN = "K"


class RangeTypes(Enum):
    MONTHS = "months"
    DAYS = "days"


class TimePeriods(Enum):
    HOUR_2 = "PT2H"
    HOUR_3 = "PT3H"
    HOUR_6 = "PT6H"
    HOUR_12 = "PT12H"
    DAY_1 = "P1D"
    WEEK_1 = "P1W"
    MONTH_1 = "P1M"
