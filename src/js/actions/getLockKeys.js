import {FETCH_LOCK_KEYS} from "../constants/fetchLockKeys";

export  const getLockKeys = (id) => {
    return{
        type:FETCH_LOCK_KEYS,
        id
    };
};