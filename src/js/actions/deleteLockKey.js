import {DELETE_LOCK_KEY} from "../constants/deleteLockKey";

export const deleteLockKey = (id,idKey) => {
    return{
        type:DELETE_LOCK_KEY,
        id,
        idKey
    };
};