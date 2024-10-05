import axios from "axios";

const BASE_URL = 'http://localhost:5000';

// const BASE_URL = `${API_URL}/api`;

const API_URLS = {
    current: "https://jsonplaceholder.typicode.com/todos/1",
};

const APIService = {
    getCurrent: ()=>{
        return axios({
            method: 'get',
            url: API_URLS.current,
            /*data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
            }*/
        });
    }
}

export default APIService;
