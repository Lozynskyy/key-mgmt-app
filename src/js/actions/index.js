import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";
import getLocks from "../logic/getLocksLogic";
import deleteEmployee from "../logic/deleteEmployeeLogic";

const actions=[
    ...loginUser,
    ...createEmployee,
    ...getLocks,
    ...deleteEmployee
];

export default actions;