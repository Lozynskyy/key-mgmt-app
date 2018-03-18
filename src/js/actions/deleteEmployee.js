import {DELETE_EMPLOYEE} from "../constants/deleteEmployee";

export const deleteEmployee = (id) => {
    return {
        type: DELETE_EMPLOYEE,
        id
    };
};