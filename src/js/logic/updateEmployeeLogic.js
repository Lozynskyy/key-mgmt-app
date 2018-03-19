import {createLogic} from "redux-logic";
import {UPDATE_EMPLOYEE, UPDATE_EMPLOYEE_FAILURE, UPDATE_EMPLOYEE_SUCCESS} from "../constants/employee";
import {putRequest} from "../fetch/request";
import {FETCH_EMPLOYEES} from "../constants/employee";


const updateEmployeeLogic = createLogic({
    type: UPDATE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        putRequest(`employees/${action.id}`, action.data).then(() => {
            dispatch({
                type: UPDATE_EMPLOYEE_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEES
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: UPDATE_EMPLOYEE_FAILURE,
                });
                done();
            });
    }
});

export default [updateEmployeeLogic];