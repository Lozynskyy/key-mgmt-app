import {createLogic} from "redux-logic";
import {DELETE_LOCK,DELETE_LOCK_SUCCESS,DELETE_LOCK_FAILURE} from "../constants";

const deleteLockLogic=createLogic({
    type:DELETE_LOCK,
    latest:true,
    process({getState,action},dispatch,done){
        const path=`https://api-test.opendoors.od.ua:1013/locks/${action.id}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_LOCK_SUCCESS
                    });
                    done();
                }
                else {
                    dispatch({
                        type:DELETE_LOCK_FAILURE
                    });
                    done();
                }
            })
            .catch(()=>{
                dispatch({
                    type:DELETE_LOCK_FAILURE
                });
                done();
            });
    }
});

export default [deleteLockLogic];