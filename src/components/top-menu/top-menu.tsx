
import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// components
// import BurgerMenu from '../burgerMenu/burgerMenu';

// css files
import './top-menu.css';
// svg and images
const loginLogo = require('../../img/login.svg');

@connect((store) => {
	return {
	};
})

// class
class TopMenu extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.changeSelectedValue = this.changeSelectedValue.bind(this);
		this.state = {
			selectValue: this.props.path ? this.props.path : ''
		};
	}

	changeSelectedValue(e: any) {
		this.setState({
			selectValue: e.target.id
		});
	}

	render() {
		const arr: Array<string> = ['movies', 'shows', 'music', 'others'];
		return (
			<div className="topBarContainer">
				{/* <BurgerMenu/> */}
				{
					arr.map((value: string) => {
						return(
							<div key={value} className={value === this.state.selectValue ? 'topBarListName selected' : 'topBarListName'}>
								<Link className="remove_link_style" to={value}>
									<span id={value} onClick={this.changeSelectedValue.bind({value})}>{value.toUpperCase()}</span>
								</Link>
								<div className={value === this.state.selectValue ? 'selected-line-indicator selected' : 'selected-line-indicator'}/>
							</div>
						);
					})
				}
				<img src={loginLogo} className="topMenuLoginIcon"/>
			</div>
		);
	}
}

export default TopMenu;
