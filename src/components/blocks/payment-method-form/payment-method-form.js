import React from "react";
import {Radio} from 'antd';
import CastomRadioButton from "../../castom-ant-components/radio-button/radio-button";


const PaymentMethodForm = (props) => {
  return (
    <div className="payment-method-form block-wrapper__form">
      <div className="block-wrapper__body">
        <Radio.Group className="payment-method-form__list">
          <CastomRadioButton value={1} className="payment-method-form__item">
            Безналичная оплата
          </CastomRadioButton>
          <CastomRadioButton value={2} className="payment-method-form__item">
            В офисе
          </CastomRadioButton>
          <span className="payment-method-form__comment">Необходимо оплатить до 20 августа 12:00. В случае непоступления оплаты, заказ будет аннулирован.</span>
          <a className="payment-method-form__link" href="!#">Адреса офисов</a>
          <CastomRadioButton value={3} className="payment-method-form__item">
            Банковская карта
          </CastomRadioButton>
          <span className="payment-method-form__comment">Если валюта вашего счета отлична от валюты оплаты, то конвертация будет происходить по курсу банка, выпустившего карту.</span>
          <CastomRadioButton value={4} className="payment-method-form__item">
            UTS рубли
          </CastomRadioButton>
        </Radio.Group>

      </div>
    </div>

  );
}

export default PaymentMethodForm;
