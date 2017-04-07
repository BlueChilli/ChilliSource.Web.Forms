import * as React from 'react';
import ErrorWrapper from './ErrorWrapper';
import './InputWrapper.scss';
import {InputWrapperProps} from "./Types/types";


const InputWrapper = ({className, name, label, labelPostfix, type, children}: InputWrapperProps) => (
  <ErrorWrapper className={className} type={type}>
    {(label || labelPostfix) && (
      <div className="input-label-wrapper">
        <label className="input-label" htmlFor={name}>{label}</label>
        {labelPostfix && <div className="input-label-postfix">{labelPostfix}</div>}
      </div>
    )}
    {children}
  </ErrorWrapper>
);

export default InputWrapper;


