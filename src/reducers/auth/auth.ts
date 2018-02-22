
// auth reducer
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const AuthReducer = function reducer(
	state: any = {
		user: {},
		message: {},
		fetching: false,
		fetched: false,
		error: null,
	}, 
	action: any) {
		switch (action.type) {
			case 'SIGNIN_USER': {
				return { ...state, fetching: true };
			}
			case 'SIGNIN_USER_SUCCESS': {
				return { ...state, fetching: false, fetched: true, user: action.payload.data, message: action.payload.message};
			}
			case 'SIGNIN_USER_FAILED': {
				return { ...state, fetching: false, fetched: false, error: action.payload };
			}
			case 'SIGNUP_USER': {
				return { ...state, fetching: true };
			}
			case 'SIGNUP_USER_SUCCESS': {
				return { ...state, fetching: false, fetched: true, user: action.payload.data, message: action.payload.message };
			}
			case 'SIGNUP_USER_FAILED': {
				return { ...state, fetching: false, fetched: false, error: action.payload };
			}
			case 'SIGNOUT_USER': {
				return { ...state, fetching: true };
			}
			case 'SIGNOUT_USER_SUCCESS': {
				return { ...state, fetching: false, fetched: true, user: null, message: action.payload.message };
			}
			case 'SIGNOUT_USER_FAILED': {
				return { ...state, fetching: false, fetched: false, error: action.payload };
			}
			default: {
				return {...state};
			}
		}
};

const persistConfig = {
	key: 'auth',
	storage: storage
};

export default persistReducer(persistConfig, AuthReducer);