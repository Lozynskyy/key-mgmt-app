import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";
import deleteEmployee from "../logic/deleteEmployeeLogic";
import getEmployeeKeys from "../logic/getEmployeeKeysLogic";
import getLockKeys from "../logic/getLockKeysLogic";
import fetchEmployees from "../logic/getEmployeesDataLogic";
import fetchLocks from "../logic/getLocksDataLogic";
import deleteLock from "../logic/deleteLockLogic";
import createLock from "../logic/createLockLogic";
import updateEmployee from "../logic/updateEmployeeLogic";
import getEmployee from "../logic/getEmployeeLogic";
import createUser from "../logic/createUserLogic";

const actions=[
    ...loginUser,
    ...createEmployee,
    ...deleteEmployee,
    ...getEmployeeKeys,
    ...fetchEmployees,
    ...fetchLocks,
    ...deleteLock,
    ...createLock,
    ...getLockKeys,
    ...updateEmployee,
    ...getEmployee,
    ...createUser
];

export default actions;