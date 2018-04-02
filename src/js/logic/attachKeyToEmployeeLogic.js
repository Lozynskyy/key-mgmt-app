import {ATTACH_KEY_TO_EMPLOYEE, ATTACH_KEY_TO_EMPLOYEE_FAILURE, ATTACH_KEY_TO_EMPLOYEE_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {postRequest} from "../fetch/request";
import {FETCH_EMPLOYEE_KEYS} from "../constants/key";

const attachKeyToEmployeeLogic = createLogic({
    type: ATTACH_KEY_TO_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        console.log(action);
        postRequest(`employees/${action.employeeID}/keys`, action.key).then(() => {
            dispatch({
                type: ATTACH_KEY_TO_EMPLOYEE_SUCCESS
            });
            dispatch({
                type: FETCH_EMPLOYEE_KEYS,
                id:action.employeeID
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: ATTACH_KEY_TO_EMPLOYEE_FAILURE
                });
                done();
            });
    }
});
export default attachKeyToEmployeeLogic;