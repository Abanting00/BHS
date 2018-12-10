import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { fetchDocs } from '../Actions/docActions';
import { getUserID, getUserRole } from '../Helper/authHeader';

class CardList extends Component {

	componentWillMount() {
		this.props.fetchDocs();
	}

	recentDocs() {
		let sortedDocs = this.props.docs.sort((doc1, doc2) => {
			const timeA = new Date(doc1.modified).getTime();
			const timeB = new Date(doc2.modified).getTime();
			return timeB - timeA;
		});

		sortedDocs = sortedDocs.filter(doc => {
			// Need to add a case of Shared and check if user is an invited user
			return getUserRole() === 'SU' || !(doc.permission === 'Private' && getUserID() !== doc.owner);
		});

		return sortedDocs;
	}

	ownedDocs() {
		const userID = getUserID();
		const ownedDocs = this.props.docs.filter(doc => {
			return userID === doc.owner;
		})

		return ownedDocs;
	}

	search(searchField, docs) {
	 	let results = docs.filter(doc => {
	 		return doc.title.toLowerCase().includes(searchField)
	 	});

	 	return results;
	}
	
	render() {
		const searchField = this.props.search.toLowerCase();
		let docs;

		switch(this.props.option){
			case 'Recent':
				docs = this.search(searchField,this.recentDocs())
				break
			case 'Owned':
				docs = this.search(searchField,this.ownedDocs())
				break
			case 'Shared':
				docs = this.props.docs
				break
			default:
				docs = this.props.docs
				break

		}

		return (
			<CardColumns style={{paddingRight: '20px'}}> 
               <DocCards data={docs} />
			</CardColumns>
		);
	}
}

const DocCards = (docs) => {
	const docCards = docs.data.map(doc => {
		let view = 'E'
		if(getUserRole() === 'GU')
			view = 'R'

		return <DashboardCard 
	            	key={doc._id}
	            	id={doc._id} 
					permission={doc.permission} 
					locked={doc.is_locked} 
					title={doc.title} 
					description={doc.description} 
					modified={doc.modified}
					view={view}
				/> 
	})

	return docCards;
}

const mapStateToProps = state => ({
	docs: state.docs.items
});

export default connect(mapStateToProps, { fetchDocs })(CardList);