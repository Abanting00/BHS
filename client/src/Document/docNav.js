import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import { getUserID } from '../Helper/authHeader';
import { edit } from './Document';
import { saveDoc } from '../Actions/docActions';   

class DocNav extends Component {
	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit() {
		new Promise((resolve,reject) => {
			this.props.edit();
			resolve()
		}).then(res => {
			const docData = {
		      id: this.props.id,
		      body: this.props.body,
		      modified_by: getUserID()
	    	}
	    	this.props.saveDoc(docData);
	    })
  	}

	render() {
		return (
			<div className="navHome">
				<Navbar light expand="md">
					<NavbarBrand href="/" style={{fontSize:"20pt",fontWeight:"bold"}}>B.H.S</NavbarBrand>
					<Nav className= "ml-auto" navbar>
						<NavItem>
							<i className="material-icons docicons" >people</i>
						</NavItem>
						<NavItem>
							<i className="material-icons docicons">history</i>
						</NavItem>
						<NavItem>
							<Button onClick={this.onSubmit} color="info" style={{marginTop:"5px"}}>Save</Button>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  success: true
})

export default connect(mapStateToProps, { saveDoc })(DocNav);