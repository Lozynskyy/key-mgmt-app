import {combineReducers} from 'redux';
import employees from './employees';
import locks from './locks';

const allReducers=combineReducers({
    employees:employees,
    locks:locks
});

export default allReducers;