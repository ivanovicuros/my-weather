import axios from 'axios';
import { baseUrl, apiUrl } from '../services/urls';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getForecast = (city) => (dispatch) => {
    dispatch(fetchStart())
    axios.get(`${baseUrl}${city}${apiUrl}`)
    .then(res => {
        console.log(res)
        dispatch(fetchSuccess(res.data))
    })
    .catch(err => {
        dispatch(fetchFail(err))
    })
}

export const fetchStart = () => {
    return ({type: FETCH_START});
}

export const fetchSuccess = (city) => {
    return ({type: FETCH_SUCCESS, payload: city});
}

export const fetchFail = (errorMsg) => {
    return ({type: FETCH_FAIL, payload: errorMsg});
}