import {ATTACH_KEY_TO_EMPLOYEE} from "../constants";

export function attachKeyToEmployee(employeeID,key) {
    return{
        type:ATTACH_KEY_TO_EMPLOYEE,
        employeeID,
        key
    };
}