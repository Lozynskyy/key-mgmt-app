import {combineReducers} from 'redux';
import employees from './employees';
import locks from './locks';
import user from './user'

const allReducers=combineReducers({
    employees:employees,
    locks:locks,
    user:user
});

export default allReducers;