import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { changeStatus } from '../Actions/docActions';
import { Redirect } from 'react-router';
import { getUserID, getUserRole } from '../Helper/authHeader';

class DashboardCard extends Component {
	constructor(props) {
		super(props);
		let owner = this.props.permission !== 'Public' && getUserID() === this.props.owner;

		this.state = {
			modal: false,
	      	nestedModal: false,
			edit: false,
			owner: owner || getUserRole() === 'SU',
			locked: this.props.locked
		}

		this.toggle = this.toggle.bind(this);
    	this.toggleEdit = this.toggleEdit.bind(this);
	    this.toggleNested = this.toggleNested.bind(this);
	    this.changeLock = this.changeLock.bind(this);
	}

	toggleNested(e) {
		e.preventDefault();
		this.setState({
			nestedModal: !this.state.nestedModal
		})
	}

	changeLock() {
		this.setState({
			locked: !this.state.locked
		})

		this.props.changeStatus(this.props.id,getUserID());
	}

	toggle(e) {
		e.preventDefault();
		this.setState({
			modal: !this.state.modal
		});
	}

	toggleEdit() {
		this.setState({
			edit: true,
			locked: !this.state.locked
		});
		this.props.changeStatus(this.props.id,getUserID());
	}

	
	render() {
		let screen;
		if (this.state.edit){
			screen = <Redirect 
						to={{
							pathname: '/document', 
							state: { 
								id: this.props.id,
								view: this.props.view,
								members: this.props.members ,
								owner: this.state.owner
							}}}/>
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
                        {(this.state.owner ||(this.props.locked_by == getUserID())) ? 
                        	<i className="material-icons" style={{float: "right"}} onClick={this.toggleNested}>settings</i> : <div></div>}
                        <br />

                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested}  className={this.props.className}>
                        	<ModalHeader toggle={this.toggleNested}>Change Document Settings</ModalHeader>
                        	<ModalBody>
                        		<p className="text-center" style={{fontSize: '18px'}}>
                        			Lock: <Button size="sm"color="danger" style={{marginLeft: '20px'}} onClick={this.changeLock}>{this.state.locked ? "Unlock Doc": "Lock Doc"}</Button>
                        		</p>
                        	</ModalBody>
                        </Modal>
						<p className="text-center">
						 {this.props.permission} Document
						</p>
						<p className="text-center">
						  Status: {!this.state.locked ? <span style={{color: 'green'}}>Unlocked</span> : <span style={{color: 'red'}}>Locked</span>}
						</p>
						{this.state.locked && <p className="text-center">Locked by: {this.props.locked_by}</p>}
					</ModalBody>
					<ModalFooter>
						{!this.state.locked ? <Button color="primary" onClick={this.toggleEdit}>Edit Doc</Button> : <Button color="primary" disabled onClick={this.toggleEdit}>Edit Doc</Button>}
					</ModalFooter>
				</Modal> 
				{screen}
      		</Card>
		);
	}
}

const mapStateToProps = state => ({
	status: state.docs.status
});

export default connect(mapStateToProps, { changeStatus })(DashboardCard);