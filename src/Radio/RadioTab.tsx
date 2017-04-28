import React from "react";
import classnames from "classnames";
import {SwitchProps} from "../Form/Types/types";
import Switch from "../Switch/Switch";

class RadioTab extends React.PureComponent<SwitchProps, {}> {
  render() {
    const {className, ...props} = this.props;
    var classes = classnames(className, 'radio-tab');
    
    return (
      <Switch type="radio" className={classes} {...props}/>
    );
  }
}

export default RadioTab;