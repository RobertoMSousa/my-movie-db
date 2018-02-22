
import * as got from 'got';
import swal from 'sweetalert';

const backendUrl: string = process.env.REACT_APP_BACKEND_SERVER_URL ? <string> process.env.REACT_APP_BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Subscribe to the newsletter
*/
export function subscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER'});
		got.post(backendUrl + '/newsletter', {
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify({'email': email})
		}).then(response => {
			swal('Good job!', 'Thanks for Subscribing!', 'success');
			dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			swal('Uppps!', 'Something whent wrong!', 'error');
			dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err});
		});
	};
}

/*
Unsubscribe to the newsletter
*/
export function unsubscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'UNSUBSCRIBE_TO_NEWSLETTER'});
		got.delete(backendUrl + '/newsletter', {
			headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
			body: JSON.stringify({'email': email})
		}).then(response => {
			dispatch({ type: 'UNSUBSCRIBE_TO_NEWSLETTER_SUCCESS',  payload: JSON.parse(response.body) });
		}).catch(err => {
			swal('Uppps!', 'Something whent wrong!', 'error');
			dispatch({ type: 'UNSUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err});
		});
	};
}