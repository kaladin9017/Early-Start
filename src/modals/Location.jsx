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
	componentWillMount(){
		// Promise.resolve()
		// .then(()=>(
		// 	console.log('working')
		// 	// console.log('USER:', this.props.users.zipcode)
		// 	// this.props.getSchools(this.getCurrentState())
		// ))

		// // if(this.props.users !== undefined){
		// // console.log('USER:', this.props.users.zipcode)
		// // }
				this.getCurrentState('11201')
	},
	handleClick(e) {
		e.preventDefault()
		// Promise.resolve(this.getCurrentState('11201'))
		// .then(()=>(
		// 	// console.log('working')
		// 			this.props.getSchools(this.state, '05')
		// 	// console.log('USER:', this.props.users.zipcode)
		// 	// this.props.getSchools(this.getCurrentState())
		// ))

		this.props.getSchools(this.state, '05')
		// console.log('SCHOOLS in handleCLick:',this.props.schools)

		// Promise.resolve(this.props.users)
		// .then(()=>(
		// 	console.log('USER:', this.props.users)
		// 	// this.props.getSchools(this.getCurrentState())
		// ))


	},
	findSchools: function(e){
		e.preventDefault()
		// Promise.resolve(t)
		// .then(()=>(
		// 	this.props.getSchools(this.state)
		// ))
		// this.getCurrentState()
		// console.log('PROMISE STATE:', this.getCurrentState())
		// 	getSchools(this.state)
	},
	handleChange: function(input, event){
		if(input === 'address'){
			this.props.addAddress(event.target.value)
		} else if (input === 'city'){
			this.props.addCity(event.target.value)
		} else if (input === 'zipCode'){
			this.props.addZipcode(event.target.value)
			// Promise.resolve(this.props.addZipcode(event.target.value))
			// .then((zipcode)=>{
			// 	this.getCurrentState(zipcode)
			// })
			// .then((state)=>{
			// 	this.props.getSchools(state, '05')
			// }) <=== TRIED CREATING PROMISE, DID NOT WORK. 
		}
	},
	getCurrentState(zip) {
		let schoolGradeArr = []
		console.log(1)
		  Promise.resolve(getDistrict(zip))
		  .then((temp)=> {
		    this.setState({district: temp.data });
		  });

		  Promise.resolve(getSchoolGrade())
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
		console.log('SCHOOLS in render:', this.props.schools)
		console.log('USERS in render:',this.props.users)
	return(
		<div>
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

function mapDispatchToProps(dispatch){
	return bindActionCreators({addAddress, addCity, addZipcode, getSchools}, dispatch)
}
// export default connect(mapState, {getSchools})(Location);
export default connect(mapState, mapDispatchToProps)(Location);

//second prop is automatically dispatch.

// if this.props.schools is undefined, initialstate for school reducer as false,,
// if false, null, do the action or promise 

