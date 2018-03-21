import {createLogic} from "redux-logic";
import {CREATE_LOCK_FAILURE, CREATE_LOCK, CREATE_LOCK_SUCCESS} from "../constants/lock";
import {postRequest} from "../fetch/request";
import {FETCH_LOCKS} from "../constants/lock";

const createLockLogic = createLogic({
    type: CREATE_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        postRequest("locks", action.values).then(() => {
            dispatch({
                type: CREATE_LOCK_SUCCESS
            });
            dispatch({
                type: FETCH_LOCKS
            });
            done();
        })
            .catch(() => {
                dispatch({
                    type: CREATE_LOCK_FAILURE,
                });
                done();
            });
    }
});

export default [createLockLogic];