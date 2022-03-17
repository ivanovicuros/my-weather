import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../actions'

const initialState = {
    weather: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_FAIL:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                weather: action.payload
            }    
        default:
            return state;        
    }
}

export default reducer;