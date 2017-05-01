import React, {ChangeEvent, FocusEvent} from "react";
import ReactDOM from "react-dom";
import {SwitchProps} from "../Form/Types/types";
import {snakeCase} from "lodash";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {getHTMLAttributes} from "../Form/Helpers/inputHelpers";

interface SwitchBaseElement extends Element{
  checked: boolean
}

const isChecked = (props: SwitchProps & PerformanceWrapperProps) => {
  if (props.type === 'radio') {
    return props.id + "" === props.value + "";
  } else {
    return props.value
  }
} 


/** {Internal} Method used internally to display a switch component(radio or checkbox)  */
class SwitchBase extends React.Component<SwitchProps & PerformanceWrapperProps, {}>{
  displayName: 'SwitchBase'
  
  getChecked = (event:ChangeEvent<{checked?: boolean}>) => {
    if (this.props.type === 'radio') {
      return this.props.id;
    } else {
      return event.target.checked;
    }
  }
  
  handleChange = (event:ChangeEvent<{checked?: boolean}>) => {
    const {inputChanged, onChange} = this.props;

    inputChanged(this.getChecked(event));
    if(typeof onChange === 'function') {
      onChange(event);
    }
  }

  handleBlur = (event:FocusEvent<{}>) => {
    const {onBlur, setInputBlurred} = this.props;
    
    setInputBlurred();
    if(typeof onBlur === 'function') {
      onBlur(event);
    }
  }

  render() {
    var attributes = getHTMLAttributes(this.props);
    return <input onBlur={this.handleBlur} onChange={this.handleChange} checked={isChecked(this.props)} ref={this.props.name}
                  value={attributes.id} {...attributes} id={this.props.id}/>;
  }
};

export default SwitchBase;
