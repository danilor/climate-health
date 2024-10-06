import axios from "axios";

const BASE_URL = 'http://192.168.1.115:5000/';

// const BASE_URL = `${API_URL}/api`;

const API_URLS = {
    current: BASE_URL + "current/?latitude=[LAT]&longitude=[LNG]",
};

const APIService = {
    getCurrent: (lat: number,lng: number)=>{
        return axios({
            method: 'get',
            url: API_URLS.current.replace('[LAT]',lat.toString()).replace('[LNG]',lng.toString()),
            /*data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }*/
        });
    }
}

export default APIService;
