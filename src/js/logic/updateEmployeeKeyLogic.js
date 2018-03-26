import {createLogic} from "redux-logic";
import {UPDATE_EMPLOYEE_KEY, UPDATE_EMPLOYEE_KEY_FAILURE, UPDATE_EMPLOYEE_KEY_SUCCESS,FETCH_EMPLOYEE_KEYS} from "../constants/key";
import {patchRequest} from "../fetch/request";


const updateEmployeeKeyLogic = createLogic({
    type: UPDATE_EMPLOYEE_KEY,
    latest: true,
    process({action}, dispatch, done) {
        patchRequest(`employees/${action.idEmployee}/keys/${action.idKey}`, action.data).then(() => {
            dispatch({
                type: UPDATE_EMPLOYEE_KEY_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEE_KEYS,
                id:action.idEmployee
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

export default updateEmployeeKeyLogic;