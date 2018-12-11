import React, { Component } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { fetchHistories } from '../Actions/historyActions'; 
import { connect } from 'react-redux';
import Members from '../Main/Members';

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

	componentWillMount() {
		this.props.fetchHistories(this.props.id);
  	}

  	HistoryTable(histories) {
		const table = this.props.data.map(history => {
			return <tr key={history._id}>
		            <th scope="row">{history.version}</th>
		            <td>{history.modified_by}</td>
		            <td>{new Date(history.date_modified).toUTCString()}</td>
		            <td>
		            	<Button onClick={() => {this.props.viewHistory(history.body)}} color="info">View</Button>
		            </td>
		            <td>
		            	<Button color="danger">Complain</Button>
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
							<MemberTable data={this.props.data2} />
						</tbody>
					</Table>
				</ModalBody>
				<ModalFooter>
	            	{this.props.owner ? <Button color="danger" onClick={this.onClickAdd}>Invite Member</Button> : <div></div>}
	            </ModalFooter>
	            <Members docid={this.props.id} docmember={true} members={this.state.addMember} toggle={this.onClickAdd} />
			</Modal>
			</div>
		);
	}
}


const MemberTable = (members) => {
	const table = members.data.map(user => {
		return <tr key={user._id}>
	            <th scope="row">{user.fname} {user.lname}</th>
	            <td>{user.username}</td>
	            <td>
	            	<Button color="danger">Report</Button>
	            </td>
	            <td>
	            	<Button color="danger">Complain</Button>
	            </td>
	          </tr>
	});

	return table;
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { fetchHistories })(DocModals);