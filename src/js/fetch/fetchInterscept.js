import fetchIntercept from "fetch-intercept";
import {history} from "../configurateStore/history";
import {API_HOST} from "../config";

fetchIntercept.register({
    request: function (path, config) {
        let token = localStorage.getItem("token");
        config.mode = "cors";
        if (path === `${API_HOST}/login_check` || path === `${API_HOST}/register`) {
            config.headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
        }
        else {
            config.headers = {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            };
        }
        return [path, config];
    },
    response: (response) => {
        if (response.status === 401) {
            localStorage.setItem("token", "");
            history.push("/");
        }
        return response;
    },

});