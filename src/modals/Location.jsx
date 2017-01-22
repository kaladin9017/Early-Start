import React from 'react';
import Age from './Age';

const Location = React.createClass({
	getInitialState: function(){
		return {grade: '', zipCode: 0, city: '', address: ''}
	},
	findSchools: function(){

	},
	handleChange: function(input, event){
		if(input === 'address'){
			this.setState({address: event.target.value})
		} else if (input === 'city'){
			this.setState({city: event.target.value})
		} else if (input === 'zipCode'){
			this.setState({zipCode: event.target.value})
		}
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

export default Location;