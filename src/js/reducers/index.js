import {combineReducers} from "redux";
import employees from "./employees";
import locks from "./locks";
import employeeKeys from "./employeeKeys";
import { routerReducer } from "react-router-redux";
import user from "./user";
import { reducer as formReducer } from "redux-form";
import lockKeys from "./lockKeys";

const allReducers=combineReducers({
    employees: employees,
    locks: locks,
    user: user,
    employeeKeys:employeeKeys,
    routing: routerReducer,
    form: formReducer,
    lockKeys
});

export default allReducers;