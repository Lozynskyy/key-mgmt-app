import {CREATE_LOCK, DELETE_LOCK, FETCH_LOCKS, GET_LOCK_CONFIG} from "../constants/lock";

export const createLock = (values) => ({
    type: CREATE_LOCK,
    values
});

export const deleteLock = (id) => ({
    type: DELETE_LOCK,
    id
});

export const getLocksData = (filter) => ({
    type: FETCH_LOCKS,
    filter
});

export const getLockCofig = (id) => ({
    type:GET_LOCK_CONFIG,
    id
});