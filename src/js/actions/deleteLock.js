import {DELETE_LOCK} from "../constants";

export function deleteLock(id) {
    return {
        type: DELETE_LOCK,
        id
    };
}