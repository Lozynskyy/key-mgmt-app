import {FETCH_LOCK_KEYS,FETCH_LOCK_KEYS_FAILURE,FETCH_LOCK_KEYS_SUCCESS} from "../constants/fetchLockKeys";

const initialState={
    keys:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case FETCH_LOCK_KEYS:
        return {
            ...state,
            loading:true
        };
    case FETCH_LOCK_KEYS_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            keys:action.payload
        };
    case  FETCH_LOCK_KEYS_FAILURE:
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