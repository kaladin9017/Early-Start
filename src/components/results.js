//LIBRARIES
import React from 'react';
import {connect} from 'react-redux';
import MiniMap from './MiniMap';
import {addSchool, sortSchools} from '../actions/resultActions';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax, Power0, SteppedEase} from 'gsap';
import _ from 'lodash';

//STYLING
import {Checkbox} from 'semantic-ui-react';
const renderClouds = ({target}) => {
  const sky = target.find({className: 'sky'});

  return new TimelineMax({repeat: -1})
    .to(sky, 1500, {backgroundPositionX: 3599, ease: Power0.easeOut })
}
const renderBoy = ({target}) => {
	const boy = target.find({className: 'spirte'});
	const boyResult = target.find({className: 'boyResult'});

  return new TimelineMax()
    .fromTo(boyResult, 6, {left: 80, ease:Power0.easeIn}, {left: 1300, ease:Power0.easeIn}, "move" )
    .to(boy, 2.5, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat: -1, repeatDelay:-.5}, "move")
}

const Results = React.createClass({
	getInitialState(){
		return ({count:0});
	},
	componentDidMount(){
		this.clouds = this.addAnimation(renderClouds);
		this.boy = this.addAnimation(renderBoy);
	},
	handleClick(schoolObj, e){
		this.setState({count: this.state.count+=1});
		this.props.addSchool(schoolObj);
	},
	handleRouter(){
		this.props.router.push('/compare')
	},
	handleSortBy(event){
		console.log(event.target.value)
		const sorted = _.sortBy(this.props.schools, (school) => school[event.target.value]["mean_scale_score"])
		console.log(sorted)
		this.props.sortSchools(sorted.reverse())
	},
	render(){
		let displayResults = this.props.schools.map((val, idx)=>{
			return (
				<div className="result"key={idx}>

					<MiniMap onMapCreated={this.onMapCreated}latitude={val.latitude} longitude={val.longitude} onClick={this.onClick}/>
					<div className="schoolInfo">
							<ul className="info">
								{val.location_name && <li className="schoolName">{val.location_name}</li>}
							  {val.primary_address && <li>{`Address: ${val.primary_address}, ${val.city} ${val.zip}`}</li>}
							  {val.principal_email && <a href={val.principal_email}><li>Email School</li></a>}
							</ul>
							<ul className="skills">
						    {val.math && <li>Math: {val.math.mean_scale_score}</li>}
						    {val.english && <li>English: {val.english.mean_scale_score}</li>}
						    {val.attendance && <li>Attendance: {val.attendance._of_attd_taken+'%'}</li>}
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
			  <div className="sky">
			  	<div>
				  	<label htmlFor="sortBy">Sort</label>
				  	<select 
				  		id="sortBy"
				  		onChange={this.handleSortBy}
				  	>
				  		<option value="english">English Score</option>
				  		<option value="math">Math Score</option>
				  	</select>
				  </div>
			  </div>
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

export default connect(mapState, {addSchool, sortSchools})(GSAP(Results));


