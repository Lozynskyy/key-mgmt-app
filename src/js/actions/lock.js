import {CREATE_LOCK, DELETE_LOCK, FETCH_LOCKS, GET_LOCK_CONFIG, UPDATE_LOCK} from "../constants/lock";


export const createLock = (values) => ({
    type: CREATE_LOCK,
    values
});

export const deleteLock = (id) => ({
    type: DELETE_LOCK,
    id
});

export  const updateLock = (id,data) => ({
    type:UPDATE_LOCK,
    id,
    data
});

export const getLocksData = (filter) => ({
    type: FETCH_LOCKS,
    filter
});

export const getLockConfig = (id) => ({
    type:GET_LOCK_CONFIG,
    id
});