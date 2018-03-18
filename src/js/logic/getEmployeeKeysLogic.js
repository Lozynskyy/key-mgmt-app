import {FETCH_EMPLOYEE_KEYS,FETCH_EMPLOYEE_KEYS_FAILURE,FETCH_EMPLOYEE_KEYS_SUCCESS} from "../constants/fetchEmployeeKeys";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";

const getEmployeeKeysLogic=createLogic({
    type: FETCH_EMPLOYEE_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/employees/${action.id}/keys`;
        let myInit = {
            method: "GET",
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: FETCH_EMPLOYEE_KEYS_SUCCESS,
                    payload: res
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: FETCH_EMPLOYEE_KEYS_FAILURE,
                    payload: res
                });
                done();
            });
    }
});

export default [getEmployeeKeysLogic];