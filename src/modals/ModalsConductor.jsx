import React from 'react';

import WelcomeModal from './Welcome.jsx';
import AgeModal from './Age.jsx';
import LocationModal from './Location.jsx'

const ModalConductor = props => {
	switch (props.currentModal) {
		case 'HOW_OLD':
			return <AgeModal {...props}/>;

		case 'HOME_ADDRESS':
			return <LocationModal {...props}/>;

		default:
			return <WelcomeModal {...props}/>;
	}
};

export default ModalConductor;