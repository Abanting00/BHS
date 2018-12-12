import React, { Component } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { fetchHistories } from '../Actions/historyActions'; 
import { complaintUser } from '../Actions/userActions';
import { connect } from 'react-redux';
import Members from '../Main/Members';
import { getUserID, getUserRole } from '../Helper/authHeader';

class DocModals extends Component {
	constructor(props){
		super(props);

		this.state = {
			addMember: false
		}

		this.onClickAdd = this.onClickAdd.bind(this);
	}

	onClickAdd() {
		this.setState({
			addMember: !this.state.addMember
		})
	}

	onComplain(userid) {
		this.props.complaintUser(getUserID(),userid,this.props.id);
	}

	componentWillMount() {
		this.props.fetchHistories(this.props.id);
  	}

  	HistoryTable(histories) {
  		console.log("HISTORY", this.props.id)
		const table = this.props.data.map(history => {
			return <tr key={history._id}>
		            <th scope="row">{history.version}</th>
		            <td>{history.modified_by}</td>
		            <td>{new Date(history.date_modified).toLocaleString()}</td>
		            <td>
		            	<Button onClick={() => {this.props.viewHistory(history.body)}} color="info">View</Button>
		            </td>
		            <td>
		            	<Button color="danger" onClick={() => {this.onComplain(history.modified_by, this.props.id)}}>Complain</Button>
		            </td>
		          </tr>
		});

		return table;
	}

	MemberTable(members) {
		const table = members.map(user => {
			return <tr key={user._id}>
		            <th scope="row">{user.fname} {user.lname}</th>
		            <td>{user.username}</td>
		            <td>
		            	<Button color="danger" onClick={() => {this.onComplain(user._id)}}>Complain</Button>
		            </td>
		          </tr>
		});

		return table;
	}


	render() {
		return (
			<div>
				<Modal
					size="lg"
					isOpen={this.props.history}
					toggle={this.props.toggleHistory}>
					<ModalHeader toggle={this.props.toggleHistory}>
						View History
					</ModalHeader>
					<ModalBody>
						<Table>
							<tbody>
								{this.HistoryTable(this.props.data)}

							</tbody>
						</Table>
					</ModalBody>
				</Modal>

				<Modal
					size="md"
					isOpen={this.props.members}
					toggle={this.props.toggleMembers}>
					<ModalHeader toggle={this.props.toggleMembers}>
					Member Lists
				</ModalHeader>
				<ModalBody>
					<Table>
						<tbody>
							{this.MemberTable(this.props.data2)}
						</tbody>
					</Table>
				</ModalBody>
				<ModalFooter>
	            	{this.props.owner ? <Button color="info" onClick={this.onClickAdd}>Invite Member</Button> : <div></div>}
	            </ModalFooter>
	            <Members docid={this.props.id} docmember={true} members={this.state.addMember} toggle={this.onClickAdd} />
			</Modal>
			</div>
		);
	}
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { fetchHistories, complaintUser })(DocModals);