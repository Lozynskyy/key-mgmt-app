import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import allReducers from './js/reducers/index';
import Login from "./js/components/Login";
import Dashboard from "./js/components/Dashboard";
import EmployeesPage from './js/components/EmployeesPage';
import EmployeesTable from './js/components/EmployeesTable';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(allReducers, composeEnhancers(applyMiddleware(middleware)));
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
        <ConnectedRouter  history={history}>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path="/employees/employeeID" component={EmployeesPage}/>
                <Route path="/employees" component={EmployeesTable}/>
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
