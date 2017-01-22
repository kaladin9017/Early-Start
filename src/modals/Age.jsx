import React from 'react';

const Age = React.createClass({
	getInitialState: function(){
		return{grade: null}
	},
	selectedAge: function(event){
		this.setState({grade: event.target.value})
	},
	render: function(){
		return(
			<div className="outer-container" >

			<div className="inner-container" >
				<img className="Age" src={require("../../public/images/clipboardText.png")} />

			<form className="ageForm">
				<select className="selection" value={this.state.ageRange} onChange={this.selectedAge}>
					<option value="00">3-5</option>
					<option value="01">5-10</option>
					<option value="06">10-13</option>
				</select>
			</form>

			</div>			

			</div>
			
		)
	}
})

export default Age;