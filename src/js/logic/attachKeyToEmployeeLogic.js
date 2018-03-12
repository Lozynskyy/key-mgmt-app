import {ATTACH_KEY_TO_EMPLOYEE, ATTACH_KEY_TO_EMPLOYEE_FAILURE, ATTACH_KEY_TO_EMPLOYEE_SUCCESS} from "../constants";
import {createLogic} from "redux-logic";

const attachKeyToEmployeeLogic=createLogic({
    type:ATTACH_KEY_TO_EMPLOYEE,
    latest:true,
    process({action},dispatch,done){
        console.log(action.employeeID);
        console.log(action.key);
        const path=`https://api-test.opendoors.od.ua:1013/employees/${action.employeeID}/keys`;
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
                    done();
                }
                else {
                    dispatch({
                        type:ATTACH_KEY_TO_EMPLOYEE_FAILURE
                    });
                    done();
                }
            })
            .catch(()=>{
                dispatch({
                    type:ATTACH_KEY_TO_EMPLOYEE_FAILURE
                });
            });
    }
});
export default [attachKeyToEmployeeLogic];