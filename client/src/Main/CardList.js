import React, { Component } from 'react';
import { CardColumns } from 'reactstrap';
import DashboardCard from './DashboardCard';

class CardList extends Component {
	render() {
		return (
			<CardColumns style={{paddingRight: '20px'}}> 
                <DashboardCard id="5bfdc6516ee56a4118ecc098" permission="Restricted" locked={false} title="Oreo" description="OREOOOOO" modified="4 mins ago."/> 
                <DashboardCard id="5bfdd565b8fd2c10e8d49ed7" permission="Public" locked={false} title="Oreo" description="I love food" modified="4 mins ago."/> 
                <DashboardCard id="5bfdd565b8fd2c10e8d49ed7" permission="Shared" locked={true} title="Oreo" description="oreo is life >:(" modified="4 mins ago."/> 
                <DashboardCard id="5bfdd565b8fd2c10e8d49ed7" permission="Private" locked={true} title="Oreo" description="Stupid human ugh" modified="4 mins ago."/> 
                <DashboardCard id="5bfdd565b8fd2c10e8d49ed7" permission="Public" locked={true} title="Oreo" description="gawd, not doing anything right." modified="4 mins ago."/> 
                <DashboardCard id="5bfdd565b8fd2c10e8d49ed7" permission="Restricted" locked={false} title="Oreo" description="oreo oreo oreo" modified="4 mins ago."/> 
			</CardColumns>
		);
	}
}

export default CardList;