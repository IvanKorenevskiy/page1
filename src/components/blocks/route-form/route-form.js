import React from "react";
import CastomInput from "../../castom-ant-components/input-block/input-block";
import CastomSelect from "../../castom-ant-components/select-block/select-block";
import CastomDatePicker from "../../castom-ant-components/date-block/date-block";
import CastomTimePicker from "../../castom-ant-components/time-block/time-block";



const RouteForm = (props) => {
    return (
    	<div className="route-form">
			<div className="block-wrapper__title">
				Маршрут
			</div> 
			<div className="block-wrapper__body">
				<div className="route-form__info-text">
				Отправление: Санкт-Петербург (Россия)
				</div>
				<div className="block-wrapper__twin-container">
					<div className="block-wrapper__twin-element">
						<CastomDatePicker 
							placeholder="2010-01-01" 
							text="Дата"
							styles="block-wrapper__input block-wrapper__input--calc-width"
						/>
						<CastomTimePicker
							format = 'HH:mm' 
							placeholder="ЧЧ:ММ" 
							text="Время"
							styles="block-wrapper__input block-wrapper__input--fixed-width"
						/>
					</div>
				</div> 
				<div className="block-wrapper__twin-container">
					<CastomSelect  
						placeholder="Выберите название" 
						text="Аэропорт прилета *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
						value={["Домодедово", "Пулково", "Адлер"]}
					/> 
					<div className="block-wrapper__twin-element">
						<CastomInput 
							placeholder="Введите №" 
							text="Рейс №"
							styles="block-wrapper__input block-wrapper__input--calc-width"
						/> 
						<CastomTimePicker
							format = 'HH:mm' 
							placeholder="ЧЧ:ММ" 
							text="Время"
							styles="block-wrapper__input block-wrapper__input--fixed-width"
						/>
					</div>
				</div> 
				<div className="block-wrapper__twin-container">
					<CastomInput 
						placeholder="Введите название" 
						text="Город вылета *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/> 
					<CastomSelect  
						placeholder="Выберите название" 
						text="Аэропорт вылета *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
						value={["Домодедово", "Пулково", "Адлер"]}
					/> 
				</div> 
			</div>
			<div className="block-wrapper__footer">
				<div className="route-form__info-text">
					Прибытие: Москва (Россия)
				</div>
				<div className="block-wrapper__twin-container">
					<CastomSelect  
						placeholder="Выберите название" 
						text="Пункт прибытия *"
						styles="block-wrapper__input block-wrapper__input--twin-element"
						value={["Отель", "Палатка", "Другое место"]}
					/> 
					<CastomInput 
						placeholder="Введите название" 
						text="Название отеля"
						styles="block-wrapper__input block-wrapper__input--twin-element"
					/>  
				</div> 
				<div className="route-form__warning-text">
					Внимание! Если указанная точка находится в отдаленном или трудодоступном районе города, стоимость может измениться.
				</div>
			</div>   
      	</div>
    );    	
}

export default RouteForm;