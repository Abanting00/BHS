import React, { Component } from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import './Search.css';
import CardList from './CardList';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchField: ""
		}

		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			searchField: e.target.value
		})
	}

	render() {
		let search;

		if(!this.props.active){
			search = <div></div>
		}else{
			search = 
					<Form className="search animated bounceInLeft">
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
		}

		return (
			<div id="docs">
				{search}
				<div id="list">
          			<CardList search={this.state.searchField} option={this.props.option}/>
        		</div>
			</div>
		)
	}
}

export default Search;