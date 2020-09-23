import React from "react";
import {Button} from 'antd';
import {AddCircle, Create, Delete, Refresh} from '../../svg';
import CastomInput from "../../castom-ant-components/input-block/input-block";
import CastomCheckBox from "../../castom-ant-components/check-box/check-box";


const InfoForm = (props) => {
  return (
    <div className="info-form block-wrapper__form">
      <div className="block-wrapper__body">
        <div className="block-wrapper__single-container">
          <CastomInput
            placeholder="Введите название профиля"
            text="Найти профиль клиента"
            className="block-wrapper__input"
          />
        </div>
        <div className="block-wrapper__twin-container">
          <div className="block-wrapper__twin-element block-wrapper__twin-element--add-profile-padding">
            <AddCircle className="transfer-booking__tool-logo"/><a>Добавить личный профиль</a>
          </div>
          <div className="block-wrapper__twin-element block-wrapper__twin-element--add-profile-padding">
            <AddCircle className="transfer-booking__tool-logo"/><a>Добавить профиль компании</a>
          </div>
        </div>
        <div className="block-wrapper__twin-container">
          <div className="block-wrapper__twin-element">
            <div className="transfer-booking__gender-button"><Button type="primary">M</Button></div>
            <div className="transfer-booking__gender-button"><Button type="primary">Ж</Button></div>
          </div>
          <CastomInput
            placeholder="Введите фамилию"
            text="Фамилия"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
          />
        </div>
        <div className="block-wrapper__twin-container">
          <CastomInput
            placeholder="Введите имя"
            text="Имя"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
          />
          <CastomInput
            placeholder="+0 000 000-00-00"
            text="Телефон"
            important = "true"
            className="block-wrapper__input block-wrapper__input--twin-element"
          />
        </div>
        <CastomCheckBox className="block-wrapper__checkbox">Встретить с табличкой</CastomCheckBox>
      </div>
      <div className="block-wrapper__footer">
        <div className="block-wrapper__twin-container">
          <div className="block-wrapper__twin-element">
            <Delete className="transfer-booking__tool-logo"/><a>Очистить данные</a>
          </div>
          <div className="block-wrapper__twin-element">
            <Refresh className="transfer-booking__tool-logo"/><a>Обновить данные из профиля</a>
          </div>
        </div>
        <div className="block-wrapper__twin-container">
          <div className="block-wrapper__twin-element block-wrapper__twin-element--last-tool-padding">
            <Create className="transfer-booking__tool-logo"/><a>Редактировать профиль</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoForm;
