import {UPDATE_EMPLOYEE} from "../constants";

export  function updateEmployee(id,data){
    return{
        type:UPDATE_EMPLOYEE,
        id,
        data
    };
}