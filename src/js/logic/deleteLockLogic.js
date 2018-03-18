import {createLogic} from "redux-logic";
import {DELETE_LOCK,DELETE_LOCK_SUCCESS,DELETE_LOCK_FAILURE} from "../constants/deleteLock";
import {url} from "../utilities/url";
import {FETCH_LOCKS} from "../constants/fetchLocks";

const deleteLockLogic=createLogic({
    type:DELETE_LOCK,
    latest:true,
    process({action},dispatch,done){
        const path=`${url}/locks/${action.id}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_LOCK_SUCCESS
                    });
                }
                else {
                    dispatch({
                        type:DELETE_LOCK_FAILURE
                    });
                }
                dispatch({
                    type:FETCH_LOCKS
                });
                done();
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