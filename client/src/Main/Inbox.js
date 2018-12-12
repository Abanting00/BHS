import React, { Component } from 'react';
import { Container, Row, Col, NavItem } from 'reactstrap';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchInvites, fetchComplaints, deleteInvite, deleteComplaint } from '../Actions/userActions';
import { addMember, deleteMember } from '../Actions/docActions';


class Inbox extends Component {
	constructor(props){
		super(props);

		this.state = {
			report: false,
			invitations: false
		}

		this.onClickReport = this.onClickReport.bind(this);
		this.onClickInv = this.onClickInv.bind(this);
	}

 	componentWillMount() {
    	this.props.fetchInvites(); 
    	this.props.fetchComplaints();
  	}

  	componentWillReceiveProps(nextProps) {
  		// Might Need
  	}

	onClickReport(e) {
		this.setState({
            report: !(this.state.report)
        })
	}

	onClickInv(e) {
		this.setState({
            invitations: !(this.state.invitations)
        })
	}

	render() {
		const invites = this.props.invites.map(doc => {
			return <tr key={doc._id}>
					<td>{doc.title}</td>
					<td><Button color="success" onClick={() => console.log("Accept")}>Accept</Button></td>
					<td><Button color="danger" onClick={() => console.log("Decline")}>Decline</Button></td>
				</tr>
		});

		const complaints = this.props.complaints.map(user => {
			return <tr key={user._id}>
					<td>{user.fname} {user.lname}</td>
					<td><Button color="success" onClick={() => console.log("Accept")}>Remove User</Button></td>
					<td><Button color="danger" onClick={() => console.log("Decline")}>Do nothing</Button></td>
				</tr>
		})

		return (
			<div>
				<NavItem>
					<i className="material-icons dashicons" name="report" onClick={this.onClickReport}>report</i>
					<i className="material-icons dashicons" name="invitations" onClick={this.onClickInv}>mail</i>
				</NavItem>
				<Modal
					size="md"
					isOpen={this.state.report}
					toggle={this.onClickReport}>
					<ModalHeader toggle={this.onClickReport}>Reports</ModalHeader>
						<ModalBody>
							<Table>
								<tbody>
									{complaints}
								</tbody>
							</Table>
						</ModalBody>
					</Modal>

					<Modal
						size="md"
						isOpen={this.state.invitations}
						toggle={this.onClickInv}>
					<ModalHeader toggle={this.onClickInv}>Invitations</ModalHeader>
						<ModalBody>
							<Table>
								<tbody>
									{invites}
								</tbody>
							</Table>
						</ModalBody>
					</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  invites: state.users.invites,
  complaints: state.users.complaints,
});

export default connect(
	mapStateToProps, {
		fetchComplaints,
		fetchInvites,
		deleteInvite,
		deleteComplaint,
		addMember,
		deleteMember})(Inbox);
