import React from 'react';
import './Meals.css'
import OrderStatusBox from '../components/OrderStatusBox'

const Meals = () => {

	return (
		<>
			<div className="meal box">
				<img src={null} alt="Meals" />
				<div className="meal-description"></div>
			</div>
			<OrderStatusBox command="NEXT" nextStep="select-drinks"/>
		</>
	);
}

export default Meals;