import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux"
import './index.css';
import store from "./store"



ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>, document.getElementById('root') as HTMLElement);

registerServiceWorker();
