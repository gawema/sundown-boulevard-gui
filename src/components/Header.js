import './Header.css'

import React from 'react';
import logo from '../assets/logo.png'

const Header = () => {

	return (
		<div className="header primary-font-color">
			<img src={logo} height={60} alt="logo" 
				onClick={() => {
					window.location.href = '/';
				}}
				style={{
					cursor: "pointer"
				}}
			/>
			<a href> RESTAURANTER </a>
			<a href> PRODUKTER </a>
			<a href> NYHEDSBREV </a>
			<a href> KONTAKT </a>
		</div>
	);
}

export default Header;