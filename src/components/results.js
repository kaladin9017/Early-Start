//LIBRARIES
import React from 'react';
import {connect} from 'react-redux';
import {Gmaps, Marker} from 'react-gmaps';

//STYLING
import {Segment, Header, List, Button, Grid, Checkbox} from 'semantic-ui-react';

//STATE
const mapState = state => ({
	schools: state.schools
})

const Results = React.createClass({
	handleClick(){
		// console.log('it works!')
	},
	render(){
		console.log("state", this.props.schools)
		// let displayResults = this.state.props.users.schooldata.map((val, idx)=>{
		const array = [{hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'},{hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'}, {hello: 'world'}]
		let displayResults = array.map((val, idx)=>{
			return (
				<Grid>
					<Grid.Column width={3}>
						<Gmaps
							width={'150px'}
							height={'150px'}
							lat={40.741992}
							lng={-73.927947}
							zoom={13}
							onMapCreated={this.onMapCreated}>

						<Marker
							lat={40.741483}
							lng={-73.933395}
							radius={500}
							onClick={this.onClick} />  
						</Gmaps>
					</Grid.Column>

					<Grid.Column width={6}>
						<Checkbox className='checkbox' onClick={this.handleClick}/>
						<List>
						    <List.Item>Address</List.Item>
						    <List.Item>Phone Number</List.Item>
						    <List.Item>Math Score</List.Item>
						    <List.Item>English Score</List.Item>
						    <List.Item>Attendance</List.Item>
						    <List.Item>Distance?</List.Item>
					  </List>
					</Grid.Column>
				</Grid>
			)
		})
		return (
			<div>
				{displayResults}
			</div>
		)
	}
});

export default connect(mapState)(Results)