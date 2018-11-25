import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../Actions/userActions';
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
            username: this.state.username,
            password: this.state.password
        }

        this.props.loginUser(user);
    }

	render() {
        console.log(this.props.status)
		return (
               <div className="login">
     			<Form onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <br/>

                    <FormGroup>
                        <Label>Username</Label>
                        <Input type="username" name="username" onChange={this.onChange}/>
                     </FormGroup>

                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" onChange={this.onChange}/>
                    </FormGroup>

                    <Button type="submit" outline color="primary" size="lg">Login</Button>
                </Form>
               </div>
		);
	}
}

const mapStateToProps = state => ({
    status: state.users.status
})

export default connect(mapStateToProps, { loginUser })(Login);