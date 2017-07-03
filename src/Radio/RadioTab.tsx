import React from "react";
import classnames from "classnames";
import {SwitchProps} from "../Form/Types/types";
import Radio from "../Radio/Radio";

class RadioTab extends React.Component<SwitchProps, {}> {
  render() {
    const {className, ...props} = this.props;
    var classes = classnames(className, 'radio-tab');
    
    return (
      <Radio className={classes} {...props}/>
    );
  }
}

export default RadioTab;