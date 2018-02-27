import {createLogic} from "redux-logic";
import {DELETE_EMPLOYEE,DELETE_EMPLOYEE_SUCCESS,DELETE_EMPLOYEE_FAILURE} from "../constants";

const deleteEmployeeLogic=createLogic({
    type:DELETE_EMPLOYEE,
    latest:true,
    process({getState,action},dispatch,done){
        const path="https://api-test.opendoors.od.ua:1013/employees/22";
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                console.log(res);
                console.log(res.status);
                if(res.status===204){
                    dispatch({
                        type:DELETE_EMPLOYEE_SUCCESS
                    });
                    done();
                }
                else {
                    dispatch({
                        type:DELETE_EMPLOYEE_FAILURE
                    });
                    done();
                }
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