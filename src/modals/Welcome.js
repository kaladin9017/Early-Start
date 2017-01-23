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
          <h1>Welcome!</h1>
          <p>Early Start helps families in NYC</p>
          <button onClick={this.goToAge}>Start</button>
        </map>

      </div>
    )
  }
})

export default Welcome;
