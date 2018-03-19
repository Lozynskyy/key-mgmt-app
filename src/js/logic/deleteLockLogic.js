import {createLogic} from "redux-logic";
import {DELETE_LOCK, DELETE_LOCK_SUCCESS, DELETE_LOCK_FAILURE} from "../constants/lock";
import {deleteRequest} from "../fetch/request";
import {FETCH_LOCKS} from "../constants/lock";

const deleteLockLogic = createLogic({
    type: DELETE_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        deleteRequest(`locks/${action.id}`).then(() => {
            dispatch({
                type: DELETE_LOCK_SUCCESS
            });
            dispatch({
                type: FETCH_LOCKS
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: DELETE_LOCK_FAILURE
                });
                done();
            });
    }
});

export default [deleteLockLogic];