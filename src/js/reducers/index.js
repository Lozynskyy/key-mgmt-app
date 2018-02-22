import {combineReducers} from "redux";
import employees from "./employees";
import employeesInfo from "./employeesInfo";
import locks from "./locks";
import createEmployee from "./createEmployee";
import { routerReducer } from "react-router-redux";
import user from "./user";

const allReducers=combineReducers({
    employees: employees,
    locks: locks,
    user: user,
    employeesInfo: employeesInfo,
    createEmployee:createEmployee,
    routing: routerReducer
});

export default allReducers;