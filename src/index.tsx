import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// components import 
import LandingPage from './components/landingPage/landingPage';
import Movies from './components/movies/moviesList';
import Shows from './components/shows/shows';
import Music from './components/music/music';
import Others from './components/others/others';
import SignIn from './components/auth/signin';
import SignUp from './components/auth/signup';
import NotFound from './components/notFound/notFound';
import ComingSoon from './components/comingSoon/comingSoon';

// css code
import './index.css';

//  redux store
import store from './store';

const app = document.getElementById('root');

ReactDOM.render(
	<div className="indexMainContainer">
		<Provider store={store}>
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
					<Route path="*" name="notFound" component={NotFound}/>
				</Route>
			</Router>
		</Provider>
	</div>,
	app);

registerServiceWorker();
