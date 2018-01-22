
import * as React from 'react';
import { connect } from 'react-redux';
import isEmail from 'validator/lib/isEmail';
import swal from 'sweetalert';

// external components
import TopMenu from '../top-menu/top-menu';
import TextArea from '../textArea/textArea';

// actions
import { subscribe_newletter } from '../../actions/newsletter/newsletter';

// css
import './comingSoon.css';

// static assets
const comingSoonImg = require('../../img/construction@2x.png');

@connect((store) => {
	return {
	};
})

// class
class ComingSoon extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
			email: ''
		};
		this.handleEmail = this.handleEmail.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		try {
			if (isEmail(this.state.email)) {
				this.props.dispatch(subscribe_newletter(this.state.email));
			} else {
				swal('Uppps!', 'The email is not valid!', 'error');
			}
		} catch (e) {
			console.log('error-->', e);
		}
	}

	handleEmail(email: string) {
		try {
			this.setState({ email: email });
		} catch (e) {
			console.log('error-->', e);
		}
	}

	render() {
		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				<div className="comingSoonMainContainer">
					<div className="comingSoonImage">
						<img src={comingSoonImg} className="" alt=""/>
					</div>
					<div className="comingSoonText center">
						<span>Our team of superheroes is working on this awesome feature as we speak. Subscribe to the newsletter and keep up to date with the latest features.</span>
					</div>

					<div className="comingSoonNewsletter landingPage_subscribe_email_container">
						<div className="landingPage_subscribe_email">
							<TextArea placeholder="email address" callbackFromParent={this.handleEmail} backgroundColor="#d8d8d8"/>
						</div>
						<div onClick={this.handleSubmit} className="landingPage_subscribe_submit">
							<span>Submit</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ComingSoon;
