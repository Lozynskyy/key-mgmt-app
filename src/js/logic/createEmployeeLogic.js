import {createLogic} from "redux-logic";
import {CREATE_EMPLOYEE_SUCCESS, CREATE_EMPLOYEE, CREATE_EMPLOYEE_FAILURE} from "../constants/employee";
import {postRequest} from "../fetch/request";
import {FETCH_EMPLOYEES} from "../constants/employee";

const createEmployeeLogic = createLogic({
    type: CREATE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        postRequest("employees", action.values).then(() => {
            dispatch({
                type: CREATE_EMPLOYEE_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEES
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: CREATE_EMPLOYEE_FAILURE,
                });
                done();
            });
    }
});

export default [createEmployeeLogic];