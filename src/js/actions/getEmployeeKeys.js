import {FETCH_EMPLOYEE_KEYS} from "../constants";

export  function getEmployeeKeys(id){
    return{
        type:FETCH_EMPLOYEE_KEYS,
        id
    };
}