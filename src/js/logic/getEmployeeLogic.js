import {createLogic} from "redux-logic";
import {FETCH_EMPLOYEE, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE} from "../constants/employee";
import {getRequest} from "../fetch/request";

const getEmployeeLogic = createLogic({
    type: FETCH_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        getRequest(`employees/${action.id}`).then((employee) => {
            dispatch({
                type: FETCH_EMPLOYEE_SUCCESS,
                payload: employee
            });
            done();
        })
            .catch(err => {
                dispatch({
                    type: FETCH_EMPLOYEE_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });
    }
});

export default [getEmployeeLogic];
