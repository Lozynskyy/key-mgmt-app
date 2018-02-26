import {LOGIN_USER} from "../constants";


export function postUserData(username,password) {
    return {
        type: LOGIN_USER,
        username,
        password
    };
}

