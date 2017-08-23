/** Libraries */
import React from 'react';
import classnames from 'classnames';

/** Components */
import InputWrapper from '../Form/InputWrapper';
import InputGroup from '../Form/InputGroup';
import TextAreaBase from './Base';
import DisplayValidation from '../Validation/DisplayValidation';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Interfaces */
import {TextAreaProps, PerformanceWrapperProps} from '../../typings/types.d';

/** Class TextArea */
export class TextArea extends React.Component<TextAreaProps & PerformanceWrapperProps, {}> {
  render() {
    const {className, label, labelPrefix, labelPostfix, ...props} = this.props;
    const {autoFocus, onChange, onBlur, id, value, ...validationProps} = props;
    const classes = classnames(className, 'textarea', 'input');
    
    return (
      <InputWrapper className={classes} name={props.name} labelPrefix={labelPrefix} labelPostfix={labelPostfix} label={label}>
        <InputGroup>
          <TextAreaBase {...props} />
        </InputGroup>
        <DisplayValidation {...validationProps} />
      </InputWrapper>
    );
  } 
};

export default performanceWrapper<TextAreaProps>(TextArea);