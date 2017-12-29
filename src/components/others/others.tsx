
import * as React from 'react';
import { connect } from "react-redux";


// assets
import './others.css';

@connect((store) => {
	return {
	};
})

// class
class Others extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<h1>Others</h1>
		);
	}
}

export default Others;
