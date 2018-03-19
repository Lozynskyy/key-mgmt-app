import {LOGIN_USER,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "../constants/user";

const initialState={
    token:"",
    loading:false,
    loaded:false,
    isSignedIn:false
};

export default function (state=initialState, action) {
    switch (action.type){
    case LOGIN_USER:
        return {
            ...state,
            loading:true
        };
    case LOGIN_USER_SUCCESS:
        return{
            ...state,
            loading:false,
            loaded:true,
            token:action.payload,
            isSignedIn:true
        };

    case  LOGIN_USER_FAILURE:
        return{
            ...state,
            loading:false,
            loaded:false,
            token:""
        };
    default:
        return state;
    }
}