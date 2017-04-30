import React from 'react';
import moment from 'moment';
import DateWrapper, {DateWrapperPassedDownProps} from './DateWrapper';
import {compose} from 'recompose';
import performanceWrapper, {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';
import {DatePickerProps} from '../Form/Types/types';
import {Calendar} from 'react-date-range';
import './DateRange.scss';


/**
 * Calendar Base
 */
export class CalendarBase extends React.Component<DatePickerProps & PerformanceWrapperProps & DateWrapperPassedDownProps, {}> {
  handleChange = dateRange => {
    const {inputChanged, close} = this.props;

    inputChanged(dateRange.format('YYYY-MM-DD'));
    close();
  }

  render() {
    return <Calendar {...this.props} onChange={this.handleChange}/>
  }
}

/**
 * Date Picker
 */
export class DatePicker extends React.Component<DatePickerProps & PerformanceWrapperProps, {}> {
  public static defaultProps:any = {
      dateFormat: 'DD/MM/YYYY',
      defaultValue: moment().format('YYYY-MM-DD')
  }

  getValue = () => {
    const {value, defaultValue, format} = this.props;

    if (value || defaultValue) {
      return moment(value || defaultValue).format(format);
    }
    return '';
  }

  render() {
    return (
      <DateWrapper {...this.props} valueString={this.getValue()}>
        <CalendarBase {...this.props}/>
      </DateWrapper>
    );
  }
};

export default performanceWrapper<DatePickerProps>(DatePicker);