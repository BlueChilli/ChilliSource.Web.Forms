import React from "react";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper";
import "./RadioTabs.scss";
import {RadioTabsProps, SwitchProps} from "../Form/Types/types";

type RadioTab = React.ReactElement<SwitchProps>

interface CloneElementProps {
  name: string,
  key?: React.Key
}

export default ({className, radioClasses, name, label, ...props}:RadioTabsProps) => {
  var classes:string = classnames(className, 'input', 'radio-tabs');
  return (
    <InputWrapper className={classes} name={name} label={label}>
      <div className={radioClasses}>
        {React.Children.map<RadioTab>(props.children, (child:RadioTab, index) => {
          return React.cloneElement<SwitchProps, CloneElementProps>(child, {
            name,
            key: name + index,
          });
        })}
      </div>
    </InputWrapper>
  );
}

