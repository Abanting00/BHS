import React, { Component } from 'react';
import { Container, Row, Col, NavItem } from 'reactstrap';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchInvites, fetchComplaints, deleteInvite, deleteComplaint } from '../Actions/userActions';
import { addMember, deleteMember } from '../Actions/docActions';
import { getUserID, getUser, getUserRole } from '../Helper/authHeader';


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
		this.onClickRemoveUser = this.onClickRemoveUser.bind(this);
		this.onClickDoNothing = this.onClickDoNothing.bind(this);
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
			.then(res => this.props.fetchInvites())
	}

	onClickDecline(docid,userid) {
		this.props.deleteInvite(docid,userid)
			.then(res => this.props.fetchInvites())
	}

	onClickRemoveUser(docid,userid){
		this.props.deleteMember(docid,userid)
		this.props.deleteComplaint(getUserID(),userid,docid)
			.then(res => this.props.fetchComplaints())
	}

	onClickDoNothing(docid,userid){
		this.props.deleteComplaint(getUserID(),userid,docid)
			.then(res => this.props.fetchComplaints())	
	}

	showComplaints() {
		let owner = getUserID();
		let result = [];
		const users = this.props.user_complaints;
		const docs = this.props.doc_complaints;
		
		for(let i = 0; i < users.length; i++){
			let x = {user: users[i], doc: docs[i]}
			result.push(x)  
		}

		result = result.map(x => {
			return (<tr>
						<td>{x.user.fname} {x.user.lname}</td>
						<td>{x.doc.title}</td>
						<td><Button color="danger" onClick={() => this.onClickRemoveUser(x.doc._id, x.user._id)}>Remove User</Button></td>
						<td><Button onClick={() => this.onClickDoNothing(x.doc._id, x.user._id)}>Do nothing</Button></td>
					</tr>)});

		return result;
	}

	render() {
		const complaints = this.showComplaints();
		const invites = this.props.invites.map(doc => {
			return <tr key={doc._id}>
					<td>{doc.title}</td>
					<td><Button name="accept"color="success" onClick={() => this.onClickAccept(doc._id,getUserID())}>Accept</Button></td>
					<td><Button name="decline"color="danger" onClick={() => this.onClickDecline(doc._id,getUserID())}>Decline</Button></td>
				</tr>
		});

		return (
			<div>
				{getUserRole() != 'GU'&& <NavItem>
					<i className="material-icons dashicons" name="report" onClick={this.onClickReport}>report</i>
					<i className="material-icons dashicons" name="invitations" onClick={this.onClickInv}>mail</i>
				</NavItem>}
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
  user_complaints: state.users.user_complaints,
  doc_complaints: state.users.doc_complaints
});

export default connect(
	mapStateToProps, {
		fetchComplaints,
		fetchInvites,
		deleteInvite,
		deleteComplaint,
		addMember,
		deleteMember})(Inbox);
