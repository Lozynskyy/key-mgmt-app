import {FETCH_LOCKS, FETCH_LOCKS_SUCCESS, FETCH_EMPLOYEES_FAILURE} from "../constants";
import {createLogic} from "redux-logic";

const getLocksLogic=createLogic({
    type: FETCH_LOCKS,
    latest: true,
    process({getState,action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/locks";
        let myInit = {
            method: "GET",
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: FETCH_LOCKS_SUCCESS,
                    payload: res
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: FETCH_EMPLOYEES_FAILURE,
                    payload: res
                });
                done();
            });
    }
});

export default [getLocksLogic];