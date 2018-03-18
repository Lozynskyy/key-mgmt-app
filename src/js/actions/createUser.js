import {CREATE_USER} from "../constants/createUser";

export const createUser = (data) => {
    return{
        type:CREATE_USER,
        data
    };
};