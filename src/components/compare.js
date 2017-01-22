import React from 'react';
import {Gmaps, Marker, InfoWindow} from 'react-gmaps';

import {Segment, Header, List, Button} from 'semantic-ui-react';
import '../App.css';
import {connect} from "react-redux";

import {getSchools, getDistrict, getSchoolGrade, getAttendance, getMathScores, getEnglishScores} from '../actions/index'

const mapState = state => ({
    schools: state.schools
});

// Binds Actions
// const mapDispatch(dispatch) {
// 	return bindActionCreator({getSchools, sfsdffd, sfds ssmfs}, dispatch)
// }


const Compare = React.createClass({
	componentWillMount(){
		this.getCurrentState()
	},
	onMapCreated(map) {
		//Creates Google map display. 
	},
	handleClick() {
		this.props.getSchools(this.state)
		console.log(this.props.schools)
	},
	getCurrentState() {
		let schoolGradeArr = []
		console.log(1)
		  Promise.resolve(getDistrict("11201"))
		  .then((temp)=> {
		    this.setState({district: temp.data });
		  });

		  Promise.resolve(getSchoolGrade('1'))
		  .then((temp)=> {
		    this.setState({grades: temp.data });
		  });

		  Promise.resolve(getAttendance('1'))
		  .then((temp)=> {
		    this.setState({attendance: temp.data });
		  });

		  Promise.resolve(getMathScores('1'))
		  .then((temp)=> {
		    this.setState({math: temp.data });
		  });

		  Promise.resolve(getEnglishScores('1'))
		  .then((temp)=> {
		    this.setState({english: temp.data });
		  });

	},
	render() {
		
	// <InfoWindow
      // lat={40.741483}
      // lng={-73.933395}
      // content={'Home'}
      // onCloseClick={this.onCloseClick} />
		const array = [{hello: 'world'}, {hello: 'world'}, {hello: 'world'}]
		let displayResults = array.map((val, idx)=>{
			return (
				<div key={idx} className='column'>
					<h4 key={idx + '0'}>Name</h4>
					<p key={idx + '1'}>Address</p>
					<p key={idx + '2'}>Phone Number</p>
					<p key={idx + '3'}>Math Score</p>
					<p key={idx + '4'}>English Score</p>
					<p key={idx + '5'}>Attendance</p>
					<p key={idx + '6'}>Distance?</p>
				</div>
			)
		})
	return (
	  <div>
	  	<div className='gmaps'>
	      <Gmaps
	        width={'1100px'}
	        height={'400px'}
	        lat={40.741992}
	        lng={-73.927947}
	        zoom={15}
	        onMapCreated={this.onMapCreated}>
		        <Marker
		          lat={40.741483}
		          lng={-73.933395}
		          radius={500}
		          onClick={this.onClick} />  

				<Marker
					lat={40.742387}
					lng={ -73.935386}/>    
			</Gmaps>
	      </div>
			<div className="flex-grid">
				<Segment.Group horizontal>
			    <Segment color='orange'>
			      	 <Header as='h5' attached='top'>
		 				School One 
					</Header>
					<List>
					    <List.Item>Address</List.Item>
					    <List.Item>Phone Number</List.Item>
					    <List.Item>Math Score</List.Item>
					    <List.Item>English Score</List.Item>
					    <List.Item>Attendance</List.Item>
					    <List.Item>Distance?</List.Item>
					  </List>
			      </Segment>
			      <Segment color='orange'>
			      	 <Header as='h5' attached='top'>
		 				School Two
					</Header>
					<List>
					    <List.Item>Address</List.Item>
					    <List.Item>Phone Number</List.Item>
					    <List.Item>Math Score</List.Item>
					    <List.Item>English Score</List.Item>
					    <List.Item>Attendance</List.Item>
					    <List.Item>Distance?</List.Item>
					  </List>
			      </Segment>
			      <Segment color='orange'>
			      	 <Header as='h5' attached='top'>
		 				School Three 
					</Header>
					<List>
					    <List.Item>Address</List.Item>
					    <List.Item>Phone Number</List.Item>
					    <List.Item>Math Score</List.Item>
					    <List.Item>English Score</List.Item>
					    <List.Item>Attendance</List.Item>
					    <List.Item>Distance?</List.Item>
					  </List>
			      </Segment>
		      </Segment.Group>
			</div>
			<Button inverted color='orange' onClick={this.handleClick}>Print</Button>
	  </div>
	);
	}
});

export default connect(mapState, {getSchools})(Compare);
//second prop is automatically dispatch. 
		      






