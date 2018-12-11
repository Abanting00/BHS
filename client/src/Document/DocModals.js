import React, { Component } from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { fetchHistories } from '../Actions/historyActions';   
import { connect } from 'react-redux';

class DocModals extends Component {

	componentWillMount() {
		this.props.fetchHistories(this.props.id);
  	}

	render() {
		console.warn(this.props.data)
		return (
			<Modal
				size="lg"
				isOpen={this.props.history}
				toggle={this.props.toggleHistory}>
				<ModalHeader toggle={this.props.toggleHistory}>
					Revert History
				</ModalHeader>
				<ModalBody>
					<Table>
						<tbody>
							<HistoryTable data={this.props.data} />
						</tbody>
					</Table>
				</ModalBody>
			</Modal>
		);
	}
}

const HistoryTable = (histories) => {
	console.log(histories)
	const table = histories.data.map(history => {
		return <tr key={history._id}>
	            <th scope="row">{history.version}</th>
	            <td>{history.modified_by}</td>
	            <td>{new Date(history.date_modified).toUTCString()}</td>
	            <td>
	            	<Button color="danger">Revert</Button>
	            </td>
	          </tr>
	});

	return table;
}

const mapStateToProps = state => ({
})

export default connect(mapStateToProps, { fetchHistories })(DocModals);