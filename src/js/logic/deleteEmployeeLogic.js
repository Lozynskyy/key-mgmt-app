import {createLogic} from "redux-logic";
import {DELETE_EMPLOYEE, DELETE_EMPLOYEE_SUCCESS, DELETE_EMPLOYEE_FAILURE} from "../constants/employee";
import {deleteRequest} from "../fetch/request";
import {FETCH_EMPLOYEES} from "../constants/employee";

const deleteEmployeeLogic = createLogic({
    type: DELETE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        deleteRequest(`employees/${action.id}`).then(() => {
            dispatch({
                type: DELETE_EMPLOYEE_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEES
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: DELETE_EMPLOYEE_FAILURE
                });
                done();
            });
    }
});

export default deleteEmployeeLogic;