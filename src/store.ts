import reducer from './reducers/index';
import { createStore, applyMiddleware } from 'redux';

// import logger from "redux-logger";
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
//
// const middleware = applyMiddleware(promise(), logger());
const middleware = applyMiddleware(promise(), thunk);
// const middleware = applyMiddleware(promise);

export default createStore(reducer, middleware);
