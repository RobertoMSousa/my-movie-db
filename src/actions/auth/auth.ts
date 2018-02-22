import * as got from 'got';

const backendUrl: string = process.env.REACT_APP_BACKEND_SERVER_URL ? <string> process.env.REACT_APP_BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Sign up a new user
*/
export function signup_user(email: string, password: string, passwordRepeated: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNUP_USER'});
		got.post(backendUrl + '/auth/signup', {
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify({'email': email, 'password': password, 'passwordRepeated': passwordRepeated})
		}).then(response => {
			dispatch({ type: 'SIGNUP_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'SIGNUP_USER_FAILED', payload: err});
		});
	};
}

/*
Sign in user into platform
*/
export function signin_user(email: string, password: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNIN_USER'});
		got.post(backendUrl + '/auth/login', {
			headers: {'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
				'Access-Control-Allow-Credentials': 'true'
			},
			body: JSON.stringify({'email': email, 'password': password})
		}).then(response => {
			dispatch({ type: 'SIGNIN_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'SIGNIN_USER_FAILED', payload: err});
		});
	};
}

/*
Sign Out user from platform
*/
export function signout_user() {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNOUT_USER'});
		got.get(backendUrl + '/auth/logout', {
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
		}).then(response => {
			dispatch({ type: 'SIGNOUT_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'SIGNOUT_USER_FAILED', payload: err});
		});
	};
}