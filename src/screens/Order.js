import React from 'react';
import './Order.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';



const Order = () => {

	const history = useHistory();


	return (
		<>
			<div className="order box">
				<h2>order header</h2>
					<div>
					<Calendar
						// className={}
						minDate={new Date()}
						defaultValue={new Date()}
						onChange={(event) => console.log(event)}
						width={200}
						/>
					</div>
				<Button command="ORDER" onClick={() => {
					history.push({
						pathname: "receipt",
					})
				}} />
			</div>
		</>
	);
}

export default Order;