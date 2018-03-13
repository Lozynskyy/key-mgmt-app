import { createLogic } from "redux-logic";
import { FETCH_LOCK, FETCH_LOCK_SUCCESS, FETCH_LOCK_FAILURE } from "../constants";

const getLockLogic = createLogic({
    type: FETCH_LOCK,
    latest: true,
    process({ getState, action }, dispatch, done) {
        const path = `https://api-test.opendoors.od.ua:1013/locks/${action.id}`;
        let myInit = {
            method: "GET"
        };
        fetch(path, myInit)
            .then(response => response)
            .then(data => {
                dispatch({
                    type: FETCH_LOCK_SUCCESS,
                    payload: data
                });
                done();
            })
            .catch(err => {
                console.error(err);
                dispatch({
                    type: FETCH_LOCK_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });
    }
});

export default [getLockLogic];