import React from 'react';
import Select from 'react-select';
import {List, fromJS} from 'immutable';
import 'react-select/dist/react-select.css';
import InputWrapper from '../Form/InputWrapper';
import {SelectInputProps} from "../Form/Types/types";
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import classnames from 'classnames';

export class MultiSelect extends React.PureComponent {
  defaultProps = {
    options: List([])
  }

  componentWillMount() {
    const {inputChanged, defaultValue} = this.props;
    inputChanged(defaultValue || List([]), false)
  }

  handleChange = value => {
    const {inputChanged, onChange} = this.props;

    inputChanged(List([]).concat(fromJS(values)));
    if(typeof onChange === 'function') {
      onChange(values);
    }
  }

  render() {
    const {options, value, className, label, labelPrefix, labelPostfix, ...props} = this.props;
    const safeValue = value !== '' ? List(value) : List();
    const classes = classnames(className, 'input');

    return (
      <InputWrapper name={props.name} label={label} labelPrefix={labelPrefix} labelPostfix={labelPostfix} className={classes}>
        <Select value={safeValue.toJS()} options={options.toJS()} multi={true} onChange={this.handleChange}/>
      </InputWrapper>
    )
  }
}

export default performanceWrapper(MultiSelect);