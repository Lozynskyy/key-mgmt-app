import loginUser from "./loginLogic";
import createEmployee from "./createEmployeeLogic";
import deleteEmployee from "./deleteEmployeeLogic";
import getEmployeeKeys from "./getEmployeeKeysLogic";
import getLockKeys from "./getLockKeysLogic";
import fetchEmployees from "./getEmployeesDataLogic";
import fetchLocks from "./getLocksDataLogic";
import deleteLock from "./deleteLockLogic";
import createLock from "./createLockLogic";
import updateEmployee from "./updateEmployeeLogic";
import getEmployee from "./getEmployeeLogic";
import createUser from "./createUserLogic";
import deleteEmployeeKey from "./deleteEmployeeKeyLogic";
import attachKeyToEmployee from "./attachKeyToEmployeeLogic";
import deleteLockKey from "./deleteLockKeyLogic";
import updateEmployeeKey from "./updateEmployeeKeyLogic";
import getReservedKeysForLock from "./getReservedKeysForLockLogic";
import attachKeyToLock from "./attachKeyToLockLogic";
import updateLock from "./updateLockLogic";
import getLockConfig from "./getLockConfigLogic";

const actions=[
    loginUser,
    createEmployee,
    deleteEmployee,
    getEmployeeKeys,
    fetchEmployees,
    fetchLocks,
    deleteLock,
    createLock,
    getLockKeys,
    updateEmployee,
    getEmployee,
    createUser,
    deleteEmployeeKey,
    attachKeyToEmployee,
    deleteLockKey,
    updateEmployeeKey,
    getReservedKeysForLock,
    attachKeyToLock,
    updateLock,
    getLockConfig
];

export default actions;