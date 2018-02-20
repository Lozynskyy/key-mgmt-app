import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';
import './styles/login.css';
import store from './js/store/configurateStore';
import Login from './js/components/Login';
import Dashboard from './js/components/Dashboard';
import EmployeesPage from './js/components/EmployeesPage';
import LocksPage from './js/components/LocksPage';

console.log(store.getState());



ReactDOM.render(
	<Provider store={store}>
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Login}/>
			<Route path='/dashboard' component={Dashboard}/>
			<Route path="/employees/employeeID" component={EmployeesPage}/>
		</Switch>
	</BrowserRouter>
</Provider>,
document.getElementById('root'));




