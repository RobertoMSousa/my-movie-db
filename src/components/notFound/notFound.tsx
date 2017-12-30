
import * as React from 'react';
import { connect } from "react-redux";



import TopMenu from '../top-menu/top-menu';
// assets

@connect((store) => {
	return {
	};
})

// class
class NotFound extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				<h1>Not Found</h1>
			</div>
		);
	}
}

export default NotFound;
