import './Home.css'

import React, { useState } from 'react';

import Button from '../../components/Button'
import OrderStatusBox from '../../components/OrderStatusBox'
import Slideshow from '../../components/Slideshow'
import { getOrderByEmail } from '../../utils/httpClient'
import { useHistory } from "react-router-dom";

const Home = () => {

	const history = useHistory();

	const [email, setEmail] = useState("test@test.com")
	const [notFound, setNotFound] = useState("")

	const findOrder = async () => {
		const order = await getOrderByEmail(email)
		if (order[0]) {
			localStorage.setItem('order', JSON.stringify(order[0]))
			history.push({
				pathname: 'select-meal',
			})
		} else {
			setNotFound("- not found :(")
		}
	}

	return (
		<>
			<div className="slideshow box">
				<Slideshow />
			</div>
			<OrderStatusBox title="order flow box" command="NEW ORDER" nextStep="select-meal" />
			<div className="find box">
				<h4>Find your order </h4>
				<div className="input-container">
					<label className="primary-font-color" htmlFor="search-email">Enter Email {notFound}</label>
					<input type="email" id="search-email" name="search-email" value={email} onChange={e => setEmail(e.target.value)} />
				</div>
				<Button command="FIND" onClick={findOrder}></Button>
			</div>
			<div className="content box">
				<h4>Content Box</h4>
			</div>
		</>
	);
}

export default Home;