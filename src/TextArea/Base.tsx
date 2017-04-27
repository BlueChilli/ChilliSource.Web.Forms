import React from "react";
import {TextAreaProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

class TextAreaBase extends React.Component<TextAreaProps & PerformanceWrapperProps, {}>{
  displayName: 'TextAreaBase'
  handleChange = event => {
    const {inputChanged, onChange} = this.props;
  
    inputChanged(event.target.value);
    if(typeof onChange === 'function'){
      onChange(event);
    }
  }

  handleBlur = event => {
    const {setInputBlurred, onBlur} = this.props;

    setInputBlurred();
    if(typeof onBlur === 'function') {
      onBlur(event);
    }
  }

  render() {
    var attributes = this.props.getHTMLAttributes(this.props);
    return <textarea onBlur={this.handleBlur} onChange={this.handleChange} {...attributes} />
  }
};

export default TextAreaBase;