import React from 'react';
import './Button.css'
import Carousel from 'react-bootstrap/Carousel'

const Button = (props) => {

	return (
		<Carousel>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://source.unsplash.com/random/500x250"
			alt="First slide"
			/>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://source.unsplash.com/random/500x251"
			alt="Third slide"
			/>
		</Carousel.Item>
		<Carousel.Item>
			<img
			className="d-block w-100"
			src="https://source.unsplash.com/random/500x252"
			alt="Third slide"
			/>
		</Carousel.Item>
		</Carousel>
	);
}

export default Button;