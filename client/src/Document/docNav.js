import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Navbar, NavbarBrand, Nav, NavItem, Button} from 'reactstrap';
import { getUserID, getUserRole } from '../Helper/authHeader';
import { edit } from './Document';
import { saveDoc, fetchMembers } from '../Actions/docActions';
import { fetchHistories } from '../Actions/historyActions';   
import DocModals from './DocModals';

class DocNav extends Component {
	constructor(props){
		super(props);

		this.state = {
			history: false,
			members: false,
			histories: [],
			role: getUserRole()
		}
		this.onClickHistory = this.onClickHistory.bind(this);
		this.onClickMembers = this.onClickMembers.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	componentWillMount() {
		this.props.fetchMembers(this.props.id);
	}

	onClickHistory() {
		this.setState({
			history: !this.state.history
		})
	}

	onClickMembers() {
		this.setState({
			members: !this.state.members
		})
	}

	componentWillReceiveProps(nextProps) {
	    this.setState({
	    	histories: nextProps.histories
	    })
	  }

	onSubmit() {
		new Promise((resolve,reject) => {
			this.props.edit();
			resolve()
		}).then(res => {
			const docData = {
		      id: this.props.id,
		      body: this.props.body,
		      modified_by: getUserID()
	    	}
	    	this.props.saveDoc(docData)
				.then(res => {
					this.props.fetchHistories(this.props.id)})
	    })
  	}

	render() {
		console.log("ID",this.props.id)
		let button = <Button onClick={this.onSubmit} color="info" style={{marginTop:"5px"}}>Save</Button>;
		if(this.state.role == 'GU')
			button = <Button onClick={this.onSubmit} color="info" style={{marginTop:"5px"}} disabled>Save</Button>

		return (
			<div className="navHome">
				<Navbar light expand="md">
					<NavbarBrand href="/" style={{fontSize:"20pt",fontWeight:"bold"}}>B.H.S</NavbarBrand>
					<Nav className= "ml-auto" navbar>
						<NavItem>
							<i className="material-icons docicons" name="members" onClick={this.onClickMembers}>people</i>
						</NavItem>
						<NavItem>
							<i className="material-icons docicons" name="history" onClick={this.onClickHistory}>history</i>
						</NavItem>
						<NavItem>
							{button}
						</NavItem>
					</Nav>
				</Navbar>
				<DocModals
					owner={this.props.owner}
					data={this.state.histories} 
					data2={this.props.members}
					id={this.props.id} 
					history={this.state.history} 
					toggleHistory={this.onClickHistory} 
					members={this.state.members}
					toggleMembers={this.onClickMembers}
					viewHistory={this.props.viewHistory}/>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  success: true,
  histories: state.histories.items,
  members: state.docs.members
})

export default connect(mapStateToProps, { saveDoc, fetchHistories, fetchMembers })(DocNav);