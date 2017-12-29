import axios from "axios";

export function getTopRatedMovies() {
	return function(dispatch) {
		dispatch({ type: "GET_TOP_RATED_MOVIES" });
		axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1')
			.then((response) => {
				dispatch({ type: "GET_TOP_RATED_MOVIES_SUCCESS", payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: "GET_TOP_RATED_MOVIES_FAILED", payload: err })
			})
	}
}



export function getMovieData(movieId: number) {
	return function(dispatch) {
		dispatch({ type: "GET_MOVIE_DATA" });
		axios.get('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + process.env.REACT_APP_API_KEY)
			.then((response) => {
				dispatch({ type: "GET_MOVIE_DATA_SUCCESS", payload: response.data })
			})
			.catch((err) => {
				dispatch({ type: "GET_MOVIE_DATA_FAILED", payload: err })
			})
	}
}
