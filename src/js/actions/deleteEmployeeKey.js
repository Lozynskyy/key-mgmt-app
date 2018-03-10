import {DELETE_EMPLOYEE_KEY} from "../constants";

export function deleteEmployeeKey(idEmpl,idKey) {
    return{
        type:DELETE_EMPLOYEE_KEY,
        idEmpl,
        idKey
    };
}