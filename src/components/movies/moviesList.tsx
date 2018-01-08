
import * as React from 'react';
import { connect } from "react-redux";

// assets
import './movies.css';

import { getTopRatedMovies } from "../../actions/movies/movies";
import TopMenu from '../top-menu/top-menu';


import * as Movie from '../../interfaces/movie';


const posterPath: string = 'http://image.tmdb.org/t/p/w154';

@connect((store) => {
	return {
		moviesList: store.movies.movies.results,
	};
})

// class
class MoviesList extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
	}

	componentDidMount() {
		try {
			this.props.dispatch(getTopRatedMovies());
		} catch (e) {
			console.error('error-->', e);
		}
	}

	render() {
		const { moviesList } = this.props;

		console.log('path-->', this.props.route.path);// roberto
		console.log('moviesList-->', moviesList);// roberto

		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				<div className='movieListMainContainer'>
					{
						moviesList &&
						moviesList.map((movie: Movie.IMovie)=> {
							return(
								<div key={movie.id} className='movieListContainer'>
									<div className='movieListMainImage'>
										<img src={posterPath + movie.poster_path} alt=''/>
									</div>
									<div className='moviesListBottomContainer'>
										<div className='movieListMovieTitle'>
											<span>{movie.title}</span>
										</div>
										<div className='movieListMovieReleaseDate'>
											<span>{movie.release_date}</span>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		);
	}
}

export default MoviesList;


// <img src={`${posterPath}${movie.poster_path}`} alt=''/>
