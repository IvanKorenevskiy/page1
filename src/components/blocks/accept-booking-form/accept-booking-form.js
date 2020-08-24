import React from "react";
import CastomCheckBox from "../../castom-ant-components/check-box/check-box";


const AcceptBookingForm = (props) => {
  return (
    <div className="accept-booking-form block-wrapper__body">
      <CastomCheckBox className="block-wrapper__checkbox">
        Принимаю условия
        <a className="ant-checkbox-wrapper__link" href="!#"> оферты</a>,
        <a className="ant-checkbox-wrapper__link" href="!#"> тарифов</a>
        <a className="ant-checkbox-wrapper__link" href="!#"> и договоров IATA и НСАВ ТКП</a>
      </CastomCheckBox>
      <button className="accept-booking-form__button">Забронировать</button>
    </div>
  );
}


export default AcceptBookingForm;
