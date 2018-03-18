import {DELETE_EMPLOYEE_KEY, DELETE_EMPLOYEE_KEY_FAILURE, DELETE_EMPLOYEE_KEY_SUCCESS} from "../constants/deleteEmployeeKey";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";
import {FETCH_EMPLOYEE_KEYS} from "../constants/fetchEmployeeKeys";

const deleteEmployeeKeyLogic=createLogic({
    type:DELETE_EMPLOYEE_KEY,
    latest:true,
    process({action},dispatch,done){
        const path=`${url}/employees/${action.idEmpl}/keys/${action.idKey}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_EMPLOYEE_KEY_SUCCESS
                    });
                }
                else {
                    dispatch({
                        type:DELETE_EMPLOYEE_KEY_FAILURE
                    });
                }
                dispatch({
                    type:FETCH_EMPLOYEE_KEYS
                });
                done();
            })
            .catch(()=>{
                dispatch({
                    type:DELETE_EMPLOYEE_KEY_FAILURE
                });
                done();
            });
    }
});

export default [deleteEmployeeKeyLogic];