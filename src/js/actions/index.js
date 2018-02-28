import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";
import deleteEmployee from "../logic/deleteEmployeeLogic";
import getEmployeeKeys from "../logic/getEmployeeKeysLogic";
import fetchEmployees from "../logic/getEmployeesDataLogic";
import fetchLocks from "../logic/getLocksDataLogic";

const actions=[
    ...loginUser,
    ...createEmployee,
    ...deleteEmployee,
    ...getEmployeeKeys,
    ...fetchEmployees,
    ...fetchLocks
];

export default actions;