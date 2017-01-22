import React from 'react';
const {PropTypes} = React;

const ModalWrapper = props => {
	const handleBackgroundClick = e => {
		if (e.target = e.currentTarger) props.hideModal();
	};

	const onResponse = () => {
		props.onResponse();
		props.hideModal();
	};

	const okButton = props.showOk ? 
		(
			<button 
			onClick={onOk}
			disabled={props.okDisabled}
			>
				{props.okText}
			</button>
		) : null;

	return (
		<div onClick={handleBackgroundClick}>
			<button onClick={props.hideModal}>Close</button>

			{props.children}

			{okButton}
		</div>
	);
};

ModalWrapper.propTypes = {
	//props
	showOk: PropTypes.bool,
	okText: PropTypes.string,
	okDisabled: PropTypes.bool,
	width: PropTypes.number,
	style: PropTypes.object,
	children: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.element,
		PropTypes.string,
		PropTypes.bool,
	]).isRequired,

	//methods
	hideModal: PropTypes.func,
	onOk: PropTypes.func,
};

ModalWrapper.defaultProps = {
	title: '',
	showOk: true,
	okText: 'OK',
	okDisabled: false,
	width: 400,
	onOk: () => {}
};

export default ModalWrapper;


