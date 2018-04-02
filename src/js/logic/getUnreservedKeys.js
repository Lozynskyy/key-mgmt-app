import {FETCH_UNRESERVED_KEYS,FETCH_UNRESERVED_KEYS_FAILURE,FETCH_UNRESERVED_KEYS_SUCCESS} from "../constants/key";
import {createLogic} from "redux-logic";
import {getRequest} from "../fetch/request";

const getUnreservedKeysLogic = createLogic({
    type: FETCH_UNRESERVED_KEYS,
    latest: true,
    process(_, dispatch, done) {
        getRequest("keys").then((res) => {
            dispatch({
                type: FETCH_UNRESERVED_KEYS_SUCCESS,
                payload: res
            });
            done();
        })
            .catch((res) => {
                dispatch({
                    type: FETCH_UNRESERVED_KEYS_FAILURE,
                    payload: res
                });
                done();
            });
    }
});

export default getUnreservedKeysLogic;