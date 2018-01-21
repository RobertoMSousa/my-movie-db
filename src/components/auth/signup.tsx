
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import isEmail from 'validator/lib/isEmail';
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
class SignUpPage extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			email: '',
			password: '',
			repeatpassword: '',
			movieNumber: 0
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleRepeatPassword = this.handleRepeatPassword.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleSignUpFacebook = this.handleSignUpFacebook.bind(this);
	}

	componentDidMount() {
		try {
			this.props.dispatch(getMostPopularMovies());
			this.setState({movieNumber: Math.floor(Math.random() * Math.floor(20))});
		} catch (e) {
			console.error('error-->', e);
		}
	}

	handleEmail(email: string) {
		this.setState({ email: email });
	}

	handlePassword(password: string) {
		this.setState({ password: password });
	}

	handleRepeatPassword(repeatpassword: string) {
		this.setState({ repeatpassword: repeatpassword });
	}

	handleSignUp() {
		/*
		TODO:
		*/
	}

	handleSignUpFacebook() {
		/*
		TODO:
		*/
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
									<div className="signinContainerTopNavigationLeft">
										<Link className="remove_link_style" to="signin">
											<span>Sign In</span>
											<div className="signinContainerLineIndicator"/>
										</Link>
									</div>
									<div className="signinContainerTopNavigationRight selected">
										<span>Sign Up</span>
										<div className="signinContainerLineIndicator selected"/>
									</div>
								</div>
							</div>
							<div className="signUpContainerBottom">
								<div className="signUpContainerBottomEmail">
									<TextArea placeholder="email" callbackFromParent={this.handleEmail} backgroundColor="rgba(65, 36, 36, 0)"/>
								</div>
								<div className="signUpContainerBottomPassword">
									<TextArea placeholder="password" callbackFromParent={this.handlePassword} backgroundColor="rgba(65, 36, 36, 0)"/>
								</div>
								<div className="signUpContainerBottomRepeatPassword">
									<TextArea placeholder="repeat password" callbackFromParent={this.handleRepeatPassword} backgroundColor="rgba(65, 36, 36, 0)"/>
								</div>
								<div className="signinContainerBottomLoginButton">
									<span onClick={this.handleSignUp}>Sign Up</span>
								</div>
								<span className="signinContainerBottomOrText" >OR</span>
								<div className="signinContainerBottomFacebookButton" onClick={this.handleSignUpFacebook}>
									<span>Sign Up with facebook</span>
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}

export default SignUpPage;
