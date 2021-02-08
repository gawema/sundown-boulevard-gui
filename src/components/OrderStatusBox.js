import Button from './Button'
import React from 'react';
import { useHistory } from "react-router-dom";

var today = new Date();
const newOrder = {
	id: Date.now(),
	email: "",
	meal_id: "",
	drinks: [],
	date: {
		day: today.getDate(),
		month: (today.getMonth() + 1),
		year: today.getFullYear(),
	},
	time: "16:00",
	guests: 1
}

const OrderStatusBox = (props) => {

	const history = useHistory();

	return (
		<>
			<div className="neworder box">
				<h4>{props.title}</h4>
				<Button command={props.command} onClick={() => {
					if (props.command === "NEW ORDER") {
						localStorage.setItem('order', JSON.stringify(newOrder))
					}
					history.push({
						pathname: props.nextStep,
					})
				}} center />
			</div>
		</>
	);
}

export default OrderStatusBox;