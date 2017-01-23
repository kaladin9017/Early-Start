//LIBRARIES
import React from 'react';
import {connect} from "react-redux";
import {Gmaps, Marker} from 'react-gmaps';
import _ from 'lodash';

//STYLING
import {Segment, Header, List, Button} from 'semantic-ui-react';
import '../App.css';

//STATE
const mapState = state => ({
    users: state.users,
    threeSchools: state.threeSchools
});


const Compare = React.createClass({
	onMapCreated(map) {
		//Creates Google map display. 
	},
	render() {	
		console.log('RESULT STATE======>', this.props.threeSchools )
		console.log('RESULT STATE======>', this.props )
	// <InfoWindow
      // lat={40.741483}
      // lng={-73.933395}
      // content={'Home'}
      // onCloseClick={this.onCloseClick} />

		// let displayResults = this.props.threeSchools.map((val, idx)=>{
		// 	return (
		// 		<Segment color='orange'>
		// 	      	 <Header as='h5' attached='top'>
		//  				School Three 
		// 			</Header>
		// 			<List>
		// 			    <List.Item>Address</List.Item>
		// 			    <List.Item>Phone Number</List.Item>
		// 			    <List.Item>Math Score</List.Item>
		// 			    <List.Item>English Score</List.Item>
		// 			    <List.Item>Attendance</List.Item>
		// 			    <List.Item>Distance?</List.Item>
		// 			  </List>
		// 	      </Segment>
		// 	)
		// })
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
				{!this.props.threeSchools ?	null :

			(this.props.threeSchools.threeSchools.map((school, idx)=>{
						return (
							<Segment color='orange'>
						      	 <Header as='h5' attached='top'>
					 				{school.val.location_name}
								</Header>
								<List>
								     <List.Item>Address</List.Item>
										<List.Item>{school.val.primary_address}</List.Item>
										<List.Item>Principal Email</List.Item>
										<List.Item>{school.val.principal_email}</List.Item>
										<List.Item>Math Score</List.Item>
										<List.Item>{school.val.math.mean_scale_score}</List.Item>
										<List.Item>English Score</List.Item>
										<List.Item>{school.val.english.mean_scale_score}</List.Item>
										<List.Item>Attendance</List.Item>
										<List.Item>{school.val.attendance._of_attd_taken+'%'}</List.Item>
								  </List>
						      </Segment>
						)
					})) }
		      </Segment.Group>
			</div>
			<Button inverted color='orange' onClick={this.handleClick}>Print</Button>
	  </div>
	);
	}
});
// Binds Actions
// const mapDispatch(dispatch) {
// 	return bindActionCreator({getSchools, sfsdffd, sfds ssmfs}, dispatch)
// }

export default connect(mapState)(Compare);
//second prop is automatically dispatch. 
		      
  





