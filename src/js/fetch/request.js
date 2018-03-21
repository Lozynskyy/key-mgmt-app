import {API_HOST} from "../config";

export const request = (url,method,data) => {
    let headers;
    if(data){
        headers={
            method,
            body:JSON.stringify(data)
        };
    }
    else {
        headers={
            method
        };
    }
    return fetch(`${API_HOST}/${url}`,headers)
        .then((res) => {
            if(res.status===200){
                return res.json();
            }
            return Promise.reject(res);
        });
};

export const getRequest = (url) =>  request(url,"GET");
export const postRequest = (url,data) => request(url,"POST",data);
export const putRequest = (url,data) => request(url,"PUT",data);
export const deleteRequest = (url) => request(url,"DELETE");
export const patchRequest = (url,data) => request(url,"PATCH",data);