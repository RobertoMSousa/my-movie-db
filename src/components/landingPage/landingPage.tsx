
import * as React from 'react';
import { connect } from "react-redux";
import isEmail from 'validator/lib/isEmail';
import swal from 'sweetalert';


import * as Movie from '../../interfaces/movie';
const imagePath: string = 'https://image.tmdb.org/t/p/w1920';
const posterPath: string = 'https://image.tmdb.org/t/p/w342';

import TopMenu from '../top-menu/top-menu';
import './landingPage.css';
import { getMostPopularMovies } from "../../actions/movies/movies";
const appBackGround = require('../../img/MobileApps.png');
// assets
const appBackGround = require('../../img/MobileApps.png');
const appStoreLogo = require('../../img/app-store.svg');
const googlePlayLogo = require('../../img/google-play.svg');
const facebookLogo = require('../../img/facebook.svg');
const twitterLogo = require('../../img/twitter.svg');
const googleLogo = require('../../img/google.svg');
// const loginLogo = require('../../img/login.svg');


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
			<div className='landigPage_main_div'>
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
				{
					movies &&
					<div className='landigPage_call_to_action'>
						<div className='landigPage_call_to_action_left'>
							<div className='landigPage_call_to_action_left_title'>
								<span>Lorem ipsum dolor sit amet, consectetur.</span>
							</div>
							<div className='landigPage_call_to_action_left_text'>
								<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique magna sit amet purus gravida quis. Purus sit amet luctus venenatis lectus. In ante metus dictum at tempor commodo ullamcorper a lacus. Nulla pellentesque dignissim enim sit amet venenatis urna. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate.</span>
							</div>
							<div className='landigPage_register-button'>
								<span className='landigPage_register-button_text'>Join us!</span>
							</div>
						</div>
						<div className='landigPage_call_to_action_right'>
							<div className='landigPage_call_to_action_right_movie_poster' style={{backgroundImage : `url(${posterPath + movies[Math.floor(Math.random() * Math.floor(20))].poster_path})`}}></div>
							<div className='landigPage_call_to_action_right_movie_poster_span'>
								<span>Lorem ipsum dolor sit amet</span>
							</div>
						</div>
					</div>
				}
				<div className='landingPage_download_apps_container' style={{backgroundImage : `url(${appBackGround})`} }>
					<div className='landingPage_download_apps_header' >
						<span>Download our apps</span>
					</div>
					<div className='landingPage_download_apps_android'>
					</div>
					<div className ='landingPage_download_apps_ios'>
					</div>
				</div>
			</div>
		);
	}
}

//
// {
// 	movies && <img className='landigPage_top_movie_teaser' src={imagePath + movies[Math.floor(Math.random() * Math.floor(20))].backdrop_path} alt=''/>
// }

export default LandingPage;
