import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { persistStore } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// import rootReducer from './reducers'; // the value from combineReducers

const middleware = applyMiddleware(promise(), thunk);

export const store = createStore(reducer, middleware);

// const persistConfig = {
// 	key: 'root',
// 	storage: storage,
// 	stateReconciler: autoMergeLevel2
// };

// const persistReducerLocal = persistReducer(persistConfig, rootReducer);

export const persistor = persistStore(store);