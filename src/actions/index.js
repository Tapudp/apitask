import axios from 'axios';

export const FETCH_DATA = 'fetch_data';

const ROOT_URL = `https://api.unocoin.com/api/trades/all`;

export function fetchData() {
    const request = axios.get(`${ROOT_URL}`);

    return{
        type: FETCH_DATA,
        payload: request
    }
}