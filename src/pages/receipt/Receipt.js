import './Receipt.css'

import React, { useState } from 'react';

import Button from '../../components/Button'
import { useHistory } from "react-router-dom";

const Receipt = () => {

	const [order] = useState(JSON.parse(localStorage.getItem('order')))
	const history = useHistory();


	return (
		<>
			<div className="receipt box">
				<h4>Receipt</h4>
				<h5>EMAIL: {order.email}</h5>
				<h5>DATE: {order.date.day}-{order.date.month}-{order.date.year}</h5>
				<h5>TIME: {order.time}</h5>
				<h5>NUMBER OF GUEST: {order.guests}</h5>
				<h5>EMAIL: {order.email}</h5>
			</div>
			<Button command="BACK TO HOME" onClick={() => {
				localStorage.removeItem('order')
				history.push({
					pathname: "/",
				})
			}}
				style={{
					alignSelf: "unset",
					margin: 0,
					gridColumnStart: 6,
				}} />
		</>
	);
}

export default Receipt;