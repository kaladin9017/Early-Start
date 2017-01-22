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

const renderWelcome = ({target}) =>{
  const welcome = target.find({className: 'welcome'})
  return new TweenMax
    .to(welcome, 2, {backgroundPosition: "-1280px 0px", ease:SteppedEase.config(8), repeat:-1, repeatDelay:-.5 })
}

class Home extends React.Component {
  componentDidMount() {
    this.clouds = this.addAnimation(renderClouds)
    this.buildings = this.addAnimation(renderBuildings)
    this.boy = this.addAnimation(renderBoy)
    this.welcome = this.addAnimation(renderWelcome)
    this.buildings.pause();
    this.boy.pause();
    this.welcome.pause();
  }

  //   componentDidUpdate() {
  //    this.switchAnim.tweenTo(this.getCurrentPage())
  // }
  playNext(){
    console.log(this.buildings)
    this.buildings.play()
    this.boy.play()
  }

  render(){
    return (
      <div className="home">
        <div className="sky"></div>
        <div className="buildings"></div>
        <div className="spirte"></div>
        <div className="welcome">
          <button onClick={this.playNext.bind(this)}></button>
        </div>
      </div>
    )
  }
}

export default GSAP(Home);
