
import * as got from 'got';
const backendUrl: string = process.env.REACT_APP_BACKEND_SERVER_URL ? <string> process.env.REACT_APP_BACKEND_SERVER_URL : 'http://localhost:8080';

/*
GET the user protected route
*/
export function get_protected_route() {
	return function(dispatch: any) {
		dispatch({ type: 'USER_ACCOUNT'});
		got.get(backendUrl + '/user/account', {
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
		}).then(response => {
			dispatch({ type: 'USER_ACCOUNT_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			dispatch({ type: 'USER_ACCOUNT_FAILED', payload: err});
		});
	};
}
