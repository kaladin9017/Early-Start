//LIBRARIES
import React from 'react';
import {connect} from 'react-redux';
import {Gmaps, Marker} from 'react-gmaps';
import {addSchool} from '../actions/resultActions';

//STYLING
import {List, Grid, Checkbox} from 'semantic-ui-react';

const Results = React.createClass({
	getInitialState(){
		return ({count:0})
	},
	handleClick(schoolObj, e){
		this.setState({count: this.state.count+=1})
		this.props.addSchool(schoolObj)
		console.log('count:',this.state.count)
	},
	handleRouter(){
		this.props.router.push('/compare')
		console.log('workings')
	},
	render(){
		console.log("SCHOOL STATE ON RESULTS PAGE", this.props.schools)
		let displayResults = this.props.schools.map((val, idx)=>{
			return (
				<Grid key={idx}>
					<Grid.Column width={3}>
							<Gmaps
								width={'150px'}
								height={'150px'}
								lat={val.latitude}
								lng={val.longitude}
								zoom={13}
								onMapCreated={this.onMapCreated}>

							<Marker
								lat={val.latitude}
								lng={val.longitude}
								radius={500}
								onClick={this.onClick} />  
							</Gmaps>
					</Grid.Column>

					<Grid.Column width={6}>
						<Checkbox className='checkbox' onClick={this.handleClick.bind(this, {val})}/>
						<List>
						    <List.Item>Address</List.Item>
						    <List.Item>{val.primary_address}</List.Item>
						    <List.Item>Principal Email</List.Item>
						    <List.Item>{val.principal_email}</List.Item>
						    <List.Item>Math Score</List.Item>
						    <List.Item>{val.math.mean_scale_score}</List.Item>
						    <List.Item>English Score</List.Item>
						    <List.Item>{val.english.mean_scale_score}</List.Item>
						    <List.Item>Attendance</List.Item>
						    <List.Item>{val.attendance._of_attd_taken+'%'}</List.Item>
					  </List>
					</Grid.Column>
				</Grid>
			)
		})

		return (
			<div>
				{displayResults}
				{this.state.count === 3 ? <button className='compare-button' onClick={this.handleRouter}>Compare</button> : null}
			</div>
		)
	}
});

//STATE
const mapState = state => ({
	schools: state.schools
})

export default connect(mapState, {addSchool})(Results);


