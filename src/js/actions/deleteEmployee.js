import {DELETE_EMPLOYEE} from "../constants";

export function deleteEmployee(id) {
    return {
        type: DELETE_EMPLOYEE,
        id
    };
}