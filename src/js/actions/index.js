import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";
import getLocks from "../logic/getLocksLogic";
import deleteEmployee from "../logic/deleteEmployeeLogic";
import getEmployeeKeys from "../logic/getEmployeeKeysLogic";

const actions=[
    ...loginUser,
    ...createEmployee,
    ...getLocks,
    ...deleteEmployee,
    ...getEmployeeKeys
];

export default actions;