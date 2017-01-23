import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax, Power0, TweenMax, SteppedEase, Elastic } from 'gsap';
import Welcome from '../modals/Welcome';
import Age from '../modals/Age';
import Location from '../modals/Location';

const renderClouds = ({target}) => {
  const sky = target.find({className: 'sky'})
  return new TimelineMax({repeat: -1})
    .to(sky, 1500, {backgroundPositionX: 3599, ease: Power0.easeOut })
}


const hideWelcome = ({target}) => {

  //find elements to animate
  const welcome = target.find({className: 'welcome'})
  const boy = target.find({className: 'spirte'})
  const box = target.find({className: 'box'})
  const buildings = target.find({className: 'buildings'})
  const age = target.find({className: "age"})

  const stopAnimation = (tl) => {
    console.log("stop", tl)
    tl.pause()
    // setTimeout(() => tl.play(), 1000)
    
  }
  const isPaused = () => {
    console.log("isPaused")
  }
  // timeline
  const tl = new TimelineMax({paused:true});

  const tlPromise = new Promise(() => {
    tl.to(welcome, 1.2, {scale: .2, opacity: 0, ease: Power0.easeOut})
      
      .to(boy, 2.5, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat: -1, repeatDelay:-.5}, "start -=1")
      .add("start")
      .to(buildings, 7, {backgroundPositionX: 150, ease: Power0.easeOut}, "start -=1")
      .from(age, .75, {scale: .2, opacity:0, ease:  Elastic.easeOut.config(1, 1), y: 500, repeat:1, yoyo:true}, "start +=.2")
      .addPause(2.3)

  })


    console.log('timeline', tl)
  return tl

}

class Home extends React.Component {
  componentDidMount() {
    // this.clouds = this.addAnimation(renderClouds)
    this.welcome = this.addAnimation(hideWelcome)
  }

  //   componentDidUpdate() {
  //    this.switchAnim.tweenTo(this.getCurrentPage())
  // }



  render(){
    console.log(this.props)
    return (
      <div className="home">
        <div className="sky"></div>
        <div className="buildings"></div>
        <div className="spirte"></div>
        <div className="tree1"></div>
        <Welcome className="welcome" parent={this}/>
        <Age className="age" parent={this}/>
      </div>
    )
  }
}

export default GSAP(Home);
