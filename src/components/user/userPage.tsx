
import * as React from 'react';
import { connect } from 'react-redux';

// external components
import TopMenu from '../top-menu/top-menu';

// css
import './user.css';

// static assets

// external components

// actions
import { get_protected_route } from '../../actions/user/user';

@connect((store) => {
	console.log('store user-->', store); // roberto
	return {
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
		console.log('token-->', localStorage); // roberto
		this.props.dispatch(get_protected_route());
	}

	render() {
		// const user: any = this.props.user;
		return (
			<div style={{'height': 'inherit'}}>
				<TopMenu path={this.props.route.path}/>``
				<h1>User Page</h1>
			</div>
		);
	}
}

export default UserPage;
