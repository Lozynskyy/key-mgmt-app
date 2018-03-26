import {CREATE_EMPLOYEE} from "../constants/employee";
import {DELETE_EMPLOYEE} from "../constants/employee";
import {FETCH_EMPLOYEE} from "../constants/employee";
import {UPDATE_EMPLOYEE} from "../constants/employee";
import {FETCH_EMPLOYEES} from "../constants/employee";

export const createEmployee = (values) => ({
    type: CREATE_EMPLOYEE,
    values
});

export const deleteEmployee = (id) => ({
    type: DELETE_EMPLOYEE,
    id
});

export const getEmployee = (id) => ({
    type: FETCH_EMPLOYEE,
    id
});

export const updateEmployee = (id, data) => ({
    type: UPDATE_EMPLOYEE,
    id,
    data
});


export const getEmployeesData = () => ({
    type: FETCH_EMPLOYEES
});