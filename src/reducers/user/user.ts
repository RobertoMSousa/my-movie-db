
// user reducers

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
		case 'USER_ACCOUNT': {
			return { ...state, fetching: true };
		}
		case 'USER_ACCOUNT_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload, user: action.user, status: action.status };
		}
		case 'USER_ACCOUNT_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload, user: undefined, status: action.status };
		}
		default: {
			return { ...state, fetching: false, fetched: false, error: 'fall on the default if user reducer'};
		}
	}
}
