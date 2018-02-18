import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import configureDatabase from './database/configureDatabase';
import { ConnectedRouter } from 'react-router-redux';
import moment from 'moment';

import 'normalize.css';
import 'font-awesome/css/font-awesome.min.css'; 
import './sass/main.css';

moment.locale('ru');

const history = createHistory();
const store = configureStore(history);

export const database = configureDatabase();

ReactDOM.render(
	<Provider store={ store }>
		<ConnectedRouter history={ history }>
			<div>
				<Route path="/" component={ App } />
			</div>
		</ConnectedRouter>
	</Provider>, 
	document.getElementById('root')
);

registerServiceWorker();