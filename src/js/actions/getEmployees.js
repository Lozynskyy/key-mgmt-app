import { createLogic } from 'redux-logic';

export function getEmployeesData() {
    //TODO:pass data into redux-logic
    return {
        type: 'FETCH_EMPLOYEES',
    };
}
const getEmployeesData = createLogic({
        type: 'FETCH_EMPLOYEES_SUCCESS',
    latest: true,
    process({}, dispatch, done) {
        const path='https://api-test.opendoors.od.ua:1013/employees';
        let myInit = {
            method: 'GET',
            mode: 'cors',
        };
        fetch(path,myInit)
            .then(res => res.json())
            .then((res) => {
                console.log(res);
                dispatch({
                    type: 'FETCH_EMPLOYEES_SUCCESS',
                    payload: res
                });
                done();
            })
            .catch((res) => {
                dispatch({
                    type: 'FETCH_EMPLOYEES_FAILURE',
                    payload: res
                });
                done();
            });
    }
});

export default [postUserData];
