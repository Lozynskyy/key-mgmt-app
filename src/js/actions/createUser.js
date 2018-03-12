import {CREATE_USER} from "../constants";

export function createUser(data){
    return{
        type:CREATE_USER,
        data
    };
}