import fetchIntercept from "fetch-intercept";
import {history} from "../configurateStore/history";

fetchIntercept.register({
    request: function (url, config) {
        let token=localStorage.getItem("token");
        config.mode="cors";
        if(url==="https://api-test.opendoors.od.ua:1013/login_check"){
            config.headers={
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
        }
        else {
            config.headers= {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            };
        }
        return [url, config];
    },
    response: (response)=> {
        if(response.status===401){
            localStorage.setItem("token","");
            history.push("/");
        }
        return response.json();
    },

});