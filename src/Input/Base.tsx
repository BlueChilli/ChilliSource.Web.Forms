import React from "react";
import {isFunction} from "lodash";
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {TextInputProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";


class InputBase extends React.Component<TextInputProps & PerformanceWrapperProps, {}>{
  displayName: 'InputBase'
  handleChange = e => {
    const value:string = this.props.type === 'file' ? e.target.files : e.target.value;
    this.props.inputChanged(value);
    if (isFunction(this.props.onChange)) {
      this.props.onChange(e);
    }
  }
  handleBlured = e => {
    this.props.setInputBlurred()
    if(isFunction(this.props.onBlur)){
      this.props.onBlur(e);
    }
  } 
  render() {
    const attributes = getHTMLAttributes<TextInputProps & PerformanceWrapperProps>(this.props);
    return <input onBlur={this.handleBlured} {...attributes} onChange={this.handleChange}/>
  }
};

export default InputBase;
