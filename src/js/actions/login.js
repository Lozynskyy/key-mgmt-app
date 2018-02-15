import { createLogic } from 'redux-logic';

export function getUserData(request) {
	return {
		type: 'LOGIN_USER',
		request
	};
}

const postUserData = createLogic({
	type: 'LOGIN_USER',
	latest: true,

	process({}, dispatch, done) {
		fetch('http://localhost:8002/user')
			.then(res => res.json())
			.then((res) => {
				console.log(res);
				dispatch({
					type: 'LOGIN_USER_SUCCESS',
					payload: res
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
