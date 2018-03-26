import {CREATE_USER, CREATE_USER_SUCCESS, CREATE_USER_FAILURE} from "../constants/user";
import {createLogic} from "redux-logic";
import {postRequest} from "../fetch/request";

const createUserLogic = createLogic({
    type: CREATE_USER,
    latest: true,
    process({action}, dispatch, done) {
        postRequest("register", action.data).then(() => {
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

export default createUserLogic;