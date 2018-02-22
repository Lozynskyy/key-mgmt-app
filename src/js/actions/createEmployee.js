import {CREATE_EMPLOYEE} from "../constants";


export function createEmployee(token,surname,name,age) {
    return {
        type: CREATE_EMPLOYEE,
        token,
        surname,
        name,
        age
    };
}

