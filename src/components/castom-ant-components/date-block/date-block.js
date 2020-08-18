import React from "react";
import "./date-block.scss";
import {DatePicker} from 'antd';


const CastomDatePicker = (props) => {
    return (
    	<div className={`${props.styles} castom-date-picker`}>
    		<span className="castom-date-picker__text">{props.text}</span>
			<DatePicker placeholder={props.placeholder}/>
		</div>	
    );    	
}

export default CastomDatePicker;