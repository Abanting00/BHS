import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';

import Login from './Home/Login';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
			<div className="App">
	        	<Routes />
      	</div>
	    </Provider>
    );
  }
}

export default App;