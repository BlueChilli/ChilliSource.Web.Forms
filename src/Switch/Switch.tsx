import React from "react";
import classnames from "classnames";
import SwitchBase from "./Base";
import DisplayValidation from "../Validation/DisplayValidation";
import ErrorWrapper from "../Form/ErrorWrapper";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {SwitchProps} from "../Form/Types/types";

import {snakeCase, toLower} from "lodash"
import "./Switch.scss";


export class Switch extends React.PureComponent<SwitchProps & PerformanceWrapperProps, {}>{
  render() {
    const {className, label, ...props} = this.props;
    const {autoFocus, onChange, onBlur, id, defaultChecked, defaultSelected, defaultValue, ...validationProps} = props;

    const classes = classnames("switch", className);
    const labelFor = `${toLower(props.name)}_${snakeCase(props.id)}`;
     
    return (
      <ErrorWrapper className={classes} type={props.type}>
        <SwitchBase {...props} id={labelFor}/>
        <label htmlFor={labelFor}>
          <span className="box"/>
          {label}
        </label>
        <DisplayValidation {...validationProps} />
      </ErrorWrapper>
    );
  }
};

export default performanceWrapper<SwitchProps>(Switch);
