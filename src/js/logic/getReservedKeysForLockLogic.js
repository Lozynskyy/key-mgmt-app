import {FETCH_RESERVED_KEYS_FOR_LOCK_FAILURE,FETCH_RESERVED_KEYS_FOR_LOCK_SUCCESS,FETCH_RESERVED_KEYS_FOR_LOCK} from "../constants/key";
import {createLogic} from "redux-logic";
import {getRequest} from "../fetch/request";

const getReservedKeysForLockLogic = createLogic({
    type: FETCH_RESERVED_KEYS_FOR_LOCK,
    latest: true,
    process( dispatch, done) {
        getRequest("keys").then((res) => {
            dispatch({
                type: FETCH_RESERVED_KEYS_FOR_LOCK_SUCCESS,
                payload: res
            });
            done();
        })
            .catch((res) => {
                dispatch({
                    type: FETCH_RESERVED_KEYS_FOR_LOCK_FAILURE,
                    payload: res,
                    error: true
                });
                done();
            });
    }
});

export default [getReservedKeysForLockLogic];