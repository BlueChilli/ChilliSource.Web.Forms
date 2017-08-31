/** Libraries */
import React from 'react';
import Select from 'react-select';
import {List, fromJS, Iterable} from 'immutable';
import 'react-select/dist/react-select.css';
import classnames from 'classnames';

/** Components */
import InputWrapper from '../Input/InputWrapper';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Interfaces */
import {MultiSelectProps, InputWrapperProps, SelectInputProps, PerformanceWrapperProps} from '../../typings/types.d';

/** Class MultiSelect */
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

    if(!Iterable.isIterable(options)) {
      throw new Error("options must be an Immutable List()")
    }
    
    return (
      <InputWrapper name={props.name} label={label} labelPrefix={labelPrefix} labelPostfix={labelPostfix} className={classes}>
        <Select value={safeValue.toJS()} options={options.toJS()} multi={true} onChange={this.handleChange} noResultsText={noResultsText} placeholder={placeholder}/>
      </InputWrapper>
    )
  }
}

export default performanceWrapper(MultiSelect);