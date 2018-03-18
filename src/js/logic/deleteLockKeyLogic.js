import {DELETE_LOCK_KEY, DELETE_LOCK_KEY_FAILURE, DELETE_LOCK_KEY_SUCCESS} from "../constants/deleteLockKey";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";
import {FETCH_LOCK_KEYS} from "../constants/fetchLockKeys";

const deleteLockKeyLogic=createLogic({
    type:DELETE_LOCK_KEY,
    latest:true,
    process({action},dispatch,done){
        const path=`${url}/locks/${action.id}/availablekeys/${action.idKey}`;
        let myInit={
            method:"DELETE"
        };
        fetch(path,myInit)
            .then((res)=>{
                if(res.status===200){
                    dispatch({
                        type:DELETE_LOCK_KEY_SUCCESS
                    });
                }
                else {
                    dispatch({
                        type:DELETE_LOCK_KEY_FAILURE
                    });
                }
                dispatch({
                    type:FETCH_LOCK_KEYS
                });
                done();
            })
            .catch(()=>{
                dispatch({
                    type:DELETE_LOCK_KEY_FAILURE
                });
                done();
            });
    }
});

export default [deleteLockKeyLogic];