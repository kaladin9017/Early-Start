import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

const MiniMap = props => {
  return (
    <div className="mini_map">
      <Gmaps
        width={'150px'}
        height={'150px'}
        lat={props.latitude}
        lng={props.longitude}
        zoom={13}
        onMapCreated={props.onMapCreated}>

      <Marker
        lat={props.latitude}
        lng={props.longitude}
        radius={500}
        onClick={props.onClick} />  
      </Gmaps>
    </div>
  )
}

export default MiniMap