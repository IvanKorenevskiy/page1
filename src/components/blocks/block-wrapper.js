import React from "react";
import InfoForm from "./info-form/info-form";
import RouteForm from "./route-form/route-form";
import ContactForm from "./contact-form/contact-form";
import PaymentMethodForm from "./payment-method-form/payment-method-form";
import AcceptBookingForm from "./accept-booking-form/accept-booking-form";
import CostForm from "./cost-form/cost-form";
import CarInfoForm from "./car-info-form/car-info-form";
import "./block-wrapper.scss";


const BlockWrapper = (props) => {
  console.log (props.children.props.title);
  if (props.children.props.title!=null) {
    return (
  	  <div className={`${props.className} block-wrapper`}>
        <div className="block-wrapper__title">
          {props.children.props.title}
        </div>
  	  	{props.children}
  	  </div>
  	);
  }
  else {
    return (
      <div className={`${props.className} block-wrapper`}>
        {props.children}
      </div>
    );
  }
}


export default BlockWrapper;
