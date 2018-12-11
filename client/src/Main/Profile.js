import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Alert, Form, FormGroup, Label, Input } from 'reactstrap';
import { getUser } from '../Helper/authHeader';
import { connect } from 'react-redux';
import avatar from './head.jpg';
import './Profile.css';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			user: getUser()
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onUpload = this.onUpload.bind(this);
	}

	onUpload(e) {
    }

    onSubmit(e) {
    	e.preventDefault();
    }


	render() {
		return (
			<Modal isOpen={this.props.open} toggle={this.props.toggle}>
				<ModalHeader toggle={this.props.toggle}>Profile</ModalHeader>
				<ModalBody className="center-profile">
					<div className="center-profile">
				    	<img className="avatar" src={avatar} alt="Avatar"/> 
				    </div>
				    <h3 className="text-center"> {this.state.user.fname} {this.state.user.lname} </h3>
				    <h4 className="text-center">Role: {this.state.user.role} </h4>
				</ModalBody>
				<ModalFooter>
				{this.state.user.role === 'GU' ? <Button color="info" onClick={this.props.toggle}>Apply To Be OU</Button> : <div></div>}
				<Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
				</ModalFooter>
			</Modal>
		);
	}
}

export default Profile;
