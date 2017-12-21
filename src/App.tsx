
import * as React from 'react';

import './App.css';



import Movie from './components/movies/movies';
const logo = require('./logo.svg');

interface IMovie {
	id: number;
	title: string;
	overview?: string;
}


export const getData = () => ({
	// 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1'
});

class App extends React.Component <any, any> {


	state = {
		moviesList: []
	}

	constructor(props: any) {
		super(props);
		console.log('constructor');// roberto
	}
    //
	// componentWillMount() {
	// 	console.log('componentWillMount');// roberto
	// }


	componentDidMount() {
		try {
			console.log('componentDid Mount-->', process.env);// roberto
			getData();
			// const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=' + process.env.REACT_APP_API_KEY + '&language=en-US&page=1');
			// const moviesListSample: any  =  await res.json();
			// console.log('moviesListSample-->', moviesListSample);// roberto
			// console.log('moviesListSample result-->', moviesListSample.results);// roberto
			// if (moviesListSample && moviesListSample.results)
			// {
			// 	this.setState({
			// 		moviesList: moviesListSample.results
			// 	});
			// }
		} catch (e) {
			console.error('error-->', e);
			throw new Error('  ');
		}
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
			 		<img src={logo} className="App-logo" alt="logo" />
				</div>
				<div>
					<p>
					{this.state.moviesList.length}
					</p>
					{
						this.state.moviesList.length > 0 &&
						this.state.moviesList.map((movie: IMovie)=> {
						return(
							<Movie key={movie.id} movie={movie} />
						)
					})}
				</div>
			</div>
		);
	}
}

export default App;
