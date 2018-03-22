import {CREATE_EMPLOYEE,DELETE_EMPLOYEE,FETCH_EMPLOYEE,UPDATE_EMPLOYEE,FETCH_EMPLOYEES} from "../constants/employee";

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