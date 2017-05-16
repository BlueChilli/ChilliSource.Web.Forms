import React from "react";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper";
import "./RadioTabs.scss";
import {RadioTabsProps} from "../Form/Types/types";

class RadioTabs extends React.Component<RadioTabsProps, {}> {
  render() {
    const {className, radioClasses, name, label, children} = this.props;
    var classes:string = classnames(className, 'input', 'radio-tabs');

    return (
      <InputWrapper className={classes} name={name} label={label}>
        <div className={radioClasses}>
          {children}
        </div>
      </InputWrapper>
    );
  }
}

export default RadioTabs;