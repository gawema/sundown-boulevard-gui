import React, {useState} from 'react';
import Home from '../screens/Home';
import Meals from '../screens/Meals';
import Drinks from '../screens/Drinks';
import Order from '../screens/Order';
import Receipt from '../screens/Receipt';
import './Screen.css'

const Screen = () => {

	const [openScreen, setOpenScreen] = useState('home');

	return (
		<div className="screen-container">
			{openScreen === 'home' && <Home />}
			{openScreen === 'meals' && <Meals />}
			{openScreen === 'order' && <Order />}
			{openScreen === 'drinks' && <Drinks />}
			{openScreen === 'receipt' && <Receipt />}
		</div>
	);
}

export default Screen;