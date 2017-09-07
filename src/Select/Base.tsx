/** Libraries */
import React, {Children, ChangeEvent, FocusEvent} from 'react';
import {withProps} from 'recompose';
import {List} from 'immutable';

/** Components */
import {getHTMLAttributes} from '../Form/Helpers/inputHelpers';
import {SelectInputProps, PerformanceWrapperProps} from '../../typings/types.d';

/** Interfaces */
interface WithProps extends SelectInputProps {
  defaultSelected?: string | boolean | number
}

/** Helpers */
const getDefaultSelected = ({children, defaultValue}: SelectInputProps) => {
  if (Children.count(children) < 1) {
    return '';
  } else if (defaultValue) {
    return defaultValue;
  } else {
    return (Children.toArray(children)[0] as any).props.value;
  }
};

/** Class SelectBase */
class SelectBase extends React.Component<SelectInputProps & PerformanceWrapperProps, {}> {
  /*displayName: 'SelectBase'*/
  
  handleChange = (event: ChangeEvent<{value:any}>) => {
    const {inputChanged = () => false, onChange} = this.props;
    inputChanged(event.target.value);
    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  handleBlur = (event: FocusEvent<{}>) => {
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

export {SelectBase};