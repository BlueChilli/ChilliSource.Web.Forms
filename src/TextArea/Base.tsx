import React, {Component, ChangeEvent, FocusEvent} from "react";
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {TextAreaProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

class TextAreaBase extends Component<TextAreaProps & PerformanceWrapperProps, {}>{
  displayName: 'TextAreaBase'
  handleChange = (event:ChangeEvent<{value: string}>) => {
    const {inputChanged, onChange} = this.props;
  
    inputChanged(event.target.value);
    if(typeof onChange === 'function'){
      onChange(event);
    }
  }

  handleBlur = (event:FocusEvent<{}>) => {
    const {setInputBlurred, onBlur} = this.props;

    setInputBlurred();
    if(typeof onBlur === 'function') {
      onBlur(event);
    }
  }

  render() {
    var attributes = getHTMLAttributes<TextAreaProps & PerformanceWrapperProps>(this.props);
    return <textarea onBlur={this.handleBlur} onChange={this.handleChange} {...attributes} />
  }
};

export default TextAreaBase;