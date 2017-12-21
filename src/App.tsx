
import * as React from 'react';

//
// const middleware = applyMiddleware()

import './App.css';
import store from "./store"


import Movie from './components/movies/movies';

const logo = require('./logo.svg');


class App extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
			 		<img src={logo} className="App-logo" alt="logo" />
				</div>
				<Movie store={store}/>
			</div>
		);
	}
}


export default App;
