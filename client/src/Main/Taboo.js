import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Form, Input, Container, Row, Col } from 'reactstrap';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getUserID, getUserRole } from '../Helper/authHeader';
import { connect } from 'react-redux';
import { fetchTabooList, fetchPendingList, addPendingWord, addTabooWord, deletePendingWord } from '../Actions/tabooActions';

class Taboo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			word: '',
			SU: getUserRole() === 'SU'
		}

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.onAdd = this.onAdd.bind(this);
		this.onReject = this.onReject.bind(this);
	}

	componentWillMount() {
		this.props.fetchTabooList();
		this.props.fetchPendingList();
  	}

  	onChange(e){
  		this.setState({
  			word: e.target.value
  		})
  	}

  	onSubmit(e) {
  		e.preventDefault();
  		
  		if(!this.state.SU)
  			this.props.toggle();

  		if(this.state.word === '')
  			return
  		this.props.addPendingWord(this.state.word)
  			.then(res => {this.props.fetchPendingList();});

  		this.setState({
  			word: ''
  		});
  	}

  	onAdd(word) {
  		this.props.addTabooWord(word);
  		this.props.deletePendingWord(word)
  			.then(res => {this.props.fetchPendingList()});
  	}

  	onReject(word) {
  		this.props.deletePendingWord(word)
  			.then(res => {this.props.fetchPendingList()});
  	}

	render() {
		const role = getUserRole();
		const pending = this.props.pendinglist.map(taboo => {
			return <tr key={taboo._id}>
				<td>{taboo.word}</td>
				<td><Button color="success" onClick={() => this.onAdd(taboo.word)}>Add</Button></td>
				<td><Button color="danger" onClick={() => this.onReject(taboo.word)}>Reject</Button></td>
				</tr>
		});

		return (
			<Modal
				size="md"
				isOpen={this.props.open}
				toggle={this.props.toggle}>
				<ModalHeader toggle={this.props.toggle}>Taboos</ModalHeader>
					<ModalBody>
						<Table>
							<tbody>
								{this.state.SU && pending}
							</tbody>
						</Table>
						<Form onSubmit={this.onSubmit}>
							<InputGroup>
				          		<InputGroupAddon addonType="prepend"><Button type='submit'>Suggest Taboo</Button></InputGroupAddon>
				          		<Input value={this.state.word} onChange={this.onChange} />
				        	</InputGroup>
						</Form>
					</ModalBody>
				</Modal>

		);
	}
}

const TabooList = (taboos) => {
	console.log(taboos)
	return taboos.data.map(taboo => {
		return <tr key={taboo._id}><td>{taboo.word}</td></tr>
	});
}

const mapStateToProps = state => ({
	taboolist: state.words.items,
	pendinglist: state.words.pendingItems,
	pendingItem: state.words.pendingItem
});

export default connect(
	mapStateToProps, { 
		fetchTabooList, 
		fetchPendingList, 
		addPendingWord,
		addTabooWord,
		deletePendingWord }
)(Taboo);
