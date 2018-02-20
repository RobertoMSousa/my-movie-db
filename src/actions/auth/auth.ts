import 'whatwg-fetch';

const backendUrl: string = process.env.REACT_APP_BACKEND_SERVER_URL ? <string> process.env.REACT_APP_BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Sign up a new user
*/
export function signup_user(email: string, password: string, passwordRepeated: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SIGNUP_USER'});
		fetch(backendUrl + '/auth/signup', {
			method: 'POST',
			credentials: 'include',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({'email': email, 'password': password, 'passwordRepeated': passwordRepeated})
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: response });
		}).catch(function(err: any) {
			dispatch({ type: 'SIGNUP_USER_FAILED', payload: err});
		});
	};
}

/*
Sign in user into platform
*/
export function signin_user(email: string, password: string) {
	// console.log('backend link-->', process.env); // roberto
	return function(dispatch: any) {
		dispatch({ type: 'SIGNIN_USER'});
		fetch(backendUrl + '/auth/login', {
			method: 'POST',
			credentials: 'include',
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify({'email': email, 'password': password})
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'SIGNIN_USER_SUCCESS',  payload: response });
		}).catch(function(err: any) {
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
		fetch(backendUrl + '/auth/logout', {
			method: 'GET',
			credentials: 'include',
			headers: {'Content-Type': 'application/json'},
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'SIGNOUT_USER_SUCCESS',  payload: response });
		}).catch(function(err: any) {
			dispatch({ type: 'SIGNOUT_USER_FAILED', payload: err});
		});
	};
}