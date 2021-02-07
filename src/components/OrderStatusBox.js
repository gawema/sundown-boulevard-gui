import React from 'react';
// import './OrderStatusBox.css'
import { useHistory } from "react-router-dom";
import Button from './Button'

const OrderStatusBox = (props) => {

	const history = useHistory();

	return (
		<>
			<div className="neworder box">
				<h4>{props.title}</h4>
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