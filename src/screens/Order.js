import React, {useState, useEffect} from 'react';
import './Order.css'
import { useHistory } from "react-router-dom";
import Button from '../components/Button'
import { Calendar, utils } from "react-modern-calendar-datepicker";
import { TimePicker } from 'antd';
import moment from 'moment';



const Order = () => {

	const history = useHistory();
	const [selectedDay, setSelectedDay] = useState(null);
	const [numberOfGuest, setNumberOfGuest] = useState(1);
	const [email, setEmail] = useState("test@test.com")


	useEffect(() => {
		console.log(selectedDay)
	},[selectedDay])



	return (
		<>
			<div className="order box">
				<h4>Complete Order</h4>
				<div className="flex-container">
					<div className="left">
						<Calendar
						colorPrimary="#BA2329" 
						value={selectedDay}
						onChange={setSelectedDay}
						minimumDate={utils().getToday()}
						shouldHighlightWeekends
						/>
						<TimePicker
						minuteStep={15}
						onChange={()=>console.log('message')}
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
				<Button command="ORDER" onClick={() => {
					history.push({
						pathname: "receipt",
					})
				}} />
			</div>
		</>
	);
}

export default Order;