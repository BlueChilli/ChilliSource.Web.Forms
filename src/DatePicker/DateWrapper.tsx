import React from "react";
import classnames from "classnames";
import onReactOutsideClick from "react-onclickoutside";
import InputWrapper from "../Form/InputWrapper";
import InputGroup from "../Form/InputGroup";
import {InternalDateWrapperProps} from "../Form/Types/types";
import {DateRangeMoment} from "../Form/Types/types";

interface StateProps {
  hidden: boolean
}

export interface DateWrapperPassedDownProps {
  /** Close the popup modal */
  close?: () => undefined
}

class DateWrapper extends React.Component<InternalDateWrapperProps, StateProps>{
  refs: {
    [name: string]: HTMLInputElement;
  };
  constructor(props){
    super(props);
    this.state = {
      hidden: true
    }
  }
  handleFocus = (e) => {
    e.preventDefault();
    this.setState({hidden: false});
  }
  handleClickOutside = () => {
    this.setState({hidden: true});
  }
  closeInput = () => {
    this.setState({hidden: true});
    this.refs[this.props.name].blur();
  }
  render() {
    const dateRangeClasses = classnames({hidden: this.state.hidden}, 'date-range-container');
    return (
      <div className="date-range-wrapper">
        <InputWrapper className="input date-picker" name={this.props.name}
                      labelPostfix={this.props.labelPostfix}
                      label={this.props.label}>
          <InputGroup prepend={this.props.prepend} append={this.props.append}>
            <input onFocus={this.handleFocus} placeholder={this.props.placeholder}
                   value={this.props.valueString} ref={this.props.name} readOnly={true}/>
          </InputGroup>
        </InputWrapper>
        <div className={dateRangeClasses}>
          {React.cloneElement(this.props.children, {
            close: this.closeInput
          })}
        </div>
      </div>
    );
  }
};

export default onReactOutsideClick(DateWrapper)