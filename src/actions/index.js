import axios from 'axios';
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getForecast = (city) => (dispatch) => {
    dispatch(fetchStart())
    const options = {
        method: 'GET',
        url: 'http://localhost:9000/weather',
        params: {q: city} 
    }
    axios.request(options)
    .then(resp => {
        console.log(resp)
        dispatch(fetchSuccess(resp.data))
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