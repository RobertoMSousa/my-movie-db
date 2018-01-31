
import * as React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// components import 
import App from './App';
import LandingPage from './components/landingPage/landingPage';
import Movies from './components/movies/moviesList';
import Shows from './components/shows/shows';
import Music from './components/music/music';
import Others from './components/others/others';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import NotFound from './components/notFound/notFound';
import ComingSoon from './components/comingSoon/comingSoon';
import UserPage from './components/user/userPage';

@connect((store) => {
	return {
	};
})

// class
class Routes extends React.Component <any, any> {

	constructor(props: any) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={LandingPage} />
					<Route path="movies" name="movies" component={Movies}/>
					<Route path="shows" name="shows" component={Shows}/>
					<Route path="music" name="music" component={Music}/>
					<Route path="others" name="others" component={Others}/>
					<Route path="signin" name="signin" component={SignIn}/>
					<Route path="signup" name="signup" component={SignUp}/>
					<Route path="comingsoon" name="comingsoon" component={ComingSoon}/>
					<Route path="user" name="user" component={UserPage}/>
					<Route path="*" name="notFound" component={NotFound}/>
				</Route>
			</Router>
		);
	}
}

export default Routes;