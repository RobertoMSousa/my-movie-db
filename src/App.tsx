
import * as React from 'react';
import {Link} from 'react-router';


import TopMenu from './components/top-menu/top-menu';

// images
const logo = require('./img/logo.svg');

// css
import './App.css';

class App extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<div className="App-header">
					<Link to='/'>
						<img src={logo} className="App-logo" alt="logo" />
					</Link>
				</div>
				<TopMenu/>
				{this.props.children}
			</div>
		);
	}
}

export default App;
