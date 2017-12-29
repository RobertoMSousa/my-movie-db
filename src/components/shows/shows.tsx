
import * as React from 'react';
import { connect } from "react-redux";


// assets
import './shows.css';

@connect((store) => {
	return {
	};
})

// class
class Shows extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<h1>Shows</h1>
		);
	}
}

export default Shows;
