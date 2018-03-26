import {ATTACH_KEY_TO_LOCK,ATTACH_KEY_TO_LOCK_SUCCESS,ATTACH_KEY_TO_LOCK_FAILURE,FETCH_LOCK_KEYS} from "../constants/key";

import {createLogic} from "redux-logic";
import {postRequest} from "../fetch/request";

const attachKeyToLockLogic = createLogic({
    type: ATTACH_KEY_TO_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        postRequest(`locks/${action.idLock}/availablekeys`, action.idKey).then(() => {
            dispatch({
                type: ATTACH_KEY_TO_LOCK_SUCCESS
            });
            dispatch({
                type: FETCH_LOCK_KEYS,
                id:action.idLock
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: ATTACH_KEY_TO_LOCK_FAILURE
                });
                done();
            });
    }
});
export default attachKeyToLockLogic;