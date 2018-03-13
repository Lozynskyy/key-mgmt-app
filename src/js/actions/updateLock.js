import {UPDATE_LOCK} from "../constants";

export  function updateLock(id,data){
    return{
        type:UPDATE_LOCK,
        id,
        data
    };
}
