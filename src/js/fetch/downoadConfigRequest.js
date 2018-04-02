import {API_HOST} from "../config";

export const downloadConfigRequest = (url) => {
    const headers={
        method:"GET"
    };

    return fetch(`${API_HOST}/${url}`,headers)
        .then((res) => {
            if(res.status===200){
                return res.blob();
            }
            return Promise.reject(res);
        });
};