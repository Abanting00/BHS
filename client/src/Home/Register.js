import React, { Component } from 'react';
import { Alert, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { registerUser, fetchUser } from '../Actions/userActions';
import './Register.css';

class Register extends Component {
	constructor(props){
		super(props);

		this.state = {
			firstname: '',
			lastname: '',
			email: '',
			username: '',
			password: '',
			failed: undefined 
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

		this.props.fetchUser(this.state.username)
			.then(res => {
				this.setState({failed: this.props.exists})
				if(!this.state.failed){
					this.props.registerUser(user);
				}
			});
	}

	componentWillReceieveProps(nextProps) {
		this.setState({
			failed: nextProps.exists
		})
	}

	render() {
		let screen;
		screen =
			<div className="register-bg">
				<Row>
					<Col sm="12" md={{ size: 4, offset: 4 }}>
						{this.state.failed && <Alert color="danger" style = {{marginTop: "20px"}}>This username is already taken!</Alert>}
						<Form className="register" onSubmit={this.onSubmit}>
							<h1 className="text-center">Register</h1>
							<br />
							<Row form>
								<Col md={6}>
									<FormGroup>
										<Label>First Name</Label>
										<Input type="firstname" name="firstname" onChange={this.onChange} required/>
									</FormGroup>
								</Col>
								<Col md={6}>
									<FormGroup>
										<Label>Last Name</Label>
										<Input type="lastname" name="lastname" onChange={this.onChange} required/>
									</FormGroup>
								</Col>
							</Row>
							<FormGroup>
								<Label>Email</Label>
								<Input type="email" name="email" onChange={this.onChange} required/>
							</FormGroup>
							<FormGroup>
								<Label>Username</Label>
								<Input type="username" name="username" onChange={this.onChange} required/>
							</FormGroup>
							<FormGroup>
								<Label>Password</Label>
								<Input type="password" name="password" onChange={this.onChange} required/>
							</FormGroup>
							<br />
							<Button className="submitbutton" type="submit" color="primary"><span className="btn-span">Register</span></Button>
							<br />
						</Form>
					</Col>
				</Row>
			</div>
	return (
		<div>
			{screen}
		</div>
		);
	}
}

const mapStateToProps = state => ({
	status: state.users.status,
	exists: state.users.exists
})

export default connect(mapStateToProps, { registerUser, fetchUser })(Register);

