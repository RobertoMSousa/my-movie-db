import 'whatwg-fetch';

const backendUrl: string = process.env.REACT_APP_BACKEND_SERVER_URL ? <string> process.env.REACT_APP_BACKEND_SERVER_URL : 'http://localhost:8080';

/*
GET the user protected route
*/
export function get_protected_route() {
	return function(dispatch: any) {
		dispatch({ type: 'USER_ACCOUNT'});
		fetch(backendUrl + '/user/account', {
			credentials: 'include',
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'USER_ACCOUNT_SUCCESS', payload: response.data });
		}).catch(function(err: any) {
			dispatch({ type: 'USER_ACCOUNT_FAILED', err: err});
		});
	};
}
