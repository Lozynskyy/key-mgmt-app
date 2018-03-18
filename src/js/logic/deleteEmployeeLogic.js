import {createLogic} from "redux-logic";
import {DELETE_EMPLOYEE,DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE} from "../constants/deleteEmployee";
import {url} from "../utilities/url";

const deleteEmployeeLogic=createLogic({
    type:DELETE_EMPLOYEE,
    latest:true,
    process({action},dispatch,done){
        const path=`${url}/employees/${action.id}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_EMPLOYEE_SUCCESS
                    });
                }
                else {
                    dispatch({
                        type:DELETE_EMPLOYEE_FAILURE
                    });
                }
                done();
            })
            .catch(()=>{
                dispatch({
                    type:DELETE_EMPLOYEE_FAILURE
                });
                done();
            });
    }
});

export default [deleteEmployeeLogic];