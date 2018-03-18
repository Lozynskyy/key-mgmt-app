import {FETCH_EMPLOYEE_KEYS} from "../constants/fetchEmployeeKeys";

export  const getEmployeeKeys = (id) => {
    return{
        type:FETCH_EMPLOYEE_KEYS,
        id
    };
};