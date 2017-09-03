/** Libraries */
import React from 'react';

/** Components */
import ErrorWrapper from '../Form/ErrorWrapper';

/** Interfaces */
import {InputWrapperProps} from '../../typings/types.d';

/** Class InputWrapper */
class InputWrapper extends React.Component<InputWrapperProps, undefined> {
  render() {
    const {className, name, label, labelPrefix, labelPostfix, explanation, type, children} = this.props;

    return (
      <ErrorWrapper className={className} type={type}>
        {(label || labelPostfix || labelPrefix) && (
          <div className="input-label-wrapper">
            {labelPrefix && <div className="input-label-prefix">{labelPrefix}</div>}
            <label className="input-label" htmlFor={name}>{label}</label>
            {labelPostfix && <div className="input-label-postfix">{labelPostfix}</div>}
          </div>
        )}
        {explanation && (
          <div className="input-description">
            <p>{explanation}</p>
          </div>
        )}
        {children}
      </ErrorWrapper>
    );
  }
}

export default InputWrapper;