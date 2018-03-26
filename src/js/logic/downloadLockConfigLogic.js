import {createLogic} from "redux-logic";
import {GET_LOCK_CONFIG,GET_LOCK_CONFIG_FAILURE,GET_LOCK_CONFIG_SUCCESS} from "../constants/lock";
import {getRequest} from "../fetch/request";

const downloadLockConfigLogic = createLogic({
    type: GET_LOCK_CONFIG,
    latest: true,
    process({action}, dispatch, done) {
        getRequest(`locks/${action.id}/config`)
            .then(() => {
                dispatch({
                    type: GET_LOCK_CONFIG_SUCCESS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: GET_LOCK_CONFIG_FAILURE,
                    error: true
                });
                done();
            });
    }
});

export default [downloadLockConfigLogic];