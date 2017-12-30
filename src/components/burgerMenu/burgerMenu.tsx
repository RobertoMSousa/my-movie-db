
import * as React from 'react';
import { connect } from "react-redux";


// assets
import './burgerMenu.css';

@connect((store) => {
	return {
	};
})

// class
export default class BurgerMenu extends React.Component <any, any> {

	constructor(props) {
		super(props);
		this.toggleClass = this.toggleClass.bind(this);
		this.setWrapperRef = this.setWrapperRef.bind(this);
		this.handleClickOutside = this.handleClickOutside.bind(this);
		this.state = {
			open: false,
			wrapperRef: ''
		};
	}

	componentDidMount() {
	   document.addEventListener('mousedown', this.handleClickOutside);
   }

   componentWillUnmount() {
	   document.removeEventListener('mousedown', this.handleClickOutside);
   }


	toggleClass() {
		console.log('open state-->', this.state.open);// roberto
		this.setState({ open: !this.state.open });
	};


	setWrapperRef(node) {
		this.state.wrapperRef = node;
	}


	handleClickOutside(event) {
		if (this.state.open && this.state.wrapperRef && !this.state.wrapperRef.contains(event.target)) {
			this.setState({ open: !this.state.open });
		}
	}


	render() {

		const arr = ['movies', 'shows', 'music', 'others'];

		return (
			<div ref={this.setWrapperRef} className={this.state.open ? 'burger oppenned-burger': 'burger'} onClick={this.toggleClass} >
				<span className="cls"></span>
				<span>
					<ul className="sub-menu">
						{
						arr.map((value: string)=> {
							return(
								<li>
									<a>{value.toUpperCase()}</a>
								</li>
							);
						})
						}
					</ul>
				</span>
				<span className="cls"></span>
			</div>
		);
	}
}
