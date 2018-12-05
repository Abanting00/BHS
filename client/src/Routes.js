import React, {Component} from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import home from './Home/Home';
import dashboard from './Main/Dashboard';
import document from './Document/Document';
import Register from './Home/Register';

class Routes extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={home}/>
					<Route path='/dashboard' component={dashboard}/>
					<Route path='/document' component={document}/>
					<Route path='/register' component={Register}/>
				</Switch>
			</Router>
		);
	}
};

export default Routes;