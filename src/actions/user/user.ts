
import axios from 'axios';

// axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
// axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.headers = {'Accept-Encoding': '*/*'};
// axios.defaults.headers.post['Accept-Encoding'] = '*/*';
// axios.defaults.headers

// axios.defaults.withCredentials = tr
// axios.defaults.withCredentials = true;
const backendUrl: string = process.env.BACKEND_SERVER_URL ? <string> process.env.BACKEND_SERVER_URL : 'http://localhost:8080';

/*
GET the user protected route
*/
export function get_protected_route() {
	return function(dispatch: any) {
		dispatch({ type: 'USER_ACCOUNT'});
		axios.get(backendUrl + '/user/account', {withCredentials: true, headers: {'Content-Type': 'application/json', 'accept': '*/*', 'Authorization': 'sample'}})
			.then((response) => {
				console.log('response-->', response); // roberto
				dispatch({ type: 'USER_ACCOUNT_SUCCESS',  status: response.status, user: response.data, payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'USER_ACCOUNT_FAILED', status: err.status, payload: err });
			});
	};
}
