import { createLogic } from "redux-logic";
import { FETCH_EMPLOYEE, FETCH_EMPLOYEE_SUCCESS, FETCH_EMPLOYEE_FAILURE } from "../constants";

const getEmployeeLogic = createLogic({
    type: FETCH_EMPLOYEE,
    latest: true,
    process({ action }, dispatch, done) {
        const path = `https://api-test.opendoors.od.ua:1013/employees/${action.id}`;
        let myInit = {
            method: "GET"
        };
        fetch(path, myInit)
            .then(response => response)
            .then(employee => {
                dispatch({
                    type: FETCH_EMPLOYEE_SUCCESS,
                    payload: employee
                });
                done();
            })
            .catch(err => {
                console.error(err);
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
