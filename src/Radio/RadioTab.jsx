import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch";
// import {RadioTabProps} from "../Form/Types/types"

// FIXME: Work out how to type this file
export default ({className, ...props}) => {
  var classes = classnames(className, 'radio-tab');
  return (
    <Switch type="radio" className={classes} {...props}/>
  );
}

