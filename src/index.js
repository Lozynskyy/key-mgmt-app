import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware,createStore} from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/login.css';
import allReducers from './js/reducers/index';
import Login from './js/components/Login';
import Dashboard from './js/components/Dashboard';
import EmployeesPage from './js/components/EmployeesPage';
import LocksPage from './js/components/LocksPage';

const store=createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());
setTimeout(function () {
    console.log(store.getState());
},10000);

ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login}/>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path="/employees/employeeID" component={EmployeesPage}/>
			<Route path='/locks/locksID/keys' component={LocksPage}/>
		</Switch>
	</BrowserRouter>
</Provider>,
document.getElementById('root'));




