import React, {PropTypes} from "react";
import InputWrapper from "../Form/InputWrapper";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import DisplayValidation from "../Validation/DisplayValidation";
import SelectBase from "./Base";
import "./Select.scss";
import {SelectInputProps} from "../Form/Types/types";


class Select extends React.PureComponent<SelectInputProps & PerformanceWrapperProps, {}> {
  render(){
    const {label, labelPostfix, arrow, ...props} = this.props
    const {children, ...validationProps} = props;
    return (
      <InputWrapper className="select" name={props.name} labelPostfix={labelPostfix} label={label}>
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
