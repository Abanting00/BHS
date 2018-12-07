import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import store from './store';
import Navs from './Home/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
  			<div className="App">
  			 <Navs />
  	     <Routes />
        </div>
	    </Provider>
    );
  }
}

export default App;