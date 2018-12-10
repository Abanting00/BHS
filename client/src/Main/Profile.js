import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { uploadImage } from '../Actions/userActions';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			file: null
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onUpload = this.onUpload.bind(this);
	}

	onUpload(e) {
        this.setState({file:e.target.files[0]});
    }

    onSubmit(e) {
    	e.preventDefault();

 		const formData = new FormData();
 		formData.append('image',this.state.file);
 		console.log(formData);

 		this.props.uploadImage(formData);
    }


	render() {
		console.log(this.state.file)
		return (
			<Form onSubmit={this.onSubmit}>
				<FormGroup>
		          <Label for="Image">File</Label>
		          <Input type="file" name="image"  onChange={this.onUpload} required/>
		        </FormGroup>
				<Button className="submitbutton" type="submit" color="primary"><span className="btn-span">Register</span></Button>

		    </Form>
		);
	}
}

const mapStateToProps = state => ({
	status: state.users.status
})


export default connect(mapStateToProps, { uploadImage })(Profile);
