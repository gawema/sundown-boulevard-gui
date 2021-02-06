import React from 'react';
import './Button.css'

const Button = (props) => {

	return (
		<button 
			onClick={props.onClick} 
			className={props.center && 'center-btn'}
			style={props.style}
			>
			{props.command}
		</button>
	);
}

export default Button;