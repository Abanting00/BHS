import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerUser } from '../Actions/userActions';
import './Register.css';

class Register extends Component {
	constructor(props){
		super(props);

		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			username: '',
			password: ''
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();

		const user = {
			fname: this.state.firstname,
			lname: this.state.lastname,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		}

		this.props.registerUser(user);
	}

	render() {
		return (
			<div className="register-bg">
				<Row>
					<Col sm="12" md={{ size: 4, offset: 4 }}>
						<Form className="register" onSubmit={this.onSubmit}>
							<h1 className="text-center">Register</h1>
							<br />
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label>First Name</Label>
										<Input type="firstname" name="firstname" onChange={this.onChange}/>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label>Last Name</Label>
										<Input type="lastname" name="lastname" onChange={this.onChange}/>
									</FormGroup>
								</Col>
							</Row>
							<FormGroup>
								<Label>Email</Label>
								<Input type="email" name="email" onChange={this.onChange}/>
							</FormGroup>
							<FormGroup>
								<Label>Username</Label>
								<Input type="username" name="username" onChange={this.onChange}/>
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" onChange={this.onChange}/>
							</FormGroup>
							<br />
							<Button className="submitbutton" type="submit" color="primary"><span className="btn-span">Register</span></Button>
							<br />
						</Form>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	status: state.users.status
})

export default connect(mapStateToProps, { registerUser })(Register);

