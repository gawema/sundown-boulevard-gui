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
			<div> RESTAURANTER </div>
			<div> PRODUKTER </div>
			<div> NYHEDSBREV </div>
			<div> KONTAKT </div>
		</div>
	);
}

export default Header;