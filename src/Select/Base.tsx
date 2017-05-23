import React, {Children, ChangeEvent} from "react";
import {withProps} from "recompose";
import {List} from "immutable";
import {ShallowCompare} from "../../libs/types";
import {getHTMLAttributes} from "../Form/Helpers/inputHelpers";
import {SelectInputProps} from "../Form/Types/types";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";

interface WithProps extends SelectInputProps {
  defaultSelected?: string | boolean | number
}

class SelectBase extends React.Component<SelectInputProps & PerformanceWrapperProps, {}> {
  displayName: 'SelectBase'
  handleChange = (event:ChangeEvent<{value:any}>) => {
    const {inputChanged, onChange} = this.props;
    inputChanged(event.target.value);
    if (this.props.onChange) {
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
    const {children} = this.props
    return (
      <select {...attributes} onBlur={this.handleBlur} onChange={this.handleChange}>
        {children}
      </select>
    );
  }
}

export default withProps<WithProps, SelectInputProps & PerformanceWrapperProps>(props => {
  return {
    defaultSelected: getDefaultSelected(props)
  }
})(SelectBase);
