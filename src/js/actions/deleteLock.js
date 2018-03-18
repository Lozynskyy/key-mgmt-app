import {DELETE_LOCK} from "../constants/deleteLock";

export const deleteLock = (id) => {
    return {
        type: DELETE_LOCK,
        id
    };
};