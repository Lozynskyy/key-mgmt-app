import {DELETE_LOCK_KEY, DELETE_LOCK_KEY_FAILURE, DELETE_LOCK_KEY_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {deleteRequest} from "../fetch/request";
import {FETCH_LOCK_KEYS} from "../constants/key";

const deleteLockKeyLogic = createLogic({
    type: DELETE_LOCK_KEY,
    latest: true,
    process({action}, dispatch, done) {
        deleteRequest(`locks/${action.id}/availablekeys/${action.idKey}`).then(() => {
            dispatch({
                type: DELETE_LOCK_KEY_SUCCESS
            });
            dispatch({
                type: FETCH_LOCK_KEYS
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: DELETE_LOCK_KEY_FAILURE
                });
                done();
            });
    }
});

export default [deleteLockKeyLogic];