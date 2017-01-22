import React from 'react'

const Welcome = React.createClass({
  goToAge: function(){

  },
  render: function (){
    return(
      <div>

      <img src={require("../../public/images/chalkboardText.png")} useMap="#image-map" />

      <map name="image-map" id="image-map">
          <area target="_self" alt="Parent" title="Parent" coords="147,297,285,343" shape="rect" onClick={this.goToAge}/>

          <area target="_self" alt="Student" title="Student" coords="491,344,340,295" shape="rect" onClick={this.goToAge} />
      </map>

      </div>
    )
  }
})

export default Welcome;
