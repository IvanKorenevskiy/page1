import React from "react";
import "./transfer-booking.scss";
import BlockWrapper from "../blocks/block-wrapper";

let b = [
	1, 2, 3, 4, 5
]
const TransferBooking = (props) => {
  return (
  	<div className="wrapper__transfer-booking transfer-booking">				
			<div className="transfer-booking__left-side">
				<div className="transfer-booking__title">
					Бронирование трансфера
				</div>
				<div className="transfer-booking__media-screen-show">
					<BlockWrapper styles="transfer-booking__block" form="0" title="Автомобиль бизнес-класса"/>
				</div>	
				<BlockWrapper styles="transfer-booking__block" form="1" title="Основная информация"/>
				<BlockWrapper styles="transfer-booking__block" form="2" title="Маршрут"/>
				<BlockWrapper styles="transfer-booking__block" form="3" title="Контактные данные покупателя"/>
				<div className="transfer-booking__media-screen-show">
					<BlockWrapper styles="transfer-booking__block" form="4" title="Стоимость"/>
				</div>
				<BlockWrapper styles="transfer-booking__block" form="5" title="Способ оплаты"/> 		
				<BlockWrapper styles="transfer-booking__block" form="6" title=""/>
			</div>
			<div className="transfer-booking__right-side">
				<div className="transfer-booking__media-screen-hide"><BlockWrapper styles="transfer-booking__block" form="0" title="Автомобиль бизнес-класса"/></div>
				<div className="transfer-booking__media-screen-hide"><BlockWrapper styles="transfer-booking__block" form="4" title="Стоимость"/></div>
			</div>
    </div>
	);    	
}



export default TransferBooking;

/*const C = () => {
    return (
    	<div className="transfer-booking">				
			<div className="transfer-booking__left-side">
				<div className="title--font">
					Бронирование трансфера
				</div>
				<div className="media-screen-show"><CarInfoBlock styles="transfer-booking__block"/></div>	
				<InfoBlock styles="transfer-booking__block"/>
				<RouteBlock styles="transfer-booking__block"/> 
				<ContactBlock styles="transfer-booking__block"/>
				<div className="media-screen-show"><CostBlock/></div>
				<PaymentMethod styles="transfer-booking__block"/> 		
				<AcceptBookingBlock styles="transfer-booking__block"/>
			</div>
			<div className="transfer-booking__right-side">
				<div className="media-screen-hide"><CarInfoBlock styles="transfer-booking__block"/></div>
				<div className="media-screen-hide"><CostBlock styles="transfer-booking__block"/></div>
			</div>
	    </div>
	);    	
}
*/
