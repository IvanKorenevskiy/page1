import React from "react";
import "./block-wrapper.scss";


const BlockWrapper = (props) => {
  console.log(props.children.props.title);
  if (props.children.props.title != null) {
    return (
      <div className={`${props.className} block-wrapper`}>
        <div className="block-wrapper__title">
          {props.children.props.title}
        </div>
        {props.children}
      </div>
    );
  } else {
    return (
      <div className={`${props.className} block-wrapper`}>
        {props.children}
      </div>
    );
  }
}


export default BlockWrapper;
