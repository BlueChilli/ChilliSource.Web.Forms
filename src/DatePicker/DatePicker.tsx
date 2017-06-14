import React from "react";
import moment, {Moment} from "moment";
import DateWrapper, {DateWrapperPassedDownProps} from "./DateWrapper";
import {compose} from "recompose";
import performanceWrapper, {PerformanceWrapperProps} from "../Form/Helpers/performanceWrapper";
import {DatePickerProps} from "../Form/Types/types";
import {Calendar} from "react-date-range";
import "./DateRange.scss";


class CalendarBase extends React.Component<DatePickerProps & PerformanceWrapperProps & DateWrapperPassedDownProps, {}>{
  handleChange = (dateRange:Moment) => {
    const {inputChanged, close} = this.props
    inputChanged(dateRange.format('YYYY-MM-DD'));
    if(typeof close === 'function'){
      close();
    }
  }
  render() {
    return <Calendar {...this.props} onChange={this.handleChange}/>
  }
};

class DatePicker extends React.Component<DatePickerProps & PerformanceWrapperProps, {}>{
  public static defaultProps:any = {
      dateFormat: 'DD/MM/YYYY',
      defaultValue: moment().format('YYYY-MM-DD')
  }
  getValue = () => {
    if (this.props.value || this.props.defaultValue) {
      return moment(this.props.value || this.props.defaultValue).format(this.props.format);
    }
    return "";
  }
  render() {
    const {children, ...props} = this.props
    return (
      <DateWrapper {...props} valueString={this.getValue()}>
        <CalendarBase {...this.props}/>
      </DateWrapper>
    );
  }
};

export default performanceWrapper<DatePickerProps>(DatePicker);



