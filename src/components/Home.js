import React from 'react';
import GSAP from 'react-gsap-enhancer';
import {TimelineMax} from 'gsap';

const renderSpirte = ({target}) =>{

  const box = target.find({className: 'box'})

  return new TimelineMax({repeat: -1})
    .to(box, 1, {scale: 1.23, y: '+=120'})
    .to(box, 1, {scale: 1, y: '-=120'})
    .to(box, 1, {rotation: 90}, 1)
}

class Home extends React.Component {
  componentDidMount() {
    this.addAnimation(renderSpirte)
  }

  render(){
    return (
      <div>
        <div className="spirte"></div>
      </div>
    )
  }
}

export default GSAP(Home);
