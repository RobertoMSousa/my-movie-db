
// newsletter reducers

export default function reducer(
	state: any= {
	fetching: false,
	fetched: false,
	error: null,
	}, 
	action: any) {
	switch (action.type) {
		case 'SUBSCRIBE_TO_NEWSLETTER': {
			return { ...state, fetching: true };
		}
		case 'SUBSCRIBE_TO_NEWSLETTER_SUCCESS': {
			return { ...state, fetching: false, fetched: true, message: action.payload };
		}
		case 'SUBSCRIBE_TO_NEWSLETTER_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		default: {
			return { ...state, fetching: false, fetched: false, error: 'fall on the default'};
		}
	}
}
