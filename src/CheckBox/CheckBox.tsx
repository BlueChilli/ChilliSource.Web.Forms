import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch";
import {SwitchProps} from "../Form/Types/types";


/** Creates a Checkbox connected to FrECL forms state management all HTML5 attributes apply */
export default ({className, ...other}:SwitchProps) => {
  var classes:string = classnames(className, 'checkbox');
  return (
    <Switch type="checkbox" className={classes} {...other}/>
  );
}
