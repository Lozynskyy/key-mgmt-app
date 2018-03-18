import {ATTACH_KEY_TO_EMPLOYEE, ATTACH_KEY_TO_EMPLOYEE_FAILURE, ATTACH_KEY_TO_EMPLOYEE_SUCCESS} from "../constants/attachKeyToEmployee";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";
import {FETCH_EMPLOYEE_KEYS} from "../constants/fetchEmployeeKeys";

const attachKeyToEmployeeLogic=createLogic({
    type:ATTACH_KEY_TO_EMPLOYEE,
    latest:true,
    process({action},dispatch,done){
        const path=`${url}/${action.employeeID}/keys`;
        const myInit={
            method:"POST",
            body:JSON.stringify(action.key)
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:ATTACH_KEY_TO_EMPLOYEE_SUCCESS
                    });
                    dispatch({
                        type:FETCH_EMPLOYEE_KEYS
                    });
                }
                else {
                    dispatch({
                        type:ATTACH_KEY_TO_EMPLOYEE_FAILURE
                    });
                }
                done();
            })
            .catch(()=>{
                dispatch({
                    type:ATTACH_KEY_TO_EMPLOYEE_FAILURE
                });
                done();
            });
    }
});
export default [attachKeyToEmployeeLogic];