import './Order.css'

import { Calendar, utils } from "react-modern-calendar-datepicker";
import React, { useEffect, useState } from 'react';

import Button from '../../components/Button'
import { TimePicker } from 'antd';
import { addOrUpdateOrder } from '../../utils/httpClient';
import moment from 'moment';
import { useHistory } from "react-router-dom"

const Order = () => {

	const history = useHistory();


	const [order] = useState(JSON.parse(localStorage.getItem('order')))
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [numberOfGuest, setNumberOfGuest] = useState(1);
	const [email, setEmail] = useState('')
	const [isNew, setIsNew] = useState(true)

	useEffect(() => {
		if (!order) { history.push({ pathname: '/' }) }
		if(validateEmail(order.email)){
			setEmail(order.email)
			setIsNew(false)
		}
		setSelectedDate(order.date)
		setSelectedTime(order.time)
		setNumberOfGuest(order.guests)
	}, [])

	useEffect(() => {
	}, [order])
	
	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}
	
	const submitOrder = async () => {
		if (validateEmail(email)) {
			let copyOrder = { ...order }
			copyOrder.email = email;
			copyOrder.date = selectedDate;
			copyOrder.time = selectedTime;
			copyOrder.guests = numberOfGuest;
			localStorage.setItem('order', JSON.stringify(copyOrder))

			const response = await addOrUpdateOrder(copyOrder)
			if (response.id) {
				history.push({
					pathname: 'receipt',
				})
			}
		}
	}
	

	return (
		<>
			<div className="order box">
				<h4>Complete Order</h4>
				<div className="flex-container">
					<div className="left">
						<Calendar
							colorPrimary="#BA2329"
							value={selectedDate}
							onChange={(date) => setSelectedDate(date)}
							minimumDate={utils().getToday()}
							shouldHighlightWeekends
						/>
						<TimePicker
							value={moment(selectedTime, 'HH:mm')}
							minuteStep={15}
							onChange={(time, timeString) => setSelectedTime(timeString)}
							defaultValue={moment('16:00', 'HH:mm')}
							format={'HH:mm'}
							disabledHours={() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 23]}
							showNow="true"
							hideDisabledOptions="true"
							bordered="false"
						/>
					</div>
					<div className="right">
						<label className="primary-font-color" htmlFor="search-email">Select Number of Guest</label>
						<div className='counter'>
							<div onClick={() => setNumberOfGuest(numberOfGuest - 1)}
								style={{
									pointerEvents: `${numberOfGuest < 2 ? 'none' : 'auto'}`,
									color: `${numberOfGuest < 2 ? 'gray' : 'black'}`
								}}
							>-</div>
							<h4>{numberOfGuest}</h4>
							<div onClick={() => setNumberOfGuest(numberOfGuest + 1)}
								style={{
									pointerEvents: `${numberOfGuest > 9 ? 'none' : 'auto'}`,
									color: `${numberOfGuest > 9 ? 'lightgray' : 'black'}`
								}}
							>+</div>
						</div>
						<div className="input-container">
							<label className="primary-font-color" htmlFor="search-email">Enter Email</label>
							<input type="email" id="search-email" name="search-email" value={email} onChange={e => setEmail(e.target.value)} />
						</div>
					</div>
				</div>
				<Button command={isNew ? 'ORDER' : 'UPDATE ORDER'} onClick={submitOrder} 
				style={{
					pointerEvents:`${!validateEmail(email) ? 'none' : 'auto'}`,
					backgroundColor:`${!validateEmail(email) ? '#ba232987' : '#ba2329'}`
				}}
				/>
			</div>
		</>
	);
}

export default Order;