import {combineReducers} from "redux";
import employees from "./employees";
import employeesInfo from "./employeesInfo";
import locks from "./locks";
import employeeKeys from "./employeeKeys";
import createEmployee from "./createEmployee";
import { routerReducer } from "react-router-redux";
import user from "./user";
import { reducer as formReducer } from "redux-form";


const allReducers=combineReducers({
    employees: employees,
    locks: locks,
    user: user,
    employeesInfo: employeesInfo,
    createEmployee:createEmployee,
    employeeKeys:employeeKeys,
    routing: routerReducer,
    form: formReducer
});

export default allReducers;