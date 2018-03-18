import {CREATE_LOCK} from "../constants/createLock";

export const createLock = (values) => {
    return{
        type:CREATE_LOCK,
        values
    };
};