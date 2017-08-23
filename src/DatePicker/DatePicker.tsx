/** Libraries */
import React from 'react';
import moment, {Moment} from 'moment';
import {compose, defaultProps} from 'recompose';
import {Calendar} from 'react-date-range';

/** Components */
import DateWrapper from './DateWrapper';
import performanceWrapper from '../Form/Helpers/performanceWrapper';

/** Interfaces */
import {DateWrapperPassedDownProps} from './DateWrapper';
import {DatePickerProps, PerformanceWrapperProps} from '../../typings/types.d';

/** Styles */
import './DateRange.scss';

/** Class CalendarBase */
class CalendarBase extends React.Component<DatePickerProps & PerformanceWrapperProps & DateWrapperPassedDownProps, {}>{
  handleChange = (dateRange:Moment) => {
    const {inputChanged, close} = this.props;
    inputChanged(dateRange.format(this.props.serverFormat));
    if(typeof close === 'function'){
      close();
    }
    if(typeof this.props.onChange === 'function'){
      this.props.onChange(dateRange);
    }
  }
  render() {
    return <Calendar {...this.props} onChange={this.handleChange}/>
  }
}

/** Class DatePicker */
class DatePicker extends React.Component<DatePickerProps & PerformanceWrapperProps, {}>{
  getValue = () => {
    const {value, defaultValue, dateFormat} = this.props;
    const parsedValue = moment(value || defaultValue);

    if(parsedValue.isValid()) {
      return parsedValue.format(dateFormat);
    } else {
      return value || defaultValue || "";
    }
  }

  render() {
    const {children, ...props} = this.props
    return (
      <DateWrapper {...props} valueString={this.getValue()}>
        <CalendarBase {...this.props}/>
      </DateWrapper>
    );
  }
}

export default compose<DatePickerProps & PerformanceWrapperProps, DatePickerProps>(
  defaultProps({
    defaultValue: moment().format(),
    dateFormat: 'DD/MM/YYYY',
    serverFormat: null
  }),
  performanceWrapper
)(DatePicker);

export {DatePicker, CalendarBase};