import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { fetchDocs } from '../Actions/docActions';
import { getUserID } from '../Helper/authHeader';

class CardList extends Component {

	componentWillMount() {
		this.props.fetchDocs();
	}

	recentDocs() {
		const sortedDocs = this.props.docs.sort((doc1, doc2) => {
			const timeA = new Date(doc1.modified).getTime();
			const timeB = new Date(doc2.modified).getTime();
			return timeB - timeA;
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

	render() {
		let docs;

		switch(this.props.option){
			case 'Recent':
				docs = this.recentDocs()
				break
			case 'Owned':
				docs = this.ownedDocs()
				break
			case 'Shared':
				docs = this.props.docs
				break
			default:
				docs = this.props.docs
				break

		}

		console.warn(docs);
		return (
			<CardColumns style={{paddingRight: '20px'}}> 
               <DocCards data={docs} />
			</CardColumns>
		);
	}
}

const DocCards = (docs) => {
	console.log(docs)
	const docCards = docs.data.map(doc => 
	            <DashboardCard 
	            	key={doc._id}
	            	id={doc._id} 
					permission={doc.permission} 
					locked={doc.is_locked} 
					title={doc.title} 
					description={doc.description} 
					modified={doc.modified}
				/> 
			)
	return docCards;
}

const mapStateToProps = state => ({
	docs: state.docs.items
});

export default connect(mapStateToProps, { fetchDocs })(CardList);