import React, {useEffect, useState} from 'react';
import './Meals.css'
import Button from '../components/Button'
import { useHistory } from "react-router-dom";
import OrderStatusBox from '../components/OrderStatusBox'

const Meals = () => {
	const history = useHistory();

	const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')))
	const [meal, setMeal] = useState({})

	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+order['meal_id'])
		.then(response => response.json())
		.then(data => setMeal(data.meals[0]))
	},[])

	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order))
	},[order])


	return (
		<>
			<div className="meal">
				<div className="box no-bottom-border">
					<img src={meal.strMealThumb} alt="Meals" />
				</div>
				<div className="meal-description box">
					<h4>{meal.strMeal}</h4>
					<h4>{order.meal_id}</h4>
				</div>
				<Button command="GENERATE NEW" onClick={() => {
					fetch('https://www.themealdb.com/api/json/v1/1/random.php')
					.then(response => response.json())
					.then(data => {setMeal(data.meals[0]); setOrder({...order, meal_id: data.meals[0]['idMeal']})})
				}}
				style={{
					margin: "20px 0 0 auto"
				}}/>
			</div>
			<OrderStatusBox command="NEXT" nextStep="select-drinks"/>
		</>
	);
}

export default Meals;