import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import allReducers from './js/reducers/index';
import Login from "./js/components/Login";
import Dashboard from "./js/components/Dashboard";

const store=createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log(store.getState());

ReactDOM.render(<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route path='/dashboard' component={Dashboard}/>
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
