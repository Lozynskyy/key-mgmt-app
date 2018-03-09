import {FETCH_EMPLOYEE_KEYS,FETCH_EMPLOYEE_KEYS_FAILURE,FETCH_EMPLOYEE_KEYS_SUCCESS} from "../constants";
import {createLogic} from "redux-logic";

const getEmployeeKeysLogic=createLogic({
    type: FETCH_EMPLOYEE_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        const path=`https://api-test.opendoors.od.ua:1013/employees/${action.id}/keys`;
        let myInit = {
            method: "GET",
        };
        fetch(path,myInit)
            .then((res) => {
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