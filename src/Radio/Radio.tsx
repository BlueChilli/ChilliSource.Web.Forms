import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch";
import {SwitchProps} from "../Form/Types/types";


/** Creates a radio button connected to FrECL forms state management all HTML5 attributes apply */
export default ({className, ...other} : SwitchProps) => {
    var classes:string = classnames(className, 'radio');
    return (
      <Switch type="radio" className={classes} {...other} />
    );
}