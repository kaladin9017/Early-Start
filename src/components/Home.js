import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax, Power0, TweenMax, SteppedEase} from 'gsap';

const renderClouds = ({target}) => {
  const sky = target.find({className: 'sky'})
  return new TimelineMax({repeat: -1})
    .to(sky, 1500, {backgroundPositionX: 3599, ease: Power0.easeOut })
}

const renderBuildings = ({target}) =>{
  const buildings = target.find({className: 'buildings'})
  return new TimelineMax({repeat: -1})
    .to(buildings, 1200, {backgroundPositionX: 3599, ease: Power0.easeOut })
}

const renderBoy = ({target}) =>{
  const boy = target.find({className: 'spirte'})
  return new TweenMax
    .to(boy, 2, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat:-1, repeatDelay:-.5 })
}

const hideWelcome = ({target}) =>{
  const welcome = target.find({className: 'welcome'})
  const boy = target.find({className: 'spirte'})
  const box = target.find({className: 'box'})
  const buildings = target.find({className: 'buildings'})
  const sky = target.find({className: 'sky'})
  return new TimelineMax()
    // .to(box, 1.2, {scale: .2, opacity: 0, ease: Power0.easeOut})
    .pause()
    .add('close')
    .to(welcome, 1.2, {scale: .2, opacity: 0, ease: Power0.easeOut}, "close")
    .to(boy, 2, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat:-1, repeatDelay:-.5 }, "close")
    .to(buildings, 1200, {backgroundPositionX: 3599, ease: Power0.easeOut }, "close")
}

class Home extends React.Component {
  componentDidMount() {
    this.clouds = this.addAnimation(renderClouds)
    this.welcome = this.addAnimation(hideWelcome)
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
        <div className="box" style={{width: 200, height:100, background:"red", position:"absolute", left: 500}}></div>
        <div className="welcome">
          <button onClick={()=> this.welcome.tweenTo('close')}></button>
        </div>
      </div>
    )
  }
}

export default GSAP(Home);
