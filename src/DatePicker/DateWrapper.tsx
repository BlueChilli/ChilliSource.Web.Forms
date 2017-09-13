/** Libraries */
import React, {Component, FocusEvent} from 'react';
import classnames from 'classnames';
import onReactOutsideClick from 'react-onclickoutside';

/** Components */
import InputWrapper from '../Form/InputWrapper';
import InputGroup from '../Form/InputGroup';

/** Interfaces */
import {InternalDateWrapperProps} from '../../typings/types.d';

interface StateProps {
  hidden: boolean
}

export interface DateWrapperPassedDownProps {
  /** Close the popup modal */
  close?: () => undefined
}

/** Class DateWrapper */
class DateWrapper extends Component<InternalDateWrapperProps, StateProps>{
  refs: {
    [name: string]: HTMLInputElement;
  }

  constructor(props:InternalDateWrapperProps){
    super(props);
    
    this.state = {
      hidden: true
    }
  }

  handleFocus = (event:FocusEvent<{}>) => {
    event.preventDefault();
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
        <InputWrapper className="input date-picker" name={this.props.name} labelPostfix={this.props.labelPostfix} label={this.props.label}>
          <InputGroup prepend={this.props.prepend} append={this.props.append}>
            <input onFocus={this.handleFocus} placeholder={this.props.placeholder} value={this.props.valueString} ref={this.props.name} readOnly={true}/>
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

export default onReactOutsideClick<any>(DateWrapper)
export {DateWrapper};