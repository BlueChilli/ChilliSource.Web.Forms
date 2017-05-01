import React from 'react';
import moment from 'moment';
import DateWrapper from './DateWrapper';
import performanceWrapper, {PerformanceWrapperProps} from '../Form/Helpers/performanceWrapper';
import {compose} from 'recompose';
import {Map} from 'immutable';
import {isFunction} from 'lodash'
import {DateRange} from 'react-date-range';
import {DateRangeProps} from '../Form/Types/types';
import {DateRangeMap, DateRangeMoment} from '../Form/Types/types';
import './DateRange.scss'; 

/**
 * DateRangeBase
 */
export class DateRangeBase extends React.Component<DateRangeProps & PerformanceWrapperProps, {}> {
  handleChange = (dateRange: DateRangeMoment) => {
    const {inputChanged, onChange} = this.props;

    inputChanged(Map<string, string>({
      startDate: dateRange.startDate.format('YYYY-MM-DD'),
      endDate: dateRange.endDate.format('YYYY-MM-DD')
    }));
    if(typeof onChange === 'function'){
      onChange(dateRange);
    }
  }

  render(){
    return <DateRange {...this.props} calendars={1} onChange={this.handleChange}/>
  }
}

/**
 * DateRangePicker
 */
export class DateRangePicker extends React.Component<DateRangeProps & PerformanceWrapperProps, {}> {
  getValue = (dateRange: DateRangeMap, dateFormat:string) => {
    
    if (Map.isMap(dateRange)) {
      return moment(dateRange.get('startDate')).format(dateFormat) + " to " + moment(dateRange.get('endDate')).format(dateFormat);
    }
    return moment().format(dateFormat) + " to " + moment().format(dateFormat);
  }

  render() {
    const {value, format} = this.props;

    return (
      <DateWrapper {...this.props} valueString={this.getValue(value, format)}>
        <DateRangeBase {...this.props}/>
      </DateWrapper>
    );
  }
}

export default performanceWrapper<DateRangeProps>(DateRangePicker);