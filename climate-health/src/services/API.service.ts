import axios from "axios";

const BASE_URL = 'https://apicm.japscr.com/api/';

// const BASE_URL = `${API_URL}/api`;

const API_URLS = {
    current: BASE_URL + "current/?latitude=[LAT]&longitude=[LNG]",
    periods: BASE_URL + "forecast/time-periods",
    forecast: BASE_URL + 'forecast/?latitude=[LAT]&longitude=[LNG]&range_type=[RANGE]&range_value=[RANGE_VALUE]&time_period=[TIME_PERIOD]',
};

enum METHODS {
    GET = 'get',
    POST = 'post',
}

const APIService = {
    getCurrent: (lat: number, lng: number) => {
        return axios({
            method: METHODS.GET,
            url: API_URLS.current.replace('[LAT]', lat.toString()).replace('[LNG]', lng.toString()),
            /*data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }*/
        });
    },

    getPeriods: () => {
        return axios({
            method: METHODS.GET,
            url: API_URLS.periods,
        });
    },

    getForecast: (lat: number, lng: number, rangeType: string, rangeValue: number, timePeriod: string) => {
        const url = API_URLS.forecast.replace('[LAT]', lat.toString()).replace('[LNG]', lng.toString()).replace('[RANGE]', rangeType).replace('[RANGE_VALUE]', rangeValue.toString()).replace('[TIME_PERIOD]', timePeriod);
        // console.log('Forecast url', url);
        return axios({
            method: METHODS.GET,
            url: url,
        });
    }
}

export default APIService;
