import {FETCH_EMPLOYEES,FETCH_EMPLOYEES_SUCCESS,FETCH_EMPLOYEES_FAILURE} from "../constants";

const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case FETCH_EMPLOYEES:
        return {
            ...state,
            loading:true
        };
    case FETCH_EMPLOYEES_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    case  FETCH_EMPLOYEES_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
            data:[]
        };
    default:
        return state;
    }
}