import React from 'react';
import {addAddress, addCity, addZipcode, getSchooldata} from '../actions/userActions';
import {connect} from 'react-redux';
import {bindActionCreator} from 'redux';

import {getSchools, getDistrict, getSchoolGrade, getAttendance, getMathScores, getEnglishScores} from '../actions/index'

const Location = React.createClass({
	
	// findSchools: function(event){


	// },
	handleChange: function(input, event){
		if(input === 'address'){
			addAddress(event.target.value)
		} else if (input === 'city'){
			addCity(event.target.value)
		} else if (input === 'zipCode'){
			addZipcode(event.target.value)
		}
	},
	handleClick() {
		getSchooldata(this.getCurrentState())
	},
	getCurrentState(e) {
		console.log(1)
		  Promise.resolve(getDistrict("11201"))
		  .then((temp)=> {
		    this.setState({district: temp.data });
		  });

		  Promise.resolve(getSchoolGrade('1'))
		  .then((temp)=> {
		    this.setState({grades: temp.data });
		  });

		  Promise.resolve(getAttendance())
		  .then((temp)=> {
		    this.setState({attendance: temp.data });
		  });

		  Promise.resolve(getMathScores())
		  .then((temp)=> {
		    this.setState({math: temp.data });
		  });

		  Promise.resolve(getEnglishScores())
		  .then((temp)=> {
		    this.setState({english: temp.data });
		  });

	},
	render:function(){
		return(
			<div>
				<h2>Where do you live?</h2>

				<form onSubmit={this.findSchools}>
					<input type="text"
					placeholder="Street Address"
					onChange={this.handleChange.bind(this, 'address')} />
					<br />

					<input type="text"
					placeholder="City"
					onChange={this.handleChange.bind(this, 'city')} />

					<input type="text"
					placeholder="Zip Code"
					onChange={this.handleChange.bind(this, 'zipCode')} />

					<br /> <br />
					<input type="submit"
					value="Search Address" />
				</form>
			</div>
		)
	}
})

function mapDispatchToProps(dispatch){
	return bindActionCreator({addAddress, addCity, addZipcode, getSchooldata}, dispatch)
}

function mapState (state) {
	return {users: state.users}
} 

export default connect(mapState, mapDispatchToProps) (Location);