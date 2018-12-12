import React, { Component } from 'react';
import { Container, Row, Col, NavItem } from 'reactstrap';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchInvites, fetchComplaints, deleteInvite, deleteComplaint } from '../Actions/userActions';
import { addMember, deleteMember } from '../Actions/docActions';
import { getUserID, getUser } from '../Helper/authHeader';


class Inbox extends Component {
	constructor(props){
		super(props);

		this.state = {
			report: false,
			invitations: false
		}

		this.onClickReport = this.onClickReport.bind(this);
		this.onClickInv = this.onClickInv.bind(this);
		this.onClickAccept = this.onClickAccept.bind(this);
		this.onClickDecline = this.onClickDecline.bind(this);
	}

 	componentWillMount() {
    	this.props.fetchInvites(); 
    	this.props.fetchComplaints();
  	}

  	componentWillReceiveProps(nextProps) {
  		// Might Need
  	}

	onClickReport() {
		this.setState({
            report: !(this.state.report)
        })
	}

	onClickInv() {
		this.setState({
            invitations: !(this.state.invitations)
        })
	}

	onClickAccept(docid, userid) {
		this.props.addMember(docid, getUser().username)
		this.props.deleteInvite(docid,userid)
	}

	onClickDecline(docid,userid) {
		this.props.deleteInvite(docid,userid)
	}

	render() {
		const invites = this.props.invites.map(doc => {
			return <tr key={doc._id}>
					<td>{doc.title}</td>
					<td><Button name="accept"color="success" onClick={() => this.onClickAccept(doc._id,getUserID())}>Accept</Button></td>
					<td><Button name="decline"color="danger" onClick={() => this.onClickDecline(doc._id,getUserID())}>Decline</Button></td>
				</tr>
		});

		const complaints = this.props.user_complaints.map(user => {
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
  user_complaints: state.users.user_complaints
});

export default connect(
	mapStateToProps, {
		fetchComplaints,
		fetchInvites,
		deleteInvite,
		deleteComplaint,
		addMember,
		deleteMember})(Inbox);
