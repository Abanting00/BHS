import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Logout } from "../Helper/authHeader";
import { withRouter } from 'react-router-dom';

const Login = () => {
	return (
		<NavLink href="/">Login</NavLink>
	) 
};

const Register = () => {
	return (
		<NavLink href="/register">Sign Up</NavLink>
	)
};

const HomeNav = (path) => {
	return (
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="/">About</NavLink>
			</NavItem>
			<NavItem>
				{path.path === '/register' && <Login />} 
				{path.path === '/' && <Register />}  
			</NavItem>
		</Nav>
		)
};

const DashboardNav = () => {
	return (
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink>Inbox</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/" onClick = {()=>Logout()}>Logout</NavLink>
			</NavItem>
		</Nav>
	);
};

const NavSwitch = (path) => {
	let currPath = path.path
	console.log(currPath);
	if((currPath === '/register') || (currPath === '/')){
		return <HomeNav path = {currPath}/>;
	}
	return (
		<DashboardNav />
	)
};


class Navs extends Component {
	render() {
		return (
			<div className = "navHome">
				<Navbar light expand="md">
					<NavbarBrand href="/">B.H.S</NavbarBrand>
					<NavSwitch path = {this.props.location.pathname}/>
				</Navbar>
			</div>

		);
	};
};

export default withRouter(Navs);