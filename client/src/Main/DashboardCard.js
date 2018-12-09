import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Redirect } from 'react-router';


class DashboardCard extends Component {
	constructor(props) {
		super(props);


		this.state = {
			modal: false,
			edit: false
		}

		this.toggle = this.toggle.bind(this);
    	this.toggleEdit = this.toggleEdit.bind(this);
	}

	toggle(e) {
		e.preventDefault();
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleEdit() {
		this.setState({
			edit: true
		});
	}

	
	render() {
		let screen;
		if (this.state.edit){
			screen = <Redirect to={{pathname: '/document', state: { id:this.props.id }}}/>
		}

		return (
			<Card body style={{margin: '10px'}}>
			 	<CardTitle style={{fontSize: '25px'}}>{this.props.title}</CardTitle>
        		<CardText>{this.props.description}</CardText>
        		<br />
				<Button color="info" onClick={this.toggle} style={{display: "block", margin: "0 auto"}}>Open Doc</Button>        		
				<hr />
              	<CardText>
		            <small className="text-muted">Last updated {new Date(this.props.modified).toUTCString()}</small>
	          	</CardText>

	          	<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
					<ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
					<ModalBody>
						<p className="text-center">
						 {this.props.permission} Document
						</p>
						<p className="text-center">
						  Status: {!this.props.locked ? <span style={{color: 'green'}}>open</span> : <span style={{color: 'red'}}>closed</span>}
						</p>
					</ModalBody>
					<ModalFooter>
						{!this.props.locked ? <Button color="primary" onClick={this.toggleEdit}>Edit Doc</Button> : <Button color="primary" disabled onClick={this.toggleEdit}>Edit Doc</Button>}
					</ModalFooter>
				</Modal> 
				{screen}
      		</Card>
		);
	}
}

export default DashboardCard;