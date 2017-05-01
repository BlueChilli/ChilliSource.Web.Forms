import React from "react";
import classnames from "classnames";
import Switch from "../Switch/Switch";
import {SwitchProps} from "../Form/Types/types";


/** 
 * Creates a radio button connected to forms 
 * state management. All HTML5 attributes apply.
 */
class Radio extends React.PureComponent<SwitchProps, {}> {
  render() {
    const {className, ...other} = this.props;
    var classes:string = classnames(className, 'radio');
    return (
      <Switch type="radio" className={classes} {...other} />
    );
  }
}

export default Radio;