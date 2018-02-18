import React, { Component } from 'react';
import { Route/*, Redirect*/ } from 'react-router-dom';
import Header from '../components/header/Header';
import Duties from './Duties';
import Statistics from './Statistics';
import Settings from './Settings';
import Missions from './Missions';
import Mission from './Mission';

class App extends Component {
	render () {
		return (
			<div className="wrapper">
				<Header />
				
				{ /*<Redirect from="/" exact to="/missions" /> */ }

				<Route path="/missions" component={ Missions } />
				<Route path="/duties" component={ Duties } />
				<Route path="/statistics" component={ Statistics } />
				<Route path="/settings" component={ Settings } />
				<Route path="/mission/:missionType" component={ Mission } />
			</div>
		)
	}
}

export default App;