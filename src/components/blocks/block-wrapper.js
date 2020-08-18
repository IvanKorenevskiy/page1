import React from "react";
import InfoForm from "./info-form/info-form";
import RouteForm from "./route-form/route-form";
import ContactForm from "./contact-form/contact-form";
import PaymentMethodForm from "./payment-method-form/payment-method-form";
import AcceptBookingForm from "./accept-booking-form/accept-booking-form";
import CostForm from "./cost-form/cost-form";
import CarInfoForm from "./car-info-form/car-info-form";
import "./block-wrapper.scss";

let masOfForms = [
	<CarInfoForm/>, 
	<InfoForm/>, 
	<RouteForm/>,
	<ContactForm/>,
	<CostForm/>, 
	<PaymentMethodForm/>, 
	<AcceptBookingForm/>
]
const BlockWrapper = (props) => {
    return ( 
    <div className={`${props.styles} block-wrapper`}>  	
    	{masOfForms[props.form]} 
    </div> 	
	); 
}   	 


export default BlockWrapper;