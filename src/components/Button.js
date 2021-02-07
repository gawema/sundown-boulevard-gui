import './Button.css'

import React from 'react';

const Button = (props) => {

	return (
		<button 
			onClick={props.onClick} 
			className={props.center ? 'center primary-btn':'primary-btn'}
			style={props.style}
			>
			{props.command}
		</button>
	);
}

export default Button;