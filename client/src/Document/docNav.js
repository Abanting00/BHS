import React, { Component } from 'react';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';  

class DocNav extends Component {
	render() {
		return (
			<div className="navHome">
				<Navbar light expand="md">
					<NavbarBrand href="/">BHS</NavbarBrand>
					<Nav className= "ml-auto" navbar>
						<NavItem>
							<i className = "material-icons docicons" >people</i>
						</NavItem>
						<NavItem>
							<i className = "material-icons docicons">history</i>
						</NavItem>
						<NavItem>
							<Button color = "info" style = {{marginTop:"5px"}}>Save</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

export default DocNav;