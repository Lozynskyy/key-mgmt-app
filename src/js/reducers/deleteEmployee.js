import {DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE,DELETE_EMPLOYEE_FAILURE} from "../constants";

const initialState={
    data:[],
    loading:false,
    loaded:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case DELETE_EMPLOYEE:
        return {
            ...state,
            loading:true
        };
    case DELETE_EMPLOYEE_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            data:action.payload
        };
    case  DELETE_EMPLOYEE_FAILURE:
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