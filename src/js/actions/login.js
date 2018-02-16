import { createLogic } from 'redux-logic';
import Dashboard from "../components/Dashboard";



export function getUserData() {
	return {
		type: 'LOGIN_USER'
	};
}
const postUserData = createLogic({
	type: 'LOGIN_USER',
	latest: true,

	process({}, dispatch, done) {
		const path='http://localhost:8002/user';

        let myInit = {
            method: 'POST',
            mode: 'cors',
			body:{"username":"Pasha","password":"123"}
        };
		fetch(path,myInit)
			.then(res => res.json())
			.then((res) => {
				dispatch({
					type: 'LOGIN_USER_SUCCESS',
					payload: res._id//TODO: change on 'token'
						//TODO: перенаправить на другой url
				});

                done();
			})
			.catch((res) => {
				dispatch({
					type: 'LOGIN_USER_FAILURE',
					payload: res
				});
				done();
			});
	}
});

export default [postUserData];
