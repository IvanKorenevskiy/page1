import React from "react";
import {Radio} from 'antd';

const PaymentMethodForm = (props) => {
  return (
  	<div className="payment-method-form">
  		<div className="block-wrapper__title">
			Способ оплаты
			</div> 
			<div className="block-wrapper__body">
				<ul className="payment-method-form__list">
    			<li><Radio className="payment-method-form__item">Безналичная оплата</Radio></li>
    			<Radio className="payment-method-form__item">В офисе</Radio>
    			<span className="payment-method-form__comment">Необходимо оплатить до 20 августа 12:00. В случае непоступления оплаты, заказ будет аннулирован.</span>
    			<a className="payment-method-form__link" href="!#">Адреса офисов</a>
    			<li><Radio className="payment-method-form__item">Банковская карта</Radio></li>
    			<span className="payment-method-form__comment">Если валюта вашего счета отлична от валюты оплаты, то конвертация будет происходить по курсу банка, выпустившего карту.</span>
    			<li><Radio className="payment-method-form__item">UTS рубли</Radio></li>
		    	</ul>
			</div>
  	</div>

  );    	
}

export default PaymentMethodForm;
