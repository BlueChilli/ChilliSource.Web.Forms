import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch";
import {SwitchProps} from "../Form/Types/types";


/** 
 * Creates a Checkbox connected to forms state management.
 * All HTML5 attributes apply.
 */
class CheckBox extends React.PureComponent<SwitchProps, {}> {
  render() {
    const {className, ...other} = this.props;
    var classes:string = classnames(className, 'checkbox');

    return (
      <Switch type="checkbox" className={classes} {...other}/>
    );
  }
}

export default CheckBox;