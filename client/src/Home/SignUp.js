import React, { Component } from 'react';
import './signUp.css';

class SignUp extends Component {
	render() {
		return (
			<div className="signup-bg">
				<h3 className="text">Sign Up</h3>
				<form className="signup-container">
                    <input
                    	className="inputs name"
                    	type="text"
                    	placeholder="First Name"/>
                    <input
                    	className="inputs name"
                    	type="text"
                    	placeholder="Last Name"/>
                    <input
                    	className="inputs field"
                    	type="text"
                    	placeholder="Email"/>
                    <input
                    	className="inputs field"
                    	type="password"
                    	placeholder="Create Password"/>
                    <input
                    	className="input field"
                    	type="password"
                    	placeholder="Retype Password"/>
                  <button className="btn btn-reg">Login</button>

                    <button className="btn btn-reg">Sign Up</button>

                </form>
			</div>
		);
	}
}

export default SignUp;