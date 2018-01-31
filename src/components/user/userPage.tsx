
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
import { get_protected_route } from '../../actions/user/user';

@connect((store) => {
	return {
		user: store.auth.message.data
	};
})

// class
class UserPage extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	componentWillMount() {
		const { user } = this.props;
		if (!user || !user.isAuthenticated) {
			hashHistory.push('signin');
		} else {
			this.props.dispatch(get_protected_route());
		}
	}

	render() {
		return (
			<div style={{'height': 'inherit'}}>
				<TopMenu path={this.props.route.path}/>``
				<h1>User Page</h1>
			</div>
		);
	}
}

export default UserPage;
