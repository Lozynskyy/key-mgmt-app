import {combineReducers} from "redux";
import employees from "./employees";
import employeesInfo from "./employeesInfo";
import deleteEmployee from "./deleteEmployee";
import locks from "./locks";
import createEmployee from "./createEmployee";
import { routerReducer } from "react-router-redux";
import user from "./user";
import { reducer as formReducer } from "redux-form";


const allReducers=combineReducers({
    employees: employees,
    deleteEmployee:deleteEmployee,
    locks: locks,
    user: user,
    employeesInfo: employeesInfo,
    createEmployee:createEmployee,
    routing: routerReducer,
    form: formReducer
});

export default allReducers;