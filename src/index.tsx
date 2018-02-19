import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import App from './App';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// css code
import './index.css';

//  redux store
import { store, persistor } from './store';

const app = document.getElementById('root');

ReactDOM.render(
	<div className="indexMainContainer">
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Routes/>
			</PersistGate>
		</Provider>
	</div>,
	app);

registerServiceWorker();
