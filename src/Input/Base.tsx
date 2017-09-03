/** Libraries */
import React, {ChangeEvent, FocusEvent} from 'react';
import {isFunction} from 'lodash';

/** Helpers */
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';

/** Interfaces */
import {TextInputProps, PerformanceWrapperProps} from "../../typings/types.d";

/** Class InputBase */
class InputBase extends React.Component<TextInputProps & PerformanceWrapperProps, {}>{
  displayName: 'InputBase'

  handleChange = (event:ChangeEvent<{files?: FileList, value?: any}>) => {
    const value:string = this.props.type === 'file' ? event.target.files : event.target.value;
    this.props.inputChanged(value);
    if (isFunction(this.props.onChange)) {
      this.props.onChange(event);
    }
  }

  handleBlured = (event:FocusEvent<{}>) => {
    this.props.setInputBlurred()
    if(isFunction(this.props.onBlur)){
      this.props.onBlur(event);
    }
  }

  render() {
    const attributes = getHTMLAttributes<TextInputProps & PerformanceWrapperProps>(this.props);
    
    return <input onBlur={this.handleBlured} onChange={this.handleChange} {...attributes} />
  }
}

export default InputBase;