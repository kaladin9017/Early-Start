import React from 'react';
import {connect} from 'react-redux';

const mapState = state => ({
	users: state.users
})

const Results = React.createClass({
	render(){
		console.log("state", this.props.users)
		return (
			<div>Hello World!</div>
		)
	}
});

export default connect(mapState)(Results)