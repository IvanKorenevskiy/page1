import React from "react";
import "./time-block.scss";
import {TimePicker} from 'antd';


const CastomTimePicker = (props) => {
  return (
  	<div className={`${props.className} castom-time-picker`}>
  		<span className="castom-time-picker__text">{props.text}</span>
			<TimePicker format={props.format} placeholder={props.placeholder}/>
		</div>	
  );    	
}

export default CastomTimePicker;