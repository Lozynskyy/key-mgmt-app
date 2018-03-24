import {createLogic} from "redux-logic";
import {FETCH_LOCKS, FETCH_LOCKS_SUCCESS, FETCH_LOCKS_FAILURE} from "../constants/lock";
import {getRequest} from "../fetch/request";

const getLocksDataLogic = createLogic({
    type: FETCH_LOCKS,
    latest: true,
    process({action}, dispatch, done) {
        //TODO:Bad code
        if(action.filter) {
            getRequest(`locks${action.filter}`).then((locksArr) => {
                dispatch({
                    type: FETCH_LOCKS_SUCCESS,
                    payload: locksArr
                });
                done();
            })
                .catch(err => {
                    dispatch({
                        type: FETCH_LOCKS_FAILURE,
                        payload: err,
                        error: true
                    });
                    done();
                });
        }
        else {
            getRequest("locks").then((locksArr) => {
                dispatch({
                    type: FETCH_LOCKS_SUCCESS,
                    payload: locksArr
                });
                done();
            })
                .catch(err => {
                    dispatch({
                        type: FETCH_LOCKS_FAILURE,
                        payload: err,
                        error: true
                    });
                    done();
                });
        }
    }
});

export default [getLocksDataLogic];