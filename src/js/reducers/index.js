import {combineReducers} from 'redux';
import employees from './employees';
import employeesInfo from './employeesInfo';
import locks from './locks';
import { routerReducer } from 'react-router-redux';

const allReducers=combineReducers({
    employees:employees,
    employeesInfo:employeesInfo,
    locks:locks,
    routing: routerReducer,
});

export default allReducers;