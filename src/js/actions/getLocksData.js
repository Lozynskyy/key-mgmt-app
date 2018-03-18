import {FETCH_LOCKS} from "../constants/fetchLocks";

export const getLocksData = () => {
    return{
        type: FETCH_LOCKS
    };
};