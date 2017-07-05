import React from "react";
import classnames from "classnames";
import SwitchBase from "./Base";
import DisplayValidation from "../Validation/DisplayValidation";
import ErrorWrapper from "../Form/ErrorWrapper";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {SwitchProps} from "../Form/Types/types";

import {snakeCase, toLower} from "lodash"
import "./Switch.scss";


export class Switch extends React.Component<SwitchProps & PerformanceWrapperProps, {}>{
  render() {
    const {className, label, style, ...props} = this.props;
    const {autoFocus, onChange, onBlur, id, defaultChecked, defaultSelected, defaultValue, value, ...validationProps} = props;

    const classes = classnames("switch", className);
     
    return (
      <ErrorWrapper className={classes} type={props.type} style={style}>
        <SwitchBase {...props} id={id || this.props.name}/>
        <label htmlFor={id || this.props.name}>
          <span className="box"/>
          {label}
        </label>
        <DisplayValidation {...validationProps} />
      </ErrorWrapper>
    );
  }
};

export default performanceWrapper<SwitchProps>(Switch);
