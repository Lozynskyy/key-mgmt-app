import { createLogic } from "redux-logic";
import {LOGIN_USER,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "../constants";
import {history} from "../configurateStore/history";


export function postUserData(username,password) {
    return {
        type: LOGIN_USER,
        username,
        password
    };
}
const postUserDataLogic = createLogic({
    type: LOGIN_USER,
    latest: true,
    process({getState,action}, dispatch, done) {
        const path="https://api-test.opendoors.od.ua:1013/login_check";
        let myInit = {
            method: "POST",
            mode: "cors",
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body:JSON.stringify({"_username":action.username,"_password":action.password})
        };
        fetch(path,myInit)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: res.token
                });
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
