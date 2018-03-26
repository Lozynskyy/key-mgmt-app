import {FETCH_EMPLOYEE_KEYS, FETCH_EMPLOYEE_KEYS_FAILURE, FETCH_EMPLOYEE_KEYS_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {getRequest} from "../fetch/request";

const getEmployeeKeysLogic = createLogic({
    type: FETCH_EMPLOYEE_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        getRequest(`employees/${action.id}/keys`).then((res) => {
            dispatch({
                type: FETCH_EMPLOYEE_KEYS_SUCCESS,
                payload: res
            });
            done();
        })
            .catch((res) => {
                dispatch({
                    type: FETCH_EMPLOYEE_KEYS_FAILURE,
                    payload: res,
                    error: true
                });
                done();
            });
    }
});

export default getEmployeeKeysLogic;