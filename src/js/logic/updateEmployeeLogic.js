import {createLogic} from "redux-logic";
import {UPDATE_EMPLOYEE,UPDATE_EMPLOYEE_FAILURE,UPDATE_EMPLOYEE_SUCCESS} from "../constants/updateEmployee";
import {url} from "../utilities/url";


const updateEmployeeLogic = createLogic({
    type: UPDATE_EMPLOYEE,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/employees/${action.id}`;
        let myInit = {
            method: "PUT",
            body:JSON.stringify(action.data)
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: UPDATE_EMPLOYEE_SUCCESS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: UPDATE_EMPLOYEE_FAILURE,
                });
                done();
            });
    }
});

export default [updateEmployeeLogic];