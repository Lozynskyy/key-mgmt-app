import {LOGIN_USER} from "../constants/loginUser";


export const login = (data) => {
    return {
        type: LOGIN_USER,
        data
    };
};

