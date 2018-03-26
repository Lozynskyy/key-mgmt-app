import {CREATE_LOCK} from "../constants/lock";
import {DELETE_LOCK} from "../constants/lock";
import {FETCH_LOCKS} from "../constants/lock";
import {UPDATE_LOCK} from "../constants/lock";

export const createLock = (values) => ({
    type: CREATE_LOCK,
    values
});

export const deleteLock = (id) => ({
    type: DELETE_LOCK,
    id
});

export const getLocksData = () => ({
    type: FETCH_LOCKS
});

export  const updateLock = (id,data) => ({
        type:UPDATE_LOCK,
        id,
        data
    });