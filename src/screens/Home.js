import React from 'react';
import './Home.css'
import Button from '../components/Button'
import OrderStatusBox from '../components/OrderStatusBox'
import Slideshow from '../components/Slideshow'

const Home = () => {

	return (
		<>
			<div className="slideshow box">
				<Slideshow />
			</div>
			<OrderStatusBox title="order flow box" command="ORDER" nextStep="select-meal"/>
			<div className="find box">
				<h4>Find your order</h4>
				<div className="input-container">
					<label className="primary-font-color" for="lname">Enter Email</label>
					<input type="text" id="lname" name="lname" />
				</div>
				<Button command="FIND" onClick={() => alert('ok')}></Button>
			</div>
			<div className="content box">
				<h4>Content Box</h4>
			</div>
		</>
	);
}

export default Home;