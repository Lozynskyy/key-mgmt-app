import {ATTACH_KEY_TO_EMPLOYEE} from "../constants/key";
import {DELETE_EMPLOYEE_KEY} from "../constants/key";
import {FETCH_EMPLOYEE_KEYS} from "../constants/key";
import {FETCH_LOCK_KEYS} from "../constants/key";
import {DELETE_LOCK_KEY} from "../constants/key";

export const attachKeyToEmployee = (employeeID, key) => ({
    type: ATTACH_KEY_TO_EMPLOYEE,
    employeeID,
    key
});

export const deleteEmployeeKey = (idEmpl, idKey) => ({
    type: DELETE_EMPLOYEE_KEY,
    idEmpl,
    idKey
});

export const getEmployeeKeys = (id) => ({
    type: FETCH_EMPLOYEE_KEYS,
    id
});

export const getLockKeys = (id) => ({
    type: FETCH_LOCK_KEYS,
    id
});


export const deleteLockKey = (id, idKey) => ({
    type: DELETE_LOCK_KEY,
    id,
    idKey
});