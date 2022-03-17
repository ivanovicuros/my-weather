import axios from 'axios';
const FETCH_START = 'FETCH_START';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAIL = 'FETCH_FAIL';

const url = process.env.BASE_URL
const appId = process.env.APP_ID
const apiKey = process.env.API_KEY


export const getForecast = (city) => (dispatch) => {
    dispatch(fetchStart())
    axios.get(`${url}${city}${appId}${apiKey}`)
    .then(res => {
        dispatch(fetchSuccess(res))
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