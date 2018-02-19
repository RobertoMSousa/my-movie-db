
// import axios from 'axios';
import 'whatwg-fetch';
/*
GET the top rated movies
*/
export function getTopRatedMovies() {
	return function(dispatch: any) {
		dispatch({ type: 'GET_TOP_RATED_MOVIES'});
		fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1', {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'GET_TOP_RATED_MOVIES_SUCCESS', payload: response });
		}).catch(function(err: any) {
			dispatch({ type: 'GET_TOP_RATED_MOVIES_FAILED', payload: err});
		});
	};
}

/*
	get the most popular movies
*/
export function getMostPopularMovies() {
	console.log('process env populat movies-->', process.env); // roberto
	return function(dispatch: any) {
		dispatch({ type: 'GET_MOST_POPULAR_MOVIES' });
		fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1', {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'GET_MOST_POPULAR_MOVIES_SUCCESS', payload: response });
		}).catch(function(err: any) {
			dispatch({ type: 'GET_MOST_POPULAR_MOVIES_FAILED', status: err.status, payload: err});
		});
	};
}

/*
GET the data from a specific movie
*/
export function getMovieData(movieId: number) {
	return function(dispatch: any) {
		dispatch({ type: 'GET_MOVIE_DATA'});
		fetch('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + process.env.REACT_APP_API_KEY, {
			method: 'GET',
			headers: {'Content-Type': 'application/json'}
		}).then(function(response: any) {
			return response.json();
		}).then(function(response: any) {
			dispatch({ type: 'GET_MOVIE_DATA_SUCCESS', payload: response });
		}).catch(function(err: any) {
			dispatch({ type: 'GET_MOVIE_DATA_FAILED', status: err.status, payload: err});
		});
	};
}
