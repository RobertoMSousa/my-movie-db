
import axios from 'axios';
import swal from 'sweetalert';

const backendUrl: string = process.env.BACKEND_SERVER_URL ? <string> process.env.BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Subscribe to the newsletter
*/
export function subscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER'});
		axios.post(backendUrl + '/newsletter', {'email': email})
			.then((response) => {
				swal('Good job!', 'Thanks for Subscribing!', 'success');
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
			})
			.catch((err) => {
				swal('Uppps!', 'Something whent wrong!', 'error');
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
		axios.delete(backendUrl + '/newsletter', {'params': {'email': email}})
			.then((response) => {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
			})
			.catch((err) => {
				swal('Uppps!', 'Something whent wrong!', 'error');
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err });
			});
	};
}