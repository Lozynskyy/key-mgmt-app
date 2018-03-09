import {FETCH_LOCK_KEYS,FETCH_LOCK_KEYS_SUCCESS,FETCH_LOCK_KEYS_FAILURE} from "../constants";

const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type) {
    case FETCH_LOCK_KEYS:
        return {
            ...state,
            loading: true
        };
    case FETCH_LOCK_KEYS_SUCCESS:
        return {
            ...state,
            loading: false,
            loaded: true,
            data: action.payload
        };
    case  FETCH_LOCK_KEYS_FAILURE:
        return {
            ...state,
            loading: false,
            loaded: false,
            data: []
        };
    default:
        return state;
    }
}