import {DELETE_EMPLOYEE_KEY, DELETE_EMPLOYEE_KEY_FAILURE, DELETE_EMPLOYEE_KEY_SUCCESS} from "../constants";
import {createLogic} from "redux-logic";

const deleteEmployeeKeyLogic=createLogic({
    type:DELETE_EMPLOYEE_KEY,
    latest:true,
    process({action},dispatch,done){
        const path=`https://api-test.opendoors.od.ua:1013/employees/${action.idEmpl}/keys/${action.idKey}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_EMPLOYEE_KEY_SUCCESS
                    });
                    done();
                }
                else {
                    dispatch({
                        type:DELETE_EMPLOYEE_KEY_FAILURE
                    });
                    done();
                }
            })
            .catch(()=>{
                dispatch({
                    type:DELETE_EMPLOYEE_KEY_FAILURE
                });
            });
    }
});

export default [deleteEmployeeKeyLogic];