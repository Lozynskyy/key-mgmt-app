import { createLogic } from "redux-logic";
import { FETCH_LOCKS, FETCH_LOCKS_SUCCESS, FETCH_LOCKS_FAILURE } from "../constants/fetchLocks";
import {url} from "../utilities/url";

const getLocksDataLogic = createLogic({
    type: FETCH_LOCKS,
    latest: true,
    process(_, dispatch, done) {
        const path = `${url}/locks`;
        let myInit = {
            method: "GET"
        };
        fetch(path, myInit)
            .then(response => response)
            .then(locksArr => {
                dispatch({
                    type: FETCH_LOCKS_SUCCESS,
                    payload: locksArr
                });
                done();
            })
            .catch(err => {
                console.error(err);
                dispatch({ 
                    type: FETCH_LOCKS_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });
    }
});

export default [getLocksDataLogic];