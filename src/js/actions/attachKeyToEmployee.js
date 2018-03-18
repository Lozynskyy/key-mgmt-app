import {ATTACH_KEY_TO_EMPLOYEE} from "../constants/attachKeyToEmployee";

export const attachKeyToEmployee = (employeeID,key) => {
    return{
        type:ATTACH_KEY_TO_EMPLOYEE,
        employeeID,
        key
    };
};