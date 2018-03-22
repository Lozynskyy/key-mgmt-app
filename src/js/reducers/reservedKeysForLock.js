import {FETCH_RESERVED_KEYS_FOR_LOCK, FETCH_RESERVED_KEYS_FOR_LOCK_FAILURE,
    FETCH_RESERVED_KEYS_FOR_LOCK_SUCCESS
} from "../constants/key";

const initialState = {
    keys: [],
    loading: false,
    loaded: false
};

export default function (state = initialState, action) {
    switch (action.type){
    case FETCH_RESERVED_KEYS_FOR_LOCK:
        return {
            ...state,
            loading:true
        };
    case FETCH_RESERVED_KEYS_FOR_LOCK_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            keys:action.payload
        };
    case  FETCH_RESERVED_KEYS_FOR_LOCK_FAILURE:
        return {
            ...state,
            loading: false,
            loaded: false,
            keys: []
        };
    default:
        return state;
    }
}