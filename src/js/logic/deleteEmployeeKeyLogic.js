import {DELETE_EMPLOYEE_KEY, DELETE_EMPLOYEE_KEY_FAILURE, DELETE_EMPLOYEE_KEY_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {deleteRequest} from "../fetch/request";
import {FETCH_EMPLOYEE_KEYS} from "../constants/key";

const deleteEmployeeKeyLogic = createLogic({
    type: DELETE_EMPLOYEE_KEY,
    latest: true,
    process({action}, dispatch, done) {
        deleteRequest(`employees/${action.idEmpl}/keys/${action.idKey}`).then(() => {
            dispatch({
                type: DELETE_EMPLOYEE_KEY_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEE_KEYS
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: DELETE_EMPLOYEE_KEY_FAILURE
                });
                done();
            });
    }
});

export default [deleteEmployeeKeyLogic];