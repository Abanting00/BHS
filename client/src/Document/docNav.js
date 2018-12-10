import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';  

class DocNav extends Component {
	render() {
		return (
			<div className = "navDoc">
				<Navbar light expand="md">
				<NavbarBrand href="/">BHS</NavbarBrand>
				</Navbar>
			</div>
		);
	}
}

export default DocNav;