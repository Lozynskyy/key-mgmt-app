import {combineReducers} from 'redux';
import employees from './employees';
import employeesInfo from './employeesInfo';
import locks from './locks';
import { routerReducer } from 'react-router-redux';
import user from './user';

const allReducers=combineReducers({
	employees: employees,
	locks: locks,
	user: user,
	employeesInfo: employeesInfo,
	routing: routerReducer
});

export default allReducers;