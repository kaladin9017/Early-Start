import React from 'react';
import {TimelineMax, Power0, TweenMax, SteppedEase, Elastic } from 'gsap';

const Age = React.createClass({
	getInitialState: function(){
		return{ageRange: ""}
	},
	selectedAge: function(event){
		this.setState({ageRange: event.target.value})
	},
	goToLocation() {
		this.props.parent.welcome.resume('fadeout');
	},
	render: function(){
		return(
			<div className="age" >
				
					<select 
						value={this.state.ageRange} 
						onChange={this.selectedAge}
						className="ageForm"
					>
						<option value="3-5">3-5</option>
						<option value="5-10">5-10</option>
						<option value="10-13">10-13</option>
					</select>
					<button className="ageButton" onClick={this.goToLocation}>ENTER</button>

			</div>
			
		)
	}
})

export default Age;