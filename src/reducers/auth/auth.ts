
// auth reducers

export default function reducer(
	state: any= {
	status: Number,
	message: {},
	fetching: false,
	fetched: false,
	error: null,
	}, 
	action: any) {
	console.log('action-->', action); // roberto
	switch (action.type) {
		case 'SIGNIN_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNIN_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload};
		}
		case 'SIGNIN_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		case 'SIGNUP_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNUP_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload };
		}
		case 'SIGNUP_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		case 'SIGNOUT_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNOUT_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload };
		}
		case 'SIGNOUT_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		default: {
			return { ...state, fetching: false, fetched: false, error: 'fall on the default of auth reducer'};
		}
	}
}
