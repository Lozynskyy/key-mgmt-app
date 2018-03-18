import {CREATE_EMPLOYEE} from "../constants/createEmployee";


export const createEmployee = (values) => {
    return {
        type: CREATE_EMPLOYEE,
        values
    };
};