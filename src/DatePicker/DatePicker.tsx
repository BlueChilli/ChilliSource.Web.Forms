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
    this.props.inputChanged(dateRange.format('YYYY-MM-DD'));
    this.props.close();
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
    return (
      <DateWrapper {...this.props} valueString={this.getValue()}>
        <CalendarBase {...this.props}/>
      </DateWrapper>
    );
  }
};

export default performanceWrapper<DatePickerProps>(DatePicker);



