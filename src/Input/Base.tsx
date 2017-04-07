import React, {PropTypes} from "react";
import {isFunction} from "lodash";
import {TextInputProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";


class InputBase extends React.Component<TextInputProps & PerformanceWrapperProps, {}>{
  displayName: 'InputBase'
  handleChange = (e) => {
    const value:string = this.props.type === 'file' ? e.target.files : e.target.value;
    this.props.inputChanged(value);
    if (isFunction(this.props.onChange)) {
      this.props.onChange(e);
    }
  }
  render() {
    const attributes = this.props.getHTMLAttributes(this.props);
    return <input onBlur={this.props.setInputBlurred} {...attributes} onChange={this.handleChange}/>
  }
};

export default InputBase;
