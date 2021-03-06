import React from "react";
import "./time-block.scss";
import {TimePicker} from 'antd';
import {SelectArrow} from '../../svg';


let suffixIcon = <SelectArrow className="castom-select__select-arrow"/>

const CastomTimePicker = (props) => {
  return (
    <div className={`${props.className} castom-time-picker`}>
      <span className="castom-time-picker__text">{props.text}</span>
      <TimePicker
        format={props.format}
        placeholder={props.placeholder}
        suffixIcon= {suffixIcon}
      />
    </div>
  );
}

export default CastomTimePicker;
