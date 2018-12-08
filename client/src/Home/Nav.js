import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Logout } from "../Helper/authHeader";
import { withRouter } from 'react-router-dom';

function Login(){
	return <NavLink href="/">Login</NavLink> 
}

function Register() {
	return <NavLink href="/register">Sign Up</NavLink>
}

function HomeNav(path) {
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
}

function DashboardNav() {
	return (
		<Nav className="ml-auto" navbar>
			<NavItem>
				<NavLink>Inbox</NavLink>
			</NavItem>
			<NavItem>
				<NavLink href="/" onClick={() => {Logout()}}>Logout</NavLink>
			</NavItem>
		</Nav>
	);
};

function NavSwitch(path) {
	let currPath = path.path
	console.log(currPath);
	if((currPath === '/register') || (currPath === '/')){
		return <HomeNav path = {currPath}/>;
	}
	return <DashboardNav />;
}

// Two problems:
// 1. Logout() being triggered when you refresh or click on BHS
// 2. For some reason when you log in, path changes to "dashboard", but then changes to "/" immediately after

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