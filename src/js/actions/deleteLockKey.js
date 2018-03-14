import {DELETE_LOCK_KEY} from "../constants";

export function deleteLockKey(id,idKey) {
    return{
        type:DELETE_LOCK_KEY,
        id,
        idKey
    };
}