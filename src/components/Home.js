import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax, Power0, TweenMax, SteppedEase, Elastic, Bounce } from 'gsap';
import Welcome from '../modals/Welcome';
import Age from '../modals/Age';
import Location from '../modals/Location';


import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators} from 'redux';

import {addAddress, addCity, addZipcode} from '../actions/userActions';
import {getSchools} from '../actions/index'

const mapState = state => ({
    schools: state.schools,
    users: state.users,
});
const mapDispatchToProps = dispatch => {
  return bindActionCreators({addAddress, addCity, addZipcode, getSchools}, dispatch)
}

const renderClouds = ({target}) => {
  const sky = target.find({className: 'sky'})
  return new TimelineMax({repeat: -1})
    .to(sky, 1500, {backgroundPositionX: 3599, ease: Power0.easeOut })
}

const changeRoutes = (home) => {
  home.router.push('/results/')
}


const hideWelcome = (utils, app) => {
  const {target} = utils
  console.log(utils.options.props.router)
  //find elements to animate
  const welcome = target.find({className: 'welcome'})
  const boy = target.find({className: 'spirte'})
  const buildings = target.find({className: 'buildings'})
  const age = target.find({className: "age"})
  const location = target.find({className: "location"})
  const bus = target.find({className: "bus"})
  // const tree1 = target.find({className: "tree1"})

  const tl = new TimelineMax({paused:true});

  const tlPromise = new Promise(() => {
    tl.to(welcome, 1.2, {scale: .2, opacity: 0, ease: Power0.easeOut})

      .to(boy, 2.5, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat: -1, repeatDelay:-.5}, "start -=1")
      .add("start")
      .to(buildings, 7, {backgroundPositionX: 150, ease: Power0.easeOut}, "start -=1")
      // .fromTo(tree1, .5, {bottom: 795, ease: Bounce.easeOut,}, {bottom: 25, ease: Bounce.easeOut, },"start")
      .from(age, .75, {scale: .2, opacity:0, ease:  Elastic.easeOut.config(1, 1), y: 100, repeat:1, yoyo:true}, "start +=.4")
      .addPause(2.3)
      .from(location, .75, {scale: .2, opacity:0, ease:  Elastic.easeOut.config(1, 1), y: 100, repeat:1, yoyo:true}, "start +=3")
      .fromTo(bus, 3, {left: 1500, ease:Power0.easeIn}, {left: -1300, ease:Power0.easeIn}, "start +=2.8")
      .addPause(4.7)
      .to(buildings, 1, {opacity: 0, onComplete: ()=> changeRoutes(utils.options.props)}, "start +=4.5")

  })

  return tl

}

class Home extends React.Component {
  componentDidMount() {
    this.clouds = this.addAnimation(renderClouds)
    this.welcome = this.addAnimation(hideWelcome, this)
  }

  //   componentDidUpdate() {
  //    this.switchAnim.tweenTo(this.getCurrentPage())
  // }



  render(){
    return (
      <div className="home">
        <div className="sky"></div>
        <div className="buildings"></div>
        <div className="spirte"></div>
        <div className="bus"></div>
        <Welcome className="welcome" parent={this}/>
        <Age className="age" parent={this}/>
        <Location className="location" {...this.props} parent={this}/>
      </div>
    )
  }
}

export default connect(mapState, mapDispatchToProps)(GSAP(Home));
