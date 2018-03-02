import {FETCH_EMPLOYEES} from "../constants";

export function getEmployeesData(){
    return{
        type: FETCH_EMPLOYEES
    };
}