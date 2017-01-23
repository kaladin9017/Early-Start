//LIBRARIES
import React from 'react';
import {connect} from 'react-redux';
import {Gmaps, Marker} from 'react-gmaps';
import {addSchool} from '../actions/resultActions';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax, Power0, TweenMax, SteppedEase, Elastic, Bounce } from 'gsap';

//STYLING
import {List, Grid, Checkbox} from 'semantic-ui-react';
const renderClouds = ({target}) => {
  const sky = target.find({className: 'sky'});

  return new TimelineMax({repeat: -1})
    .to(sky, 1500, {backgroundPositionX: 3599, ease: Power0.easeOut })
}
const renderBoy = ({target}) => {
	const boy = target.find({className: 'spirte'});

  return new TimelineMax()
    .to(boy, 2.5, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat: -1, repeatDelay:-.5})
}

const Results = React.createClass({
	getInitialState(){
		return ({count:0})
	},
	componentDidMount(){
		this.clouds = this.addAnimation(renderClouds)
		this.boy = this.addAnimation(renderBoy)
	},
	handleClick(schoolObj, e){
		this.setState({count: this.state.count+=1})
		this.props.addSchool(schoolObj)
		console.log('count:',this.state.count)
	},
	handleRouter(){
		this.props.router.push('/compare')
		console.log('workings')
	},
	render(){
		console.log("SCHOOL STATE ON RESULTS PAGE", this.props.schools)
		let displayResults = this.props.schools.map((val, idx)=>{
			console.log(val)
			return (
				<div className="result"key={idx}>
					<div className="mini_map">
							<Gmaps
								width={'150px'}
								height={'150px'}
								lat={val.latitude}
								lng={val.longitude}
								zoom={13}
								onMapCreated={this.onMapCreated}>

							<Marker
								lat={val.latitude}
								lng={val.longitude}
								radius={500}
								onClick={this.onClick} />  
							</Gmaps>
					</div>

					<div className="schoolInfo">
							<ul className="info">
								<li className="schoolName">{val.location_name}</li>
							  <li>{`Address: ${val.primary_address}, ${val.city} ${val.zip}`}</li>
							  <a href={val.principal_email}><li>Email School</li></a>
							</ul>
							<ul className="skills">
						    <li>Math: {val.math.mean_scale_score}</li>
						    <li>English: {val.english.mean_scale_score}</li>
						    <li>Attendance: {val.attendance._of_attd_taken+'%'}</li>
						  </ul>
						  <div className="checkOuter">
						  	<Checkbox className='checkbox' onClick={this.handleClick.bind(this, {val})}/>
						  </div>
					</div>
				
				</div>
			)
		})

		return (
			<div className="resultPage">
			  <div className="sky"></div>
			  <div className="boyResult">
			  	<div className="spirte"></div>
			  </div>
			  <h1>Here are the top schools in your area</h1>
			  <div className="results">
					{displayResults}
				</div>
				{this.state.count === 3 ? <button className='compare-button' onClick={this.handleRouter}>Compare</button> : null}
			</div>
		)
	}
});

//STATE
const mapState = state => ({
	schools: state.schools
})

export default connect(mapState, {addSchool})(GSAP(Results));


