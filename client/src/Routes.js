import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import home from './Home/Home';
import dashboard from './Main/Dashboard';
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
					<Route exact path='/' component={home}/>
					<Route path='/dashboard' component={dashboard}/>
					<Route path='/document' component={Document}/>
					<Route path='/register' component={Register}/>
				</Switch>
				</div>
			</Router>
		);
	}
};

export default Routes;