import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import home from './Home/Home';
import dashboard from './Main/Dashboard';
import document from './Document/Document';


class Routes extends Component {
	render() {
		return (
			<main>
				<Switch>
					<Route exact path='/' component={home}/>
					<Route path='/dashboard' component={dashboard}/>
					<Route path='/document' component={document}/>
				</Switch>
			</main>
		);
	}
};

export default Routes;