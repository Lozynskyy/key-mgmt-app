import {FETCH_LOCK_KEYS,FETCH_LOCK_KEYS_FAILURE,FETCH_LOCK_KEYS_SUCCESS} from "../constants";
import {createLogic} from "redux-logic";

const getLockKeysLogic=createLogic({
    type: FETCH_LOCK_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        const path=`https://api-test.opendoors.od.ua:1013/locks/${action.id}/availablekeys`;
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
            .catch((err) => {
                console.log(err);
                dispatch({
                    type: FETCH_LOCK_KEYS_FAILURE
                });
                done();
            });
    }
});

export default [getLockKeysLogic];