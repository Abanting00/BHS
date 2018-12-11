import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home/Home';
import Dashboard from './Main/Dashboard';
import Document from './Document/Document';
import Register from './Home/Register';
import Navs from './Home/Nav';

class Routes extends Component {
	render() {
		return (
			<Router>
				<div>
				<Navs />
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/dashboard' component={Dashboard}/>
					<Route path='/document' component={Document}/>
					<Route path='/register' component={Register}/>
				</Switch>
				</div>
			</Router>
		);
	}
};

export default Routes;