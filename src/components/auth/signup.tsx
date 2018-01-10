
import * as React from 'react';
import { connect } from "react-redux";
// import isEmail from 'validator/lib/isEmail';



import TopMenu from '../top-menu/top-menu';
// import TextArea from '../textArea/textArea';
import './signin.css';

// assets
// const loginBackImage = require('../../img/login-back-image.svg');

@connect((store) => {
	return {
	};
})

// class
class SignUpPage extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}


	render() {
		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				<h1>SignUpPage</h1>
			</div>
		);
	}
}


export default SignUpPage;
