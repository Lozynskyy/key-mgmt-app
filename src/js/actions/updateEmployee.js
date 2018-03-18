import {UPDATE_EMPLOYEE} from "../constants/updateEmployee";

export  const updateEmployee = (id,data) => {
    return{
        type:UPDATE_EMPLOYEE,
        id,
        data
    };
};