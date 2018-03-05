import {FETCH_EMPLOYEE,FETCH_EMPLOYEE_SUCCESS,FETCH_EMPLOYEE_FAILURE} from "../constants";

const initialState={
    data:{},
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
        case FETCH_EMPLOYEE:
            return {
                ...state,
                loading:true
            };
        case FETCH_EMPLOYEE_SUCCESS:
            return{
                ...state,
                loading:false,
                loaded:true,
                data:action.payload
            };
        case  FETCH_EMPLOYEE_FAILURE:
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