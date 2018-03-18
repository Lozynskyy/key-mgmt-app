import {FETCH_LOCK_KEYS,FETCH_LOCK_KEYS_FAILURE,FETCH_LOCK_KEYS_SUCCESS} from "../constants/fetchLockKeys";
import {createLogic} from "redux-logic";
import {url} from "../utilities/url";

const getLockKeysLogic=createLogic({
    type: FETCH_LOCK_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/locks/${action.id}/availablekeys`;
        let myInit = {
            method: "GET",
        };
        fetch(path,myInit)
            .then((payload) => {
                dispatch({
                    type: FETCH_LOCK_KEYS_SUCCESS,
                    payload
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: FETCH_LOCK_KEYS_FAILURE
                });
                done();
            });
    }
});

export default [getLockKeysLogic];