import React from 'react';
import Select from 'react-select';
import {List, fromJS} from 'immutable';
import 'react-select/dist/react-select.css';
import InputWrapper from '../Form/InputWrapper';
import {SelectInputProps} from "../Form/Types/types";
import performanceWrapper, {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';
import {MultiSelectProps, InputWrapperProps} from '../Form/Types/types';
import classnames from 'classnames';

export class MultiSelect extends React.Component<MultiSelectProps & PerformanceWrapperProps, {}> {
  static defaultProps = {
    options: List([])
  }

  componentWillMount() {
    const {inputChanged, defaultValue} = this.props;
    inputChanged(defaultValue || List([]), false)
  }

  handleChange = values => {
    const {inputChanged, onChange} = this.props;
    const newValues = List([]).concat(fromJS(values)).toList();

    inputChanged(newValues);
    if(typeof onChange === 'function') {
      onChange(newValues);
    }
  }

  render() {
    const {options, value, className, label, labelPrefix, labelPostfix, noResultsText, placeholder, ...props} = this.props;
    const safeValue = value !== '' ? List(value) : List();
    const classes = classnames(className, 'input');
    
    return (
      <InputWrapper name={props.name} label={label} labelPrefix={labelPrefix} labelPostfix={labelPostfix} className={classes}>
        <Select value={safeValue.toJS()} options={options.toJS()} multi={true} onChange={this.handleChange} noResultsText={noResultsText} placeholder={placeholder}/>
      </InputWrapper>
    )
  }
}

export default performanceWrapper(MultiSelect);