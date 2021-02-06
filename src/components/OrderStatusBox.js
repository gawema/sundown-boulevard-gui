import React from 'react';
// import './OrderStatusBox.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'

const OrderStatusBox = (props) => {

	const history = useHistory();

	return (
		<>
			<div className="neworder box">
				<h2>{props.title}</h2	>
				<Button command={props.command} onClick={() => {
					history.push({
						pathname: props.nextStep,
					})
				}} center />
			</div>
		</>
	);
}

export default OrderStatusBox;