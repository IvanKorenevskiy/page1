import React from "react";
import CastomInput from "../../castom-ant-components/input-block/input-block";


const ContactForm = (props) => {
    return (
    	<div className="contact-form">
    		<div className="block-wrapper__title">
				Контактные данные покупателя
			</div>
			<div className="block-wrapper__body">
				<div className="block-wrapper__twin-container">
					<CastomInput 
						placeholder="Введите эл. почту" 
						text="Эл. почта"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/>  
					<CastomInput 
						placeholder="+0 000 000-00-00" 
						text="Телефон"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/>  
				</div> 
				<div className="contact-form__text">
					Уведомление о заказе придет вам, если хотите отправить его клиенту, укажите его контакты.
				</div>				
			</div>   
	    </div>
	);    	
} 	


export default ContactForm;