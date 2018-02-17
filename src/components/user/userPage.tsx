
import * as React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

// external components
import TopMenu from '../top-menu/top-menu';

// css
import './user.css';

// static assets

// external components

// actions
import { signout_user } from '../../actions/auth/auth';

@connect((store) => {
	console.log('store-->', store); // roberto	
	return {
		user: store.auth.user,
	};
})

// class
class UserPage extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};
		this.logout = this.logout.bind(this);
	}

	logout() {
		this.props.dispatch(signout_user());
		hashHistory.push('/');
	}

	componentWillMount() {
		console.log('this.props.user-->', this.props.user); // roberto
		if (!this.props.user || !this.props.user.isAuthenticated) {
			hashHistory.push('/');
		}
	}

	render() {
		return (
			<div style={{'height': 'inherit'}}>
				<TopMenu path={this.props.route.path}/>``
				<h1>User Page</h1>
				<div onClick={this.logout} className="userPageLogOutButton center">
					<span>Logout</span>
				</div>
			</div>
		);
	}
}

export default UserPage;
