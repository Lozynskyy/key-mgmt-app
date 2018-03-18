import {DELETE_EMPLOYEE_KEY} from "../constants/deleteEmployeeKey";

export const deleteEmployeeKey = (idEmpl,idKey) => {
    return{
        type:DELETE_EMPLOYEE_KEY,
        idEmpl,
        idKey
    };
};