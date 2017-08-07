/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputWrapper from '../Form/InputWrapper';
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import DisplayValidation from '../Validation/DisplayValidation';
import SelectBase from './Base';
import {SelectInputProps, PerformanceWrapperProps} from '../../index.d';

/** Styles */
import './Select.scss';

/** Class Select */
class Select extends React.Component<SelectInputProps & PerformanceWrapperProps, {}> {
  render() {
    const {className, label, labelPostfix, labelPrefix, arrow, ...props} = this.props;
    const {autoFocus, onChange, onBlur, id, defaultChecked, defaultSelected, value, children, ...validationProps} = props;
    const classes = classnames(className, "select", "input");
    return (
      <InputWrapper className={classes} name={props.name} labelPrefix={labelPrefix} labelPostfix={labelPostfix} label={label}>
        <div className="input-group">
          <div className="styled-select">
            <SelectBase {...props}/>
            <div className="arrow">{arrow}</div>
          </div>
        </div>
        <DisplayValidation {...validationProps}/>
      </InputWrapper>
    );
  }  
};

export default performanceWrapper<SelectInputProps>(Select);