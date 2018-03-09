import {LOGIN_USER, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from "../constants";
import {createLogic} from "redux-logic";
import {history} from "../configurateStore/history";

const postUserDataLogic = createLogic({
    type: LOGIN_USER,
    latest: true,
    process({action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/login_check";
        let myInit = {
            method: "POST",
            body:JSON.stringify({"_username":action.username,"_password":action.password})
        };
        fetch(path,myInit)
            .then((res) => {
                console.log(res);
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

export default [postUserDataLogic];