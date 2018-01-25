
import { combineReducers } from 'redux';

import movies from './movies/movies';
import auth from './auth/auth';
import newsletter from './newsletter/newsletter';

export default combineReducers({
	movies,
	auth,
	newsletter
});
