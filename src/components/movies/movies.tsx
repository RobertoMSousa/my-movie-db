
import * as React from 'react';
// import PropTypes from 'prop-types';

// assets
import './movies.css';

// class
class Movies extends React.Component <any, any> {

	// static propTypes = {
	// 	movie: PropTypes.shape({
	// 		_id: PropTypes.number,
	// 		title: PropTypes.string.isRequired,
	// 		desc: PropTypes.string
	// 	})
	// }

	state = {
		sampleState: ''
	};

	constructor(props: any) {
		super(props);
		console.log('constructor');// roberto
	}

	componentWillMount() {
		console.log('componentWillMount');// roberto
	}

	componentDidMount() {
		console.log('componentDid Mount');// roberto
	}

	render() {
		return (
			<div>
				<h1>
					{this.props.movie.title}
				</h1>
			</div>
		);
	}
}

export default Movies;
