import React from "react";
import moment from "moment";
import DateWrapper from "./DateWrapper";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {compose} from "recompose";
import {Map} from "immutable";
import {isFunction} from "lodash"
import {DateRange} from "react-date-range";
import {DateRangeProps} from "../Form/Types/types";
import {DateRangeMap, DateRangeMoment} from "../Form/Types/types";
import "./DateRange.scss";

class DateRangeBase extends React.Component<DateRangeProps & PerformanceWrapperProps, {}>{
  handleChange = (dateRange: DateRangeMoment) => {
    this.props.inputChanged(Map<string, string>({
      startDate: dateRange.startDate.format('YYYY-MM-DD'),
      endDate: dateRange.endDate.format('YYYY-MM-DD')
    }));
    if(typeof this.props.onChange === 'function'){
      this.props.onChange(dateRange);
    }
  }
  render(){
    return <DateRange {...this.props} calendars={1} onChange={this.handleChange}/>
  }
};

const getValue = (dateRange?: DateRangeMap, dateFormat?:string) => {
  if (Map.isMap(dateRange) && dateRange) {
    return moment(dateRange.get('startDate')).format(dateFormat) + " to " + moment(dateRange.get('endDate')).format(dateFormat);
  }
  return moment().format(dateFormat) + " to " + moment().format(dateFormat);;
};

const DateRangePicker = (props:DateRangeProps & PerformanceWrapperProps) => (
  <DateWrapper {...props} valueString={getValue(props.value, props.format)}>
    <DateRangeBase {...props}/>
  </DateWrapper>
);


export default performanceWrapper<DateRangeProps>(DateRangePicker);