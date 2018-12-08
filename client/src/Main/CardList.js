import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import DashboardCard from './DashboardCard';
import { connect } from 'react-redux';
import { fetchDocs } from '../Actions/docActions';

class CardList extends Component {

	componentWillMount() {
		this.props.fetchDocs();
	}

	render() {
		const docs = this.props.docs.map(doc => 
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
		return (
			<CardColumns style={{paddingRight: '20px'}}> 
               {docs}
			</CardColumns>
		);
	}
}

const mapStateToProps = state => ({
	docs: state.docs.items
});

export default connect(mapStateToProps, { fetchDocs })(CardList);