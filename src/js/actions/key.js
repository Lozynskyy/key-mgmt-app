import {
    ATTACH_KEY_TO_EMPLOYEE, UPDATE_EMPLOYEE_KEY, DELETE_EMPLOYEE_KEY, FETCH_EMPLOYEE_KEYS, DELETE_LOCK_KEY,
    FETCH_LOCK_KEYS, FETCH_RESERVED_KEYS_FOR_LOCK, ATTACH_KEY_TO_LOCK, FETCH_UNRESERVED_KEYS
} from "../constants/key";

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

export const updateEmployeeKey = (idEmployee,idKey,data) => ({
    type:UPDATE_EMPLOYEE_KEY,
    idEmployee,
    idKey,
    data
});


export const getReservedKeyForLock = () => ({
    type:FETCH_RESERVED_KEYS_FOR_LOCK
});

export const attachKeyToLock = (idLock,idKey) => ({
    type:ATTACH_KEY_TO_LOCK,
    idLock,
    idKey
});

export const getUnreservedKeys = () => ({
    type:FETCH_UNRESERVED_KEYS
});