import React from 'react'


const Welcome = React.createClass({
  goToAge: function(){
    console.log("play", this.props.parent.welcome)
    this.props.parent.welcome.play()
  },
  render: function (){
    return(
      <div className="welcome">

        <map name="image-map" id="image-map">
          <h1 className="titleWelcome">Welcome!</h1>
          <br />
          <center><p className="earlyStart">Early Start helps families in New York City find great schools from Pre-K to Middle School.</p>
          <br />
          <button className="start" onClick={this.goToAge}>Start</button></center>
        </map>

      </div>
    )
  }
})

export default Welcome;
