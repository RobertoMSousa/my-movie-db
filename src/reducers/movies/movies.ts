

// movies reducers
export default function reducer(state = {
	movies: [],
	fetching: false,
	fetched: false,
	error: null,
}, action) {

	switch (action.type) {
		case "GET_TOP_RATED_MOVIES": {
			return { ...state, fetching: true }
		}
		case "GET_TOP_RATED_MOVIES_SUCCESS": {
			return { ...state, fetching: false, fetched: true, movies: action.payload }
		}
		case "GET_TOP_RATED_MOVIES_FAILED": {
			return { ...state, fetching: false, fetched: false, error: action.payload }
		}
	}

	return state
}
