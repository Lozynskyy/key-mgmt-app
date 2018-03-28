import { FETCH_LOCK, FETCH_LOCK_FAILURE, FETCH_LOCK_SUCCESS } from "../constants";

const initialState={
    data:{},
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case FETCH_LOCK:
        return {
            ...state,
            loading:true
        };
    case FETCH_LOCK_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    case  FETCH_LOCK_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
            data:{}
        };
    default:
        return state;
    }
}