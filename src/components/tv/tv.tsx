
import * as React from 'react';
import { connect } from "react-redux";


// assets
import './tv.css';

@connect((store) => {
	return {
	};
})

// class
class Tv extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<h1>Tv</h1>
		);
	}
}

export default Tv;
