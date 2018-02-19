
// movies reducers

export default function reducer(
	state: any= {
	movies: [],
	movie: {},
	fetching: false,
	fetched: false,
	error: null,
	}, 
	action: any) {
	switch (action.type) {
		case 'GET_TOP_RATED_MOVIES': {
			return { ...state, fetching: true };
		}
		case 'GET_TOP_RATED_MOVIES_SUCCESS': {
			return { ...state, fetching: false, fetched: true, movies: action.payload };
		}
		case 'GET_TOP_RATED_MOVIES_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}	
		case 'GET_MOST_POPULAR_MOVIES': {
			return { ...state, fetching: true };
		}
		case 'GET_MOST_POPULAR_MOVIES_SUCCESS': {
			return { ...state, fetching: false, fetched: true, movies: action.payload };
		}
		case 'GET_MOST_POPULAR_MOVIES_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		case 'GET_MOVIE_DATA': {
			return { ...state, fetching: true };
		}
		case 'GET_MOVIE_DATA_SUCCESS': {
			return { ...state, fetching: false, fetched: true, movie: action.payload };
		}
		case 'GET_MOVIE_DATA_FAILED': {
			return { ...state, fetching: false, fetched: false, error: action.payload };
		}
		default: {
			return state;
		}
	}
}
