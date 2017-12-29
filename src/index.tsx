import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import { Provider } from "react-redux"

import App from './App';
import registerServiceWorker from './registerServiceWorker';


import Movies from './components/movies/moviesList';
import Shows from './components/shows/shows';
import Tv from './components/tv/tv';
import Music from './components/music/music';
import Others from './components/others/others';

// css code
import './index.css';

//  redux store
import store from "./store"


const app = document.getElementById('root');

ReactDOM.render(
	<div>
		<Provider store={store}>
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Movies}></IndexRoute>
					<Route path="movies" name="movies" component={Movies}></Route>
					<Route path="shows" name="shows" component={Shows}></Route>
					<Route path="tv" name="tv" component={Tv}></Route>
					<Route path="music" name="music" component={Music}></Route>
					<Route path="others" name="Others" component={Others}></Route>
				</Route>
			</Router>
		</Provider>
	</div>,
app);


registerServiceWorker();
