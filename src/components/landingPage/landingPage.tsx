
import * as React from 'react';
import { connect } from "react-redux";



import * as Movie from '../../interfaces/movie';
const imagePath: string = 'https://image.tmdb.org/t/p/w1920';

import TopMenu from '../top-menu/top-menu';
import './landingPage.css';
import { getMostPopularMovies } from "../../actions/movies/movies";
// assets

@connect((store) => {
	return {
		movies: store.movies.movies.results,
	};
})

// class
class LandingPage extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	componentDidMount() {
		try {
			this.props.dispatch(getMostPopularMovies());
		} catch (e) {
			console.error('error-->', e);
		}
	}

	render() {
		const movies: Array<Movie.IMovie> = this.props.movies;
		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				{
					movies &&
					<div className='landigPage_top_movie_teaser' style={{backgroundImage : `url(${imagePath + movies[Math.floor(Math.random() * Math.floor(20))].backdrop_path})`}}>
						<div className='landigPage_top_title_wrapper'>
							<span className='landigPage_top_title'>Lorem ipsum dolor sit amet</span>
						</div>
						<div className='landigPage_register-button'>
						 	<span className='landigPage_register-button_text'>Join us!</span>
						</div>
					</div>
				}
			</div>
		);
	}
}

//
// {
// 	movies && <img className='landigPage_top_movie_teaser' src={imagePath + movies[Math.floor(Math.random() * Math.floor(20))].backdrop_path} alt=''/>
// }

export default LandingPage;
