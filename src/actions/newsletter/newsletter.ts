
import 'whatwg-fetch';
import swal from 'sweetalert';

const backendUrl: string = process.env.BACKEND_SERVER_URL ? <string> process.env.BACKEND_SERVER_URL : 'http://localhost:8080';

/*
Subscribe to the newsletter
*/
export function subscribe_newletter(email: string) {
	return function(dispatch: any) {
		dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER'});
		fetch(backendUrl + '/newsletter', {
			method: 'POST',
			credentials: 'include',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({'email': email})
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			swal('Good job!', 'Thanks for Subscribing!', 'success');
			dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
		}).catch(function(err: any) {
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
		fetch(backendUrl + '/auth/logout', {
			method: 'DELETE',
			credentials: 'include',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({'email': email})
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
				dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS', payload: response.data });
		}).catch(function(err: any) {
			swal('Uppps!', 'Something whent wrong!', 'error');
			dispatch({ type: 'SUBSCRIBE_TO_NEWSLETTER_FAILED', payload: err });
		});
	};
}