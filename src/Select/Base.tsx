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


const getDefaultSelected = ({children, defaultValue}:SelectInputProps) => {
  if (Children.count(children) < 1) {
    return '';
  } else if (defaultValue) {
    return defaultValue;
  } else {
    return (Children.toArray(children)[0] as React.ReactHTMLElement<HTMLOptionElement>).props.value;
  }
};

class SelectBase extends React.Component<SelectInputProps & PerformanceWrapperProps, {}> {
  displayName: 'SelectBase'
  handleChange = (event:ChangeEvent<{value:any}>) => {
    this.props.inputChanged(event.target.value);
    if (this.props.onChange) {
      this.props.onChange(event);
    }
  }
  render () {
    const attributes = getHTMLAttributes(this.props);
    const {children} = this.props
    return (
      <select {...attributes} onChange={this.handleChange}>
        {children}
      </select>
    );
  }
};

export default withProps<WithProps, SelectInputProps & PerformanceWrapperProps>(props => {
  return {
    defaultSelected: getDefaultSelected(props)
  }
})(SelectBase);
