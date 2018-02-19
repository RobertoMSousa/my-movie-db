import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore, persistReducer } from 'redux-persist';
// import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const middleware = applyMiddleware(promise(), thunk);

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
};

const persistedReducerLocal = persistReducer(persistConfig, reducer);

export const store = createStore(persistedReducerLocal, middleware);

export const persistor = persistStore(store);