import {FETCH_EMPLOYEE} from "../constants";

export function getEmployee(id){
    return{
        type: FETCH_EMPLOYEE,
        id
    };
}