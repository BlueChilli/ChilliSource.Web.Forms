/** Libraries */
import React from 'react';
import moment, { Moment } from 'moment';
import { compose } from 'recompose';
import { Map } from 'immutable';
import { isFunction } from 'lodash';
import { DateRange } from 'react-date-range';

/** Components */
import DateWrapper from './DateWrapper';
import performanceWrapper from '../Form/Helpers/performanceWrapper';
import { theme } from './theme';

/** Interfaces */
import {
	DateRangeMap,
	DateRangeMoment,
	DateRangeProps,
	PerformanceWrapperProps
} from '../../typings/types.d';

/** Helpers */
const getValue = (dateRange?: DateRangeMap, dateFormat: string = 'DD-MM-YYYY') => {
	if (Map.isMap(dateRange) && dateRange) {
		return (
			moment(dateRange.get('startDate'), 'DD-MM-YYYY').format(dateFormat) +
			' to ' +
			moment(dateRange.get('endDate'), 'DD-MM-YYYY').format(dateFormat)
		);
	}
	return moment().format(dateFormat) + ' to ' + moment().format(dateFormat);
};

/** Styles */
import './DateRange.scss';

/** Class DateRangeBase */
class DateRangeBase extends React.Component<DateRangeProps & PerformanceWrapperProps, {}> {
	handleChange = (dateRange: DateRangeMoment) => {
		this.props.inputChanged(
			Map<string, Moment>({
				startDate: dateRange.startDate.format('DD-MM-YYYY'),
				endDate: dateRange.endDate.format('DD-MM-YYYY')
			})
		);
		if (typeof this.props.onChange === 'function') {
			this.props.onChange(dateRange);
		}
	};
	render() {
		return <DateRange {...this.props} calendars={1} onChange={this.handleChange} theme={theme} />;
	}
}

/** Class DateRangePicker */
class DateRangePicker extends React.Component<DateRangeProps & PerformanceWrapperProps, undefined> {
	render() {
		const { children, ...props } = this.props;

		return (
			<DateWrapper {...props} valueString={getValue(props.value, props.dateFormat)}>
				<DateRangeBase {...props} />
			</DateWrapper>
		);
	}
}

export default performanceWrapper<DateRangeProps>(DateRangePicker);
export { DateRangeBase, DateRangePicker };
