import React from "react";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper";
import "./RadioTabs.scss";
import {RadioTabsProps, SwitchProps} from "../Form/Types/types";

class RadioTabs extends React.Component<RadioTabsProps, {}> {
  render() {
    const {className, radioClasses, name, label, children} = this.props;
    var classes:string = classnames(className, 'input', 'radio-tabs');

    return (
      <InputWrapper className={classes} name={name} label={label}>
        <div className={radioClasses}>
          {React.Children.map(children, child => React.cloneElement(child as React.ReactElement<{name: string}>, {
            name
          }))}
        </div>
      </InputWrapper>
    );
  }
}

export default RadioTabs;