import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {addAddress, addCity, addZipcode, getSchooldata} from '../actions/userActions';
import {getSchools, getDistrict, getSchoolGrade, getAttendance, getMathScores, getEnglishScores} from '../actions/index'

const mapState = state => ({
    schools: state.schools,
    users: state.users
});

const Location = React.createClass({

	handleChange: function(input, event){
		if(input === 'address'){
			this.props.addAddress(event.target.value)
		} else if (input === 'city'){
			this.props.addCity(event.target.value)
		} else if (input === 'zipCode'){
			this.props.addZipcode(event.target.value)
		}
	},
	handleClick(e) {
		e.preventDefault()
		this.props.parent.welcome.resume()

		//send out ajax calls
			let district = null;
			let grades = null;
			let attendance = null;
			let math = null;
			let english = null;
			console.log(this.props.users.zipcode)
		  Promise.resolve(getDistrict(this.props.users.zipcode))
		  .then((temp)=> {
		  	district = temp.data
		  })
		  .then(()=> getSchoolGrade())
		  .then((temp)=> {
		  	grades = temp.data
		  })
		  .then(()=> getAttendance())
		  .then((temp)=> {
		  	attendance= temp.data
		  })

		  .then(()=> getMathScores())
		  .then((temp)=> {
		  	math=temp.data
		  })
		  .then(()=> getEnglishScores())
		  .then((temp)=> {
		  	english = temp.data
		  })
		  .then(()=> {
		  	return {district , math, english, attendance, grades}
		  })
		  .then((data)=>{
		  	console.log(data)
		  	this.props.getSchools(data, '05')
		  })

	},
	render(){
		console.log('SCHOOLS in render:', this.props.schools)
		return(
			<div className="location">
				<h2>Where do you live?</h2>

				<form onSubmit={this.handleClick}>
					<input type="text"
					placeholder="Street Address"
					onChange={this.handleChange.bind(this, 'address')} />
					<br />

					<input type="text"
					placeholder="City"
					onChange={this.handleChange.bind(this, 'city')} />

					<input type="text"
					placeholder="Zip Code"
					value={this.props.users.zipcode}
					onChange={this.handleChange.bind(this, 'zipCode')} />

					<br /> 
					<br />
					<input type="submit"
					value="Search Address" />
				</form>
			</div>
			)
	}

});

export default Location;


