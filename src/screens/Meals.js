import React from 'react';
import './Meals.css'
import Button from '../components/Button'
import { useHistory } from "react-router-dom";
import OrderStatusBox from '../components/OrderStatusBox'

const Meals = () => {
	const history = useHistory();


	return (
		<>
			<div className="meal">
				<img src={null} alt="Meals" className="box"/>
				<div className="meal-description box"></div>
				<Button command="GENERATE NEW" onClick={() => {
					history.push({
						pathname: "/",
					})
				}}
				style={{
					margin: "20px 0 0 auto"
				}}/>
			</div>
			<OrderStatusBox command="NEXT" nextStep="select-drinks"/>
		</>
	);
}

export default Meals;