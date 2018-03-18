import {FETCH_EMPLOYEE} from "../constants/fetchEmployee";

export const getEmployee = (id) => {
    return{
        type: FETCH_EMPLOYEE,
        id
    };
};