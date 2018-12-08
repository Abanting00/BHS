import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { newDoc } from '../Actions/docActions';
import { getUserID } from '../Helper/authHeader';
import { Redirect } from 'react-router';


class CreateDoc extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: "",
			description: "",
			permission: "Public",
			locked: false,
			redirect: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e) {
		if(e.target.name == 'locked'){
			let boolVal = e.target.value == 'Yes' ? true : false;
			this.setState({
            	[e.target.name]: boolVal
        	})
		}else{
			this.setState({
            	[e.target.name]: e.target.value
        	})
		}
    }

    onSubmit(e) {
    	e.preventDefault();

    	const doc = {
    		title: this.state.title,
    		description: this.state.description,
    		permission: this.state.permission,
    		is_locked: this.state.locked,
    		body: "",
    		owner: getUserID()
    	}

    	this.props.newDoc(doc);
    }

    componentWillReceiveProps(nextProps) {
    	this.setState({
    		redirect: nextProps.doc.success
    	})
  }

	render() {
		console.log(this.state.locked)

		let screen;
		if (this.state.redirect){
			screen = <Redirect to={{pathname: '/document', state: {id: this.props.doc.data._id }}}/>
		}

		return (
			<Form onSubmit={this.onSubmit}>
				{screen}
        		<FormGroup>
		          	<Label>Title</Label>
		          	<Input name="title" onChange={this.onChange} required/>
		        </FormGroup>
		        <FormGroup>
		          	<Label>Description</Label>
		          	<Input type="textarea" name="description" onChange={this.onChange} required/>
		        </FormGroup>
		        <FormGroup>
		          	<Label>Permission Type</Label>
		          	<Input type="select" name="permission" onChange={this.onChange}>
		           		<option>Public</option>
		            	<option>Restricted</option>
		            	<option>Shared</option>
		            	<option>Private</option>
		          	</Input>
		        </FormGroup>
		        <FormGroup>
		          	<Label>Lock</Label>
		          	<Input type="select" name="locked" onChange={this.onChange}>
		           		<option>No</option>
		            	<option>Yes</option>
		          	</Input>
		        </FormGroup>
		        <hr />
				<Button type="submit" color="primary" style={{float: "right"}}>Create Doc</Button>
      		</Form>
		);
	}
}

const mapStateToProps = state => ({
    doc: state.docs.item
})

export default connect(mapStateToProps, { newDoc })(CreateDoc);
