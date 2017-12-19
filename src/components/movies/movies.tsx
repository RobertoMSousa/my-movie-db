
import * as React from 'react';

// assets
import './movies.css';

// class
class Movies extends React.Component <any, any> {


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
				<h2>
					{this.props.movie.overview ? this.props.movie.overview : 'sample'}
				</h2>
			</div>
		);
	}
}

export default Movies;
