import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./styles/login.css";
import "./styles/lockKeysTable.css";
import "./styles/table.css";
import "./styles/dashboard.css";
import StartPage from "./js/components/StartPage";
import Dashboard from "./js/components/Dashboard";
import LockPage from "./js/components/LockPage";
import EmployeePage from "./js/components/EmployeePage";
import {history} from "./js/configurateStore/history";
import {store} from "./js/configurateStore/store";

import "./js/fetch/fetchInterscept";



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={StartPage}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path="/lock/:id" component={LockPage}/>
                <Route path="/employee/:id" component={EmployeePage}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root"));