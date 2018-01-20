
import axios from 'axios';

const backendUrl: string = process.env.BACKEND_SERVER_URL ? <string> process.env.BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Subscribe to the newsletter
*/
export function subscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER'});
		axios.post(backendUrl + '/user/newsletter', {'email': email})
			.then((response) => {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err });
			});
	};
}

/*
Unsubscribe to the newsletter
*/
export function unsubscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER'});
		axios.delete(backendUrl + '/user/newsletter', {'params': {'email': email}})
			.then((response) => {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
			})
			.catch((err) => {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err });
			});
	};
}