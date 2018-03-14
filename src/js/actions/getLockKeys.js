import {FETCH_LOCK_KEYS} from "../constants";

export  function getLockKeys(id){
    return{
        type:FETCH_LOCK_KEYS,
        id
    };
}