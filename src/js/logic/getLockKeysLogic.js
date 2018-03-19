import {FETCH_LOCK_KEYS, FETCH_LOCK_KEYS_FAILURE, FETCH_LOCK_KEYS_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {getRequest} from "../fetch/request";

const getLockKeysLogic = createLogic({
    type: FETCH_LOCK_KEYS,
    latest: true,
    process({action}, dispatch, done) {
        getRequest(`locks/${action.id}/availablekeys`).then((payload) => {
            dispatch({
                type: FETCH_LOCK_KEYS_SUCCESS,
                payload
            });
            done();
        })
            .catch((err) => {
                dispatch({
                    type: FETCH_LOCK_KEYS_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });
    }
});

export default [getLockKeysLogic];