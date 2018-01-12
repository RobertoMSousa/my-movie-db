
import * as React from 'react';
import { connect } from 'react-redux';

// css
import './textArea.css';

@connect((store) => {
	return {
	};
})

// class
class TextArea extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event: any) {
		this.props.callbackFromParent(event.target.value);
	}

	render() {
		return (
			<form className="formStyle">
				<input
					style={{'background-color': this.props.backgroundColor}}
					className="hide-on-focus"
					placeholder={this.props.placeholder}
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
			</form>
		);
	}
}

export default TextArea;
