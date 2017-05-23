import React from "react";
import InputWrapper from "../Form/InputWrapper";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import DisplayValidation from "../Validation/DisplayValidation";
import SelectBase from "./Base";
import "./Select.scss";
import {SelectInputProps} from "../Form/Types/types";
import classnames from "classnames";

export class Select extends React.PureComponent<SelectInputProps & PerformanceWrapperProps, {}> {
  render() {
    const {className, label, labelPostfix, labelPrefix, arrow, ...props} = this.props
    const {autoFocus, onChange, onBlur, id, defaultChecked, defaultSelected, value, children, ...validationProps} = props;
    const classes = classnames(className, "select")
    return (
      <InputWrapper className={classes} name={props.name} labelPrefix={labelPrefix} labelPostfix={labelPostfix} label={label}>
        <div className="styled-select">
          <SelectBase {...props}/>
          <div className="arrow">{arrow}</div>
        </div>
        <DisplayValidation {...validationProps}/>
      </InputWrapper>
    );
  }  
};

export default performanceWrapper<SelectInputProps>(Select);