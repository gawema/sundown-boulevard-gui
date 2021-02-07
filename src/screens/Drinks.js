import React, {useEffect, useState} from 'react';
import './Drinks.css'
import OrderStatusBox from '../components/OrderStatusBox'

const Drinks = () => {

	const [drinks, setDrinks] = useState([])

	useEffect(() => {
		fetch('https://api.punkapi.com/v2/beers')
		.then(response => response.json())
		.then(data => setDrinks(data))
	},[])

	return (
		<>
			<div className="driks box">
				{drinks.map(drink => {
					return(
					<div className="drink-card box" style={{
						backgroundImage: `url(${drink.image_url})`
					}}>
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