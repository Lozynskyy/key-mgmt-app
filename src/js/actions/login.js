import { createLogic } from 'redux-logic';

export function postUserData(username,password) {
	console.log(username+" "+password);
	//TODO:pass data into redux-logic
	return {
		type: 'LOGIN_USER',
	};
}
const postUserDataLogic = createLogic({
	type: 'LOGIN_USER',
	latest: true,
	process({}, dispatch, done) {//TODO:{}pass here password and username. view documentation
		const path='http://localhost:8002/user';
        let myInit = {
            method: 'POST',
            mode: 'cors',
			//body:{"username":"Pasha","password":"123"}
        };
		fetch(path,myInit)
			.then(res => res.json())
			.then((res) => {
				console.log(res);
				dispatch({
					type: 'LOGIN_USER_SUCCESS',
					payload: res._id
                    //TODO: change on 'token'
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

export default [postUserDataLogic];
