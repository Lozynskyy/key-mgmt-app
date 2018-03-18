import {DELETE_EMPLOYEE_KEY, DELETE_EMPLOYEE_KEY_FAILURE, DELETE_EMPLOYEE_KEY_SUCCESS} from "../constants/deleteEmployeeKey";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";

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
                console.log(res);
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