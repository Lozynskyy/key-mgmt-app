import {CREATE_USER,CREATE_USER_SUCCESS,CREATE_USER_FAILURE} from "../constants";
import {createLogic} from "redux-logic";

const createUserLogic = createLogic({
    type: CREATE_USER,
    latest: true,
    process({action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/register";
        let myInit = {
            method: "POST",
            body:JSON.stringify(action.data)
        };
        fetch(path,myInit)
            .then(() => {
                dispatch({
                    type: CREATE_USER_SUCCESS
                });
                done();
            })
            .catch(() => {
                dispatch({
                    type: CREATE_USER_FAILURE,
                });
                done();
            });
    }
});

export default [createUserLogic];