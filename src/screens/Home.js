import React from 'react';
import './Home.css'
import Button from '../components/Button'
import OrderStatusBox from '../components/OrderStatusBox'

const Home = () => {

	return (
		<>
			<div className="slideshow box">

			</div>
			<OrderStatusBox title="order flow box" command="ORDER" nextStep="select-meal"/>
			<div className="find box">
				<h2>Find your order</h2>
				<div className="input-container">
					<label className="primary-font-color" for="lname">Enter Email</label>
					<input type="text" id="lname" name="lname" />
				</div>
				<Button command="FIND" onClick={() => alert('ok')}></Button>
			</div>
			<div className="content box">
				<h2>Content Box</h2>
			</div>
		</>
	);
}

export default Home;