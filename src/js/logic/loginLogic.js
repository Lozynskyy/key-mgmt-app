import {LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../constants/user";
import {createLogic} from "redux-logic";
import {history} from "../configurateStore/history";
import {postRequest} from "../fetch/request";

const loginLogic = createLogic({
    type: LOGIN_USER,
    latest: true,
    process({action}, dispatch, done) {
        postRequest("login_check", action.data).then((res) => {
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: res.token
            });
            localStorage.setItem("token", res.token);
            history.push({pathname: "/dashboard"});
            done();
        })
            .catch((res) => {
                dispatch({
                    type: LOGIN_USER_FAILURE,
                    payload: res
                });
                done();
            });
    }
});

export default loginLogic;