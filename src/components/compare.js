import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

const coords = {
  lat: 40.741992,
  lng: -73.927947
};

const Compare = React.createClass({
 
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  },
  render() {
    return (
      <Gmaps
        width={'1000px'}
        height={'400px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={15}
        // params={{v: '3.exp'}}
        onMapCreated={this.onMapCreated}>

   		<Marker
          lat={40.741483}
          lng={-73.933395}/>
		 <Marker
          lat={40.742387}
          lng={-73.935386}/>
      </Gmaps>
    );
  }
 
});

export default Compare;






