import {LOGIN_USER,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "../constants";


export function postUserData(username,password) {
    return {
        type: LOGIN_USER,
        username,
        password
    };
}

