
import * as React from 'react';
import { connect } from "react-redux";


import CloseButton from '../cssAnimations/cssAnimations';


// assets
import './music.css';

@connect((store) => {
	return {
	};
})

// class
class Music extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div>
				<h1>Music</h1>
				<CloseButton/>
			</div>
		);
	}
}

export default Music;
