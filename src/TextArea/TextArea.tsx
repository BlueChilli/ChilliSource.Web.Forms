import React, {PropTypes} from "react";
import classnames from "classnames";
import InputWrapper from "../Form/InputWrapper";
import InputGroup from "../Form/InputGroup";
import TextAreaBase from "./Base";
import DisplayValidation from "../Validation/DisplayValidation";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {TextAreaProps} from "../Form/Types/types";

class TextArea extends React.PureComponent<TextAreaProps & PerformanceWrapperProps, {}> {
  render() {
    const {className, label, labelPostfix, ...props} = this.props;
    const classes = classnames(className, 'textarea', 'input');
    return (
      <InputWrapper className={classes} name={props.name} labelPostfix={labelPostfix} label={label}>
        <InputGroup>
          <TextAreaBase {...props} />
        </InputGroup>
        <DisplayValidation {...props} />
      </InputWrapper>
    );
  } 
};

export default performanceWrapper<TextAreaProps>(TextArea);
