import React from "react";
import {Checkbox, Button} from 'antd';    
import {AddCircle, Refresh, Delete, Create} from '../../svg';
import CastomInput from "../../castom-ant-components/input-block/input-block";


const InfoForm = (props) => {
    return (
    	<div className="info-form">
			<div className="block-wrapper__title">
				Основная информация
			</div>   
			<div className="block-wrapper__body">
				<CastomInput 
					placeholder="Введите название профиля" 
					text="Найти профиль клиента"
					styles="block-wrapper__input"
				/> 
				<div className="block-wrapper__twin-container">
					<div className="block-wrapper__twin-element block-wrapper__twin-element--add-profile-padding">
	                	<AddCircle  className="transfer-booking__tool-logo"/><a>Добавить личный профиль</a>
					</div> 
					<div className="block-wrapper__twin-element block-wrapper__twin-element--add-profile-padding">
	                	<AddCircle  className="transfer-booking__tool-logo"/><a>Добавить профиль компании</a>        
					</div> 
				</div>
				<div className="block-wrapper__twin-container">
					<div className="block-wrapper__twin-element">
	                	<div className="transfer-booking__gender-button"><Button type="primary">M</Button></div>
              			<div className="transfer-booking__gender-button"><Button type="primary">Ж</Button></div>
					</div>  
					<CastomInput 
						placeholder="Введите фамилию" 
						text="Фамилия *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/> 
				</div> 
				<div className="block-wrapper__twin-container">
					<CastomInput 
						placeholder="Введите имя" 
						text="Имя *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/> 
					<CastomInput 
						placeholder="+0 000 000-00-00" 
						text="Телефон *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/> 
				</div>	
					<Checkbox>Встретить с табличкой</Checkbox>					
			</div> 
			<div className="block-wrapper__footer">
				<div className="block-wrapper__twin-container">
					<div className="block-wrapper__twin-element block-wrapper__twin-element--profile-tool-padding">
						<Delete  className="transfer-booking__tool-logo"/><a>Очистить данные</a>
					</div>
					<div className="block-wrapper__twin-element block-wrapper__twin-element--profile-tool-padding">
						<Refresh  className="transfer-booking__tool-logo"/><a>Обновить данные из профиля</a>
					</div>				
				</div>
				<div className="block-wrapper__twin-container">
					<div className="block-wrapper__twin-element block-wrapper__twin-element--profile-tool-padding">
						<Create  className="transfer-booking__tool-logo"/><a>Редактировать профиль</a>
					</div>					
				</div>	
			</div>  			
      	</div>
    );    	
}

export default InfoForm;