import {createLogic} from "redux-logic";
import {CREATE_EMPLOYEE_SUCCESS,CREATE_EMPLOYEE,CREATE_EMPLOYEE_FAILURE} from "../constants";


const createEmployeeLogic = createLogic({
    type: CREATE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/employees";
        let myInit = {
            method: "POST",
            body:JSON.stringify(action.values)
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: CREATE_EMPLOYEE_SUCCESS
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