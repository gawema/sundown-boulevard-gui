import React, {useState, useEffect} from 'react';
import './Order.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { TimePicker } from 'antd';
import moment from 'moment';

const Order = () => {

	const history = useHistory();


	const [order] = useState(JSON.parse(localStorage.getItem('order')))
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const [numberOfGuest, setNumberOfGuest] = useState(1);
	const [email, setEmail] = useState()

	useEffect(() => {
		if (!order) {history.push({pathname: '/'})}
		setEmail(order.email)
		console.log(order)
		setSelectedDate(order.date)
		setSelectedTime(order.time)
		setNumberOfGuest(order.guests)
	},[])

	useEffect(() => {
	},[order])

	const submitOrder = async() => {
		if(email.length > 1){
			let copyOder = {...order}
			copyOder.email = email;
			copyOder.date = selectedDate;
			copyOder.time = selectedTime;
			copyOder.guests = numberOfGuest;
			localStorage.setItem('order', JSON.stringify(copyOder))
			history.push({
				pathname: "receipt",
			})
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
						onChange={(time,timeString)=>setSelectedTime(timeString)}
						defaultOpenValue={moment('16:00', 'HH:mm')}
						format={'HH:mm'}
						disabledHours={() => [0,1,2,3,4,5,6,7,8,9,10,11,12,13,23]}
						showNow="true"
						hideDisabledOptions="true"
						bordered="false"
						/>
					</div>
					<div className="right">
						<label className="primary-font-color" for="search-email">Select Number of Guest</label>
						<div className='counter'>
							<div onClick={() => setNumberOfGuest(numberOfGuest - 1)}
								style={{
									pointerEvents: `${numberOfGuest <2 ? 'none' : 'auto' }`,
									color: `${numberOfGuest <2 ? 'gray' : 'black' }`
								}}
							>-</div>
							<h4>{numberOfGuest}</h4>
							<div onClick={() => setNumberOfGuest(numberOfGuest + 1)}
								style={{
									pointerEvents: `${numberOfGuest >9 ? 'none' : 'auto' }`,
									color: `${numberOfGuest >9 ? 'gray' : 'black' }`
								}}
							>+</div>
						</div>
						<div className="input-container">
							<label className="primary-font-color" for="search-email">Enter Email</label>
							<input type="email" id="search-email" name="search-email" value={email} onChange={e => setEmail(e.target.value)}/>
						</div>
					</div>
				</div>
				<Button command="ORDER" onClick={submitOrder} />
			</div>
		</>
	);
}

export default Order;