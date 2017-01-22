import React from 'react';
import {addAge} from '../actions/userActions';
import {connect} from 'react-redux';

const Age = React.createClass({
	selectedAge: function(event){
		addAge(event.target.value)
		console.log(event.target.value)
	},
	render: function(){
		return(
			<div className="outer-container" >

			<div className="inner-container" >
				<img className="Age" src={require("../../public/images/clipboardText.png")} />

			<form className="ageForm">
				<select className="selection"  onChange={this.selectedAge}>
					<option value="00">3-5</option>
					<option value="01">5-10</option>
					<option value="06">10-13</option>
				</select>
			</form>

			</div>			

			</div>
			
		)
	}
});

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreator({addAge}, dispatch)
// }

export default connect(null, {addAge})(Age);