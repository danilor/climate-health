import axios from "axios";

const BASE_URL = 'http://192.168.1.115:5000/api/';

// const BASE_URL = `${API_URL}/api`;

const API_URLS = {
    current: BASE_URL + "current/?latitude=[LAT]&longitude=[LNG]",
    periods: BASE_URL + "forecast/time-periods",
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
}

    export default APIService;
