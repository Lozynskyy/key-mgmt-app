import {createLogic} from "redux-logic";
import {UPDATE_EMPLOYEE_KEY, UPDATE_EMPLOYEE_KEY_FAILURE, UPDATE_EMPLOYEE_KEY_SUCCESS} from "../constants/key";
import {patchRequest} from "../fetch/request";
import {FETCH_EMPLOYEE_KEYS} from "../constants/key";


const updateEmployeeKeyLogic = createLogic({
    type: UPDATE_EMPLOYEE_KEY,
    latest: true,
    process({action}, dispatch, done) {
        console.log(action.idEmployee);
        console.log(action.idKey);
        console.log(action.data);
        patchRequest(`employees/${action.idEmployee}/keys/${action.idKey}`, action.data).then(() => {
            dispatch({
                type: UPDATE_EMPLOYEE_KEY_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEE_KEYS
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: UPDATE_EMPLOYEE_KEY_FAILURE,
                });
                done();
            });
    }
});

export default [updateEmployeeKeyLogic];