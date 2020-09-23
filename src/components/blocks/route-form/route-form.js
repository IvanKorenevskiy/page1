import React from "react";
import CastomInput from "../../castom-ant-components/input-block/input-block";
import CastomSelect from "../../castom-ant-components/select-block/select-block";
import CastomDatePicker from "../../castom-ant-components/date-block/date-block";
import CastomTimePicker from "../../castom-ant-components/time-block/time-block";


const RouteForm = (props) => {
  return (
    <div className="route-form block-wrapper__form">
      <div className="block-wrapper__body">
        <div className="route-form__info-text">
          Отправление: Санкт-Петербург (Россия)
        </div>
        <div className="block-wrapper__twin-container">
          <div className="block-wrapper__twin-element block-wrapper__twin-element--padding">
            <CastomDatePicker
              placeholder="1 янв, пн"
              text="Дата"
              className="block-wrapper__input block-wrapper__input--calc-width"
            />
            <CastomTimePicker
              format='HH:mm'
              placeholder="00:00"
              text="Время"
              className="block-wrapper__input block-wrapper__input--fixed-width"
            />
          </div>
        </div>
        <div className="block-wrapper__twin-container">
          <CastomSelect
            placeholder="Выберите название"
            text="Аэропорт прилета"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
            value={["Домодедово", "Пулково", "Адлер"]}
          />
          <div className="block-wrapper__twin-element">
            <CastomInput
              placeholder="Введите №"
              text="Рейс №"
              className="block-wrapper__input block-wrapper__input--calc-width"
            />
            <CastomTimePicker
              format='HH:mm'
              placeholder="00:00"
              text="Время"
              className="block-wrapper__input block-wrapper__input--fixed-width"
            />
          </div>
        </div>
        <div className="block-wrapper__twin-container">
          <CastomInput
            placeholder="Введите название"
            text="Город вылета"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
          />
          <CastomSelect
            placeholder="Выберите название"
            text="Аэропорт вылета"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
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
            text="Пункт прибытия"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element block-wrapper__input--padding"
            value={["Отель", "Палатка", "Другое место"]}
          />
          <CastomInput
            placeholder="Введите название"
            text="Название отеля"
            className="block-wrapper__input block-wrapper__input--twin-element block-wrapper__input--padding"
          />
        </div>
        <div className="route-form__warning-text">
          Внимание! Если указанная точка находится в отдаленном или трудодоступном районе города, стоимость может
          измениться.
        </div>
      </div>
    </div>
  );
}

export default RouteForm;
