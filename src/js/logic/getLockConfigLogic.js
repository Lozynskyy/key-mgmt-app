import {createLogic} from "redux-logic";
import {GET_LOCK_CONFIG_FAILURE,GET_LOCK_CONFIG_SUCCESS,GET_LOCK_CONFIG} from "../constants/lock";
import {downloadConfigRequest} from "../fetch/downoadConfigRequest";

const getLockConfigLogic = createLogic({
    type: GET_LOCK_CONFIG,
    latest: true,
    process({action}, dispatch, done) {
        downloadConfigRequest(`locks/${action.id}/config`).then((res) => {
            dispatch({
                type: GET_LOCK_CONFIG_SUCCESS,
                payload:res
            });
            done();
        })
            .catch(err => {
                dispatch({
                    type: GET_LOCK_CONFIG_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });

    }
});

export default getLockConfigLogic;
