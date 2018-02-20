import 'whatwg-fetch';

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
			console.log('response-->', response); // roberto
			// console.log(response.body.explanation);	 // roberto
			dispatch({ type: 'SIGNUP_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'SIGNUP_USER_FAILED', payload: err});
			console.log(err);
		});
		// fetch(backendUrl + '/auth/signup', {
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	headers: {'Content-Type': 'application/json'},
		// 	body: JSON.stringify({'email': email, 'password': password, 'passwordRepeated': passwordRepeated})
		// }).then(function(response: any) {
		// 	return response.json();
		// }).then(function(response: any) {
		// 	dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: response });
		// }).catch(function(err: any) {
		// 	dispatch({ type: 'SIGNUP_USER_FAILED', payload: err});
		// });
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
			'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'},
			body: JSON.stringify({'email': email, 'password': password})
		}).then(response => {
			console.log('response-->', response); // roberto
			// console.log(response.body.explanation);	 // roberto
			dispatch({ type: 'SIGNIN_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'SIGNIN_USER_FAILED', payload: err});
			console.log(err);
		});
		// fetch(backendUrl + '/auth/login', {
		// 	mode: 'no-cors',
		// 	method: 'POST',
		// 	credentials: 'include',
		// 	headers: {'Content-Type': 'application/json'},
		// 	body: JSON.stringify({'email': email, 'password': password})
		// }).then(function(response: any) {
		// 	return response.json();
		// }).then(function(response: any) {
		// 	dispatch({ type: 'SIGNIN_USER_SUCCESS',  payload: response });
		// }).catch(function(err: any) {
		// 	dispatch({ type: 'SIGNIN_USER_FAILED', payload: err});
		// });
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
			console.log('response-->', response); // roberto
			dispatch({ type: 'SIGNOUT_USER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			// 	dispatch({ type: 'SIGNOUT_USER_FAILED', payload: err});
			console.log(err);
		});
		// fetch(backendUrl + '/auth/logout', {
		// 	mode: 'no-cors',
		// 	method: 'GET',
		// 	credentials: 'include',
		// 	headers: {'Content-Type': 'application/json'},
		// }).then(function(response: any) {
		// 	return response.json();
		// }).then(function(response: any) {
		// 	dispatch({ type: 'SIGNOUT_USER_SUCCESS',  payload: response });
		// }).catch(function(err: any) {
		// 	dispatch({ type: 'SIGNOUT_USER_FAILED', payload: err});
		// });
	};
}