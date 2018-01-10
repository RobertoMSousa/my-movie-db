
import * as React from 'react';
import { connect } from "react-redux";

// assets
import './movies.css';

import { getMovieData } from "../../actions/movies/movies";

const backGroundPoster: string = 'http://image.tmdb.org/t/p/w500';;
// const posterPath: string = 'http://image.tmdb.org/t/p/w154';


@connect((store) => {
	return {
		movie: store.movies.movie,
	};
})

// class
class Movie extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		try {
			this.props.dispatch(getMovieData(this.props.match.params.id));
		} catch (e) {
			console.error('error-->', e);
		}
	}

	render() {
		const { movie } = this.props;
		return (
			<div>
				<img className='background-poster-img' src={`${backGroundPoster}${movie.backdrop_path}`}/>
				<h1> {movie.title} </h1>
			</div>
		);
	}
}

export default Movie;
