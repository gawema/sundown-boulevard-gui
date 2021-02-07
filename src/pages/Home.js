import React, {useState} from 'react';
import './Home.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'
import OrderStatusBox from '../components/OrderStatusBox'
import Slideshow from '../components/Slideshow'

const Home = () => {

	const history = useHistory();

	const [searchEmail, setSearchEmail] = useState("test@test.com")

	const getOrderByEmail = () => {
		fetch('http://localhost:3001/orders?email='+searchEmail)
		.then(response => response.json())
		.then(data => {
			if(data[0]){
				localStorage.setItem('order', JSON.stringify(data[0]));
			}
			else {
				throw new Error('not found')
			}
		})
		.then(() => {
			history.push({
				pathname: 'select-meal',
			})
		}).catch(e=>console.log(e));
	}

	return (
		<>
			<div className="slideshow box">
				<Slideshow />
			</div>
			<OrderStatusBox title="order flow box" command="NEW ORDER" nextStep="select-meal"/>
			<div className="find box">
				<h4>Find your order</h4>
				<div className="input-container">
					<label className="primary-font-color" for="search-email">Enter Email</label>
					<input type="email" id="search-email" name="search-email" value={searchEmail} onChange={e => setSearchEmail(e.target.value)}/>
				</div>
				<Button command="FIND" onClick={getOrderByEmail}></Button>
			</div>
			<div className="content box">
				<h4>Content Box</h4>
			</div>
		</>
	);
}

export default Home;