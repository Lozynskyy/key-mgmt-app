import {createLogic} from "redux-logic";
import {CREATE_LOCK_FAILURE,CREATE_LOCK,CREATE_LOCK_SUCCESS} from "../constants/createLock";
import {url} from "../utilities/url";

const createLockLogic = createLogic({
    type: CREATE_LOCK,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/locks`;
        let myInit = {
            method: "POST",
            body:JSON.stringify(action.values)
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
                dispatch({
                    type: CREATE_LOCK_SUCCESS
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