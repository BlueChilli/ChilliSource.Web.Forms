import React from "react";
import ReactDOM from "react-dom";
import {SwitchProps} from "../Form/Types/types";
import {snakeCase} from "lodash";
import {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";



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
  getChecked = () => {
    if (this.props.type === 'radio') {
      return this.props.id;
    } else {
      return ReactDOM.findDOMNode<SwitchBaseElement>(this.refs[this.props.name]).checked;
    }
  }
  handleChange = (e) => {
    this.props.inputChanged(this.getChecked());
    if(this.props.onChange){
      this.props.onChange(e);
    }
  }
  render() {
    var attributes = this.props.getHTMLAttributes(this.props);
    return <input onBlur={this.props.setInputBlurred} onChange={this.handleChange} checked={isChecked(this.props)} ref={this.props.name}
                  value={attributes.id} {...attributes} id={this.props.id}/>;
  }
};

export default SwitchBase;
