import { createLogic } from "redux-logic";
import { UPDATE_LOCK, UPDATE_LOCK_SUCCESS, UPDATE_LOCK_FAILURE } from "../constants";

const updateLockLogic = createLogic({
    type: UPDATE_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        const path = `https://api-test.opendoors.od.ua:1013/locks/${action.id}`;
        let myInit = {
            method: "PUT",
            body: JSON.stringify(action.data),
        };
        fetch(path, myInit)
            .then((res) => {
                dispatch({
                    type: UPDATE_LOCK_SUCCESS
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: UPDATE_LOCK_FAILURE,
                });
                done();
            });
    }
});

export default [updateLockLogic];