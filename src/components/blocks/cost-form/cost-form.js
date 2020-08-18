import React from "react";


const CostForm = (props) => {
    return (
    	<div className="cost-form">
    		<div className="block-wrapper__title">
				Стоимость
			</div>
			<div className="block-wrapper__body">
				<div className="cost-form__count">
					20 460 ₽
				</div> 
				<div className="cost-form__text">
					Налоги и сборы включены
				</div>
			</div>   
		</div>
	);    	
} 	


export default CostForm;