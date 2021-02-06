import React from 'react';
import './Order.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'

const Order = () => {

	const history = useHistory();


	return (
		<>
			<div className="order box">
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