import {CREATE_EMPLOYEE} from "../constants";


export function createEmployee(values) {
    return {
        type: CREATE_EMPLOYEE,
        values
    };
}

