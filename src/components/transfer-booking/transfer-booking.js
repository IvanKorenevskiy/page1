import React from "react";
import "./transfer-booking.scss";
import BlockWrapper from "../blocks/block-wrapper";
import AcceptBookingForm from "../blocks/accept-booking-form/accept-booking-form";
import InfoForm from "../blocks/info-form/info-form";
import RouteForm from "../blocks/route-form/route-form";
import ContactForm from "../blocks/contact-form/contact-form";
import PaymentMethodForm from "../blocks/payment-method-form/payment-method-form";
import CostForm from "../blocks/cost-form/cost-form";
import CarInfoForm from "../blocks/car-info-form/car-info-form";

let b = [
	1, 2, 3, 4, 5
]

const TransferBooking = (props) => {
  return (
  	<div className="transfer-booking">
			<div className="transfer-booking__left-side">
				<div className="transfer-booking__title">
					Бронирование трансфера
				</div>
				<div className="transfer-booking__media-screen-show">
					<BlockWrapper className="transfer-booking__block">
						<CarInfoForm title="Автомобиль бизнес-класса"/>
					</BlockWrapper>
				</div>
				<BlockWrapper className="transfer-booking__block">
					<InfoForm title="Основная информация"/>
				</BlockWrapper>
				<BlockWrapper className="transfer-booking__block">
					<RouteForm title="Маршрут"/>
				</BlockWrapper>
				<BlockWrapper className="transfer-booking__block">
					<ContactForm title="Контактные данные покупателя"/>
				</BlockWrapper>
				<div className="transfer-booking__media-screen-show">
					<BlockWrapper className="transfer-booking__block">
						<CostForm title="Стоимость"/>
					</BlockWrapper>
				</div>
				<BlockWrapper className="transfer-booking__block">
					<PaymentMethodForm title="Способ оплаты"/>
				</BlockWrapper>
				<BlockWrapper className="transfer-booking__block">
					<AcceptBookingForm/>
				</BlockWrapper>
			</div>
			<div className="transfer-booking__right-side">
				<div className="transfer-booking__media-screen-hide">
          <BlockWrapper className="transfer-booking__block">
  					<CarInfoForm title="Автомобиль бизнес-класса"/>
  				</BlockWrapper>
        </div>
				<div className="transfer-booking__media-screen-hide">
          <BlockWrapper className="transfer-booking__block">
  					<CostForm title="Стоимость"/>
  				</BlockWrapper>
        </div>
			</div>
    </div>
	);
}



export default TransferBooking;

