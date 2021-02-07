import React from 'react';
import './Drinks.css'
import OrderStatusBox from '../components/OrderStatusBox'

const Drinks = () => {

	return (
		<>
			<div className="driks box">
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
				<div className="drink-card box">
					<h4>Name</h4>
				</div>
			</div>
			<OrderStatusBox command="NEXT" nextStep="place-order"/>
		</>
	);
}

export default Drinks;