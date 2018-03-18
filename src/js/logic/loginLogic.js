import {LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../constants/loginUser";
import {createLogic} from "redux-logic";
import {history} from "../configurateStore/history";
import {url} from "../utilities/url";

const loginLogic = createLogic({
    type: LOGIN_USER,
    latest: true,
    process({action}, dispatch, done) {
        const path=`${url}/login_check`;
        let myInit = {
            method: "POST",
            body:JSON.stringify(action.data)
        };
        fetch(path,myInit)
            .then((res) => {
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: res.token
                });
                localStorage.setItem("token",res.token);
                history.push({pathname:"/dashboard"});
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

export default [loginLogic];