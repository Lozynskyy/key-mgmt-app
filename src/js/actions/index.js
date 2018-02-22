import loginUser from "../logic/loginLogic";
import createEmployee from "../logic/createEmployeeLogic";

const actions=[
    ...loginUser,
    ...createEmployee
];

export default actions;