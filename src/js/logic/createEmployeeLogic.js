import {createLogic} from "redux-logic";
import {CREATE_EMPLOYEE_SUCCESS,CREATE_EMPLOYEE,CREATE_EMPLOYEE_FAILURE} from "../constants";


const createEmployeeLogic = createLogic({
    type: CREATE_EMPLOYEE,
    latest: true,
    process({getState,action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/employees";
        let myInit = {
            method: "POST",
            mode: "cors",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization":"Bearer "+action.token
            },
            body:JSON.stringify({"surname":action.surname,"name":action.name,"age":action.age})
        };
        fetch(path,myInit)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: CREATE_EMPLOYEE_SUCCESS
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: CREATE_EMPLOYEE_FAILURE,
                });
                done();
            });
    }
});

export default [createEmployeeLogic];