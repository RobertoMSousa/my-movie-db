
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import TopMenu from '../top-menu/top-menu';

import TextArea from '../textArea/textArea';
import './signin.css';

// assets
const loginBackImage = require('../../img/login-back-image.svg');
const appLogo = require('../../img/logo.svg');
const imagePath: string = 'https://image.tmdb.org/t/p/w1920';
import { getMostPopularMovies } from '../../actions/movies/movies';
import * as Movie from '../../interfaces/movie';

@connect((store) => {
	return {
		movies: store.movies.movies.results,
	};
})

// class
class SignInPage extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			password: '',
			email: '',
			movieNumber: 0
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.hanglePassword = this.hanglePassword.bind(this);
		this.handleForgot = this.handleForgot.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
	}

	componentWillMount() {
		try {
			console.log('this.state-->', this.state); // roberto
			this.setState({movieNumber: Math.floor(Math.random() * Math.floor(20))});
			this.props.dispatch(getMostPopularMovies());
		} catch (e) {
			console.error('error-->', e);
		}
	}

	hanglePassword(password: string) {
		this.setState({ password: password });
		console.log('password-->', password); // roberto
		/*
		TODO:
		*/

	}

	handleEmail(email: string) {
		this.setState({ email: email });
		console.log('email-->', email); // roberto
	}

	handleForgot() {
		console.log('handleForgot'); // roberto
	}

	handleSubmit() {
		console.log('handleSubmit'); // roberto
	}

	handleFacebookLogin() {
		console.log('handleFacebookLogin'); // roberto
	}

	render() {
		const movies: Array<Movie.IMovie> = this.props.movies;
		return (
			<div style={{'height': 'inherit'}}>
			<TopMenu path={this.props.route.path}/>``
				{
					movies &&
					<div className="signinMainDiv">
						<div className="backgroundSignInImage" style={{backgroundImage : `url(${imagePath + movies[this.state.movieNumber].backdrop_path})`}}/>
						<div className="signinContainer">
							<div className="signinContainerTop">
								<div className="signinContainerTopHeader">
									<img className="loginBackImage" src={loginBackImage}/>
									<span className="signinContainerTopHeaderTitle">MovieDB</span>
									<img className="signinContainerTopHeaderLogo" src={appLogo}/>
									<span className="signinContainerTopHeaderSlogan">Start your journey. Today.</span>
								</div>
								<div className="signinContainerTopNavigation">
									<div className="signinContainerTopNavigationLeft selected">
										<span id="signin">Sign In</span>
										<div className="signinContainerLineIndicator selected"/>
									</div>
									<div className="signinContainerTopNavigationRight">
										<Link className="remove_link_style" to="signup">
											<span id="signup">Sign Up</span>
											<div className="signinContainerLineIndicator"/>
										</Link>
									</div>
								</div>
							</div>
							<div className="signinContainerBottom">
								<div className="signinContainerBottomEmail">
									<TextArea placeholder="email" callbackFromParent={this.handleEmail} backgroundColor="rgba(65, 36, 36, 0)"/>
								</div>
								<div className="signinContainerBottomPassword">
									<TextArea placeholder="password" callbackFromParent={this.hanglePassword} backgroundColor="rgba(65, 36, 36, 0)"/>
									<span className="signinContainerBottomEmailForgot" onClick={this.handleForgot}>Forgot?</span>
								</div>
								<div className="signinContainerBottomLoginButton" onClick={this.handleSubmit}>
									<span>Sign In</span>
								</div>
								<span className="signinContainerBottomOrText">OR</span>
								<div className="signinContainerBottomFacebookButton" onClick={this.handleFacebookLogin}>
									<span>Sign In with facebook</span>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default SignInPage;
