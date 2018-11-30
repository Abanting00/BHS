import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

let path = window.location.pathname;

function Login(){
	return <NavLink href="/">Login</NavLink> //couldn't get ES6 syntax working D: was giving me error so i changed  back to function
}

function Logout(){
	return <NavLink href="/">Logout</NavLink>
}

function Register() {
	return <NavLink href="/register">Sign Up</NavLink>
}

function HomeNav() {
	return (
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink href="/">About</NavLink>
			</NavItem>
			<NavItem>
			{path == '/register' && <Login />} 
			{path == '/' && <Register />}  
			</NavItem>
		</Nav>
		)
}

function DashboardNav() {
	return (
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink>Inbox</NavLink>
			</NavItem>
			<NavItem>
				<Logout />
			</NavItem>
		</Nav>
	);
};

function NavSwitch() {
	if((path == '/register') || (path == '/')){
		return <HomeNav />
	}
	return <DashboardNav />
}
class Navs extends Component {
	render() {
		return (
			<div className = "navHome">
				<Navbar light expand="md">
					<NavbarBrand href="/">B.H.S</NavbarBrand>
					<NavSwitch />
				</Navbar>
			</div>

		);
	};
};

export default Navs;