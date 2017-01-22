import React from 'react'


const Welcome = React.createClass({
  goToAge: function(){
    console.log("play", this.props.parent.welcome)
    this.props.parent.welcome.play()

  },
  render: function (){
    return(
      <div className="welcome">

        <img src="/images/chalkboardText.png" useMap="#image-map" />

        <map name="image-map" id="image-map">
            <area target="_self" alt="Parent" title="Parent" coords="147,297,285,343" shape="rect" onClick={this.goToAge}/>

            <area target="_self" alt="Student" title="Student" coords="491,344,340,295" shape="rect" onClick={this.goToAge} />
        </map>

      </div>
    )
  }
})

export default Welcome;
