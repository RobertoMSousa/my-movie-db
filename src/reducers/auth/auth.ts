
// auth reducers

export default function reducer(
	state: any= {
	message: {},
	status: Number,
	user: {},
	fetching: false,
	fetched: false,
	error: null,
	}, 
	action: any) {
	switch (action.type) {
		case 'SIGNIN_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNIN_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload, status: action.status };
		}
		case 'SIGNIN_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload, status: action.status };
		}
		case 'SIGNUP_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNUP_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload, status: action.status };
		}
		case 'SIGNUP_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload, status: action.status };
		}
		case 'SIGNOUT_USER': {
			return { ...state, fetching: true };
		}
		case 'SIGNOUT_USER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload, status: action.status };
		}
		case 'SIGNOUT_USER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload, status: action.status };
		}
		default: {
			return { ...state, fetching: false, fetched: false, error: 'fall on the default of auth reducer'};
		}
	}
}
