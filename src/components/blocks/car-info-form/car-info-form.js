import React from "react";


const CarInfoForm = (props) => {
  return (
    <div className="car-info-form block-wrapper__form">
      <div className="block-wrapper__body">
        <div className="car-info-form__justify-position">
          <ul className="car-info-form__list">
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Дата: </span>20.09.2019</li>
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Время: </span>20:00</li>
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Направление: </span>Санкт-Петербург (аэропорт Пулково) — Москва (отель Radisson
              Royal)
            </li>
          </ul>
          <ul className="car-info-form__list">
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Время в пути: </span>2 часа 20 мин</li>
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Пассажиры: </span>2 взрослых, 1 ребенок</li>
            <li className="car-info-form__item"><span className="car-info-form__item-bold">Поставщик: </span>iWay</li>
          </ul>
        </div>
      </div>
      <div className="block-wrapper__body car-info-form--color">
        <div className="car-info-form__head-font">Условия отмены бронирования</div>
        <div className="car-info-form__justify-position">
          <ul className="car-info-form__list">
            <li className="car-info-form__item"><span className="car-info-form__item-bold">При изменении:</span></li>
            <li className="car-info-form__item">С момента бронирования — нет штрафа После 20 сентября, 12:00 — 20 460
              ₽
            </li>
          </ul>
          <ul className="car-info-form__list">
            <li className="car-info-form__item"><span className="car-info-form__item-bold">При отмене:</span></li>
            <li className="car-info-form__item">С момента бронирования — нет штрафа После 20 сентября, 12:00 — 20 460
              ₽
            </li>
          </ul>
        </div>
        <div className="block-wrapper__notification">
          Указано московское время (МСК)
        </div>
      </div>
    </div>
  );
}


export default CarInfoForm;
