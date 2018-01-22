
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// external components
import TopMenu from '../top-menu/top-menu';

// css
import './notFound.css';

// static assets
const notFound = require('../../img/404.svg');

@connect((store) => {
	return {
	};
})

// class
class NotFound extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div>
				<TopMenu path={this.props.route.path}/>
				<div className="mainNotFoundContainer">
					<div className="notFoundImage">
						<img src={notFound} className="" alt=""/>
					</div>

				<Link className="return404Button noSelect remove_link_style" to="/">
					<span>Return</span>
				</Link>

				</div>
			</div>
		);
	}
}

export default NotFound;
