import React, {Children} from "react";
import {withProps} from "recompose";
import {List} from "immutable";
import {ShallowCompare} from "../../libs/types";
import {getHTMLAttributes} from "../Form/Helpers/inputHelpers";
import {SelectInputProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

class SelectBase extends React.Component<SelectInputProps & PerformanceWrapperProps, {}> {
  displayName: 'SelectBase'
  
  handleChange = event => {
    const {inputChanged, onChange} = this.props;

    inputChanged(event.target.value);
    if(typeof onChange === 'function') {
      onChange(event);
    }
  }

  handleBlur = event => {
    const {onBlur} = this.props;

    if(typeof onBlur === 'function') {
      onBlur(event);
    }
  }

  render () {
    const attributes = getHTMLAttributes(this.props);
    return (
      <select {...attributes} onBlur={this.handleBlur} onChange={this.handleChange}>
        {this.props.children}
      </select>
    );
  }
}

export default SelectBase;