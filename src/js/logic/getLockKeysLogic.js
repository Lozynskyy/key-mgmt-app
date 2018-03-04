import {FETCH_LOCK_KEYS,FETCH_LOCK_KEYS_SUCCESS,FETCH_LOCK_KEYS_FAILURE} from "../constants";
import {createLogic} from "redux-logic";

const getLockKeysLogic=createLogic({
    type: FETCH_LOCK_KEYS,
    latest: true,
    process({getState,action}, dispatch, done) {
        const path=`https://api-test.opendoors.od.ua:1013/locks/${action.id}/availablekeys`;
        let myInit = {
            method: "GET",
        };
        fetch(path,myInit)
            .then((res) => {
                dispatch({
                    type: FETCH_LOCK_KEYS_SUCCESS,
                    payload: res
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: FETCH_LOCK_KEYS_FAILURE,
                    payload: res
                });
                done();
            });
    }
});

export default [getLockKeysLogic];