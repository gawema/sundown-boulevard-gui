import React from 'react';
import './Header.css'
import logo from '../resources/logo.png'

const Header = () => {

	return (
		<div className="header primary-font-color">
			<img src={logo} height={60} alt="logo"/>
			<a href> RESTAURANTER </a>
			<a href> PRODUKTER </a>
			<a href> NYHEDSBREV </a>
			<a href> KONTAKT </a>
		</div>
	);
}

export default Header;