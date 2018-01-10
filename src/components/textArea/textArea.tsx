
import * as React from 'react';
import { connect } from "react-redux";

import './textArea.css';



@connect((store) => {
	return {
	};
})

// class
class TextArea extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.state = {
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.props.callbackFromParent(event.target.value);
	}

	render() {
		return (
			<form className='formStyle'>
				<input
					className='hide-on-focus'
					placeholder={this.props.placeholder}
					type="text"
					value={this.state.value} onChange={this.handleChange}/>
			</form>
		);
	}
}


export default TextArea;
