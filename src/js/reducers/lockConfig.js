import {GET_LOCK_CONFIG,GET_LOCK_CONFIG_FAILURE,GET_LOCK_CONFIG_SUCCESS} from "../constants/lock";

const initialState={
    data:null,
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case GET_LOCK_CONFIG:
        return {
            ...state,
            loading:true
        };
    case GET_LOCK_CONFIG_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    case  GET_LOCK_CONFIG_FAILURE:
        return {
            ...state,
            loading: false,
            loaded: false,
            data: null
        };
    default:
        return state;
    }
}