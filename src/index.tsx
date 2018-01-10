import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from "react-redux"

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import LandingPage from './components/landingPage/landingPage';
import Movies from './components/movies/moviesList';
import Shows from './components/shows/shows';
import Music from './components/music/music';
import Others from './components/others/others';
import NotFound from './components/notFound/notFound';

// css code
import './index.css';

//  redux store
import store from "./store"


const app = document.getElementById('root');

ReactDOM.render(
	<div className="indexMainContainer">
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={LandingPage}></IndexRoute>
					<Route path="movies" name="movies" component={Movies}></Route>
					<Route path="shows" name="shows" component={Shows}></Route>
					<Route path="music" name="music" component={Music}></Route>
					<Route path="others" name="others" component={Others}></Route>
					<Route path="*" name='notFound' component={NotFound}></Route>
				</Route>
			</Router>
		</Provider>
	</div>,
app);


registerServiceWorker();
