import {createLogic} from "redux-logic";
import {FETCH_EMPLOYEES, FETCH_EMPLOYEES_SUCCESS, FETCH_EMPLOYEES_FAILURE} from "../constants/employee";
import {getRequest} from "../fetch/request";

const getEmployeesDataLogic = createLogic({
    type: FETCH_EMPLOYEES,
    latest: true,
    process({action}, dispatch, done) {
        let filter = action.filter || "";
        if(filter){
            filter="?filter="+action.filter;
        }
        getRequest(`employees${filter}`).then((employees) => {
            dispatch({
                type: FETCH_EMPLOYEES_SUCCESS,
                payload: employees
            });
            done();
        })
            .catch(err => {
                dispatch({
                    type: FETCH_EMPLOYEES_FAILURE,
                    payload: err,
                    error: true
                });
                done();
            });

    }
});

export default [getEmployeesDataLogic];
