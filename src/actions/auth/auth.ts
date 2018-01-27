import axios from 'axios';

const backendUrl: string = process.env.BACKEND_SERVER_URL ? <string> process.env.BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Sign up a new user
*/
export function signup_user(email: string, password: string, passwordRepeated: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNUP_USER'});
		axios.post(backendUrl + '/auth/signup', {'email': email, 'password': password, 'passwordRepeated': passwordRepeated})
			.then((response) => {
				dispatch({ type: 'SIGNUP_USER_SUCCESS', status: response.status, payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNUP_USER_FAILED', status: err.status, payload: err });
			});
	};
}

/*
Sign in user into platform
*/
export function signin_user(email: string, password: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNIN_USER'});
		axios.post(backendUrl + '/auth/login', {'email': email, 'password': password})
			.then((response) => {
				dispatch({ type: 'SIGNIN_USER_SUCCESS',  status: response.status, payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNIN_USER_FAILED', status: err.status, payload: err});
			});
	};
}

/*
Sign Out user from platform
*/
export function signout_user(email: string, password: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNOUT_USER'});
		axios.get(backendUrl + '/auth/logout')
			.then((response) => {
				dispatch({ type: 'SIGNOUT_USER_SUCCESS',  status: response.status, payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'SIGNOUT_USER_FAILED', status: err.status, payload: err });
			});
	};
}