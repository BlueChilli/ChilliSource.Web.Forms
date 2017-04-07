import React from "react";
import {TextAreaProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

class TextareaBase extends React.Component<TextAreaProps & PerformanceWrapperProps, {}>{
  displayName: 'TextAreaBase'
  handleChange = (e) => {
    this.props.inputChanged(e.target.value);
    if(this.props.onChange){
      this.props.onChange(e);
    }
  }
  render() {
    var attributes = this.props.getHTMLAttributes(this.props);
    return <textarea onBlur={this.props.setInputBlurred} onChange={this.handleChange} {...attributes} />
  }
};

export default TextareaBase;
