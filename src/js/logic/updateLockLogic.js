import { createLogic } from "redux-logic";
import { UPDATE_LOCK, UPDATE_LOCK_SUCCESS, UPDATE_LOCK_FAILURE } from "../constants/lock";
import {FETCH_LOCKS} from "../constants/lock";
import {putRequest} from "../fetch/request";

const updateLockLogic = createLogic({
    type: UPDATE_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        putRequest(`locks/${action.id}`, action.data)
            .then(() => {
                dispatch({
                    type: UPDATE_LOCK_SUCCESS
                });
                dispatch({
                    type: FETCH_LOCKS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: UPDATE_LOCK_FAILURE,
                });
                done();
            });
    }
});

export default updateLockLogic;