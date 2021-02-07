import React from 'react';
import './Receipt.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'


const Receipt = () => {

	const history = useHistory();


	return (
		<>
			<div className="receipt box">
				<h4>Receipt</h4>
			</div>
			<Button command="BACK TO HOME" onClick={() => {
					history.push({
						pathname: "/",
					})
				}} 
				style={{
					alignSelf:"unset",
					margin:0,
					gridColumnStart: 6,
				}}/>
		</>
	);
}

export default Receipt;