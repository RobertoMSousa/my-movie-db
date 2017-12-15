
import * as React from 'react';
import './movies.css';



class Movies extends React.Component <any, any> {


	state = {
		sampleState: ''
	};


	constructor(props: any) {
		super(props);
		console.log('constructor');//roberto
	}

	componentWillMount() {
		console.log('componentWillMount');//roberto
	}

	componentDidMount() {
		console.log('componentDid Mount');//roberto
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
