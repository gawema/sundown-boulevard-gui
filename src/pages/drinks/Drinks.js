import './Drinks.css'

import React, {useEffect, useState} from 'react';

import OrderStatusBox from '../../components/OrderStatusBox'
import { getAllDrinks } from '../../utils/httpClient'
import { useHistory } from "react-router-dom";

const Drinks = () => {

	const history = useHistory();

	const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')))
	const [allDrinks, setAllDrinks] = useState([])
	
	useEffect(() => {
		if (!order) {history.push({pathname: '/'})}
		const getDrinks = async () => {
			setAllDrinks(await getAllDrinks())
		}
		getDrinks();
	},[])


	useEffect(() => {
		localStorage.setItem('order', JSON.stringify(order))
	},[order])


	const updateOrder = (id) => {
		let newSelectDrinks = [...order.drinks]
		const index = newSelectDrinks.indexOf(id)
		if (index === -1){
			newSelectDrinks.push(id)
		}else{
			newSelectDrinks.splice(index, 1)
		}
		setOrder({ ...order, drinks: [...newSelectDrinks]})
	}

	return (
		<>
			<div className="drinks box">
				{allDrinks.map(drink => {
					return(
						<div key={drink.id} className="drink-card box" 
							style={{
								backgroundImage: `url(${drink.image_url})`,
								borderColor: `${order?.drinks?.indexOf(drink.id) !== -1 && order?.drinks ? '#BA2329' : '#333'}`	
							}} onClick={() => updateOrder(drink.id)}>
							<div className="backdrop"></div>
							<h4>{drink.name}</h4>
						</div>)
				})}
			</div>
			<OrderStatusBox command="NEXT" nextStep="place-order"/>
		</>
	);
}

export default Drinks;