import React from 'react';

const Age = React.createClass({
	getInitialState: function(){
		return{ageRange: null}
	},
	selectedAge: function(event){
		this.setState({ageRange: event.target.value})
	},
	render: function(){
		return(
			<div className="container" >

			<div>
				<img className="Age" src={require("../../public/images/clipboardText.png")} />
			</div>

			<div id="form-container">
				<form className="ageForm">
					<select value={this.state.ageRange} onChange={this.selectedAge}>
						<option value="3-5">3-5</option>
						<option value="5-10">5-10</option>
						<option value="10-13">10-13</option>
					</select>
				</form>
			</div>

			</div>
			
		)
	}
})

export default Age;