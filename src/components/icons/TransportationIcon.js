import React from 'react';
import { Icon, Popup } from 'semantic-ui-react';

const TransportationIcon = () => {

  return (
    <div>
      <Popup
        trigger={<Icon circular name='heart' />}
        content='Hello. This is a mini popup'
        size='mini'
      />
    </div>
  )

}

export default TransportationIcon;
