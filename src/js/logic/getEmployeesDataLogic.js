import { createLogic } from "redux-logic";
import { FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE } from "../constants/fetchEmployees";
import {url} from "../utilities/url";

const getEmployeesDataLogic = createLogic({
    type: FETCH_EMPLOYEES,
    latest: true,
    process(_, dispatch, done) {
        const path = `${url}/employees`;
        let myInit = {
            method: "GET"
        };
        fetch(path, myInit)
            .then(response => response)
            .then(employeesArr => {
                dispatch({
                    type: FETCH_EMPLOYEES_SUCCESS,
                    payload: employeesArr
                });
                done();
            })
            .catch(err => {
                console.error(err);
                dispatch({ 
                    type: FETCH_EMPLOYEES_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });
    }
});

export default [getEmployeesDataLogic];
