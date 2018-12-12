import React, { Component } from 'react';
import { Container, Row, Col, NavItem } from 'reactstrap';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
									
								</tbody>
							</Table>
						</ModalBody>
					</Modal>
			</div>
		);
	}
}

export default Inbox;
