import React from "react";
import "./input-block.scss";
import {Input} from 'antd';


function AddStar () {
  return (
    <span className="red-star">*</span>
  )
}

const CastomInput = (props) => {
  console.log(props.important);
  return (
    <div className={`${props.className} castom-input`}>
      <span className="castom-input__text">{props.text} {props.important === "true" ? <AddStar/>:null}</span>
      <Input placeholder={props.placeholder}/>
    </div>
  );
}

export default CastomInput;
