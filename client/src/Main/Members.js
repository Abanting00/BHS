import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CardColumns, Card, CardTitle, CardText, Col, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchUsers } from '../Actions/userActions';

class Members extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchField: ""
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		this.props.fetchUsers();
	}

	onChange(e) {
		this.setState({
			searchField: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
	}

	search(searchField, users, trait){
		let results;
		if(trait == "name"){
		 	results = users.filter(user => {
		 		return (user.fname + (' ') + user.lname).toLowerCase().includes(searchField)
		 	})
		}
		else if(trait == "interests"){
			results = users.filter(user => {
				let x = user.interests.map(interest => interest.toLowerCase()).join(' ')
					return x.includes(searchField) || searchField === ''
			})
		}
		console.log(results)
	 	return results;
	}

	render() {
		// Should not be access by GU
		let users = this.props.users.filter(user => {return user.role != 'GU'});
		let field = this.state.searchField.toLowerCase();
		users = this.search(field, users, "interests")

		return (
			<Modal 
				size="lg" 
				isOpen={this.props.members} 
				toggle={this.props.toggle} 
				className={this.props.className}>
            	<ModalHeader toggle={this.props.toggle}>
            		B.H.S Members
            	</ModalHeader>                	
            	<ModalBody>
            		<Form onSubmit={this.onSubmit} className="search">
						<FormGroup row>
							<Col sm={12}>
								<Input 
									type="search" 
									name="search" 
									value={this.state.searchField}
									onChange={this.onChange}
									placeholder="&#xF002; Search" 
									style={{fontFamily:"Arial, FontAwesome"}} />
							</Col>
						</FormGroup>
					</Form>
					<CardColumns>
						<UserCards data={users} />
					</CardColumns>
            	</ModalBody>
			</Modal> 
		);
	}
}

const UserCards = (users) => {
	const userCards = users.data.map(user => {
			return <Card key={user._id} body>
				        <CardTitle>{user.fname} {user.lname}</CardTitle>
				        <CardText>
				        	<span style={{fontWeight: "600"}}>Interests: </span> 
				        	{user.interests.join(', ')} 
				        </CardText>
			      </Card>
		});

	return userCards;
}

const mapStateToProps = state => ({
	users: state.users.users
});


export default connect(mapStateToProps, { fetchUsers })(Members);