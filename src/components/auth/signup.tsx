
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
import { signup_user } from '../../actions/auth/auth';

@connect((store) => {
	return {
		movies: store.movies.movies.results,
		message: store.auth.message,
		user: store.auth.user
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

	componentWillReceiveProps(nextProps: any) {
		console.log('message-->', nextProps.message); // roberto
		if (nextProps.message === 'account created') {
			swal('Congrats!', 'account created', 'success');
			hashHistory.push('signin');
		}
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
		if (!isEmail(this.state.email)) {
			swal('Uppps!', 'The email is not valid!', 'error');
		} else {
			if (this.state.password !== this.state.repeatpassword) {
				swal('Uppps!', 'The passwords do not match', 'error');
			} else  {
				/*
				TODO: send the user confirmation email
				*/
				this.props.dispatch(signup_user(this.state.email, this.state.password, this.state.repeatpassword));
			}
		}
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
								<div className="signinContainerTopHeader noSelect">
									<img className="loginBackImage" src={loginBackImage}/>
									<span className="signinContainerTopHeaderTitle">MovieDB</span>
									<img className="signinContainerTopHeaderLogo" src={appLogo}/>
									<span className="signinContainerTopHeaderSlogan">Start your journey. Today.</span>
								</div>
								<div className="signinContainerTopNavigation noSelect">
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
								<div className="signinContainerBottomLoginButton noSelect" onClick={this.handleSignUp}>
									<span>Sign Up</span>
								</div>
								<span className="signinContainerBottomOrText noSelect" >OR</span>
								<div className="signinContainerBottomFacebookButton noSelect" onClick={this.handleSignUpFacebook}>
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
