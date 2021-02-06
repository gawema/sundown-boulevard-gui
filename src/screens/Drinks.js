import React from 'react';
import './Drinks.css'
import OrderStatusBox from '../components/OrderStatusBox'

const Drinks = () => {

	return (
		<>
			<div className="driks box">
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
				<div className="drink-card box">
					<h2>Name</h2>
				</div>
			</div>
			<OrderStatusBox command="NEXT" nextStep="place-order"/>
		</>
	);
}

export default Drinks;