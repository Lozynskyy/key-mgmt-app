import {CREATE_LOCK} from "../constants";

export function createLock(values) {
    return{
        type:CREATE_LOCK,
        values
    };
}