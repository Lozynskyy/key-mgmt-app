import {FETCH_EMPLOYEES} from "../constants/fetchEmployees";

export const getEmployeesData = () => {
    return{
        type: FETCH_EMPLOYEES
    };
};