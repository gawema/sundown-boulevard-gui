import React from 'react';
import './Home.css'
import Button from '../components/Button'
import OrderStatusBox from '../components/OrderStatusBox'

const Home = () => {

	return (
		<>
			<div className="slideshow box"></div>
			<OrderStatusBox command="ORDER" nextStep="select-meal"/>
			<div className="find box">
				<Button command="FIND" onClick={() => alert('ok')}></Button>
			</div>
			<div className="content box"></div>
		</>
	);
}

export default Home;