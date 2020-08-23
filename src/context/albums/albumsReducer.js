import * as types from '../types';

export default (state, action) => {
    switch(action.type) {
        case types.SET_ALBUMS:
            return {
                ...state,
                albums: action.payload,
                loading: false
            }
        case types.SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case types.SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default: return state;
    }
}