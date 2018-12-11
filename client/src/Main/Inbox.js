import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Inbox extends Component {
	render() {
		return (
			<Container className="inbox" fluid={true}>
				<Row>
					<Col>
						<Row className="inbox-title"><h4>Invitation</h4></Row>
					</Col>
					<Col>
						<Row className="inbox-title"><h4>Complaints</h4></Row>
					</Col>
					<Col>
						<Row className="inbox-title"><h4>Taboo Words</h4></Row>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Inbox;
