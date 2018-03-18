import {createLogic} from "redux-logic";
import {CREATE_EMPLOYEE_SUCCESS,CREATE_EMPLOYEE,CREATE_EMPLOYEE_FAILURE} from "../constants/createEmployee";
import {url} from "../utilities/url";
import {FETCH_EMPLOYEES} from "../constants/fetchEmployees";

const createEmployeeLogic = createLogic({
    type: CREATE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/employees`;
        let myInit = {
            method: "POST",
            body:JSON.stringify(action.values)
        };
        fetch(path,myInit)
            .then(() => {
                dispatch({
                    type: CREATE_EMPLOYEE_SUCCESS
                });
                dispatch({
                    type: FETCH_EMPLOYEES
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: CREATE_EMPLOYEE_FAILURE,
                });
                done();
            });
    }
});

export default [createEmployeeLogic];