
import * as React from 'react';
import './App.css';

import Movie from './components/movies/movies';
const logo = require('./logo.svg');

// IMovie interface
interface IMovie {
	_id: number;
	title: string;
	desc?: string;
}

// moviesList
const moviesList: Array<IMovie> = [
	{
		_id: 0,
		title: "sample 1",
		desc: "desc 1"
	},{
		_id: 1,
		title: "sample 2"
	},{
		_id: 2,
		title: "sample 3"
	},{
		_id: 3,
		title: "sample 4"
	}];


class App extends React.Component <any, any> {


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
			<div className="App">
				<div className="App-header">
			 		<img src={logo} className="App-logo" alt="logo" />
				</div>
				<div>
					{moviesList.map((movie)=> {
						return(
							<Movie key={movie._id} movie={movie} />
						)
					})}
				</div>
			</div>
		);
	}
}

export default App;
