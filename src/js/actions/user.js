import {CREATE_USER,LOGIN_USER} from "../constants/user";

export const createUser = (data) => ({
    type: CREATE_USER,
    data
});

export const login = (data) => ({
    type: LOGIN_USER,
    data
});

