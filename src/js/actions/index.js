import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";
import fetchEmployees from "../logic/getEmployeesDataLogic";
import fetchLocks from "../logic/getLocksDataLogic";

const actions=[
    ...loginUser,
    ...createEmployee,
    ...fetchEmployees,
    ...fetchLocks
];

export default actions;