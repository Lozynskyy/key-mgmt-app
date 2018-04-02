import {FETCH_UNRESERVED_KEYS,FETCH_UNRESERVED_KEYS_FAILURE,FETCH_UNRESERVED_KEYS_SUCCESS} from "../constants/key";

const initialState={
    keys:[],
    loading:false,
    loaded:false,
};

export default function (state=initialState, action) {
    switch (action.type){
    case FETCH_UNRESERVED_KEYS:
        return {
            ...state,
            loading:true
        };
    case FETCH_UNRESERVED_KEYS_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            keys:action.payload
        };

    case  FETCH_UNRESERVED_KEYS_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
            keys:[]
        };
    default:
        return state;
    }
}