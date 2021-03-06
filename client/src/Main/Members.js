import React, {Component} from 'react';
import { Button, Alert, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { CardColumns, Card, CardTitle, CardText, Col, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { getUserRole } from '../Helper/authHeader';
import { fetchUsers, inviteUser } from '../Actions/userActions';
import { addMember } from '../Actions/docActions';

class Members extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchField: "",
			role: getUserRole(),
			option: "Name"
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.optionChange = this.optionChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
	}

	componentWillMount() {
		this.props.fetchUsers();
	}

	onAdd(docid,userid) {
		console.log("hai", docid, userid);
		this.props.inviteUser(docid,userid);
	}

	onChange(e) {
		this.setState({
			searchField: e.target.value
		})
	}

	optionChange(e) {
		console.log(e.target.value);
		this.setState({
			option: e.target.value
		})
	}

	onSubmit(e) {
		e.preventDefault();
	}

	UserCards(users, isdoc) {
		const userCards = users.map(user => {
				return <Card key={user._id} body>
					        <CardTitle>{user.fname} {user.lname}</CardTitle>
					        <CardText>
					        	<span style={{fontWeight: "600"}}>Interests: </span> 
					        	{user.interests.join(', ')} 
					        </CardText>
					        {isdoc ? <Button color="info" onClick={() => this.onAdd(this.props.docid,user._id)}>Invite</Button> : <div></div>}
				      </Card>
			});

		return userCards;
	}

	search(searchField, users, trait){
		let results;
		if(trait == "Name"){
		 	results = users.filter(user => {
		 		return (user.fname + (' ') + user.lname).toLowerCase().includes(searchField)
		 	})
		}
		else if(trait == "Interest"){
			results = users.filter(user => {
				let x = user.interests.map(interest => interest.toLowerCase()).join(' ')
					return x.includes(searchField) || searchField === ''
			})
		}
	 	return results;
	}

	render() {
		let users = this.props.users.filter(user => {return user.role != 'GU' && user.role != 'SU'});
		let field = this.state.searchField.toLowerCase();
		// users = this.search(field, users, "Interests")

		switch(this.state.option){
			case 'Interest':
				users = this.search(field, users, "Interest")
				break
			case 'Name':
				users = this.search(field, users, "Name")
				 break
			default:
				break
		}

		let screen;
		if(this.state.role == 'GU'){
			screen = <ModalBody><Alert color="warning">Guest User can't Access Members!</Alert></ModalBody>
		}else{
			screen = (<ModalBody>
            		<Form onSubmit={this.onSubmit} className="membersearch">
						<FormGroup row>
							<Col sm={3} style={{padding: '0'}}>
								<Input type="select"  onChange={this.optionChange}>
									<option value="Name">Name</option>
									<option value="Interest">Interest</option>
								</Input>
							</Col>
							<Col sm={9}>
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
						{this.UserCards(users, this.props.docmember)}
					</CardColumns>
            	</ModalBody>)
		}

		return (
			<Modal 
				size="lg" 
				isOpen={this.props.members} 
				toggle={this.props.toggle} 
				className={this.props.className}>
            	<ModalHeader toggle={this.props.toggle}>
            		B.H.S Members
            	</ModalHeader>      
            	{screen}
			</Modal> 
		);
	}
}

const mapStateToProps = state => ({
	users: state.users.users
});


export default connect(mapStateToProps, { fetchUsers, addMember, inviteUser })(Members);