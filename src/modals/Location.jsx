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
				// this.getCurrentState('11201')
	},
	// handleClick(e) {
	// 	e.preventDefault()
	// 	var p = new Promise((resolve, reject) => {  
	// 	   resolve(this.getCurrentState('11201'));
	// 	});
	// 	// Promise.resolve(this.getCurrentState('11201'))
	// 	setTimeout(()=>{
	// 	p.then((data)=>{
	// 		console.log("data",data)
	// 		console.log(this.state)
	// 		// console.log('working')
	// 				// this.props.getSchools(this.state, '05')
	// 		// console.log('USER:', this.props.users.zipcode)
	// 		// this.props.getSchools(this.getCurrentState())
	// 	})
	// }, 1000)
	// 	console.log("state",this.state)
	// 	//this.props.getSchools(this.state, '05')
	// 	// console.log('SCHOOLS in handleCLick:',this.props.schools)

	// 	// Promise.resolve(this.props.users)
	// 	// .then(()=>(
	// 	// 	console.log('USER:', this.props.users)
	// 	// 	// this.props.getSchools(this.getCurrentState())
	// 	// ))


	// },
	findSchools: function(e){
		// e.preventDefault()
		// Promise.resolve()
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
	handleClick(e) {
e.preventDefault()
		let schoolGradeArr = []
			let district = null;
			let grades = null;
			let attendance = null;
			let math = null;
			let english = null;
			console.log(this.props.users.zipcode)
		  Promise.resolve(getDistrict(this.props.users.zipcode))
		  .then((temp)=> {
		  	district = temp.data
		    //this.setState({district: temp.data });
		  })

		  .then(()=> getSchoolGrade())
		  .then((temp)=> {
		  	grades = temp.data
		    //this.setState({grades: temp.data });
		  })

		  .then(()=> getAttendance())
		  .then((temp)=> {
		  	attendance= temp.data
		    //this.setState({attendance: temp.data });
		  })

		  .then(()=> getMathScores())
		  .then((temp)=> {
		  	math=temp.data
		    //this.setState({math: temp.data });
		  })

		  .then(()=> getEnglishScores())
		  .then((temp)=> {
		  	english = temp.data
		    //this.setState({english: temp.data });
		  })
		  .then(()=> {
		  	// setTimeout(()=>{

		  	return {district , math, english, attendance, grades}
		  	// }, 2000)
		  })
		  .then((data)=>{
		  	console.log(data)
		  	this.props.getSchools(data, '05')
		  })

	},
	render:function(){
		console.log('SCHOOLS in render:', this.props.schools)
		// console.log('USERS in render:',this.props.users)
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

