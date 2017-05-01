/**
 * This file tests both DateRangeBase as well
 * as DateRangePicker since both exist in a single
 * file
 */

import React from 'react';
import moment from 'moment';
import sinon from 'sinon';
import {Map} from 'immutable';
import {shallow} from 'enzyme';
import {isEqual} from 'lodash';
import {DateRangeBase, DateRangePicker} from '../DateRange';

const Value = {
        'startDate': moment(),
        'endDate': moment().add(7, 'd')
    }

const allDateRangeProps = {
    format: 'MMM D, YYYY',
    minDate: moment(),
    maxDate: moment().add(28, 'd'),
    inputChanged: () => ({}),
    startDate: moment(),
    endDate: moment().add(7, 'd'),
    value: Map(Value)
};

const {format, minDate, maxDate, startDate, endDate, value, inputChanged} = allDateRangeProps;

const valueString = moment(Value.startDate).format(format) + ' to ' + moment(Value.endDate).format(format);

const dateRangeBaseProps = {
    format,
    minDate,
    maxDate,
    startDate,
    endDate,
};

describe('<DateRangeBase />', () => {
    it('should have all the passed in props', () => {
        const wrapper = shallow(<DateRangeBase {...allDateRangeProps} />);
        const {children, ...DateRangeBaseProps} = wrapper.props();
        
        expect(Map(dateRangeBaseProps).isSubset(Map(DateRangeBaseProps))).toBe(true);
    });

    it('should call the onChange handler if passed in', () => {
        const onChange = sinon.spy();
        const wrapper = shallow(<DateRangeBase {...allDateRangeProps} onChange={onChange} />);
        wrapper.simulate('change', Value);

        expect(onChange.calledWith(Value)).toBe(true);
    });
});

describe('<DateRangePicker />', () => {
    it('should have all the passed in props', () => {
        const wrapper = shallow(<DateRangeBase {...allDateRangeProps} />);
        const {children, ...DateRangeBaseProps} = wrapper.props();
        
        expect(Map(dateRangeBaseProps).isSubset(Map(DateRangeBaseProps))).toBe(true);
    });

    it('should have the default value if passed in', () => {
        const wrapper = shallow(<DateRangePicker {...allDateRangeProps} />);
        const {valueString: ValueString, ...remainingProps} = wrapper.props();
        
        expect(isEqual(valueString, ValueString)).toBe(true);
    });
});