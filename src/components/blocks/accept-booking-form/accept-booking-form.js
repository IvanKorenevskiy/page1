import React from "react";
import {Checkbox, Button} from 'antd';


const AcceptBookingForm = (props) => {
	return (
		<div className="accept-booking-form block-wrapper__body">
			<Checkbox>
				Принимаю условия
				<a className="ant-checkbox-wrapper__link" href="!#"> оферты</a>, 
				<a className="ant-checkbox-wrapper__link" href="!#"> тарифов</a>
				<a className="ant-checkbox-wrapper__link" href="!#"> и договоров IATA и НСАВ ТКП</a>
			</Checkbox>					 				
			<button className="accept-booking-form__button">Забронировать</button>
		</div>
	);    	 
}


export default AcceptBookingForm;