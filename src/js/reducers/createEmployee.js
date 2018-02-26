import {CREATE_EMPLOYEE, CREATE_EMPLOYEE_FAILURE, CREATE_EMPLOYEE_SUCCESS} from "../constants";

const initialState={
    loading:false,
    loaded:false,
    response:{}
};

export default function (state=initialState, action) {
    switch (action.type){
    case CREATE_EMPLOYEE:
        return {
            ...state,
            loading:true
        };
    case CREATE_EMPLOYEE_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
        };

    case  CREATE_EMPLOYEE_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
        };
    default:
        return state;
    }
}