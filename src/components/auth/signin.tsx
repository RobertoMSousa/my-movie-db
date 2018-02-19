
import * as React from 'react';
import { connect } from 'react-redux';
import { Link, hashHistory } from 'react-router';
import isEmail from 'validator/lib/isEmail';
import swal from 'sweetalert';

// external components
import TopMenu from '../top-menu/top-menu';
import TextArea from '../textArea/textArea';

// css
import './signin.css';

// static assets
const loginBackImage = require('../../img/login-back-image.svg');
const appLogo = require('../../img/logo.svg');
const imagePath: string = 'https://image.tmdb.org/t/p/w1280';

// external components
import * as Movie from '../../interfaces/movie';

// actions
import { getMostPopularMovies } from '../../actions/movies/movies';
import { signin_user } from '../../actions/auth/auth';

@connect((store) => {
	return {
		movies: store.movies.movies.results,
		user: store.auth.user
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

	componentWillReceiveProps(nextProps: any) {
		if (nextProps.user) {
			if (nextProps.user.isAuthenticated) {
				swal('Congrats!', 'You just logged in!', 'success');
				// redirect
				hashHistory.push('/user/profile');
			} else {
				// swal('Error!', 'email or password not valid', 'error');
			}
		}
	}

	componentWillMount() {
		try {
			this.setState({movieNumber: Math.floor(Math.random() * Math.floor(20))});
			this.props.dispatch(getMostPopularMovies());
		} catch (e) {
			console.error('error-->', e);
		}
	}

	hanglePassword(password: string) {
		this.setState({ password: password });
	}

	handleEmail(email: string) {
		this.setState({ email: email });
	}

	handleForgot() {
		/*
		TODO:
		*/
	}

	handleSubmit() {
		if (!isEmail(this.state.email)) {
			swal('Uppps!', 'The email is not valid!', 'error');
		} else {
			this.props.dispatch(signin_user(this.state.email, this.state.password));
		}
	}

	handleFacebookLogin() {
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
