import React from "react";
import "./input-block.scss";
import {Input} from 'antd';



const CastomInput = (props) => {
  return (
  	<div className={`${props.styles} castom-input`}>
  		<span className="castom-input__text">{props.text}</span>
		<Input placeholder={props.placeholder}/>
	</div>	
  );    	
}

export default CastomInput;